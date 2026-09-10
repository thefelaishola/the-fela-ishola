import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { fetchPortfolioProjects } from "@/lib/portfolio";
import type { PortfolioProject } from "@/types/content";
import StatePanel from "@/components/ui/StatePanel";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

const SERVICES = [
  "Logo Design",
  "Social Media Designs",
  "Graphics Design and Production",
  "Visual Branding Design",
];

export default function PortfolioListPage() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "empty" | "error">(
    "loading"
  );
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    let active = true;
    fetchPortfolioProjects().then(({ data, error }) => {
      if (!active) return;
      if (error) setStatus("error");
      else if (data.length === 0) setStatus("empty");
      else {
        setProjects(data);
        setStatus("ready");
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...unique];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <>
      <Seo
        title="Portfolio"
        description="Fegitals Digitals portfolio: logo design, social media design, visual branding, and more. Ideas, made visible."
        path="/portfolio"
      />

      <section className="section pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="section-inner flex flex-col gap-6 max-w-2xl">
          <span className="text-xs uppercase tracking-widest2 text-ember-dark">
            Fegitals Digitals
          </span>
          <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
            Portfolio
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            Ideas, made visible, through logo design, social media design,
            graphics production, and visual branding.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {SERVICES.map((service) => (
              <li
                key={service}
                className="text-sm px-3 py-1.5 border border-stone-200 text-stone-600"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section pb-24 sm:pb-32">
        <div className="section-inner">
          {status === "ready" && categories.length > 1 && (
            <div
              className="flex flex-wrap gap-2 mb-12"
              role="tablist"
              aria-label="Portfolio categories"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  role="tab"
                  aria-selected={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm uppercase tracking-wide border transition-colors ${
                    activeCategory === category
                      ? "bg-ink text-paper border-ink"
                      : "border-stone-200 text-stone-600 hover:border-ink"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {status === "loading" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2, 3, 4, 5].map((i) => (
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
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
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">{project.name}</span>
                    <span className="text-xs uppercase tracking-widest2 text-stone-400 shrink-0">
                      {project.category}
                    </span>
                  </div>
                  {project.industry && (
                    <span className="text-sm text-stone-500">
                      {project.industry}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
