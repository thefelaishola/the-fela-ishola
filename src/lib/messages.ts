import { supabase } from "./supabase";
import type { MessageRecord } from "@/types/content";

export async function fetchMessages(): Promise<{
  data: MessageRecord[];
  error: string | null;
}> {
  if (!supabase) {
    return { data: [], error: "not-configured" };
  }
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("published", true)
    .order("message_date", { ascending: true });

  if (error) {
    return { data: [], error: error.message };
  }
  return { data: data ?? [], error: null };
}

export async function fetchFeaturedMessages(): Promise<{
  data: MessageRecord[];
  error: string | null;
}> {
  if (!supabase) {
    return { data: [], error: "not-configured" };
  }
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("published", true)
    .eq("featured", true)
    .order("message_date", { ascending: true });

  if (error) {
    return { data: [], error: error.message };
  }
  return { data: data ?? [], error: null };
}

export async function fetchMessageBySlug(slug: string): Promise<{
  data: MessageRecord | null;
  error: string | null;
}> {
  if (!supabase) {
    return { data: null, error: "not-configured" };
  }
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) {
    return { data: null, error: error.message };
  }
  return { data: data ?? null, error: null };
}
