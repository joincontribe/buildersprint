const responsibilities = [
  {
    emoji: "🏫",
    title: "Represent CONTRIBE",
    description:
      "Be the official CONTRIBE Ambassador for your institution and represent the community positively.",
  },
  {
    emoji: "📢",
    title: "Share Opportunities",
    description:
      "Help fellow students discover CONTRIBE initiatives and encourage participation.",
  },
  {
    emoji: "🤝",
    title: "Support Community Growth",
    description:
      "Welcome new members, answer basic questions, and help grow an active student community.",
  },
  {
    emoji: "💬",
    title: "Provide Feedback",
    description:
      "Share ideas and feedback from your institution to help improve future CONTRIBE initiatives.",
  },
  {
    emoji: "⚡",
    title: "Stay Active",
    description:
      "Contribute regularly and stay engaged with ambassador activities throughout the program.",
  },
];

export default function AmbassadorResponsibilities() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-[#FF7A00]">
            Responsibilities
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            What You'll Do
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The role is simple—help more students discover opportunities while
            representing CONTRIBE at your institution.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {responsibilities.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{item.emoji}</div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
      }
