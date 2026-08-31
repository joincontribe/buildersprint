import RegistrationCountdown from "@/components/RegistrationCountdown";
import { BUILDER_SPRINT } from "@/lib/buildersprint";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen items-center justify-center bg-white px-6"
    >
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
          ✨ Founding Cohort • Now Accepting Registrations
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          CONTRIBE PRESENTS
        </p>

        <h1 className="text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
          Builder Sprint
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Build and ship your first real project in just{" "}
          <span className="font-semibold text-slate-900">
            14 days
          </span>
          <br className="hidden md:block" />. A free execution
          sprint for young builders who are ready to stop
          planning and start shipping—with accountability,
          community, and real progress.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSecAUHEl8aOmYzpKMsver0eBMEmyAPaL76kgug1_ZzCFoUICQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-orange-500 px-12 py-4.5 text-xl font-bold text-white shadow-lg transition duration-200 hover:scale-105 hover:bg-orange-600"
          >
            🚀 Register Now
          </a>

          <a
            href="https://linktr.ee/joincontribe"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-300 bg-white px-4.5 py-3.5 font-semibold text-slate-700 transition duration-200 hover:bg-slate-100"
          >
            Learn About CONTRIBE
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Registrations close on{" "}
          <span className="font-semibold text-slate-900">
            {BUILDER_SPRINT.registrationDeadlineLabel}
          </span>{" "}
          at{" "}
          <span className="font-semibold text-slate-900">
            11:59 PM IST
          </span>{" "}
          or when all{" "}
          <span className="font-semibold text-orange-500">
            100 seats
          </span>{" "}
          are filled.
        </p>

        <RegistrationCountdown />

        <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
          <span>🚀 14-Day Sprint</span>
          <span>👥 100 Builders</span>
          <span>🤝 Community Support</span>
          <span>📜 Certificate of Completion</span>
        </div>
      </div>
    </section>
  );
}