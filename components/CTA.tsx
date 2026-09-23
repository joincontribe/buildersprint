export default function CTA() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[2rem] bg-[#0F172A] px-6 py-14 text-center text-white shadow-2xl sm:px-10 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              YOUR NEXT STEP
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Don't wait for the
              <span className="block text-orange-400">
                next big thing.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">
              Join the Builder Network. Meet people who build. Take part in
              something this week. Find your next project, teammate, skill, or
              opportunity.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#builder-network"
                className="inline-flex rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl"
              >
                Join the Builder Network →
              </a>

              <a
                href="#weekly-activities"
                className="inline-flex rounded-xl border border-slate-600 bg-slate-900/50 px-8 py-4 font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
              >
                See Weekly Activities
              </a>
            </div>

            <div className="mx-auto mt-12 max-w-2xl border-t border-slate-700 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                BUILDER SPRINT — COHORT 2
              </p>

              <p className="mt-3 text-xl font-bold text-white md:text-2xl">
                Registrations open November 1, 2026.
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Until then, keep building with the community.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-bold text-slate-900">
            Build.
            <span className="mx-2 text-orange-500">Participate.</span>
            Grow.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            The sprint ends. The building doesn't.
          </p>
        </div>
      </div>
    </section>
  );
}