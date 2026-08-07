export default function BecomeAmbassador() {
  return (
    <section className="bg-[#0F172A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
              CONTRIBE Ambassador Program
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Want to create opportunities,
              <span className="text-[#FF7A00]">
                {" "}not just join them?
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Become the official CONTRIBE Ambassador for your institution and
              help students discover meaningful opportunities while building
              your own leadership journey.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-300">
              <span>🏫 One Ambassador Per Institution</span>
              <span>🏅 Official Certificate</span>
              <span>🆔 CONTRIBE Member ID</span>
            </div>

          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/50 p-10">

            <h3 className="text-2xl font-semibold">
              Become a Founding Ambassador
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              We're selecting only <strong>25 Founding CONTRIBE Ambassadors</strong>,
              with one representative from each institution.
            </p>

            <a
              href="/ambassadors"
              className="mt-8 inline-flex rounded-xl bg-[#FF7A00] px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-orange-600"
            >
              Learn More
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
