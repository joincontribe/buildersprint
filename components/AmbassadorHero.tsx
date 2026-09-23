export default function AmbassadorHero() {
  return (
    <section className="bg-[#0F172A] text-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* BADGE */}
        <div className="mb-6 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
          🚀 Applications Now Open
        </div>

        {/* HEADING */}
        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Become a{" "}
          <span className="text-[#FF7A00]">CONTRIBE Ambassador</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
          Represent your institution, help students discover opportunities,
          and grow with a community of young builders.
        </p>

        {/* STATS */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-300">
          <span>25 Ambassadors</span>

          <span aria-hidden="true" className="hidden text-slate-600 md:block">
            •
          </span>

          <span>25 Institutions</span>

          <span aria-hidden="true" className="hidden text-slate-600 md:block">
            •
          </span>

          <span>One Representative Per Institution</span>
        </div>

        {/* BUTTONS */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScnbSyoDP3ocksoJ7qIUY8I4W5QxH4Z2ctuOwU2DUNDbvOiuw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#FF7A00] px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-orange-600"
          >
            Apply Now
          </a>

          <a
            href="#about"
            className="rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition hover:border-[#FF7A00] hover:text-[#FF7A00]"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}