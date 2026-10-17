import Image from "next/image";
import Link from "next/link";

import {
  BUILDER_SPRINT,
  CONTRIBE_LINKS,
  INSIGHTBOLT_LINKS,
  INSIGHTBOLT_OFFER,
} from "@/lib/buildersprint";

const termsSections = [
  {
    id: "eligibility",
    number: "01",
    title: "Eligibility",
    paragraphs: [
      "The InsightBolt offer is intended for eligible participants of CONTRIBE Builder Sprint Cohort 2 who submit their projects in accordance with the sprint's applicable submission requirements.",
      "Registering for Builder Sprint, joining the CONTRIBE community, or participating in the sprint alone does not automatically qualify someone for the offer.",
      "Eligibility is tied to the required project submission. Participants should follow the official sprint instructions and any applicable submission deadlines and requirements communicated by CONTRIBE.",
    ],
  },
  {
    id: "the-offer",
    number: "02",
    title: "What the offer includes",
    paragraphs: [
      "Eligible participants can receive a 50% discount on one eligible InsightBolt monthly plan for three months.",
      "The offer applies to one eligible plan. The three eligible plans and their applicable standard prices must be confirmed through the redemption instructions or directly with InsightBolt.",
      "The discount applies for the stated three-month offer period, subject to the redemption requirements and the conditions described on this page.",
    ],
  },
  {
    id: "redemption",
    number: "03",
    title: "Redemption instructions",
    paragraphs: [
      "CONTRIBE expects to email redemption instructions to eligible project submitters between December 25 and December 30, 2026.",
      "The expected email period is an announcement schedule, not a guarantee that every participant will receive an email. Eligibility and the applicable submission requirements must first be satisfied.",
      "Eligible participants should follow the instructions in the email they receive and confirm their chosen eligible plan and applicable price before proceeding with payment.",
      "If you believe you qualified but have not received your instructions, contact CONTRIBE through its official community channels for clarification.",
    ],
  },
  {
    id: "redemption-window",
    number: "04",
    title: "Three-month redemption window",
    paragraphs: [
      "Each eligible participant's three-month redemption window begins on the date CONTRIBE sends that participant their redemption instructions.",
      "The start of the window is therefore based on the participant's own email date, rather than a single common start date for all participants.",
      "Participants should follow the redemption instructions within their individual window. If the window expires before the offer is redeemed, the offer may no longer be available.",
    ],
  },
  {
    id: "billing",
    number: "05",
    title: "Monthly billing and payment",
    paragraphs: [
      "The discounted fee for each monthly billing period must be paid in advance for that respective period.",
      "The offer does not require all three monthly periods to be paid upfront merely because the offer lasts three months. Payment is made in advance for each respective monthly billing period.",
      "Before paying, participants should confirm the eligible plan, the standard plan price, the discounted amount, the billing period, and any applicable taxes or other charges directly through the relevant InsightBolt checkout or official instructions.",
    ],
  },
  {
    id: "plan-changes",
    number: "06",
    title: "Changing the selected plan",
    paragraphs: [
      "Upgrading or downgrading the selected InsightBolt plan terminates the offer.",
      "Participants should therefore review the available eligible plans carefully before selecting one and redeeming the offer.",
      "If you are unsure whether a proposed plan change would affect your offer, clarify the consequences with InsightBolt before making the change.",
    ],
  },
  {
    id: "participant-responsibilities",
    number: "07",
    title: "Participant responsibilities",
    paragraphs: [
      "Participants are responsible for completing their own projects and submitting their work according to the applicable Builder Sprint requirements.",
      "Participants should provide accurate information when registering, submitting a project, or following the offer redemption process.",
      "Participants are responsible for reading the redemption instructions and confirming the plan and payment details before purchasing an InsightBolt plan.",
    ],
  },
  {
    id: "communication",
    number: "08",
    title: "Official communications",
    paragraphs: [
      "Important Builder Sprint announcements and community updates are shared through CONTRIBE's official communication channels.",
      "Redemption instructions for this offer are expected to be sent by email to eligible participants. Participants should check the email address they provided and follow the instructions communicated to them.",
      "If any offer-specific detail in your redemption email requires clarification, contact the relevant organisation before completing your purchase.",
    ],
  },
  {
    id: "questions",
    number: "09",
    title: "Questions and clarification",
    paragraphs: [
      "For questions about Builder Sprint participation, project submissions, eligibility, or the delivery of redemption instructions, contact CONTRIBE through its official community channels.",
      "For questions about InsightBolt plans, plan prices, billing, or the operation of the selected service, contact InsightBolt through its official channel.",
      "If a detail necessary to redeem the offer is not clear from these terms or your email, obtain clarification before paying.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* TOP NAVIGATION */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <Link
            href="/"
            aria-label="CONTRIBE homepage"
            className="inline-flex items-center gap-2.5"
          >
            <Image
              src="/logo.png"
              alt="CONTRIBE logo"
              width={44}
              height={44}
              priority
              className="h-10 w-10 object-contain"
            />

            <span className="text-lg font-bold tracking-wide text-slate-900 sm:text-xl">
              CONTRIBE
            </span>
          </Link>

          <Link
            href="/#insightbolt-partnership"
            className="text-sm font-semibold text-slate-600 transition hover:text-orange-600"
          >
            Partnership details
            <span className="ml-1" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </header>

      {/* PAGE INTRODUCTION */}
      <section className="relative overflow-hidden bg-[#0F172A] px-6 py-16 text-white sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            CONTRIBE × INSIGHTBOLT
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Terms &amp;
            <span className="block text-orange-400">
              Conditions
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            The rules governing eligibility, redemption, and use
            of the special InsightBolt offer associated with
            CONTRIBE Builder Sprint {BUILDER_SPRINT.cohort}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              50% discount
            </span>

            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              3 months
            </span>

            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              Eligible project submitters
            </span>
          </div>
        </div>
      </section>

      {/* OFFER SUMMARY */}
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
              THE OFFER AT A GLANCE
            </p>

            <div className="mt-5 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-black text-slate-950">
                  {INSIGHTBOLT_OFFER.discountPercentage}%
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Discount on one eligible monthly plan
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-slate-950">
                  {INSIGHTBOLT_OFFER.durationMonths}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Months of discounted billing
                </p>
              </div>

              <div>
                <p className="text-lg font-black text-slate-950">
                  {INSIGHTBOLT_OFFER.emailWindowLabel}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Expected redemption instruction email window
                </p>
              </div>
            </div>

            <p className="mt-6 border-t border-orange-200 pt-5 text-sm leading-7 text-slate-700">
              Eligibility is conditional. Registration alone does
              not qualify a participant. The participant must
              submit their project according to the applicable
              Builder Sprint requirements.
            </p>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-950">
            On this page
          </h2>

          <nav aria-label="Terms and Conditions sections">
            <ol className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {termsSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-start gap-3 text-sm leading-6 text-slate-600 transition hover:text-orange-700"
                  >
                    <span className="font-bold text-orange-600">
                      {section.number}
                    </span>

                    <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-orange-500">
                      {section.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* DETAILED TERMS */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          {termsSections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-24 border-b border-slate-200 py-9 first:pt-4 last:border-b-0"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-sm font-black text-orange-700">
                  {section.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-8 text-slate-600 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT AND LINKS */}
      <section className="bg-slate-50 px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-[#0F172A] p-7 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              NEED CLARIFICATION?
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Ask before you redeem.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              If you're unsure about your eligibility, submission
              requirements, redemption instructions, or plan pricing,
              seek clarification before completing your purchase.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={CONTRIBE_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 font-bold text-white transition hover:bg-orange-600"
              >
                Contact the CONTRIBE Community
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                href={INSIGHTBOLT_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-6 py-3.5 font-semibold text-white transition hover:border-slate-400 hover:bg-white/5"
              >
                Contact InsightBolt
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#insightbolt-partnership"
              className="font-semibold text-slate-600 transition hover:text-orange-600"
            >
              ← Back to the partnership
            </Link>

            <Link
              href="/"
              className="font-semibold text-slate-600 transition hover:text-orange-600"
            >
              Return to CONTRIBE homepage
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white px-6 py-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-2 text-center text-xs leading-6 text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} CONTRIBE. All rights
            reserved.
          </p>

          <p>
            Builder Sprint {BUILDER_SPRINT.cohort} · InsightBolt
            Partnership
          </p>
        </div>
      </footer>
    </main>
  );
}