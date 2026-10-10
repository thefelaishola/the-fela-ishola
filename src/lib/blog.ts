import { supabase } from "./supabase";
import type { BlogPost } from "@/types/content";

/** Today's date as YYYY-MM-DD, based on the visitor's device clock. */
function todayStr(): string {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(today.getDate()).padStart(2, "0")}`;
}

/**
 * Every blog read goes through this date filter, same as Daily Guide: a
 * post only becomes visible on or after its own post_date, so Fela can
 * write ahead and schedule a post without it appearing early.
 */
export async function fetchBlogPosts(): Promise<{
  data: BlogPost[];
  error: string | null;
}> {
  if (!supabase) {
    return { data: [], error: "not-configured" };
  }
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .lte("post_date", todayStr())
    .order("post_date", { ascending: false });

  if (error) {
    return { data: [], error: error.message };
  }
  return { data: data ?? [], error: null };
}

export async function fetchBlogPostBySlug(slug: string): Promise<{
  data: BlogPost | null;
  error: string | null;
}> {
  if (!supabase) {
    return { data: null, error: "not-configured" };
  }
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .lte("post_date", todayStr())
    .maybeSingle();

  if (error) {
    return { data: null, error: error.message };
  }
  return { data: data ?? null, error: null };
}
