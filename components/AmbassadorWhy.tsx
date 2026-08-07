export default function AmbassadorWhy() {
  const reasons = [
    {
      emoji: "🌍",
      title: "Represent Your Institution",
      description:
        "Become the official CONTRIBE Ambassador for your school, college, or university.",
    },
    {
      emoji: "🤝",
      title: "Connect With Student Leaders",
      description:
        "Build meaningful connections with ambassadors from institutions across the country.",
    },
    {
      emoji: "🚀",
      title: "Build Leadership Experience",
      description:
        "Strengthen your communication, collaboration, and leadership through real initiatives.",
    },
    {
      emoji: "💡",
      title: "Create Opportunities",
      description:
        "Help more students discover opportunities to build, participate, and grow.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-[#FF7A00]">
            Why Become an Ambassador?
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            More than a title.
            <span className="text-[#FF7A00]"> Make an impact.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            As a CONTRIBE Ambassador, you'll represent your institution while
            helping more students discover meaningful opportunities.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{reason.emoji}</div>

              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                {reason.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
        }
