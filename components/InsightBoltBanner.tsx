import Image from "next/image";

export default function InsightBoltBanner() {
  return (
    <section
      aria-label="CONTRIBE and InsightBolt partnership"
      className="bg-white px-4 py-8 sm:px-6 sm:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <a
          href="#insightbolt-partnership"
          aria-label="Learn about the CONTRIBE and InsightBolt partnership"
          className="group relative block overflow-hidden rounded-2xl bg-[#0F172A] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400"
        >
          <Image
            src="/images/hero-insightbolt-offer2.webp"
            alt="CONTRIBE and InsightBolt partnership banner for eligible Builder Sprint Cohort 2 participants"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.01]"
          />

          <span className="sr-only">
            Explore the partnership details and eligibility requirements.
          </span>
        </a>
      </div>
    </section>
  );
}