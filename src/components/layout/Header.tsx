import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS, SITE } from "@/data/site";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(10,10,10,0.08)]" : ""
      }`}
    >
      <div className="section">
        <div className="section-inner flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-2.5"
            aria-label={`${SITE.brandName}, home`}
          >
            <img
              src="/images/logos/brand-icon.png"
              alt=""
              className="h-8 sm:h-9 w-auto"
            />
            <span className="font-display text-lg sm:text-xl tracking-tight text-ink">
              The Fela ishola
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-10"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-widest2 transition-colors duration-200 pb-1 border-b ${
                    isActive
                      ? "text-ink border-ember"
                      : "text-stone-500 border-transparent hover:text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="lg:hidden border-t border-stone-200 bg-paper"
          aria-label="Mobile"
        >
          <ul className="section section-inner py-4 flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `block py-3 text-base uppercase tracking-wide border-b border-stone-100 ${
                      isActive ? "text-ember" : "text-ink"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
