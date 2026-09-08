import { LinkButton } from "@/components/ui/Button";

export default function ContactCtaSection() {
  return (
    <section className="section py-20 sm:py-28 border-t border-stone-200">
      <div className="section-inner flex flex-col items-center text-center gap-6">
        <span className="text-xs uppercase tracking-widest2 text-ember-dark">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight max-w-2xl">
          Have a ministry invitation, a design project, or something on your
          mind?
        </h2>
        <LinkButton to="/contact" variant="solid">
          Contact Fela
        </LinkButton>
      </div>
    </section>
  );
}
