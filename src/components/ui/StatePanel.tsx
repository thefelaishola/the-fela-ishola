import { ExclamationIcon, BookIcon } from "./Icons";

interface StatePanelProps {
  kind?: "empty" | "error";
  title: string;
  description?: string;
}

/**
 * A single, calm component for every "nothing to show" moment on the site:
 * no guides yet, no messages yet, no portfolio images yet, or a Supabase
 * request that failed. No broken layouts, no console-only failures.
 */
export default function StatePanel({
  kind = "empty",
  title,
  description,
}: StatePanelProps) {
  const Icon = kind === "error" ? ExclamationIcon : BookIcon;
  return (
    <div className="flex flex-col items-center text-center gap-4 border border-stone-200 py-16 px-6">
      <Icon width={28} height={28} className="text-stone-400" aria-hidden="true" />
      <p className="text-lg font-medium text-stone-700">{title}</p>
      {description && (
        <p className="text-sm text-stone-500 max-w-md">{description}</p>
      )}
    </div>
  );
}
