"use client";

import { useEffect, useCallback, useState } from "react";
import { siteConfig } from "@/lib/config";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  itemId?: string;
};

export function BookingModal({ isOpen, onClose, itemId }: BookingModalProps) {
  const [loading, setLoading] = useState(true);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  const basePath = itemId
    ? `https://fareharbor.com/embeds/book/${siteConfig.fareharborShortname}/items/${itemId}/`
    : `https://fareharbor.com/embeds/book/${siteConfig.fareharborShortname}/`;
  const iframeSrc = `${basePath}?full-items=yes&ref=${encodeURIComponent(siteConfig.fareharborRef)}`;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fade-in_200ms_ease-out]"
        onClick={onClose}
      />

      {/* Modal — tall and narrow, centered */}
      <div className="absolute inset-0 flex items-center justify-center p-4 animate-[slide-up_300ms_ease-out]">
        <div className="relative w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-stone-200 bg-stone-50 flex-shrink-0">
            <div>
              <h2 className="text-base font-bold text-stone-900 uppercase tracking-wide">
                Book Your Bonfire
              </h2>
              <p className="text-xs text-stone-500 font-light">
                Select a date and package to reserve
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-stone-200 transition-colors text-stone-500 hover:text-stone-900"
              aria-label="Close booking modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* FareHarbor iframe */}
          <div className="flex-1 relative bg-white">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-3 border-fire-500 border-t-transparent rounded-full animate-spin" />
                  <p className="text-stone-400 text-sm font-light">Loading booking...</p>
                </div>
              </div>
            )}
            <iframe
              src={iframeSrc}
              className="absolute inset-0 w-full h-full border-0"
              title="Book a beach bonfire on 30A"
              allow="payment"
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
