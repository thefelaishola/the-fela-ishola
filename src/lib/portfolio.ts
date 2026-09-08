import { supabase } from "./supabase";
import type { PortfolioProject, PortfolioImage } from "@/types/content";

export async function fetchPortfolioProjects(): Promise<{
  data: PortfolioProject[];
  error: string | null;
}> {
  if (!supabase) {
    return { data: [], error: "not-configured" };
  }
  const { data, error } = await supabase
    .from("portfolio_projects")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    return { data: [], error: error.message };
  }
  return { data: data ?? [], error: null };
}

export async function fetchPortfolioProjectBySlug(slug: string): Promise<{
  data: PortfolioProject | null;
  error: string | null;
}> {
  if (!supabase) {
    return { data: null, error: "not-configured" };
  }
  const { data, error } = await supabase
    .from("portfolio_projects")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) {
    return { data: null, error: error.message };
  }
  return { data: data ?? null, error: null };
}

export async function fetchPortfolioImages(projectId: string): Promise<{
  data: PortfolioImage[];
  error: string | null;
}> {
  if (!supabase) {
    return { data: [], error: "not-configured" };
  }
  const { data, error } = await supabase
    .from("portfolio_images")
    .select("*")
    .eq("project_id", projectId)
    .order("sort_order", { ascending: true });

  if (error) {
    return { data: [], error: error.message };
  }
  return { data: data ?? [], error: null };
}
