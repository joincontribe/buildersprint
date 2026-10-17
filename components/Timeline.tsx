import { BUILDER_SPRINT } from "@/lib/buildersprint";

const phases = [
  {
    period: "DAYS 01–03",
    title: "Find your direction",
    description:
      "Choose a problem or idea and decide what you want to make progress on during the sprint.",
    number: "01",
  },
  {
    period: "DAYS 04–06",
    title: "Plan the first version",
    description:
      "Break the project into manageable tasks and decide what you can realistically complete.",
    number: "02",
  },
  {
    period: "DAYS 07–10",
    title: "Build and iterate",
    description:
      "Make consistent progress, work through challenges, and refine the project as you go.",
    number: "03",
  },
  {
    period: "DAYS 11–14",
    title: "Finish and submit",
    description:
      "Prepare your project, document what you've built, and submit it according to the sprint requirements.",
    number: "04",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="scroll-mt-24 bg-slate-50 px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            THE 14-DAY JOURNEY
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
            A clear direction.
            <span className="block text-orange-500">
              Room to build.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The sprint gives you a structure to work within, but your project
            and your progress are your own.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black tracking-[0.18em] text-orange-500">
                  {phase.period}
                </span>

                <span className="text-2xl font-black text-slate-200">
                  {phase.number}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-black leading-tight text-slate-950">
                {phase.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {phase.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-9">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                ONBOARDING
              </p>

              <p className="mt-3 text-xl font-black text-slate-950">
                {BUILDER_SPRINT.onboardingDateLabel}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Prepare for the sprint.
              </p>
            </div>

            <div className="md:border-l md:border-slate-200 md:pl-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                SPRINT PERIOD
              </p>

              <p className="mt-3 text-xl font-black text-slate-950">
                {BUILDER_SPRINT.sprintDateLabel}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fourteen days of building.
              </p>
            </div>

            <div className="md:border-l md:border-slate-200 md:pl-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                THE OBJECTIVE
              </p>

              <p className="mt-3 text-xl font-black text-slate-950">
                Make real progress.
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Finish with work you can show.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );  
}