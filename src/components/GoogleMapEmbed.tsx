type GoogleMapEmbedProps = {
  lat: number;
  lng: number;
  name: string;
  zoom?: number;
};

export function GoogleMapEmbed({ lat, lng, name, zoom = 13 }: GoogleMapEmbedProps) {
  const query = encodeURIComponent(`${name}, 30A, Florida`);
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-stone-200 shadow-lg">
      <div className="aspect-[16/9] sm:aspect-[2/1]">
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${name} on 30A, Florida`}
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-transparent p-4">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-fire-600 hover:text-fire-500 text-sm font-semibold uppercase tracking-wider group"
        >
          Open in Google Maps
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
