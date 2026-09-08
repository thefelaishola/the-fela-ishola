import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { fetchDailyGuides, groupGuidesByMonth, searchGuides } from "@/lib/dailyGuides";
import type { DailyGuide } from "@/types/content";
import StatePanel from "@/components/ui/StatePanel";
import { SearchIcon } from "@/components/ui/Icons";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function DailyGuideListPage() {
  const [guides, setGuides] = useState<DailyGuide[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "empty" | "error">(
    "loading"
  );
  const [query, setQuery] = useState("");

  useEffect(() => {
    let active = true;
    fetchDailyGuides().then(({ data, error }) => {
      if (!active) return;
      if (error) setStatus("error");
      else if (data.length === 0) setStatus("empty");
      else {
        setGuides(data);
        setStatus("ready");
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const filtered = useMemo(() => searchGuides(guides, query), [guides, query]);
  const grouped = useMemo(
    () => groupGuidesByMonth(filtered).reverse(),
    [filtered]
  );

  return (
    <>
      <Seo
        title="Daily Guide"
        description="A daily guide for believers who want to grow in their walk with God, wherever they are. Browse every entry by month."
        path="/daily-guide"
      />

      <section className="section pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="section-inner flex flex-col gap-6 max-w-2xl">
          <span className="text-xs uppercase tracking-widest2 text-ember-dark">
            Daily Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
            Daily Guide
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            A daily guide for believers who want to grow in their walk with
            God, wherever they are.
          </p>
        </div>
      </section>

      <section className="section pb-24 sm:pb-32">
        <div className="section-inner">
          <div className="relative max-w-md mb-12">
            <SearchIcon
              width={18}
              height={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
              aria-hidden="true"
            />
            <label htmlFor="guide-search" className="sr-only">
              Search Daily Guides
            </label>
            <input
              id="guide-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, date, or Bible reference"
              className="w-full pl-11 pr-4 py-3 border border-stone-300 focus-visible:outline-2 focus-visible:outline-ember bg-paper text-base"
            />
          </div>

          {status === "loading" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-28 border border-stone-200 animate-pulse motion-reduce:animate-none"
                />
              ))}
            </div>
          )}

          {(status === "empty" || status === "error") && (
            <StatePanel
              kind={status === "error" ? "error" : "empty"}
              title={
                status === "error"
                  ? "The Daily Guide is temporarily unavailable"
                  : "Daily Guide entries are on the way"
              }
              description={
                status === "error"
                  ? "We could not reach the Daily Guide right now. Please check back shortly."
                  : "Check back soon for the first entries."
              }
            />
          )}

          {status === "ready" && filtered.length === 0 && (
            <StatePanel
              kind="empty"
              title="No entries match your search"
              description="Try a different word, date, or Bible reference."
            />
          )}

          {status === "ready" &&
            grouped.map((group) => (
              <div key={group.month} className="mb-14">
                <h2 className="text-sm uppercase tracking-widest2 text-stone-400 mb-6 pb-3 border-b border-stone-200">
                  {group.month}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.entries.map((guide) => (
                    <Link
                      key={guide.id}
                      to={`/daily-guide/${guide.slug}`}
                      className="border border-stone-200 p-6 flex flex-col gap-2 hover:border-ink transition-colors"
                    >
                      <span className="text-xs uppercase tracking-widest2 text-ember-dark">
                        {formatDate(guide.guide_date)}
                      </span>
                      <span className="font-medium">{guide.title}</span>
                      <span className="text-sm text-stone-500">
                        {guide.bible_reading}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
