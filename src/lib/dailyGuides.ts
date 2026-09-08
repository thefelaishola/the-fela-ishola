import { supabase } from "./supabase";
import type { DailyGuide } from "@/types/content";

export interface DailyGuideResult {
  data: DailyGuide[];
  error: string | null;
}

export async function fetchDailyGuides(): Promise<DailyGuideResult> {
  if (!supabase) {
    return { data: [], error: "not-configured" };
  }
  const { data, error } = await supabase
    .from("daily_guides")
    .select("*")
    .eq("published", true)
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

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(
    today.getDate()
  ).padStart(2, "0")}`;

  // Prefer an exact match for today's date.
  const exact = await supabase
    .from("daily_guides")
    .select("*")
    .eq("published", true)
    .eq("guide_date", todayStr)
    .maybeSingle();

  if (exact.error) {
    return { data: null, error: exact.error.message };
  }
  if (exact.data) {
    return { data: exact.data, error: null };
  }

  // No entry for today: fall back to the most recent entry on or before
  // today, so the homepage still shows something relevant rather than a
  // future-dated entry.
  const past = await supabase
    .from("daily_guides")
    .select("*")
    .eq("published", true)
    .lte("guide_date", todayStr)
    .order("guide_date", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (past.error) {
    return { data: null, error: past.error.message };
  }
  if (past.data) {
    return { data: past.data, error: null };
  }

  // No past entry either: fall back to the earliest available entry.
  const earliest = await supabase
    .from("daily_guides")
    .select("*")
    .eq("published", true)
    .order("guide_date", { ascending: true })
    .limit(1)
    .maybeSingle();

  if (earliest.error) {
    return { data: null, error: earliest.error.message };
  }
  return { data: earliest.data ?? null, error: null };
}

export async function fetchLatestDailyGuide(): Promise<{
  data: DailyGuide | null;
  error: string | null;
}> {
  if (!supabase) {
    return { data: null, error: "not-configured" };
  }
  const { data, error } = await supabase
    .from("daily_guides")
    .select("*")
    .eq("published", true)
    .order("guide_date", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    return { data: null, error: error.message };
  }
  return { data: data ?? null, error: null };
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
    entries: entries.sort((a, b) => (a.guide_date < b.guide_date ? -1 : 1)),
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
