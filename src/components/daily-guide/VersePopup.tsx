import { useEffect, useRef, useState } from "react";
import { fetchBiblePassage, type BiblePassage } from "@/lib/bible";
import { CloseIcon, BookIcon } from "@/components/ui/Icons";

interface VersePopupProps {
  reference: string | null;
  onClose: () => void;
}

/**
 * A modal dialog that fetches and displays the actual text of a Bible
 * reference when it is open. Closes on Escape, on overlay click, or on the
 * close button. Nothing is fetched until a reference is actually clicked.
 */
export default function VersePopup({ reference, onClose }: VersePopupProps) {
  const [state, setState] = useState<{
    status: "loading" | "ready" | "error";
    passage: BiblePassage | null;
  }>({ status: "loading", passage: null });
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!reference) return;
    let active = true;
    setState({ status: "loading", passage: null });

    fetchBiblePassage(reference).then(({ data, error }) => {
      if (!active) return;
      if (error || !data) {
        setState({ status: "error", passage: null });
      } else {
        setState({ status: "ready", passage: data });
      }
    });

    return () => {
      active = false;
    };
  }, [reference]);

  useEffect(() => {
    if (!reference) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [reference, onClose]);

  if (!reference) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-ink/70"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="verse-popup-title"
        className="relative bg-paper border border-stone-200 max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-xl"
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-2 text-ember-dark">
            <BookIcon width={18} height={18} aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest2">
              Scripture
            </span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1 -m-1 text-stone-500 hover:text-ink focus-visible:outline-2 focus-visible:outline-ember"
          >
            <CloseIcon width={20} height={20} aria-hidden="true" />
          </button>
        </div>

        {state.status === "loading" && (
          <div className="flex flex-col gap-3" aria-live="polite">
            <div className="h-4 bg-stone-200 w-3/4 animate-pulse motion-reduce:animate-none" />
            <div className="h-4 bg-stone-200 w-full animate-pulse motion-reduce:animate-none" />
            <div className="h-4 bg-stone-200 w-5/6 animate-pulse motion-reduce:animate-none" />
          </div>
        )}

        {state.status === "error" && (
          <div className="flex flex-col gap-4" aria-live="polite">
            <h2 id="verse-popup-title" className="text-lg font-medium">
              {reference}
            </h2>
            <p className="text-stone-600">
              This passage could not be loaded right now. You can read it
              directly instead.
            </p>
            <a
              href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(
                reference
              )}&version=KJV`}
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-widest2 text-ember-dark underline underline-offset-4 w-fit"
            >
              Read {reference} on BibleGateway
            </a>
          </div>
        )}

        {state.status === "ready" && state.passage && (
          <div className="flex flex-col gap-4">
            <h2
              id="verse-popup-title"
              className="text-lg font-medium text-ink"
            >
              {state.passage.reference}
            </h2>
            <p className="text-xl font-display leading-relaxed text-ink">
              {state.passage.text}
            </p>
            <p className="text-xs uppercase tracking-widest2 text-stone-400">
              {state.passage.translationName}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
