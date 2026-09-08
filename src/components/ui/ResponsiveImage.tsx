import { useState } from "react";

interface ResponsiveImageProps {
  src: string;
  mobileSrc?: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  eager?: boolean;
}

/**
 * A picture element that swaps in a mobile-specific crop when supplied, and
 * quietly collapses to a solid brand-colour placeholder block (no broken
 * image icon, no layout shift) when the file has not been uploaded yet.
 */
export default function ResponsiveImage({
  src,
  mobileSrc,
  alt,
  className = "",
  objectPosition = "center",
  eager = false,
}: ResponsiveImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`bg-stone-200 flex items-center justify-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-stone-400 text-xs uppercase tracking-widest2 px-4 text-center">
          Image coming soon
        </span>
      </div>
    );
  }

  return (
    <picture>
      {mobileSrc && <source media="(max-width: 767px)" srcSet={mobileSrc} />}
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ objectPosition }}
        loading={eager ? "eager" : "lazy"}
        onError={() => setFailed(true)}
      />
    </picture>
  );
}
