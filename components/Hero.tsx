export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
          ✨ CONTRIBE BUILDER NETWORK
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          BUILD. PARTICIPATE. GROW.
        </p>

        <h1 className="text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
          The sprint may be 14 days.
          <span className="block text-orange-500">
            Being a builder isn't.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
          CONTRIBE brings young builders together to build things,
          participate in meaningful activities, find people to build with,
          and keep moving long after a single initiative ends.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#builder-network"
            className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl"
          >
            Join the Builder Network
          </a>

          <a
            href="#builder-sprint"
            className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Explore Builder Sprint
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-600">
            <span>
              <strong className="text-2xl text-slate-900">11</strong>{" "}
              Participants
            </span>

            <span className="hidden text-slate-300 sm:inline">•</span>

            <span>
              <strong className="text-2xl text-slate-900">2</strong>{" "}
              Teams
            </span>

            <span className="hidden text-slate-300 sm:inline">•</span>

            <span>
              <strong className="text-2xl text-slate-900">6</strong>{" "}
              Solo Builders
            </span>

            <span className="hidden text-slate-300 sm:inline">•</span>

            <span>
              <strong className="text-2xl text-orange-500">5</strong>{" "}
              Submissions
            </span>
          </div>

          <div className="mt-6 border-t border-slate-200 pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              BUILDER SPRINT — COHORT 2
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              Registrations open November 1, 2026.
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Join the Builder Network now and stay connected until the next
              sprint begins.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-500">
          <span>💬 Meet Builders</span>
          <span>⚡ Weekly Activities</span>
          <span>🤝 Find Teammates</span>
          <span>🚀 Build & Ship</span>
        </div>
      </div>
    </section>
  );
}