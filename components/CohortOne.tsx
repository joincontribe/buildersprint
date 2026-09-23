const stats = [
  {
    value: "11",
    label: "Participants",
  },
  {
    value: "2",
    label: "Teams",
  },
  {
    value: "6",
    label: "Solo Builders",
  },
  {
    value: "5",
    label: "Submissions",
  },
];

export default function CohortOne() {
  return (
    <section
      id="cohort-one"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            THE FIRST CHAPTER
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            The first sprint is
            <span className="block text-orange-500">
              in the books.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Builder Sprint Cohort 1 brought together young builders for 14
            days of turning ideas into something real.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Some built in teams. Some built solo. Different projects,
            different approaches — but one common decision:
          </p>

          <p className="mt-4 text-xl font-bold text-slate-900">
            Start building.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md sm:px-8"
            >
              <div className="text-4xl font-bold text-slate-900 sm:text-5xl">
                {stat.value}
              </div>

              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-orange-500 px-6 py-10 text-center text-white sm:px-10">
          <p className="text-2xl font-bold md:text-3xl">
            The first sprint is done.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-orange-50 md:text-lg">
            Now we're building the community around it — so the momentum
            doesn't disappear when an initiative ends.
          </p>
        </div>
      </div>
    </section>
  );
}