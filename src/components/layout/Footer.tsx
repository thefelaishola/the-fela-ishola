import { Link } from "react-router-dom";
import { NAV_LINKS, SITE } from "@/data/site";
import { MailIcon, InstagramIcon } from "@/components/ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="section py-16">
        <div className="section-inner grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="flex flex-col gap-4 max-w-sm">
            <Link to="/" className="font-display text-xl">
              The Fela <span className="text-ember">ishola</span>
            </Link>
            <p className="text-sm text-stone-400">{SITE.personName}</p>
            <p className="text-sm text-stone-400">{SITE.title}</p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest2 text-stone-500">
              Explore
            </span>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-stone-300 hover:text-ember transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest2 text-stone-500">
              Connect
            </span>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 text-sm text-stone-300 hover:text-ember transition-colors"
            >
              <MailIcon width={16} height={16} aria-hidden="true" />
              {SITE.email}
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-stone-300 hover:text-ember transition-colors"
            >
              <InstagramIcon width={16} height={16} aria-hidden="true" />
              {SITE.instagramHandle}
            </a>
          </div>
        </div>

        <div className="section-inner mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row justify-between gap-2 text-xs text-stone-500">
          <p>
            Copyright {year} {SITE.brandName}. All rights reserved.
          </p>
          <p>Faith. Creativity. Purpose. Ideas.</p>
        </div>
      </div>
    </footer>
  );
}
