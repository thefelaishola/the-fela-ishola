import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon, CloseIcon, ShareIcon } from "@/components/ui/Icons";

interface ShareOnScrollProps {
  title: string;
  url: string;
  guideDate: string;
}

function formatShareDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date
    .toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();
}

/**
 * Watches a sentinel placed at the end of a Daily Guide entry. Once the
 * reader scrolls that far, a small floating prompt appears offering to
 * share today's guide with a friend on WhatsApp. Dismissible, and only
 * shown once per page visit.
 */
export default function ShareOnScroll({
  title,
  url,
  guideDate,
}: ShareOnScrollProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const message = [
    `📖 ${formatShareDate(guideDate)}`,
    "",
    "Read Today's Daily Guide with The Fela ishola",
    "",
    `*${title}*`,
    "Read today's guide and be encouraged.",
    "",
    `👉 ${url}`,
  ].join("\n");
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Sentinel: placed at the end of the entry content by the parent page */}
      <div ref={sentinelRef} aria-hidden="true" />

      {visible && !dismissed && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 sm:pb-6 animate-fadeIn motion-reduce:animate-none"
          role="region"
          aria-label="Share this Daily Guide"
        >
          <div className="flex items-center gap-4 bg-ink text-paper px-5 py-4 shadow-xl max-w-md w-full">
            <ShareIcon
              width={18}
              height={18}
              className="text-ember shrink-0"
              aria-hidden="true"
            />
            <p className="text-sm flex-1">
              Found this helpful? Share it with a friend.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setDismissed(true)}
              className="flex items-center gap-2 bg-ember text-ink px-4 py-2 text-xs uppercase tracking-widest2 font-medium hover:bg-paper transition-colors shrink-0"
            >
              <WhatsAppIcon width={16} height={16} aria-hidden="true" />
              Share
            </a>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="p-1 text-stone-400 hover:text-paper shrink-0"
            >
              <CloseIcon width={18} height={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
