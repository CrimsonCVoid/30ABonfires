import Link from "next/link";
import Image from "next/image";

type AreaCardProps = {
  slug: string;
  name: string;
  headline: string;
  unsplashImage?: string;
  vibe?: string;
};

const vibeColors: Record<string, string> = {
  "Quiet & Secluded": "bg-navy-600/10 text-navy-700 border-navy-500/30",
  "Upscale & Charming": "bg-sunset-500/10 text-sunset-500 border-sunset-400/30",
  "Luxury & Artistic": "bg-ember-500/10 text-ember-500 border-ember-400/30",
  "Family-Friendly & Relaxed": "bg-navy-600/10 text-navy-600 border-navy-400/30",
  "Natural & Secluded": "bg-navy-700/10 text-navy-700 border-navy-500/30",
  "Classic & Laid-Back": "bg-ember-500/10 text-ember-500 border-ember-400/30",
  "Iconic & Vibrant": "bg-fire-600/10 text-fire-600 border-fire-500/30",
  "Luxury & Natural": "bg-ember-500/10 text-ember-500 border-ember-400/30",
  "Artsy & Free-Spirited": "bg-sunset-500/10 text-sunset-500 border-sunset-400/30",
  "Quiet & Elevated": "bg-navy-600/10 text-navy-600 border-navy-400/30",
  "Central & Versatile": "bg-fire-600/10 text-fire-600 border-fire-500/30",
  "Lively & Convenient": "bg-ember-500/10 text-ember-500 border-ember-400/30",
  "Secluded & Wild": "bg-navy-700/10 text-navy-700 border-navy-600/30",
  "Vibrant & Accessible": "bg-coral-500/10 text-coral-500 border-coral-500/30",
  "Resort & Full-Service": "bg-fire-600/10 text-fire-600 border-fire-500/30",
};

export function AreaCard({ slug, name, headline, unsplashImage, vibe }: AreaCardProps) {
  const vibeColor = vibe ? vibeColors[vibe] || "bg-fire-600/10 text-fire-600 border-fire-500/30" : null;

  return (
    <Link
      href={`/areas/${slug}`}
      className="block rounded-xl overflow-hidden hover:border-fire-500/40 transition-all duration-500 group relative bg-white border border-stone-200 shadow-sm hover:shadow-md"
    >
      {unsplashImage && (
        <div className="relative h-40 overflow-hidden">
          <Image
            src={unsplashImage}
            alt={`${name} beach on 30A`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-ash-950/20 to-transparent" />
        </div>
      )}
      <div className="p-5">
        {vibe && vibeColor && (
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 uppercase tracking-wider ${vibeColor}`}>
            {vibe}
          </span>
        )}
        <h3 className="text-lg font-bold text-stone-900 group-hover:text-fire-600 transition-colors mb-2 uppercase tracking-wide">
          {name}
        </h3>
        <p className="text-stone-500 text-sm font-light line-clamp-2">{headline}</p>
        <span className="inline-flex items-center mt-4 text-fire-600 text-sm font-semibold group-hover:underline uppercase tracking-wider">
          Explore
          <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
