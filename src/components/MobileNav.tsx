"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/config";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 min-w-[48px] min-h-[48px] text-stone-600 hover:text-fire-600 focus:outline-none focus:ring-2 focus:ring-fire-500 rounded-md"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg shadow-2xl border-t border-stone-200 z-50">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-4 text-navy-700 hover:text-fire-600 border-b border-stone-200 last:border-0 transition-colors uppercase tracking-[0.15em] text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="mt-5 inline-flex items-center justify-center gap-2 text-stone-700 hover:text-fire-600 py-4 min-h-[48px] rounded-lg font-semibold text-base transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteConfig.phone}
            </a>
            <a
              href={siteConfig.fareharborUrl}
              className="inline-flex items-center justify-center btn-fire text-white px-6 py-4 min-h-[52px] rounded-lg font-bold uppercase tracking-[0.12em]"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
