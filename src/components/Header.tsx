import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/config";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ash-950/95 backdrop-blur-lg border-b border-fire-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wider transition-colors uppercase"
          >
            <span className="bg-gradient-to-r from-fire-400 via-ember-400 to-fire-300 bg-clip-text text-transparent">
              30A Bonfires
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.15em] text-ash-200/80 hover:text-fire-400 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.fareharborUrl}
              className="btn-fire text-white px-6 py-2.5 rounded-lg text-sm tracking-[0.15em] transition-all shadow-md shadow-fire-600/20 hover:shadow-fire-500/40"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your beach bonfire now"
            >
              Book Now
            </a>
          </nav>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
