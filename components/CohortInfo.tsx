export default function CohortInfo() {
  return (
    <section
      id="cohort-two"
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            WHAT'S NEXT
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            We're building the
            <span className="block text-orange-500">
              next chapter.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Cohort 1 gave us our first group of builders. Now the community
            keeps moving while we prepare for the next sprint.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-4xl">⚡</div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              HAPPENING NOW
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              Weekly Activities
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Small challenges, activities, and opportunities designed to
              keep the community participating every week.
            </p>

            <a
              href="#weekly-activities"
              className="mt-6 inline-flex font-semibold text-orange-500 transition hover:text-orange-600"
            >
              Explore Activities →
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-4xl">💬</div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              OPEN NOW
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              Builder Network
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Join the community, meet builders, find teammates, stay updated,
              and participate between major CONTRIBE initiatives.
            </p>

            <a
              href="#builder-network"
              className="mt-6 inline-flex font-semibold text-orange-500 transition hover:text-orange-600"
            >
              Join the Network →
            </a>
          </div>

          <div className="rounded-3xl border-2 border-orange-500 bg-white p-8 shadow-lg">
            <div className="text-4xl">🚀</div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              COMING NEXT
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              Builder Sprint — Cohort 2
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              The next 14-day building experience is coming soon.
            </p>

            <div className="mt-6 rounded-2xl bg-orange-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                REGISTRATIONS OPEN
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                November 1, 2026
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-[#0F172A] px-6 py-10 text-center text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            UNTIL THEN
          </p>

          <h3 className="mt-4 text-3xl font-bold md:text-4xl">
            Don't wait for Cohort 2 to start building.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Join the Builder Network, take part in weekly activities, meet
            other builders, and keep moving before the next sprint begins.
          </p>

          <a
            href="#builder-network"
            className="mt-8 inline-flex rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Join the Builder Network →
          </a>
        </div>
      </div>
    </section>
  );
}