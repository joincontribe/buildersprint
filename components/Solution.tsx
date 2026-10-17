import { BUILDER_SPRINT } from "@/lib/buildersprint";

const stages = [
  {
    number: "01",
    title: "Find a direction",
    description:
      "Choose a problem, idea, or project you genuinely want to work on.",
  },
  {
    number: "02",
    title: "Make a plan",
    description:
      "Break your idea into smaller tasks you can realistically complete.",
  },
  {
    number: "03",
    title: "Build consistently",
    description:
      "Work on your project throughout the sprint and keep making progress.",
  },
  {
    number: "04",
    title: "Share your progress",
    description:
      "Show what you're working on, ask questions, and learn from other builders.",
  },
  {
    number: "05",
    title: "Submit your project",
    description:
      "Finish the sprint by presenting the work you've completed according to the submission requirements.",
  },
];

export default function Solution() {
  const registrationStatus = BUILDER_SPRINT.getRegistrationStatus();

  const registrationIsOpen = registrationStatus === "open";

  const registrationIsUpcoming = registrationStatus === "upcoming";

  return (
    <section
      id="builder-sprint"
      className="scroll-mt-24 bg-white px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              THE FLAGSHIP INITIATIVE
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-slate-950 md:text-6xl">
              14 days.
              <span className="block text-orange-500">
                One project.
              </span>
              Real progress.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              CONTRIBE Builder Sprint is a guided 14-day building experience
              for young people who want to move an idea into reality.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              You work on your own project, solo or with a team. CONTRIBE
              helps you move forward through resources, guidance, technical
              assistance where available, and opportunities to connect with
              other builders.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              You don't need to be an expert or have a perfect idea before
              starting. The goal is to make meaningful progress and finish
              with something you can show.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                Build solo or with a team
              </span>

              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                Guided experience
              </span>

              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                Focus on progress
              </span>
            </div>

            <div className="mt-10 rounded-3xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                {BUILDER_SPRINT.cohort}
              </p>

              <h3 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
                Your next building chapter.
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-black text-orange-500 shadow-sm">
                    01
                  </div>

                  <div>
                    <p className="font-bold text-slate-950">
                      Registration opens
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      {BUILDER_SPRINT.registrationOpenDateLabel}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-black text-orange-500 shadow-sm">
                    02
                  </div>

                  <div>
                    <p className="font-bold text-slate-950">
                      Participant onboarding
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      {BUILDER_SPRINT.onboardingDateLabel}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-black text-orange-500 shadow-sm">
                    03
                  </div>

                  <div>
                    <p className="font-bold text-slate-950">
                      The 14-day sprint
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      {BUILDER_SPRINT.sprintDateLabel}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 border-t border-orange-200 pt-6">
                {registrationIsOpen ? (
                  <a
                    href={BUILDER_SPRINT.registrationFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600 sm:w-auto"
                  >
                    Register for Cohort 2
                    <span aria-hidden="true" className="ml-2">
                      ↗
                    </span>
                  </a>
                ) : (
                  <div>
                    <p className="font-bold text-slate-950">
                      {registrationIsUpcoming
                        ? "Registration opens November 1, 2026."
                        : "Registration details will be announced here."}
                    </p>

                    <a
                      href="#builder-network"
                      className="mt-4 inline-flex items-center font-bold text-orange-600 transition hover:text-orange-700"
                    >
                      Join the Builder Network in the meantime
                      <span aria-hidden="true" className="ml-2">
                        →
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#0F172A] p-6 text-white shadow-xl sm:p-9 lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
              HOW YOU MOVE FORWARD
            </p>

            <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              From an idea
              <span className="block text-orange-400">
                to something real.
              </span>
            </h3>

            <div className="mt-9 space-y-0">
              {stages.map((stage, index) => (
                <div
                  key={stage.number}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  {index < stages.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-5 top-12 w-px bg-slate-700"
                    />
                  )}

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-400/30 bg-orange-500/10 text-xs font-black text-orange-400">
                    {stage.number}
                  </div>

                  <div className="min-w-0 pt-1">
                    <h4 className="text-lg font-bold">
                      {stage.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
              <p className="text-sm font-bold text-orange-400">
                THE POINT IS PROGRESS.
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                Your project doesn't have to change the world. It needs a
                starting point, consistent effort, and a real attempt to
                finish something.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}