import { supabase } from "./supabase";
import type { YouthQuestionSubmission } from "@/types/content";

export async function submitYouthQuestion(
  submission: YouthQuestionSubmission
): Promise<{ success: boolean; error: string | null }> {
  if (!supabase) {
    return { success: false, error: "not-configured" };
  }
  const { error } = await supabase.from("youth_questions").insert({
    is_anonymous: submission.is_anonymous,
    name: submission.is_anonymous ? null : submission.name,
    age: submission.age,
    school_type: submission.school_type,
    state: submission.state,
    question: submission.question,
  });

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true, error: null };
}
