                                                                                                                                                                                                                                   const people = [
  {
    icon: "💡",
    title: "The Idea Person",
    description:
      "You have ideas sitting in your notes and want to finally do something with one.",
  },
  {
    icon: "💻",
    title: "The Maker",
    description:
      "You already build — code, design, create, experiment — and want people to build alongside you.",
  },
  {
    icon: "🎨",
    title: "The Creator",
    description:
      "You create content, products, communities, or experiences and want to turn creativity into action.",
  },
  {
    icon: "🚀",
    title: "The Beginner",
    description:
      "You've never built anything serious before. You just want to start and figure things out along the way.",
  },
];

export default function WhoIsThisFor() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            FOR BUILDERS
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            You don't need to have
            <span className="block text-orange-500">
              it all figured out.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            You don't need a perfect idea, years of experience, or a fancy
            portfolio to be part of CONTRIBE.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            You just need to be willing to build, participate, learn, or take
            the next step.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((person) => (
            <div
              key={person.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
            >
              <div className="text-4xl">{person.icon}</div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {person.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {person.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-bold text-slate-900 md:text-2xl">
            If you're willing to participate,
            <span className="text-orange-500"> you're welcome here.</span>
          </p>
        </div>
      </div>
    </section>
  );
}                                                 