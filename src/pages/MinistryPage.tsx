import Seo from "@/components/Seo";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import ValuesPresentation from "@/components/ministry/ValuesPresentation";
import { LinkButton } from "@/components/ui/Button";
import { FREEDOM_NATION } from "@/data/freedomNation";

export default function MinistryPage() {
  return (
    <>
      <Seo
        title="Ministry"
        description="Freedom Nation: a ministry passionate about God, His Word, and the transformation of lives. Statement, vision, mission, and core values."
        path="/ministry"
      />

      <section className="section pt-16 pb-20 sm:pt-24 sm:pb-28 bg-ink text-paper">
        <div className="section-inner flex flex-col items-center text-center gap-8">
          <span className="text-xs uppercase tracking-widest2 text-ember">
            Ministry
          </span>
          <h1 className="text-4xl sm:text-5xl font-medium max-w-2xl leading-tight">
            Freedom Nation
          </h1>
          <p className="text-lg text-stone-300 max-w-2xl leading-relaxed">
            {FREEDOM_NATION.description}
          </p>
          <div className="border-t border-stone-700 pt-6 mt-2">
            <p className="text-stone-300">
              {FREEDOM_NATION.meeting.day}, {FREEDOM_NATION.meeting.time}
              <span className="mx-2 text-stone-600">|</span>
              {FREEDOM_NATION.meeting.location}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 sm:py-20 bg-stone-50 flex justify-center">
        <ResponsiveImage
          src="/images/ministry/ministry-photo.png"
          alt="Freedom Nation"
          className="w-48 h-48 sm:w-60 sm:h-60 object-contain"
        />
      </section>

      <section className="section py-20 sm:py-28">
        <div className="section-inner grid gap-16 sm:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              Ministry Statement
            </span>
            <p className="text-lg leading-relaxed">
              {FREEDOM_NATION.ministryStatement}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              Vision
            </span>
            <p className="text-lg leading-relaxed">{FREEDOM_NATION.vision}</p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              Mission
            </span>
            <p className="text-lg leading-relaxed">{FREEDOM_NATION.mission}</p>
          </div>
        </div>
      </section>

      <section className="section py-20 sm:py-28 bg-stone-50">
        <div className="section-inner flex flex-col gap-12">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest2 text-ember-dark">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium mt-3 leading-tight">
              Seven Core Values
            </h2>
          </div>
          <ValuesPresentation />
        </div>
      </section>

      <section className="section py-20 sm:py-28">
        <div className="section-inner flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-medium max-w-xl leading-tight">
            Join us this Friday, or reach out to learn more
          </h2>
          <LinkButton to="/contact">Get in Touch</LinkButton>
        </div>
      </section>
    </>
  );
}
