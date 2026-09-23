    const benefits = [
  {
    title: "Keep Momentum",
    description:
      "Weekly activities give you a reason to keep making progress instead of disappearing between big initiatives.",
    icon: "⚡",
  },
  {
    title: "Find Your People",
    description:
      "Meet builders, creators, learners, and potential teammates who are interested in actually doing things.",
    icon: "🤝",
  },
  {
    title: "Turn Ideas Into Action",
    description:
      "Move an idea out of your notes and into the real world through small actions, projects, and challenges.",
    icon: "💡",
  },
  {
    title: "Build Your Portfolio",
    description:
      "Create things you can actually show — projects, experiments, challenges, collaborations, and shipped work.",
    icon: "🚀",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            WHY BE PART OF IT?
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            More than a community.
            <span className="block text-orange-500">
              A reason to keep moving.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            CONTRIBE is designed to help you move from consuming to
            participating — and from participating to building.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg sm:p-10"
            >
              <div className="text-4xl transition-transform duration-200 group-hover:scale-110">
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {benefit.title}
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-lg font-semibold text-slate-700">
            You don't have to build every day.
            <span className="text-orange-500">
              {" "}You just have to keep coming back.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              