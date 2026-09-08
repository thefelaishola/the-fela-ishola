import { useState } from "react";
import type { Story } from "@/data/aboutStories";
import { ChevronDownIcon } from "@/components/ui/Icons";

export default function StoryChapter({ story }: { story: Story }) {
  const [open, setOpen] = useState(false);
  const hasContent = story.body.trim().length > 0;

  return (
    <div
      className={`border-b border-stone-200 ${
        story.secondary ? "opacity-80" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span
          className={`font-display text-xl sm:text-2xl ${
            story.secondary ? "text-stone-500" : "text-ink"
          }`}
        >
          {story.title}
        </span>
        <ChevronDownIcon
          width={20}
          height={20}
          className={`shrink-0 transition-transform duration-300 text-stone-400 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="pb-8 max-w-2xl">
          {hasContent ? (
            <div className="flex flex-col gap-4 text-stone-600 leading-relaxed">
              {story.body
                .split(/\n\s*\n/)
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
          ) : (
            <p className="text-sm text-stone-400 italic">
              This chapter is being prepared and will appear here soon.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
