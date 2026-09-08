import { useState } from "react";
import Seo from "@/components/Seo";
import { STORIES, STORY_CATEGORIES, type StoryCategory } from "@/data/aboutStories";
import StoryChapter from "@/components/about/StoryChapter";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { SITE } from "@/data/site";

export default function AboutPage() {
  const [activeCategory, setActiveCategory] = useState<StoryCategory>(
    "about-me"
  );

  const activeStories = STORIES.filter((s) => s.category === activeCategory);

  return (
    <>
      <Seo
        title="About"
        description="A life, told in chapters. The story of Fela Ishola, across faith, ministry, and creative work."
        path="/about"
      />

      <section className="section pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="section-inner grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              About
            </span>
            <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
              About Fela Ishola
            </h1>
            <p className="text-lg text-stone-600">A life, told in chapters.</p>
          </div>
          <ResponsiveImage
            src="/images/personal/about-portrait.webp"
            alt={SITE.personName}
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
      </section>

      <section className="section pb-24 sm:pb-32">
        <div className="section-inner">
          <div
            className="flex flex-wrap gap-2 border-b border-stone-200 mb-4"
            role="tablist"
            aria-label="Story categories"
          >
            {STORY_CATEGORIES.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 text-sm uppercase tracking-widest2 border-b-2 -mb-px transition-colors ${
                  activeCategory === category.id
                    ? "border-ember text-ink"
                    : "border-transparent text-stone-400 hover:text-ink"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div role="tabpanel">
            {activeStories.map((story) => (
              <StoryChapter key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
