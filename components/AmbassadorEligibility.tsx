const eligibility = [
  {
    emoji: "📚",
    title: "Class 9 or Above",
    description:
      "Students currently studying in Class 9, Class 10, Class 11, Class 12, Diploma, Undergraduate, or Postgraduate programs can apply.",
  },
  {
    emoji: "🏫",
    title: "Any Institution",
    description:
      "Applications are welcome from schools, colleges, and universities.",
  },
  {
    emoji: "🌍",
    title: "One Ambassador",
    description:
      "Only one CONTRIBE Ambassador will be selected to represent each institution.",
  },
  {
    emoji: "❤️",
    title: "Passion to Contribute",
    description:
      "You don't need previous leadership experience—just the willingness to build, participate, and grow.",
  },
];

export default function AmbassadorEligibility() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-[#FF7A00]">
            Eligibility
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Who Can Apply?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            If you're a student who wants to create opportunities instead of
            waiting for them, we'd love to hear from you.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {eligibility.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{item.emoji}</div>

              <h3 className="mt-5 text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
