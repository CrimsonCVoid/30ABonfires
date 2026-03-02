import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/config";
import { MobileNav } from "./MobileNav";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wider transition-colors uppercase"
          >
            <span className="bg-gradient-to-r from-fire-600 via-fire-500 to-ember-500 bg-clip-text text-transparent">
              30A Bonfires
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.15em] text-navy-700 hover:text-fire-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${phoneDigits}`}
              className="inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-fire-600 transition-colors font-medium min-h-[48px]"
              aria-label={`Call us at ${siteConfig.phone}`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.fareharborUrl}
              className="btn-fire text-white px-8 py-3.5 min-h-[48px] rounded-lg text-sm tracking-[0.15em] transition-all shadow-md shadow-fire-600/20 hover:shadow-fire-500/40"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your beach bonfire now"
            >
              Book Now
            </a>
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <a
              href={`tel:${phoneDigits}`}
              className="inline-flex items-center justify-center p-3 min-w-[48px] min-h-[48px] text-fire-600 hover:text-fire-700 transition-colors rounded-md"
              aria-label={`Call us at ${siteConfig.phone}`}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
