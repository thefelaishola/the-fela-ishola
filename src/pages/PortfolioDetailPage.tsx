import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import {
  fetchPortfolioProjectBySlug,
  fetchPortfolioImages,
} from "@/lib/portfolio";
import type { PortfolioProject, PortfolioImage } from "@/types/content";
import StatePanel from "@/components/ui/StatePanel";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Lightbox from "@/components/portfolio/Lightbox";

export default function PortfolioDetailPage() {
  const { slug = "" } = useParams();
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "empty" | "error">(
    "loading"
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    setStatus("loading");

    fetchPortfolioProjectBySlug(slug).then(async ({ data, error }) => {
      if (!active) return;
      if (error || !data) {
        setStatus(error === "not-configured" ? "error" : "empty");
        return;
      }
      setProject(data);

      const imagesResult = await fetchPortfolioImages(data.id);
      if (!active) return;
      setImages(imagesResult.data);
      setStatus("ready");
    });

    return () => {
      active = false;
    };
  }, [slug]);

  if (status === "loading") {
    return (
      <div className="section py-24">
        <div className="section-inner max-w-4xl h-96 border border-stone-200 animate-pulse motion-reduce:animate-none" />
      </div>
    );
  }

  if (status !== "ready" || !project) {
    return (
      <div className="section py-24">
        <div className="section-inner max-w-2xl">
          <StatePanel
            kind={status === "error" ? "error" : "empty"}
            title={
              status === "error"
                ? "This project is temporarily unavailable"
                : "This project could not be found"
            }
          />
          <div className="mt-8">
            <Link
              to="/portfolio"
              className="text-sm uppercase tracking-widest2 text-ember-dark"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={project.name}
        description={`${project.name}, a ${project.category} project by Fegitals Digitals.`}
        path={`/portfolio/${project.slug}`}
      />

      <section className="section pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="section-inner flex flex-col gap-4 max-w-2xl">
          <span className="text-xs uppercase tracking-widest2 text-ember-dark">
            {project.category}
          </span>
          <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
            {project.name}
          </h1>
          {project.industry && (
            <p className="text-stone-500">{project.industry}</p>
          )}
        </div>
      </section>

      <section className="section pb-24 sm:pb-32">
        <div className="section-inner">
          {images.length === 0 ? (
            <StatePanel
              kind="empty"
              title="Images for this project are on the way"
            />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="aspect-square overflow-hidden bg-stone-100 border border-stone-200"
                  aria-label={`View image ${index + 1} of ${project.name}`}
                >
                  <ResponsiveImage
                    src={image.image_url}
                    alt={image.alt_text ?? `${project.name} image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && images.length > 0 && (
        <Lightbox
          images={images.map((img) => ({
            url: img.image_url,
            alt: img.alt_text ?? project.name,
          }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
