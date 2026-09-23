"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who can apply?",
    answer:
      "Students currently studying in Class 9 or above, including school, college, diploma, and university students, are eligible to apply.",
  },
  {
    question: "Do I need previous leadership experience?",
    answer:
      "No. We're looking for students who are willing to contribute, learn, and help grow the community.",
  },
  {
    question: "Can more than one ambassador be selected from my institution?",
    answer:
      "No. Only one CONTRIBE Ambassador will represent each institution.",
  },
  {
    question: "I'm not a CONTRIBE Member yet. Can I still apply?",
    answer:
      "Absolutely. If you're not already a member, you'll automatically receive a CONTRIBE Member ID after submitting your application.",
  },
  {
    question: "How long does the ambassador role last?",
    answer:
      "Ambassador appointments are reviewed periodically and continue while ambassadors remain active and eligible to represent their institution.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Active ambassadors who successfully complete their responsibilities will receive an official CONTRIBE Ambassador Certificate.",
  },
  {
    question: "Is there any application fee?",
    answer:
      "No. Applying for and becoming a CONTRIBE Ambassador is completely free.",
  },
  {
    question: "How will I know if I'm selected?",
    answer:
      "Selected applicants will receive an email with the next steps after the review process.",
  },
];

export default function AmbassadorFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* HEADER */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF7A00]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Have Questions?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are answers to some common questions.
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition ${
                  isOpen
                    ? "border-orange-300 shadow-sm"
                    : "border-gray-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`ambassador-faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                >
                  <span className="text-base font-semibold text-gray-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl font-medium transition ${
                      isOpen
                        ? "bg-[#FF7A00] text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={`ambassador-faq-answer-${index}`}
                  className={`grid transition-all duration-200 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-gray-100 px-6 pb-6 pt-5 sm:px-7">
                      <p className="leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}