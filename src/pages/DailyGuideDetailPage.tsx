import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { fetchDailyGuideBySlug, fetchDailyGuides } from "@/lib/dailyGuides";
import type { DailyGuide } from "@/types/content";
import StatePanel from "@/components/ui/StatePanel";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/Icons";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function DailyGuideDetailPage() {
  const { slug = "" } = useParams();
  const [guide, setGuide] = useState<DailyGuide | null>(null);
  const [adjacent, setAdjacent] = useState<{
    prev: DailyGuide | null;
    next: DailyGuide | null;
  }>({ prev: null, next: null });
  const [status, setStatus] = useState<"loading" | "ready" | "empty" | "error">(
    "loading"
  );

  useEffect(() => {
    let active = true;
    setStatus("loading");

    Promise.all([fetchDailyGuideBySlug(slug), fetchDailyGuides()]).then(
      ([guideResult, allResult]) => {
        if (!active) return;
        if (guideResult.error || !guideResult.data) {
          setStatus(guideResult.error === "not-configured" ? "error" : "empty");
          return;
        }
        setGuide(guideResult.data);

        const all = allResult.data;
        const index = all.findIndex((g) => g.slug === slug);
        setAdjacent({
          prev: index > 0 ? all[index - 1] : null,
          next: index >= 0 && index < all.length - 1 ? all[index + 1] : null,
        });
        setStatus("ready");
      }
    );

    return () => {
      active = false;
    };
  }, [slug]);

  if (status === "loading") {
    return (
      <div className="section py-24">
        <div className="section-inner max-w-2xl h-96 border border-stone-200 animate-pulse motion-reduce:animate-none" />
      </div>
    );
  }

  if (status !== "ready" || !guide) {
    return (
      <div className="section py-24">
        <div className="section-inner max-w-2xl">
          <StatePanel
            kind={status === "error" ? "error" : "empty"}
            title={
              status === "error"
                ? "This Daily Guide entry is temporarily unavailable"
                : "This Daily Guide entry could not be found"
            }
          />
          <div className="mt-8">
            <Link
              to="/daily-guide"
              className="text-sm uppercase tracking-widest2 text-ember-dark"
            >
              Back to Daily Guide
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={guide.title}
        description={guide.introduction.slice(0, 155)}
        path={`/daily-guide/${guide.slug}`}
      />

      <article className="section pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="section-inner max-w-2xl">
          <div className="flex flex-col gap-4 mb-12">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              {formatDate(guide.guide_date)}
            </span>
            <h1 className="text-3xl sm:text-4xl font-medium leading-tight">
              {guide.title}
            </h1>
            <p className="text-stone-500">{guide.bible_reading}</p>
          </div>

          <div className="flex flex-col gap-12">
            <section className="flex flex-col gap-4">
              <h2 className="text-sm uppercase tracking-widest2 text-stone-400">
                Introduction
              </h2>
              <div className="flex flex-col gap-4 text-stone-700 leading-relaxed text-lg">
                {guide.introduction.split(/\n\s*\n/).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-sm uppercase tracking-widest2 text-stone-400">
                Daily Reflection
              </h2>
              <p className="text-stone-700 leading-relaxed text-lg">
                {guide.daily_reflection}
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-sm uppercase tracking-widest2 text-stone-400">
                Daily Action
              </h2>
              <p className="text-stone-700 leading-relaxed text-lg">
                {guide.daily_action}
              </p>
            </section>

            <section className="flex flex-col gap-4 bg-stone-50 border border-stone-200 p-8">
              <h2 className="text-sm uppercase tracking-widest2 text-stone-400">
                Prayer
              </h2>
              <p className="text-stone-700 leading-relaxed text-lg">
                {guide.prayer}
              </p>
            </section>

            <section className="flex flex-col gap-3 border-l-2 border-ember pl-6">
              <h2 className="text-sm uppercase tracking-widest2 text-stone-400">
                Verse to Remember
              </h2>
              <p className="text-xl font-display leading-relaxed">
                {guide.verse_to_remember}
              </p>
              <p className="text-stone-500">{guide.verse_reference}</p>
            </section>
          </div>

          <nav
            className="flex items-center justify-between mt-20 pt-8 border-t border-stone-200"
            aria-label="Daily Guide navigation"
          >
            {adjacent.prev ? (
              <Link
                to={`/daily-guide/${adjacent.prev.slug}`}
                className="flex items-center gap-2 text-sm uppercase tracking-widest2 text-stone-600 hover:text-ink"
              >
                <ArrowLeftIcon width={16} height={16} aria-hidden="true" />
                Previous Day
              </Link>
            ) : (
              <span />
            )}
            {adjacent.next ? (
              <Link
                to={`/daily-guide/${adjacent.next.slug}`}
                className="flex items-center gap-2 text-sm uppercase tracking-widest2 text-stone-600 hover:text-ink"
              >
                Next Day
                <ArrowRightIcon width={16} height={16} aria-hidden="true" />
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </article>
    </>
  );
}
