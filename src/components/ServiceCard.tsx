import { siteConfig } from "@/lib/config";

type ServiceCardProps = {
  name: string;
  description: string;
  features: string[];
  price?: string;
  highlighted?: boolean;
};

export function ServiceCard({
  name,
  description,
  features,
  price,
  highlighted = false,
}: ServiceCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 transition-all duration-500 ${
        highlighted
          ? "ring-fire glass-card border-fire-500/40 animate-pulse-warm scale-[1.02]"
          : "glass-card hover:border-fire-700/40"
      }`}
    >
      {highlighted && (
        <span className="inline-block bg-gradient-to-r from-fire-500 to-ember-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-[0.15em]">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-ash-100 mb-2 uppercase tracking-wide">
        {name}
      </h3>
      {price && (
        <p className="text-3xl font-bold bg-gradient-to-r from-fire-400 to-ember-400 bg-clip-text text-transparent mb-5">
          {price}
        </p>
      )}
      <p className="text-ash-200/60 mb-6 font-light leading-relaxed">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-ash-200/80">
            <svg
              className="w-5 h-5 text-fire-500 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-light">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={siteConfig.fareharborUrl}
        className={`inline-flex items-center justify-center w-full font-bold rounded-lg py-4 transition-all duration-300 uppercase tracking-[0.12em] text-sm ${
          highlighted
            ? "btn-fire text-white shadow-lg shadow-fire-600/20"
            : "bg-ash-800 text-ash-200 hover:bg-fire-600 hover:text-white border border-ash-700 hover:border-fire-600"
        }`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Book ${name}`}
      >
        Book Now
      </a>
    </div>
  );
}
