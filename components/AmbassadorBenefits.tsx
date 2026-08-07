const benefits = [
  {
    emoji: "🏅",
    title: "Official Certificate",
    description:
      "Receive an official CONTRIBE Ambassador Certificate recognizing your contribution.",
  },
  {
    emoji: "🌟",
    title: "Founding Ambassador Recognition",
    description:
      "Be among the first 25 ambassadors and become part of CONTRIBE's founding team.",
  },
  {
    emoji: "🆔",
    title: "CONTRIBE Member ID",
    description:
      "Receive your unique CONTRIBE Member ID and become part of our growing community.",
  },
  {
    emoji: "🚀",
    title: "Priority Access",
    description:
      "Get early access to future CONTRIBE initiatives, programs, and opportunities.",
  },
  {
    emoji: "🤝",
    title: "Private Community",
    description:
      "Collaborate with ambassadors from different schools, colleges, and universities.",
  },
  {
    emoji: "💡",
    title: "Shape the Future",
    description:
      "Share ideas and help improve future CONTRIBE initiatives and experiences.",
  },
];

export default function AmbassadorBenefits() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-[#FF7A00]">
            Benefits
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Why you'll love being a
            <span className="text-[#FF7A00]"> CONTRIBE Ambassador</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            More than a title—gain recognition, connect with like-minded
            students, and help build something meaningful.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{benefit.emoji}</div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
              }
