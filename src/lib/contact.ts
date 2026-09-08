import { supabase } from "./supabase";
import type { ContactSubmission } from "@/types/content";

export async function submitContactForm(
  submission: ContactSubmission
): Promise<{ success: boolean; error: string | null }> {
  if (!supabase) {
    return { success: false, error: "not-configured" };
  }
  const { error } = await supabase.from("contact_submissions").insert({
    name: submission.name,
    email: submission.email,
    inquiry_type: submission.inquiry_type,
    message: submission.message,
  });

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true, error: null };
}
