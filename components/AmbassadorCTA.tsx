export default function AmbassadorCTA() {
  return (
    <section className="bg-[#0F172A] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
          🚀 Applications Open
        </span>

        <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
          Ready to represent
          <span className="text-[#FF7A00]">
            {" "}your institution?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          Become one of the 25 Founding CONTRIBE Ambassadors and help more
          students discover opportunities to build, participate, and grow.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-300">

          <span>25 Ambassadors</span>

          <span>•</span>

          <span>25 Institutions</span>

          <span>•</span>

          <span>One Representative Per Institution</span>

        </div>

        <div className="mt-12">

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScnbSyoDP3ocksoJ7qIUY8I4W5QxH4Z2ctuOwU2DUNDbvOiuw/viewform?usp=header"
            className="inline-flex rounded-xl bg-[#FF7A00] px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-600"
          >
            Apply Now
          </a>

        </div>

        <p className="mt-8 text-sm text-slate-400">
          Applications are reviewed on a rolling basis.
        </p>

      </div>
    </section>
  );
}
