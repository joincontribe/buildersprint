export default function Timeline() {
      const days = [
          {
                title: "Day 1–3",
                      description: "Find a problem worth solving and validate your idea."
                          },
                              {
                                    title: "Day 4–6",
                                          description: "Plan your MVP and break it into small executable tasks."
                                              },
                                                  {
                                                        title: "Day 7–10",
                                                              description: "Build consistently with support from the community."
                                                                  },
                                                                      {
                                                                            title: "Day 11–14",
                                                                                  description: "Polish, ship your project, and showcase your work."
                                                                                      }
                                                                                        ];

                                                                                          return (
                                                                                              <section
                                                                                                    id="timeline"
                                                                                                          className="bg-slate-50 py-24 px-6"
                                                                                                              >
                                                                                                                    <div className="mx-auto max-w-6xl">
                                                                                                                            <div className="text-center">
                                                                                                                                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                                                                                                                                                  14-DAY JOURNEY
                                                                                                                                                            </p>

                                                                                                                                                                      <h2 className="mt-4 text-4xl font-bold text-slate-900">
                                                                                                                                                                                  What happens during the sprint?
                                                                                                                                                                                            </h2>
                                                                                                                                                                                                    </div>

                                                                                                                                                                                                            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                                                                                                                                                                                                      {days.map((day) => (
                                                                                                                                                                                                                                  <div
                                                                                                                                                                                                                                                key={day.title}
                                                                                                                                                                                                                                                              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
                                                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                                                        <h3 className="text-xl font-bold text-orange-500">
                                                                                                                                                                                                                                                                                                        {day.title}
                                                                                                                                                                                                                                                                                                                      </h3>

                                                                                                                                                                                                                                                                                                                                    <p className="mt-4 leading-7 text-slate-600">
                                                                                                                                                                                                                                                                                                                                                    {day.description}
                                                                                                                                                                                                                                                                                                                                                                  </p>
                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                          </section>
                                                                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                                                            }