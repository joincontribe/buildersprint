export default function CTA() {
  return (
    <section className="bg-orange-500 px-6 py-24 text-center text-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold">
          Keep Building.
        </h2>

        <p className="mt-6 text-xl opacity-90">
          Builder Sprint registrations are closed, but building,
          participating, and growing never ends at CONTRIBE.
        </p>

        <p className="mt-2 text-base opacity-80">
          Something big is coming this October. Until then, take part in what
          we’re building.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/ambassadors"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-500 transition hover:bg-orange-50"
          >
            Apply for Ambassador
          </a>

          <a
            href="https://www.instagram.com/joincontribe?igsh=MTU3M3h5MG91NnZuZw=="
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-orange-600"
          >
            Follow Builder Sprint Progress
          </a>
        </div>
      </div>
    </section>
  );
}