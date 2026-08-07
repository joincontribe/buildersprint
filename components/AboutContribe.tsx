export default function AboutContribe() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-[#FF7A00]">
            About CONTRIBE
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Build.
            <span className="text-[#FF7A00]"> Participate.</span>
            Grow.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            CONTRIBE is a community where students move beyond simply consuming
            opportunities. We encourage them to participate, build meaningful
            projects, and grow alongside others who are passionate about making
            an impact.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="mb-4 text-4xl">🚀</div>

            <h3 className="text-xl font-semibold text-gray-900">
              Build
            </h3>

            <p className="mt-3 text-gray-600">
              Create projects, solve problems, and turn ideas into action.
            </p>

          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="mb-4 text-4xl">🤝</div>

            <h3 className="text-xl font-semibold text-gray-900">
              Participate
            </h3>

            <p className="mt-3 text-gray-600">
              Take part in initiatives, collaborate with others, and contribute
              to a growing student community.
            </p>

          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="mb-4 text-4xl">🌱</div>

            <h3 className="text-xl font-semibold text-gray-900">
              Grow
            </h3>

            <p className="mt-3 text-gray-600">
              Develop leadership, gain experience, and unlock new opportunities
              through continuous learning.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
      }
