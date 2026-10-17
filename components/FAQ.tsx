"use client";

import { useState } from "react";
import Link from "next/link";

import {
  BUILDER_SPRINT,
  getRegistrationStatus,
} from "@/lib/buildersprint";

const faqs = [
  {
    question: "What is CONTRIBE Builder Sprint?",
    answer:
      "Builder Sprint is a focused 14-day initiative designed to help you move an idea forward by actually building something. You'll work on your own project, independently or with a team, make progress, and share what you've created. The Sprint gives you structure, resources, guidance, and opportunities to connect with other builders.",
  },
  {
    question: "When does Cohort 2 take place?",
    answer:
      `Registrations are scheduled to open on ${BUILDER_SPRINT.registrationOpenDateLabel}. Onboarding is planned for December 1–4, 2026, followed by the 14-day Sprint from December 7–20, 2026.`,
  },
  {
    question: "Who can participate in Builder Sprint?",
    answer:
      "Builder Sprint is for young people who want to turn their ideas into action, learn by doing, and make tangible progress on a project. Whether you're a student, creator, aspiring founder, designer, developer, or curious beginner, you can participate at your current skill level.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Building isn't limited to coding. Depending on your project, you could work on a website, design, research, writing, content, a prototype, or another creative project. Choose something appropriate to your interests and current skills.",
  },
  {
    question: "Do I need to have an idea before joining?",
    answer:
      "Having an idea is helpful, but it doesn't need to be perfectly defined. The goal is to choose something you can make meaningful progress on during the Sprint. Start with a problem, an interest, or a simple concept, then refine it as you work.",
  },
  {
    question: "Can I participate alone, or do I need a team?",
    answer:
      "You can participate solo or with a team. If you're looking for collaborators, the CONTRIBE Builder Network can help you connect with other builders. However, finding teammates is not guaranteed, so choose a project you can realistically work on with the people and resources available to you.",
  },
  {
    question: "What am I expected to do during the 14 days?",
    answer:
      "You'll work toward building your chosen project, make progress throughout the Sprint, and submit your work according to the cohort's requirements. The emphasis is on taking action, learning through the process, and completing a meaningful piece of work rather than waiting for perfection.",
  },
  {
    question: "Will CONTRIBE build my project or provide individual technical support?",
    answer:
      "No. You remain responsible for building your own project. CONTRIBE provides structure, resources, guidance, problem-solving direction, and opportunities to connect with other builders. The availability and level of support may vary; individual or on-demand technical support is not guaranteed.",
  },
  {
    question: "Do I have to share my progress publicly?",
    answer:
      "Sharing your progress is encouraged because it can help you learn, connect with others, and make your work visible. However, posting on public social media is not compulsory. You can share your progress within the community where appropriate.",
  },
  {
    question: "Will I receive a certificate or recognition?",
    answer:
      "Participants who submit their projects in accordance with the Sprint requirements qualify for a certificate and applicable recognition. Make sure you follow the cohort instructions and submission requirements. Participation alone does not guarantee eligibility.",
  },
  {
    question: "What is the InsightBolt offer for eligible participants?",
    answer:
      "Eligible Builder Sprint participants who submit their projects according to the requirements can qualify for a 50% discount on one of three eligible InsightBolt monthly plans for three months, subject to the offer's terms and conditions. The offer is not automatically available to every registrant. Check the InsightBolt partnership section and the Terms & Conditions for the details.",
  },
  {
    question: "What happens after Builder Sprint ends?",
    answer:
      "The Sprint is one initiative within CONTRIBE, not the end of your building journey. You can continue participating in the Builder Network, join Weekly Activities, share your progress, connect with other builders, and keep working on your project beyond the 14 days.",
  },
  {
    question: "Do I have to join the Builder Network to participate?",
    answer:
      "Builder Sprint and the Builder Network are separate parts of CONTRIBE. The network is an ongoing community where you can connect and collaborate. Joining it can help you stay connected during and after the Sprint, but the Network is not the same thing as Sprint registration.",
  },
  {
    question: "How do I register for Cohort 2?",
    answer:
      "Use the Builder Sprint registration button on this page when registration is open. Complete the official registration form and follow the instructions provided by CONTRIBE. Check the registration status and opening date on this website for the latest information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const registrationStatus = getRegistrationStatus();

  const registrationIsOpen = registrationStatus === "open";
  const registrationIsUpcoming = registrationStatus === "upcoming";

  function toggleFAQ(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section
      id="faq"
      className="bg-slate-50 px-6 py-20 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
            YOUR QUESTIONS, ANSWERED
          </p>

          <h2
            id="faq-heading"
            className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl"
          >
            Everything about
            <span className="block text-orange-600">
              Builder Sprint.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            From getting started to submitting your project, here's
            what you need to know before joining Cohort 2.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="mt-12 space-y-3 sm:mt-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;

            return (
              <article
                key={faq.question}
                className={[
                  "overflow-hidden rounded-2xl border bg-white transition-all duration-200",
                  isOpen
                    ? "border-orange-300 shadow-md shadow-orange-950/5"
                    : "border-slate-200 hover:border-slate-300",
                ].join(" ")}
              >
                <h3>
                  <button
                    id={questionId}
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500 sm:px-7 sm:py-6"
                  >
                    <span
                      className={[
                        "text-base font-semibold leading-7 transition-colors sm:text-lg",
                        isOpen ? "text-orange-700" : "text-slate-900",
                      ].join(" ")}
                    >
                      {faq.question}
                    </span>

                    {/* Plus / minus indicator */}
                    <span
                      aria-hidden="true"
                      className={[
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-2xl font-normal transition-all duration-200",
                        isOpen
                          ? "rotate-0 bg-orange-500 text-white"
                          : "bg-slate-100 text-slate-600",
                      ].join(" ")}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                {/* Only the currently selected answer is visible */}
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                >
                  <div className="border-t border-slate-100 px-5 pb-6 pt-4 sm:px-7 sm:pb-7">
                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Sprint-focused final prompt */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-[#0F172A] px-6 py-10 text-center text-white sm:mt-14 sm:px-10 sm:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
              YOUR NEXT 14 DAYS
            </p>

            <h3 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Got an idea?
              <span className="block text-orange-400">
                Give it a start.
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Choose a project, make progress, and see what you can
              build in 14 days. Your next step starts with showing up.
            </p>

            <div className="mt-7">
              {registrationIsOpen && (
                <a
                  href={BUILDER_SPRINT.registrationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] sm:w-auto"
                >
                  Register for Cohort 2
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </a>
              )}

              {registrationIsUpcoming && (
                <Link
                  href="#builder-sprint"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] sm:w-auto"
                >
                  Explore Cohort 2
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              )}

              {registrationStatus === "awaiting-form" && (
                <Link
                  href="#builder-sprint"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] sm:w-auto"
                >
                  View Sprint Details
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}