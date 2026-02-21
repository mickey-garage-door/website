"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="border border-theme rounded-lg overflow-hidden transition-colors duration-300"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-surface hover:bg-surface-raised transition-colors"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm md:text-base pr-4">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 shrink-0 text-brand-dark dark:text-brand-cyan transition-transform duration-200 ${
                openIndex === idx ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === idx && (
            <div className="px-5 pb-5 pt-2 bg-surface border-t border-theme">
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
