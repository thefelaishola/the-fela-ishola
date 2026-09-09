import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPortfolioProjects } from "@/lib/portfolio";
import type { PortfolioProject } from "@/types/content";
import { LinkButton } from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import StatePanel from "@/components/ui/StatePanel";

export default function CreativeWorkSection() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "empty" | "error">(
    "loading"
  );

  useEffect(() => {
    let active = true;
    fetchPortfolioProjects().then(({ data, error }) => {
      if (!active) return;
      if (error) setStatus("error");
      else if (data.length === 0) setStatus("empty");
      else {
        setProjects(data.slice(0, 3));
        setStatus("ready");
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="section py-20 sm:py-28">
      <div className="section-inner">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              Fegitals Digitals
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium leading-tight">
              Creative Work
            </h2>
            <p className="text-stone-600">
              Ideas, made visible, through logo design, social media design, and
              visual branding.
            </p>
          </div>
          <LinkButton to="/portfolio" variant="ghost" className="border-ink">
            Explore My Designs
          </LinkButton>
        </div>

        {status === "loading" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="aspect-[4/5] border border-stone-200 animate-pulse motion-reduce:animate-none"
              />
            ))}
          </div>
        )}

        {(status === "empty" || status === "error") && (
          <StatePanel
            kind={status === "error" ? "error" : "empty"}
            title={
              status === "error"
                ? "Portfolio is temporarily unavailable"
                : "Portfolio projects are on the way"
            }
          />
        )}

        {status === "ready" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.slug}`}
                className="group flex flex-col gap-3"
              >
                <div className="aspect-[4/5] overflow-hidden bg-stone-100 border border-stone-200">
                  <ResponsiveImage
                    src={project.cover_image ?? ""}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">{project.name}</span>
                  <span className="text-xs uppercase tracking-widest2 text-stone-400">
                    {project.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
