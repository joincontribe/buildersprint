export default function BecomeAmbassador() {
  return (
    <section
      id="ambassador"
      className="bg-[#0F172A] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300">
              CONTRIBE AMBASSADOR PROGRAM
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Don't just participate.
              <span className="block text-orange-400">
                Help create opportunities.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              CONTRIBE Ambassadors help bring opportunities, activities, and
              initiatives to their institutions while building their own
              leadership journey.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
                <div className="text-2xl">🏫</div>

                <p className="mt-3 text-sm font-semibold text-slate-200">
                  Represent
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Bring CONTRIBE closer to your institution.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
                <div className="text-2xl">⚡</div>

                <p className="mt-3 text-sm font-semibold text-slate-200">
                  Activate
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Help people discover and participate in opportunities.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
                <div className="text-2xl">🌱</div>

                <p className="mt-3 text-sm font-semibold text-slate-200">
                  Grow
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Develop your own leadership through action.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-8 shadow-2xl sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              FOR PEOPLE WHO WANT TO LEAD
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Become a CONTRIBE Ambassador.
            </h3>

            <p className="mt-5 leading-7 text-slate-300">
              If you want to create opportunities instead of simply waiting
              for them, the Ambassador Program gives you a way to help build
              CONTRIBE where you are.
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-300">
              <p>✓ Help others discover meaningful opportunities</p>
              <p>✓ Support CONTRIBE activities in your institution</p>
              <p>✓ Become part of the wider CONTRIBE community</p>
            </div>

            <a
              href="/ambassadors"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 sm:w-auto"
            >
              Become an Ambassador →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}