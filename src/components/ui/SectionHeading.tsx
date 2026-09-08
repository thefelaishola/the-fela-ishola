interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left";
  const bodyColor = onDark ? "text-stone-300" : "text-stone-600";
  const eyebrowColor = onDark ? "text-ember" : "text-ember-dark";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-widest2 ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${bodyColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
