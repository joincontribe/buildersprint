export default function WhoIsThisFor() {
      const audience = [
          {
                title: "School Students",
                      description:
                              "Build something beyond textbooks and start creating real-world projects.",
                                  },
                                      {
                                            title: "College Students",
                                                  description:
                                                          "Prepare for hackathons, internships, startups, or simply become a better builder.",
                                                              },
                                                                  {
                                                                        title: "Aspiring Founders",
                                                                              description:
                                                                                      "You've had ideas for months. Now it's time to finally build one.",
                                                                                          },
                                                                                              {
                                                                                                    title: "Anyone Ready to Start",
                                                                                                          description:
                                                                                                                  "No experience required. Curiosity, consistency, and willingness to learn are enough.",
                                                                                                                      },
                                                                                                                        ];

                                                                                                                          return (
                                                                                                                              <section className="bg-slate-50 px-6 py-24">
                                                                                                                                    <div className="mx-auto max-w-6xl">
                                                                                                                                            <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                                                                                                                                                      WHO IS THIS FOR?
                                                                                                                                                              </p>

                                                                                                                                                                      <h2 className="mt-4 text-center text-4xl font-bold text-slate-900">
                                                                                                                                                                                Built for people who want to build.
                                                                                                                                                                                        </h2>

                                                                                                                                                                                                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600">
                                                                                                                                                                                                          Whether you're just getting started or already have an idea, Builder
                                                                                                                                                                                                                    Sprint gives you the structure and community to make meaningful
                                                                                                                                                                                                                              progress.
                                                                                                                                                                                                                                      </p>

                                                                                                                                                                                                                                              <div className="mt-14 grid gap-6 md:grid-cols-2">
                                                                                                                                                                                                                                                        {audience.map((item) => (
                                                                                                                                                                                                                                                                    <div
                                                                                                                                                                                                                                                                                  key={item.title}
                                                                                                                                                                                                                                                                                                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                                                                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                                                                                          <h3 className="text-xl font-bold text-slate-900">
                                                                                                                                                                                                                                                                                                                                          {item.title}
                                                                                                                                                                                                                                                                                                                                                        </h3>

                                                                                                                                                                                                                                                                                                                                                                      <p className="mt-3 leading-7 text-slate-600">
                                                                                                                                                                                                                                                                                                                                                                                      {item.description}
                                                                                                                                                                                                                                                                                                                                                                                                    </p>
                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                          ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                            </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                                                                                                              }