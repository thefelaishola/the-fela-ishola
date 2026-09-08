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
