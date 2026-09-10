import { supabase } from "./supabase";
import type { DailyGuide } from "@/types/content";

export interface DailyGuideResult {
  data: DailyGuide[];
  error: string | null;
}

/** Today's date as YYYY-MM-DD, based on the visitor's device clock. */
function todayStr(): string {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(today.getDate()).padStart(2, "0")}`;
}

/**
 * Every Daily Guide read goes through this date filter: an entry only
 * becomes visible on or after its own guide_date. Guides for future days
 * stay out of the archive, search, homepage, and direct links alike until
 * their day arrives.
 */
export async function fetchDailyGuides(): Promise<DailyGuideResult> {
  if (!supabase) {
    return { data: [], error: "not-configured" };
  }
  const { data, error } = await supabase
    .from("daily_guides")
    .select("*")
    .eq("published", true)
    .lte("guide_date", todayStr())
    .order("guide_date", { ascending: true });

  if (error) {
    return { data: [], error: error.message };
  }
  return { data: data ?? [], error: null };
}

export async function fetchTodaysDailyGuide(): Promise<{
  data: DailyGuide | null;
  error: string | null;
}> {
  if (!supabase) {
    return { data: null, error: "not-configured" };
  }

  const today = todayStr();

  // Prefer an exact match for today's date.
  const exact = await supabase
    .from("daily_guides")
    .select("*")
    .eq("published", true)
    .eq("guide_date", today)
    .maybeSingle();

  if (exact.error) {
    return { data: null, error: exact.error.message };
  }
  if (exact.data) {
    return { data: exact.data, error: null };
  }

  // No entry for today: fall back to the most recent entry on or before
  // today. Future-dated entries are never shown, even as a fallback.
  const past = await supabase
    .from("daily_guides")
    .select("*")
    .eq("published", true)
    .lte("guide_date", today)
    .order("guide_date", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (past.error) {
    return { data: null, error: past.error.message };
  }
  return { data: past.data ?? null, error: null };
}

export async function fetchDailyGuideBySlug(slug: string): Promise<{
  data: DailyGuide | null;
  error: string | null;
}> {
  if (!supabase) {
    return { data: null, error: "not-configured" };
  }
  const { data, error } = await supabase
    .from("daily_guides")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .lte("guide_date", todayStr())
    .maybeSingle();

  if (error) {
    return { data: null, error: error.message };
  }
  return { data: data ?? null, error: null };
}

export function groupGuidesByMonth(guides: DailyGuide[]) {
  const groups = new Map<string, DailyGuide[]>();
  for (const guide of guides) {
    const date = new Date(guide.guide_date + "T00:00:00");
    const key = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(guide);
  }
  return Array.from(groups.entries()).map(([month, entries]) => ({
    month,
    entries: entries.sort((a, b) => (a.guide_date > b.guide_date ? -1 : 1)),
  }));
}

export function searchGuides(guides: DailyGuide[], query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return guides;
  return guides.filter((guide) => {
    const haystack = [
      guide.title,
      guide.bible_reading,
      guide.guide_date,
      guide.introduction,
      guide.daily_reflection,
      guide.daily_action,
      guide.prayer,
      guide.verse_to_remember,
      guide.verse_reference,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
