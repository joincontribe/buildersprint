const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Complete the ambassador application form in just a few minutes.",
  },
  {
    number: "02",
    title: "Review",
    description:
      "Every application is carefully reviewed by the CONTRIBE team.",
  },
  {
    number: "03",
    title: "Get Notified",
    description:
      "Selected applicants will receive an email with the next steps.",
  },
];

export default function AmbassadorProcess() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-[#FF7A00]">
            How It Works
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Three Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Becoming a CONTRIBE Ambassador is simple.
          </p>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 text-5xl font-bold text-[#FF7A00]/20">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
              }
