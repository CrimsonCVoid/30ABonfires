"use client";

import { useActionState, useState } from "react";
import { submitContactForm, type ContactFormState } from "@/actions/contact";
import { towns, siteConfig } from "@/lib/config";

type ContactFormProps = {
  sourcePage?: string;
};

export function ContactForm({ sourcePage = "contact" }: ContactFormProps) {
  const [submittedAt] = useState(() => new Date().toISOString());
  const [state, formAction, isPending] = useActionState<
    ContactFormState,
    FormData
  >(submitContactForm, null);

  if (state?.success) {
    return (
      <div className="bg-stone-50 border border-fire-500/30 rounded-xl p-8 text-center">
        <svg
          className="w-12 h-12 text-fire-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h3 className="text-xl font-bold text-stone-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-stone-500 mb-6">
          Thank you for reaching out. We&apos;ll get back to you shortly. In the
          meantime, you can go ahead and book your bonfire now.
        </p>
        <a
          href={siteConfig.fareharborUrl}
          className="inline-flex items-center justify-center btn-fire text-white px-8 py-3 rounded-lg font-semibold shadow-md text-lg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book your beach bonfire now"
        >
          Book Your Bonfire Now
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state?.error && (
        <div
          className="bg-red-50 border border-red-300 rounded-lg p-4 text-red-700 text-sm"
          role="alert"
        >
          {state.error}
        </div>
      )}

      <input type="hidden" name="source_page" value={sourcePage} />
      <input type="hidden" name="submitted_at" value={submittedAt} />
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-stone-700 mb-1"
          >
            Name <span className="text-fire-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={isPending}
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3.5 min-h-[48px] text-stone-900 text-base placeholder-stone-400 focus:border-fire-500 focus:ring-2 focus:ring-fire-500/20 outline-none transition-colors disabled:opacity-50"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-stone-700 mb-1"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            disabled={isPending}
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3.5 min-h-[48px] text-stone-900 text-base placeholder-stone-400 focus:border-fire-500 focus:ring-2 focus:ring-fire-500/20 outline-none transition-colors disabled:opacity-50"
            placeholder="(850) 555-0000"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-stone-700 mb-1"
        >
          Email <span className="text-fire-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isPending}
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3.5 min-h-[48px] text-stone-900 text-base placeholder-stone-400 focus:border-fire-500 focus:ring-2 focus:ring-fire-500/20 outline-none transition-colors disabled:opacity-50"
          placeholder="you@email.com"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="preferred_town"
            className="block text-sm font-medium text-stone-700 mb-1"
          >
            Preferred Location
          </label>
          <select
            id="preferred_town"
            name="preferred_town"
            disabled={isPending}
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3.5 min-h-[48px] text-stone-900 text-base focus:border-fire-500 focus:ring-2 focus:ring-fire-500/20 outline-none transition-colors disabled:opacity-50"
          >
            <option value="">Select a town...</option>
            {towns.map((town) => (
              <option key={town} value={town}>
                {town}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="date_requested"
            className="block text-sm font-medium text-stone-700 mb-1"
          >
            Preferred Date
          </label>
          <input
            type="date"
            id="date_requested"
            name="date_requested"
            disabled={isPending}
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3.5 min-h-[48px] text-stone-900 text-base focus:border-fire-500 focus:ring-2 focus:ring-fire-500/20 outline-none transition-colors disabled:opacity-50"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-stone-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={isPending}
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3.5 text-stone-900 text-base placeholder-stone-400 focus:border-fire-500 focus:ring-2 focus:ring-fire-500/20 outline-none transition-colors disabled:opacity-50 resize-vertical"
          placeholder="Tell us about your event—group size, occasion, special requests..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full btn-fire text-white px-8 py-4 min-h-[52px] rounded-lg font-semibold text-lg shadow-md shadow-fire-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>

      <p className="text-sm text-stone-400 text-center">
        Or book directly:{" "}
        <a
          href={siteConfig.fareharborUrl}
          className="text-fire-600 hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Your Bonfire Now
        </a>
      </p>
    </form>
  );
}
