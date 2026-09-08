import { useCallback, useEffect, useRef, useState } from "react";
import { LinkButton } from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

interface Slide {
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  desktopImage: string;
  mobileImage: string;
  alt: string;
}

const SLIDES: Slide[] = [
  {
    id: "main",
    eyebrow: "Fela Ishola",
    heading: "Lead Minister, Freedom Nation. Brand Designer, Fegitals Digitals.",
    body: "Welcome to The Fela ishola, a space where faith, creativity, purpose, and ideas come together. I'm Fela Ishola, and this is a glimpse into the things I believe, create, learn, and do.",
    primaryCta: { label: "Explore My Journey", to: "/about" },
    secondaryCta: { label: "Freedom Nation", to: "/ministry" },
    desktopImage: "/images/hero/ministry-desktop.webp",
    mobileImage: "/images/hero/ministry-mobile.webp",
    alt: "Fela Ishola",
  },
  {
    id: "daily-guide",
    eyebrow: "Daily Guide",
    heading: "Daily Guide",
    body: "A daily guide for believers who want to grow in their walk with God, wherever they are.",
    primaryCta: { label: "Read the Daily Guide", to: "/daily-guide" },
    desktopImage: "/images/hero/daily-guide-desktop.webp",
    mobileImage: "/images/hero/daily-guide-mobile.webp",
    alt: "The Daily Guide",
  },
  {
    id: "design",
    eyebrow: "Fegitals Digitals",
    heading: "Ideas, Made Visible",
    body: "Through Fegitals Digitals, I create designs that help ideas, brands, and messages communicate with clarity.",
    primaryCta: { label: "Explore My Designs", to: "/portfolio" },
    desktopImage: "/images/hero/design-desktop.webp",
    mobileImage: "/images/hero/design-mobile.webp",
    alt: "Fegitals Digitals design work",
  },
];

const ROTATE_MS = 7000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useRef(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const advance = useCallback(() => {
    setActive((current) => (current + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused || prefersReducedMotion.current) return;
    timerRef.current = window.setInterval(advance, ROTATE_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, advance]);

  return (
    <section
      className="relative w-full h-[92vh] min-h-[560px] max-h-[980px] overflow-hidden bg-ink"
      role="region"
      aria-roledescription="carousel"
      aria-label="Introduction"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {SLIDES.map((slide, index) => {
        const isActive = index === active;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={!isActive}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${SLIDES.length}`}
          >
            <ResponsiveImage
              src={slide.desktopImage}
              mobileSrc={slide.mobileImage}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover"
              objectPosition="center 30%"
              eager={index === 0}
            />
            <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />

            <div className="relative z-10 h-full section flex items-end sm:items-center">
              <div className="section-inner pb-20 sm:pb-0">
                <div className="max-w-xl text-paper flex flex-col gap-6">
                  <span className="text-xs uppercase tracking-widest2 text-ember">
                    {slide.eyebrow}
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    {slide.heading}
                  </h1>
                  <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-lg">
                    {slide.body}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <LinkButton to={slide.primaryCta.to} variant="onDark">
                      {slide.primaryCta.label}
                    </LinkButton>
                    {slide.secondaryCta && (
                      <LinkButton
                        to={slide.secondaryCta.to}
                        variant="ghost"
                        className="text-paper border-paper/60 hover:border-paper"
                      >
                        {slide.secondaryCta.label}
                      </LinkButton>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}: ${slide.heading}`}
            aria-current={index === active}
            className={`h-1.5 rounded-none transition-all duration-300 ${
              index === active ? "w-8 bg-ember" : "w-4 bg-paper/50 hover:bg-paper/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
