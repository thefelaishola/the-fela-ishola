export type StoryCategory = "about-me" | "ministry" | "fegitals-digitals";

export interface Story {
  slug: string;
  title: string;
  category: StoryCategory;
  /**
   * The full story text. Left empty until the supplied story content is
   * pasted in. Nothing here is invented: see README "Content Still Needed"
   * for exactly what to add and where.
   */
  body: string;
  /** Stories that should sit visually lighter than the rest of a category. */
  secondary?: boolean;
}

export const STORY_CATEGORIES: { id: StoryCategory; label: string }[] = [
  { id: "about-me", label: "About Me" },
  { id: "ministry", label: "Ministry" },
  { id: "fegitals-digitals", label: "Fegitals Digitals" },
];

export const STORIES: Story[] = [
  // About Me
  {
    slug: "a-man-only-god-understands",
    title: "A Man Only God Understands",
    category: "about-me",
    body: "",
  },
  {
    slug: "a-curious-mind",
    title: "A Curious Mind",
    category: "about-me",
    body: "",
  },
  {
    slug: "the-accountant",
    title: "The Accountant",
    category: "about-me",
    body: "",
    secondary: true,
  },
  {
    slug: "what-i-want-to-leave-behind",
    title: "What I Want to Leave Behind",
    category: "about-me",
    body: "",
  },
  {
    slug: "still-becoming",
    title: "Still Becoming",
    category: "about-me",
    body: "",
  },

  // Ministry
  {
    slug: "a-life-shaped-by-god",
    title: "A Life Shaped by God",
    category: "ministry",
    body: "",
  },
  {
    slug: "the-call",
    title: "The Call",
    category: "ministry",
    body: "",
  },
  {
    slug: "freedom-nation",
    title: "Freedom Nation",
    category: "ministry",
    body: "",
  },
  {
    slug: "my-ministry",
    title: "My Ministry",
    category: "ministry",
    body: "",
  },
  {
    slug: "the-vision-ministry",
    title: "The Vision",
    category: "ministry",
    body: "",
  },
  {
    slug: "the-work-ministry",
    title: "The Work",
    category: "ministry",
    body: "",
  },

  // Fegitals Digitals
  {
    slug: "the-boy-who-discovered-design",
    title: "The Boy Who Discovered Design",
    category: "fegitals-digitals",
    body: "",
  },
  {
    slug: "fegitals-digitals",
    title: "Fegitals Digitals",
    category: "fegitals-digitals",
    body: "",
  },
  {
    slug: "why-i-design",
    title: "Why I Design",
    category: "fegitals-digitals",
    body: "",
  },
  {
    slug: "the-vision-design",
    title: "The Vision",
    category: "fegitals-digitals",
    body: "",
  },
  {
    slug: "the-work-design",
    title: "The Work",
    category: "fegitals-digitals",
    body: "",
  },
];
