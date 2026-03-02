import Link from "next/link";
import { siteConfig, navLinks, towns } from "@/lib/config";

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function Footer() {
  return (
    <footer className="bg-stone-50 text-stone-500 border-t border-stone-200">
      {/* Fire top border */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-fire-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Business Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider">
              <span className="bg-gradient-to-r from-fire-600 via-fire-500 to-ember-500 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h3>
            <address className="not-italic space-y-2 text-sm">
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="hover:text-fire-600 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-fire-600 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="text-stone-400">{siteConfig.hours}</p>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-navy-700 mb-5 uppercase tracking-[0.2em]">Pages</h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-fire-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-bold text-navy-700 mb-5 uppercase tracking-[0.2em]">
              Service Areas
            </h4>
            <nav className="flex flex-col gap-2.5">
              {towns.slice(0, 8).map((town) => (
                <Link
                  key={town}
                  href={`/areas/${slugify(town)}`}
                  className="text-sm hover:text-fire-600 transition-colors"
                >
                  {town}
                </Link>
              ))}
            </nav>
          </div>

          {/* More Areas + Social */}
          <div>
            <h4 className="text-sm font-bold text-navy-700 mb-5 uppercase tracking-[0.2em]">
              More Areas
            </h4>
            <nav className="flex flex-col gap-2.5 mb-10">
              {towns.slice(8).map((town) => (
                <Link
                  key={town}
                  href={`/areas/${slugify(town)}`}
                  className="text-sm hover:text-fire-600 transition-colors"
                >
                  {town}
                </Link>
              ))}
            </nav>

            <h4 className="text-sm font-bold text-fire-600 mb-4 uppercase tracking-[0.2em]">Follow Us</h4>
            <div className="flex gap-5">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fire-600 transition-colors text-sm"
                aria-label="Follow us on Instagram"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fire-600 transition-colors text-sm"
                aria-label="Follow us on Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-200 text-center text-sm text-stone-400">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved. | {siteConfig.name} is a division of{" "}
            {siteConfig.legalName}.
          </p>
        </div>
      </div>
    </footer>
  );
}
