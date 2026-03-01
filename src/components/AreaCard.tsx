import Link from "next/link";

type AreaCardProps = {
  slug: string;
  name: string;
  headline: string;
};

export function AreaCard({ slug, name, headline }: AreaCardProps) {
  return (
    <Link
      href={`/areas/${slug}`}
      className="block glass-card rounded-xl p-6 hover:border-fire-500/50 transition-all duration-500 group"
    >
      <h3 className="text-lg font-bold text-ash-100 group-hover:text-fire-400 transition-colors mb-2 uppercase tracking-wide">
        {name}
      </h3>
      <p className="text-ash-200/50 text-sm font-light">{headline}</p>
      <span className="inline-flex items-center mt-4 text-fire-400 text-sm font-semibold group-hover:underline uppercase tracking-wider">
        Learn More
        <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}
