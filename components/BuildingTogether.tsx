const principles = [
  {
    number: "01",
    title: "Build your way",
    description:
      "Choose a project that interests you. You can work independently or collaborate with others.",
  },
  {
    number: "02",
    title: "Share your progress",
    description:
      "Show what you're making, explain what you've learned, or ask questions when you get stuck.",
  },
  {
    number: "03",
    title: "Learn together",
    description:
      "Discover what other builders are working on, exchange ideas, and learn from different approaches.",
  },
];

export default function BuildingTogether() {
  return (
    <section
      id="building-together"
      className="overflow-hidden bg-[#0F172A] px-6 py-24 text-white sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              BUILDING TOGETHER
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight md:text-6xl">
              Don't just
              <span className="block text-orange-400">
                build alone.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Your project is yours to build. But the journey doesn't have to
              happen in isolation.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              CONTRIBE encourages builders to share progress, exchange ideas,
              ask questions, and connect with people who are building their
              own things.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/70 p-6">
              <p className="text-lg font-black">
                Building in public is encouraged.
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                You can share your work publicly on social media or share it
                within the community. Choose the approach that works for you.
                Public posting is not required.
              </p>
            </div>

            <a
              href="#builder-network"
              className="mt-8 inline-flex items-center rounded-xl bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Meet Other Builders
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>
          </div>

          <div className="space-y-4">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6 transition hover:border-orange-400/50 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-sm font-black text-orange-400">
                    {principle.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-black sm:text-2xl">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <div className="rounded-3xl bg-orange-500 p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-100">
                REMEMBER
              </p>

              <p className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                The sprint ends.
                <span className="block">The building doesn't.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}