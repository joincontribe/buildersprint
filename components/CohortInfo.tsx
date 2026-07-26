export default function CohortInfo() {
      const timeline = [
          {
                title: "Registrations",
                      date: "1–31 August",
                            description: "Submit your registration before seats fill."
                                },
                                    {
                                          title: "Onboarding",
                                                date: "1–6 September",
                                                      description: "Meet the community, set your goals, and prepare to build.",
                                                          },
                                                              {
                                                                    title: "Builder Sprint",
                                                                          date: "7–20 September",
                                                                                description: "Build consistently for 14 days with accountability.",
                                                                                    },
                                                                                        {
                                                                                              title: "Demo Day",
                                                                                                    date: "After Sprint",
                                                                                                          description: "Showcase your project and become part of the Builder Network.",
                                                                                                              },
                                                                                                                ];

                                                                                                                  return (
                                                                                                                      <section className="bg-white px-6 py-24">
                                                                                                                            <div className="mx-auto max-w-6xl">
                                                                                                                                    <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                                                                                                                                              FOUNDING COHORT
                                                                                                                                                      </p>

                                                                                                                                                              <h2 className="mt-4 text-center text-4xl font-bold text-slate-900">
                                                                                                                                                                        Your Builder Sprint journey.
                                                                                                                                                                                </h2>

                                                                                                                                                                                        <div className="mt-14 grid gap-6 md:grid-cols-4">
                                                                                                                                                                                                  {timeline.map((step) => (
                                                                                                                                                                                                              <div
                                                                                                                                                                                                                            key={step.title}
                                                                                                                                                                                                                                          className="rounded-2xl border border-slate-200 p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                                                                                                                                                                                                                                      >
                                                                                                                                                                                                                                                                    <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                                                                                                                                                                                                                                                                                    {step.title}
                                                                                                                                                                                                                                                                                                  </p>

                                                                                                                                                                                                                                                                                                                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                                                                                                                                                                                                                                                                                                                                {step.date}
                                                                                                                                                                                                                                                                                                                                              </h3>

                                                                                                                                                                                                                                                                                                                                                            <p className="mt-4 leading-7 text-slate-600">
                                                                                                                                                                                                                                                                                                                                                                            {step.description}
                                                                                                                                                                                                                                                                                                                                                                                          </p>
                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                  </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                                                    }