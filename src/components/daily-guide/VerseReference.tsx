import { splitReferences } from "@/lib/bible";

interface VerseReferenceProps {
  text: string;
  onSelect: (reference: string) => void;
  className?: string;
}

/**
 * Renders a Bible reading / reference string as one or more clickable
 * references (split on ";" for multi-passage fields). Clicking a reference
 * opens the VersePopup with the actual passage text.
 */
export default function VerseReference({
  text,
  onSelect,
  className = "",
}: VerseReferenceProps) {
  const refs = splitReferences(text);

  return (
    <span className={className}>
      {refs.map((ref, i) => (
        <span key={ref}>
          <button
            type="button"
            onClick={() => onSelect(ref)}
            className="underline decoration-dotted underline-offset-4 text-ember-dark hover:text-ink focus-visible:outline-2 focus-visible:outline-ember"
          >
            {ref}
          </button>
          {i < refs.length - 1 && <span className="text-stone-400">; </span>}
        </span>
      ))}
    </span>
  );
}
