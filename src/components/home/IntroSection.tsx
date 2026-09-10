import { LinkButton } from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { SITE } from "@/data/site";

export default function IntroSection() {
  return (
    <section className="section py-20 sm:py-28">
      <div className="section-inner grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-6">
          <span className="text-xs uppercase tracking-widest2 text-ember-dark">
            Introduction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
            Faith. Creativity. Purpose. Ideas.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-lg">
            {SITE.homepageBio}
          </p>
          <div>
            <LinkButton to="/about" variant="outline">
              Read My Story
            </LinkButton>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <ResponsiveImage
            src="/images/profile/portrait-main.jpg"
            alt={SITE.personName}
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
