"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the CONTRIBE Builder Network?",
    answer:
      "The Builder Network is CONTRIBE's always-on community for young builders, creators, learners, and people who want to participate. You can meet people, find teammates, join weekly activities, discover opportunities, and stay connected between larger CONTRIBE initiatives.",
  },
  {
    question: "Do I need to be part of Builder Sprint to join?",
    answer:
      "No. The Builder Network is open independently of Builder Sprint. You can join the community, participate in weekly activities, meet other builders, and get involved even if you have never participated in a sprint.",
  },
  {
    question: "What are Weekly Activities?",
    answer:
      "Weekly Activities are small, recurring ways to participate in CONTRIBE. They can involve building, learning, creating, connecting, or taking on a challenge. The idea is simple: you should always have something meaningful you can do with the community.",
  },
  {
    question: "What is Builder Sprint?",
    answer:
      "Builder Sprint is a focused 14-day CONTRIBE initiative where participants work toward turning an idea into something real. You can build solo or with a team, make progress throughout the sprint, and finish with something you can actually show.",
  },
  {
    question: "When does Builder Sprint Cohort 2 open?",
    answer:
      "Registrations for Builder Sprint Cohort 2 open on November 1, 2026. Until then, you can join the Builder Network and participate in Weekly Activities.",
  },
  {
    question: "Do I need to already know how to code or build?",
    answer:
      "No. CONTRIBE is not only for experienced makers. You can join if you have an idea, want to learn, want to create, want to find people to build with, or simply want to start participating.",
  },
  {
    question: "How do I find teammates?",
    answer:
      "The Builder Network is designed to make that easier. Connect with other members through the community, share what you're working on, participate in activities, and start conversations with people whose interests match yours.",
  },
  {
    question: "Where does the community communicate?",
    answer:
      "Discord is the deeper community space for conversations, collaboration, projects, and finding people to build with. The WhatsApp Channel is for staying in the loop with activities, announcements, opportunities, and important CONTRIBE updates.",
  },
  {
    question: "What is the Ambassador Program?",
    answer:
      "The Ambassador Program is for people who want to help bring CONTRIBE closer to their institution and create opportunities for others. Ambassadors can help people discover activities and initiatives while developing their own leadership through action.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            QUESTIONS?
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            You might be
            <span className="text-orange-500"> wondering.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Everything you need to know about the Builder Network, Weekly
            Activities, Builder Sprint, and getting involved with CONTRIBE.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition ${
                  isOpen
                    ? "border-orange-300 shadow-sm"
                    : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                >
                  <span className="text-base font-bold text-slate-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl font-medium transition ${
                      isOpen
                        ? "bg-orange-500 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-200 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-slate-100 px-6 pb-6 pt-5 sm:px-7">
                      <p className="leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 sm:p-10">
          <p className="text-lg font-bold text-slate-900">
            Still have a question?
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Join the Builder Network and ask the community directly.
          </p>

          <a
            href="#builder-network"
            className="mt-6 inline-flex rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
          >
            Join the Builder Network →
          </a>
        </div>
      </div>
    </section>
  );
}