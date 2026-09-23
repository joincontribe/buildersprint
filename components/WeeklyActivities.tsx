const activities = [
  {
    icon: "🛠️",
    title: "Build",
    description:
      "Work on something. Start a project, improve an existing one, or finally turn that idea in your notes into something real.",
  },
  {
    icon: "🧠",
    title: "Learn",
    description:
      "Explore a skill, tool, idea, or concept that can make you a better builder.",
  },
  {
    icon: "🎨",
    title: "Create",
    description:
      "Make something worth sharing — from code and designs to content, experiments, and everything in between.",
  },
  {
    icon: "🤝",
    title: "Connect",
    description:
      "Meet another builder, start a conversation, find a teammate, or discover someone working on something interesting.",
  },
  {
    icon: "⚡",
    title: "Challenge",
    description:
      "Take on a small challenge that pushes you to stop consuming and actually do something.",
  },
];

export default function WeeklyActivities() {
  return (
    <section
      id="weekly-activities"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            EVERY WEEK AT CONTRIBE
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            There's always something
            <span className="block text-orange-500">
              to do.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            You shouldn't have to wait for a hackathon, sprint, or major
            initiative to start participating.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Every week, CONTRIBE brings something new to the community —
            small enough to start, meaningful enough to matter.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-200 hover:-translate-y-1 hover:border-orange-300 hover:bg-white hover:shadow-lg"
            >
              <div className="text-4xl transition-transform duration-200 group-hover:scale-110">
                {activity.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {activity.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-[#0F172A] px-6 py-12 text-center text-white shadow-xl sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            THE POINT
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
            You don't need to wait for motivation.
            <span className="block text-orange-400">
              Just show up this week.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Pick one thing. Do it. Share it. Then come back next week.
            Progress doesn't have to be dramatic to be real.
          </p>

          <a
            href="#builder-network"
            className="mt-8 inline-flex rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Join the Builder Network →
          </a>

          <p className="mt-4 text-sm text-slate-400">
            New activities are shared through the CONTRIBE Discord and
            WhatsApp Channel.
          </p>
        </div>
      </div>
    </section>
  );
}