const DISCORD_URL = "https://discord.gg/GZ95dR5t9K";
const WHATSAPP_URL = "https://whatsapp.com/channel/0029Vb8HjKX7YSd84jIXVi2D";

export default function BuilderNetwork() {
  return (
    <section
      id="builder-network"
      className="bg-[#0F172A] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            THE BUILDER NETWORK
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            The sprint ends.
            <span className="block text-orange-400">
              The network stays.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            CONTRIBE initiatives happen throughout the year. But you shouldn't
            have to wait for the next one to participate.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            The Builder Network is our always-on community for people who want
            to build, participate, learn, collaborate, find teammates, and
            keep moving.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8 transition hover:-translate-y-1 hover:border-orange-400/50">
            <div className="text-4xl">💬</div>

            <h3 className="mt-6 text-2xl font-bold">
              Connect
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Meet builders, creators, learners, and people who are actually
              interested in making things happen.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8 transition hover:-translate-y-1 hover:border-orange-400/50">
            <div className="text-4xl">⚡</div>

            <h3 className="mt-6 text-2xl font-bold">
              Participate
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Take part in weekly activities, community challenges, discussions,
              and opportunities throughout the year.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8 transition hover:-translate-y-1 hover:border-orange-400/50">
            <div className="text-4xl">🚀</div>

            <h3 className="mt-6 text-2xl font-bold">
              Build
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Find teammates, work on projects, share progress, and turn ideas
              into things you can actually point to.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              YOUR TWO DOORS INTO THE NETWORK
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              Join the community. Stay in the loop.
            </h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-700 bg-white p-8 text-slate-900 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                    DISCORD
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    Build together.
                  </h3>
                </div>

                <span className="text-4xl">💬</span>
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                The deeper community space for conversations, collaboration,
                projects, teammates, questions, and builder-to-builder
                interaction.
              </p>

              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-xl bg-[#0F172A] px-7 py-3.5 font-semibold text-white transition hover:bg-slate-800"
              >
                Join Discord →
              </a>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-white p-8 text-slate-900 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                    WHATSAPP CHANNEL
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    Stay in the loop.
                  </h3>
                </div>

                <span className="text-4xl">📲</span>
              </div>

              <p className="mt-5 leading-7 text-slate-600">
                Weekly activities, announcements, opportunities, and important
                CONTRIBE updates — straight to your feed.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Join WhatsApp →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="text-lg font-semibold text-slate-300">
            Discord is where you connect.
            <span className="mx-2 text-orange-400">•</span>
            WhatsApp is where you stay in the loop.
          </p>
        </div>
      </div>
    </section>
  );
}