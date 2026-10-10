import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { fetchBlogPosts } from "@/lib/blog";
import type { BlogPost } from "@/types/content";
import StatePanel from "@/components/ui/StatePanel";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "empty" | "error">(
    "loading"
  );

  useEffect(() => {
    let active = true;
    fetchBlogPosts().then(({ data, error }) => {
      if (!active) return;
      if (error) setStatus("error");
      else if (data.length === 0) setStatus("empty");
      else {
        setPosts(data);
        setStatus("ready");
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <Seo
        title="Blog"
        description="Writing from Fela Ishola. Reflections, thoughts, and things worth sharing."
        path="/blog"
      />

      <section className="section pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="section-inner flex flex-col gap-6 max-w-2xl">
          <span className="text-xs uppercase tracking-widest2 text-ember-dark">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
            Writing
          </h1>
          <p className="text-stone-600 leading-relaxed">
            Thoughts, reflections, and things worth sharing, written here
            for anyone to read.
          </p>
        </div>
      </section>

      <section className="section pb-24 sm:pb-32">
        <div className="section-inner">
          {status === "loading" && (
            <div className="grid sm:grid-cols-2 gap-6">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="h-64 border border-stone-200 animate-pulse motion-reduce:animate-none"
                />
              ))}
            </div>
          )}

          {(status === "empty" || status === "error") && (
            <StatePanel
              kind={status === "error" ? "error" : "empty"}
              title={
                status === "error"
                  ? "Posts are temporarily unavailable"
                  : "The first post is coming soon"
              }
            />
          )}

          {status === "ready" && (
            <div className="grid sm:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="border border-stone-200 flex flex-col hover:border-ink transition-colors"
                >
                  {post.cover_image && (
                    <ResponsiveImage
                      src={post.cover_image}
                      alt={post.title}
                      className="w-full aspect-[16/9] object-cover"
                    />
                  )}
                  <div className="p-8 flex flex-col gap-4">
                    <span className="text-xs uppercase tracking-widest2 text-stone-400">
                      {formatDate(post.post_date)}
                    </span>
                    <h2 className="text-xl font-medium">{post.title}</h2>
                    <p className="text-stone-600 leading-relaxed line-clamp-4">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
