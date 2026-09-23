const steps = [
  {
    number: "01",
    title: "See It",
    description:
      "A new activity, opportunity, challenge, or community moment drops.",
  },
  {
    number: "02",
    title: "Pick One",
    description:
      "Choose something that interests you. You don't have to do everything.",
  },
  {
    number: "03",
    title: "Do It",
    description:
      "Build, learn, create, connect, or take on the challenge. Start small and make it happen.",
  },
  {
    number: "04",
    title: "Share It",
    description:
      "Share what you made, learned, discovered, or experienced with the community.",
  },
  {
    number: "05",
    title: "Keep Going",
    description:
      "Come back the next week, find something new, and keep your momentum alive.",
  },
];

export default function BuilderNetworkHowItWorks() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            THE LOOP
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            One community.
            <span className="block text-orange-500">
              Every week.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The Builder Network is designed to make participation simple.
            You don't need a huge goal every week. You just need a reason to
            take one step forward.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-orange-500">
                  {step.number}
                </span>

                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden text-slate-300 md:block"
                  >
                    →
                  </span>
                )}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-xl font-bold text-slate-900 md:text-2xl">
            See it.
            <span className="mx-2 text-orange-500">→</span>
            Pick one.
            <span className="mx-2 text-orange-500">→</span>
            Do it.
            <span className="mx-2 text-orange-500">→</span>
            Share it.
            <span className="mx-2 text-orange-500">→</span>
            Keep going.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            That's how small actions turn into momentum.
          </p>
        </div>
      </div>
    </section>
  );
}