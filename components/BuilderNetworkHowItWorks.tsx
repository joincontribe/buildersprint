const steps = [
  {
    number: "01",
    title: "Join",
    description:
      "Enter the CONTRIBE community and discover what other builders are working on.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Meet people with different interests, exchange ideas, and start conversations.",
    icon: "↔",
  },
  {
    number: "03",
    title: "Participate",
    description:
      "Take part in weekly activities, challenges, discussions, and community initiatives.",
    icon: "+",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Turn what interests you into action, share your progress, and keep improving.",
    icon: "↗",
  },
];

export default function BuilderNetworkHowItWorks() {
  return (
    <section
      id="community-journey"
      className="bg-slate-50 px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            HOW THE COMMUNITY WORKS
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
            Four steps.
            <span className="block text-orange-500">
              Keep moving.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            You don't need a perfect plan to get started. Join the community,
            meet people, participate in something, and take your next step.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-black tracking-[0.2em] text-orange-500">
                  {step.number}
                </span>

                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-2xl font-bold text-orange-500"
                >
                  {step.icon}
                </span>
              </div>

              <h3 className="mt-9 text-2xl font-black text-slate-950">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute bottom-7 right-7 hidden text-xl font-bold text-orange-200 lg:block"
                >
                  →
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#0F172A] px-6 py-10 text-center text-white sm:px-10 sm:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
            THERE'S NO PERFECT TIME TO START
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight md:text-4xl">
            You don't have to do everything.
            <span className="block text-orange-400">
              Just take the next step.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Participate at your own pace. Share your work if you want to.
            Learn from other builders and return whenever you're ready for
            another step.
          </p>

          <a
            href="#builder-network"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Find Your Community
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}