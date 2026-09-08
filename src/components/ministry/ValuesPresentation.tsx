import { useState } from "react";
import { FREEDOM_NATION_VALUES } from "@/data/freedomNation";

export default function ValuesPresentation() {
  const [active, setActive] = useState(0);
  const value = FREEDOM_NATION_VALUES[active];

  return (
    <div className="grid lg:grid-cols-[minmax(0,320px)_1fr] gap-8 lg:gap-16">
      <div
        className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
        role="tablist"
        aria-label="Freedom Nation values"
      >
        {FREEDOM_NATION_VALUES.map((v, index) => (
          <button
            key={v.name}
            role="tab"
            aria-selected={active === index}
            onClick={() => setActive(index)}
            className={`shrink-0 lg:shrink text-left px-5 py-4 border transition-colors whitespace-nowrap lg:whitespace-normal ${
              active === index
                ? "bg-ink text-paper border-ink"
                : "bg-transparent text-ink border-stone-200 hover:border-ink"
            }`}
          >
            <span className="text-xs uppercase tracking-widest2 opacity-60 block mb-1">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-medium">{v.name}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" className="flex flex-col gap-6 max-w-2xl">
        <h3 className="text-2xl sm:text-3xl font-medium">{value.name}</h3>
        <p className="text-lg text-stone-600 leading-relaxed">
          {value.description}
        </p>
        <div>
          <span className="text-xs uppercase tracking-widest2 text-stone-400 block mb-3">
            Scriptures
          </span>
          <ul className="flex flex-wrap gap-2">
            {value.scriptures.map((scripture) => (
              <li
                key={scripture}
                className="text-sm px-3 py-1.5 border border-stone-200 text-stone-600"
              >
                {scripture}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
