export interface DailyGuide {
  id: string;
  title: string;
  slug: string;
  guide_date: string; // ISO date, e.g. 2026-09-01
  bible_reading: string;
  introduction: string;
  daily_reflection: string;
  daily_action: string;
  prayer: string;
  verse_to_remember: string;
  verse_reference: string;
  featured: boolean;
  published: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface MessageRecord {
  id: string;
  title: string;
  part: number | null;
  slug: string;
  description: string;
  transcript: string | null;
  audio_url: string | null;
  image_url: string | null;
  message_date: string | null;
  featured: boolean;
  published: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  slug: string;
  industry: string | null;
  category: string;
  aspect_ratio: string | null;
  image_count: number | null;
  cover_image: string | null;
  folder: string;
  featured: boolean;
  published: boolean;
  sort_order: number;
}

export interface PortfolioImage {
  id: string;
  project_id: string;
  image_url: string;
  alt_text: string | null;
  sort_order: number;
}

export interface ContactSubmission {
  name: string;
  email: string;
  inquiry_type:
    | "Ministry Invitation"
    | "Speaking Engagement"
    | "Design Project"
    | "General Inquiry";
  message: string;
}

export type FreedomNationValue = {
  name: string;
  description: string;
  scriptures: string[];
};
