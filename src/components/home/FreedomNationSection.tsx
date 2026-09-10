import { LinkButton } from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { FREEDOM_NATION } from "@/data/freedomNation";

export default function FreedomNationSection() {
  return (
    <section className="section py-20 sm:py-28 bg-ink text-paper">
      <div className="section-inner grid gap-12 lg:grid-cols-[1fr_1.3fr] items-center">
        <div className="flex flex-col items-start gap-8">
          <ResponsiveImage
            src="/images/freedom-nation/freedom-nation-homepage.png"
            alt="Freedom Nation"
            className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
          />
          <div className="border-l-2 border-ember pl-6">
            <p className="text-sm uppercase tracking-widest2 text-stone-400 mb-2">
              Meets
            </p>
            <p className="text-lg">
              {FREEDOM_NATION.meeting.day}, {FREEDOM_NATION.meeting.time}
            </p>
            <p className="text-stone-400">{FREEDOM_NATION.meeting.location}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-xs uppercase tracking-widest2 text-ember">
            Ministry
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium leading-tight">
            Freedom Nation
          </h2>
          <p className="text-stone-300 leading-relaxed max-w-xl">
            {FREEDOM_NATION.description}
          </p>
          <div>
            <LinkButton to="/ministry" variant="onDark">
              Explore Freedom Nation
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
