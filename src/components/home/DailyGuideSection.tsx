import { useEffect, useState } from "react";
import { fetchTodaysDailyGuide } from "@/lib/dailyGuides";
import type { DailyGuide } from "@/types/content";
import { LinkButton } from "@/components/ui/Button";
import StatePanel from "@/components/ui/StatePanel";
import { BookIcon } from "@/components/ui/Icons";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function DailyGuideSection() {
  const [guide, setGuide] = useState<DailyGuide | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "empty" | "error">(
    "loading"
  );

  useEffect(() => {
    let active = true;
    fetchTodaysDailyGuide().then(({ data, error }) => {
      if (!active) return;
      if (error === "not-configured") {
        setStatus("error");
      } else if (error) {
        setStatus("error");
      } else if (!data) {
        setStatus("empty");
      } else {
        setGuide(data);
        setStatus("ready");
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="section py-20 sm:py-28 bg-stone-50">
      <div className="section-inner">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              Daily Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium leading-tight">
              Grow, one day at a time
            </h2>
          </div>
          <LinkButton to="/daily-guide" variant="ghost" className="border-ink">
            Explore Daily Guides
          </LinkButton>
        </div>

        {status === "loading" && (
          <div className="h-64 border border-stone-200 animate-pulse motion-reduce:animate-none" />
        )}

        {(status === "empty" || status === "error") && (
          <StatePanel
            kind={status === "error" ? "error" : "empty"}
            title={
              status === "error"
                ? "Daily Guide is temporarily unavailable"
                : "New Daily Guide entries are on the way"
            }
            description={
              status === "error"
                ? "We could not reach the Daily Guide right now. Please check back shortly."
                : "Check back soon for a new entry to read."
            }
          />
        )}

        {status === "ready" && guide && (
          <div className="border border-stone-200 bg-paper p-8 sm:p-12 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-sm text-stone-500">
              <BookIcon width={18} height={18} aria-hidden="true" />
              <span>{formatDate(guide.guide_date)}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium">{guide.title}</h3>
            <p className="text-sm uppercase tracking-widest2 text-ember-dark">
              {guide.bible_reading}
            </p>
            <p className="text-stone-600 leading-relaxed line-clamp-4">
              {guide.introduction}
            </p>
            <div>
              <LinkButton to={`/daily-guide/${guide.slug}`} variant="outline">
                Read This Guide
              </LinkButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
