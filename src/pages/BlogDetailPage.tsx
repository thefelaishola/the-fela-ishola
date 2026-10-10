import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { fetchBlogPostBySlug } from "@/lib/blog";
import type { BlogPost } from "@/types/content";
import StatePanel from "@/components/ui/StatePanel";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import ShareOnScroll from "@/components/daily-guide/ShareOnScroll";
import { SITE } from "@/data/site";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogDetailPage() {
  const { slug = "" } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "empty" | "error">(
    "loading"
  );

  useEffect(() => {
    let active = true;
    setStatus("loading");
    fetchBlogPostBySlug(slug).then(({ data, error }) => {
      if (!active) return;
      if (error || !data) {
        setStatus(error === "not-configured" ? "error" : "empty");
        return;
      }
      setPost(data);
      setStatus("ready");
    });
    return () => {
      active = false;
    };
  }, [slug]);

  if (status === "loading") {
    return (
      <div className="section py-24">
        <div className="section-inner max-w-2xl h-96 border border-stone-200 animate-pulse motion-reduce:animate-none" />
      </div>
    );
  }

  if (status !== "ready" || !post) {
    return (
      <div className="section py-24">
        <div className="section-inner max-w-2xl">
          <StatePanel
            kind={status === "error" ? "error" : "empty"}
            title={
              status === "error"
                ? "This post is temporarily unavailable"
                : "This post could not be found"
            }
          />
          <div className="mt-8">
            <Link
              to="/blog"
              className="text-sm uppercase tracking-widest2 text-ember-dark"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt.slice(0, 155)}
        path={`/blog/${post.slug}`}
        image={post.cover_image ?? undefined}
      />

      <article className="section pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="section-inner max-w-2xl">
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              {formatDate(post.post_date)}
            </span>
            <h1 className="text-3xl sm:text-4xl font-medium leading-tight">
              {post.title}
            </h1>
          </div>

          {post.cover_image && (
            <ResponsiveImage
              src={post.cover_image}
              alt={post.title}
              className="w-full aspect-[16/9] object-cover mb-10"
            />
          )}

          <div className="flex flex-col gap-4 text-stone-700 leading-relaxed text-lg">
            {post.content.split(/\n\s*\n/).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ShareOnScroll
            title={post.title}
            url={`${SITE.netlifyUrl}/blog/${post.slug}`}
            guideDate={post.post_date}
            kicker="New Post from The Fela ishola"
            tagline="Read the full post and be encouraged."
          />

          <nav className="mt-20 pt-8 border-t border-stone-200">
            <Link
              to="/blog"
              className="text-sm uppercase tracking-widest2 text-stone-600 hover:text-ink"
            >
              Back to Blog
            </Link>
          </nav>
        </div>
      </article>
    </>
  );
}
