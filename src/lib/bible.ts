export interface BiblePassage {
  reference: string;
  text: string;
  translationName: string;
}

const cache = new Map<string, BiblePassage>();

/**
 * Splits a "Bible Reading" field such as
 * "Proverbs 18:16; Proverbs 3:9-10; Luke 6:38" into individual, clickable
 * references. A single reference (no semicolon) returns as a one-item list.
 */
export function splitReferences(raw: string): string[] {
  return raw
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean);
}

/**
 * Fetches the actual passage text for a single Bible reference from
 * bible-api.com (King James Version), so the site never has to invent or
 * store verse text it was not given. Results are cached in memory for the
 * life of the page.
 */
export async function fetchBiblePassage(
  reference: string
): Promise<{ data: BiblePassage | null; error: string | null }> {
  const key = reference.trim();
  if (!key) {
    return { data: null, error: "empty-reference" };
  }
  if (cache.has(key)) {
    return { data: cache.get(key)!, error: null };
  }

  try {
    const res = await fetch(
      `https://bible-api.com/${encodeURIComponent(key)}?translation=kjv`
    );
    if (!res.ok) {
      return { data: null, error: "not-found" };
    }
    const json = await res.json();
    if (!json || typeof json.text !== "string" || !json.text.trim()) {
      return { data: null, error: "not-found" };
    }
    const passage: BiblePassage = {
      reference: typeof json.reference === "string" ? json.reference : key,
      text: json.text.replace(/\n+/g, " ").trim(),
      translationName:
        typeof json.translation_name === "string"
          ? json.translation_name
          : "King James Version",
    };
    cache.set(key, passage);
    return { data: passage, error: null };
  } catch {
    return { data: null, error: "network" };
  }
}
