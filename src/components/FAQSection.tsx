import type { FAQ } from "@/lib/areas-data";
import { JsonLd } from "./JsonLd";
import { generateFAQSchema } from "@/lib/schemas";

type FAQSectionProps = {
  faqs: FAQ[];
  title?: string;
};

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
}: FAQSectionProps) {
  return (
    <section className="py-24 sm:py-32">
      <JsonLd data={generateFAQSchema(faqs)} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 text-center mb-16 tracking-tight">
          {title}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group glass-card rounded-xl overflow-hidden hover:border-fire-500/30 transition-all duration-300"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-6 text-left text-lg font-semibold text-stone-800 hover:text-fire-600 transition-colors">
                <span className="pr-4">{faq.question}</span>
                <span className="flex-shrink-0 text-fire-500/60 group-open:rotate-180 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-stone-500 leading-relaxed font-light">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
