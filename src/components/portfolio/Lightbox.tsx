import { useEffect } from "react";
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/Icons";

interface LightboxProps {
  images: { url: string; alt: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft")
        onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onNavigate]);

  const image = images[index];
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-6 right-6 text-paper p-2"
      >
        <CloseIcon width={24} height={24} />
      </button>

      {images.length > 1 && (
        <button
          type="button"
          onClick={() => onNavigate((index - 1 + images.length) % images.length)}
          aria-label="Previous image"
          className="absolute left-4 sm:left-8 text-paper p-2"
        >
          <ArrowLeftIcon width={24} height={24} />
        </button>
      )}

      <img
        src={image.url}
        alt={image.alt}
        className="max-h-[85vh] max-w-[90vw] object-contain"
      />

      {images.length > 1 && (
        <button
          type="button"
          onClick={() => onNavigate((index + 1) % images.length)}
          aria-label="Next image"
          className="absolute right-4 sm:right-8 text-paper p-2"
        >
          <ArrowRightIcon width={24} height={24} />
        </button>
      )}

      <p className="absolute bottom-6 text-paper text-sm">
        {index + 1} of {images.length}
      </p>
    </div>
  );
}
