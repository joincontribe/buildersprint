import Link from "next/link";

import {
  BUILDER_SPRINT,
  INSIGHTBOLT_LINKS,
  INSIGHTBOLT_OFFER,
} from "@/lib/buildersprint";

const benefits = [
  {
    number: "01",
    title: "A completed project",
    description:
      "Work on your project throughout the 14-day Builder Sprint and submit it according to the sprint requirements.",
  },
  {
    number: "02",
    title: "Recognition",
    description:
      "Eligible participants who meet the submission requirements qualify for the applicable certificate and recognition.",
  },
  {
    number: "03",
    title: "An InsightBolt offer",
    description:
      "Eligible project submitters can receive 50% off one eligible InsightBolt monthly plan for three months, subject to the offer terms.",
  },
];

const timeline = [
  {
    date: "1–4 December",
    title: "Onboarding",
    description:
      "Get ready for the sprint and prepare to begin.",
  },
  {
    date: "7–20 December",
    title: "Builder Sprint",
    description:
      "Work on your project, make progress, and submit it according to the requirements.",
  },
  {
    date: "25–30 December",
    title: "Expected offer emails",
    description:
      "Eligible submitters are expected to receive their InsightBolt redemption instructions by email during this window.",
  },
];

export default function InsightBoltPartnership() {
  return (
    <section
      id="insightbolt-partnership"
      aria-labelledby="insightbolt-partnership-heading"
      className="scroll-mt-24 overflow-hidden bg-[#0F172A] px-6 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            CONTRIBE × INSIGHTBOLT
          </p>

          <h2
            id="insightbolt-partnership-heading"
            className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Build something real.
            <span className="mt-2 block text-orange-400">
              Get recognised.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            Builder Sprint is about turning ideas into action.
            Through our partnership with{" "}
            <a
              href={INSIGHTBOLT_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-orange-400 underline-offset-4 hover:text-orange-300"
            >
              InsightBolt
            </a>
            , eligible Cohort 2 project submitters can also
            access a special offer on eligible monthly plans.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-orange-400/30 bg-slate-900/80 p-7 text-center shadow-xl sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            AN EXCLUSIVE BENEFIT FOR ELIGIBLE SUBMITTERS
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <span className="text-7xl font-black leading-none tracking-tight text-orange-400 sm:text-8xl">
              50%
            </span>

            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold sm:text-3xl">
                OFF
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-200 sm:text-xl">
                for 3 months
              </p>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-300">
            Get 50% off one eligible InsightBolt monthly plan
            for three months, subject to the partnership's
            eligibility requirements and Terms & Conditions.
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            Available only to eligible Builder Sprint Cohort 2
            participants who submit their projects according
            to the sprint requirements.
          </p>

          <Link
            href={INSIGHTBOLT_LINKS.terms}
            className="mt-5 inline-block text-sm font-semibold text-orange-300 underline decoration-orange-400 underline-offset-4 transition hover:text-orange-200"
          >
            Terms &amp; Conditions
          </Link>
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              HOW IT WORKS
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              First, build. Then, get recognised.
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              The offer is tied to your participation and
              project submission. It isn't an automatic
              discount for everyone visiting this website.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7"
              >
                <p className="text-sm font-bold tracking-[0.2em] text-orange-400">
                  {benefit.number}
                </p>

                <h4 className="mt-5 text-xl font-bold">
                  {benefit.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              COHORT 2 TIMELINE
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              Mark the milestones.
            </h3>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {timeline.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6"
              >
                <p className="text-sm font-bold text-orange-400">
                  {item.date}, 2026
                </p>

                <h4 className="mt-3 text-xl font-bold">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>

                {index === 2 && (
                  <p className="mt-4 text-xs leading-6 text-slate-400">
                    The email window is expected; follow the
                    instructions provided in your own email.
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-700 bg-slate-900/70 p-6 sm:p-8">
          <h3 className="text-xl font-bold">
            Important offer conditions
          </h3>

          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
            <li>
              <span className="mr-2 text-orange-400">•</span>
              The offer is for eligible project submitters,
              not every Builder Sprint participant or website
              visitor.
            </li>

            <li>
              <span className="mr-2 text-orange-400">•</span>
              Redemption instructions are expected by email
              between {INSIGHTBOLT_OFFER.emailWindowLabel}.
            </li>

            <li>
              <span className="mr-2 text-orange-400">•</span>
              Your three-month redemption window begins when
              your redemption instructions are sent.
            </li>

            <li>
              <span className="mr-2 text-orange-400">•</span>
              The discounted fee is paid in advance for each
              respective monthly billing period. This does not
              mean all three months must be paid upfront.
            </li>

            <li>
              <span className="mr-2 text-orange-400">•</span>
              Upgrading or downgrading the selected plan
              terminates the offer.
            </li>
          </ul>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Please review the full{" "}
            <Link
              href={INSIGHTBOLT_LINKS.terms}
              className="font-semibold text-orange-300 underline decoration-orange-400 underline-offset-4 hover:text-orange-200"
            >
              Terms &amp; Conditions
            </Link>{" "}
            before redeeming the offer.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            READY TO BUILD?
          </p>

          <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
            Your project comes first.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Join the community, prepare for {BUILDER_SPRINT.cohort},
            and focus on making something you can show.
          </p>

          <a
            href="#builder-sprint"
            className="mt-7 inline-flex items-center rounded-xl bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Explore Builder Sprint
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}