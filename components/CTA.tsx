import Link from "next/link";

import {
  BUILDER_SPRINT,
  getRegistrationStatus,
} from "@/lib/buildersprint";

export default function CTA() {
  const registrationStatus = getRegistrationStatus();

  const registrationIsOpen = registrationStatus === "open";
  const registrationIsUpcoming = registrationStatus === "upcoming";
  const registrationIsAwaitingForm =
    registrationStatus === "awaiting-form";

  return (
    <section
      id="final-cta"
      className="bg-white px-6 py-20 sm:py-28"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0F172A] px-6 py-14 text-white shadow-2xl sm:px-12 sm:py-20 md:px-16">
          {/* Decorative elements */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-orange-400"
              />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300 sm:text-sm">
                CONTRIBE BUILDER SPRINT · COHORT 2
              </p>
            </div>

            {/* Main heading */}
            <h2
              id="final-cta-heading"
              className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            >
              Stop waiting.
              <span className="mt-2 block text-orange-400">
                Start building.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              You don't need a perfect idea or a finished skill set.
              Pick a project, make progress over 14 days, and share
              what you build. We'll help you move forward with
              guidance, resources, and a community of fellow builders.
            </p>

            {/* Sprint details */}
            <div className="mx-auto mt-9 grid max-w-xl grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
                <p className="text-3xl font-extrabold text-orange-400 sm:text-4xl">
                  14
                </p>

                <p className="mt-2 text-sm font-medium text-slate-300">
                  Days to build
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
                <p className="text-3xl font-extrabold text-orange-400 sm:text-4xl">
                  1
                </p>

                <p className="mt-2 text-sm font-medium text-slate-300">
                  Project to move forward
                </p>
              </div>
            </div>

            {/* Primary registration CTA */}
            <div className="mt-9">
              {registrationIsOpen && (
                <>
                  <a
                    href={BUILDER_SPRINT.registrationFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] sm:w-auto sm:min-w-72"
                  >
                    Register for Cohort 2
                    <span className="ml-3" aria-hidden="true">
                      →
                    </span>
                  </a>

                  <p className="mt-4 text-sm text-slate-400">
                    Your next project could start here.
                  </p>
                </>
              )}

              {registrationIsUpcoming && (
                <>
                  <p className="mb-5 text-base font-semibold text-slate-200">
                    Registrations open{" "}
                    <span className="text-orange-400">
                      {BUILDER_SPRINT.registrationOpenDateLabel}
                    </span>
                  </p>

                  <Link
                    href="#builder-sprint"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] sm:w-auto sm:min-w-72"
                  >
                    Explore Cohort 2
                    <span className="ml-3" aria-hidden="true">
                      →
                    </span>
                  </Link>

                  <p className="mt-4 text-sm text-slate-400">
                    Get ready to turn your idea into progress.
                  </p>
                </>
              )}

              {registrationIsAwaitingForm && (
                <>
                  <p className="mb-5 text-base leading-7 text-slate-300">
                    Registration is scheduled to open, but the form
                    link is not available yet.
                  </p>

                  <Link
                    href="#builder-sprint"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-base font-extrabold text-white transition hover:-translate-y-1 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] sm:w-auto sm:min-w-72"
                  >
                    Explore Cohort 2
                    <span className="ml-3" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </>
              )}
            </div>

            {/* Supporting message */}
            <div className="mx-auto mt-12 max-w-xl border-t border-slate-700 pt-8">
              <p className="text-lg font-bold text-white sm:text-xl">
                You build it. We help you move forward.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                Build solo or with others. Learn by doing, share your
                progress, and make these 14 days count.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary navigation */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6">
          <Link
            href="#builder-network"
            className="text-sm font-semibold text-slate-600 transition hover:text-orange-600"
          >
            Explore the Builder Network →
          </Link>

          <span
            aria-hidden="true"
            className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block"
          />

          <Link
            href="#weekly-activities"
            className="text-sm font-semibold text-slate-600 transition hover:text-orange-600"
          >
            Explore Weekly Activities →
          </Link>
        </div>

        {/* Brand closing line */}
        <div className="mt-12 text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-slate-900">
            <span className="text-orange-600">Build.</span>{" "}
            Participate. Grow.
          </p>
        </div>
      </div>
    </section>
  );
}