const faqs = [
  {
    question: "Who can apply?",
    answer:
      "Students currently studying in Class 9 or above, including school, college, diploma, and university students, are eligible to apply.",
  },
  {
    question: "Do I need previous leadership experience?",
    answer:
      "No. We're looking for students who are willing to contribute, learn, and help grow the community.",
  },
  {
    question: "Can more than one ambassador be selected from my institution?",
    answer:
      "No. Only one CONTRIBE Ambassador will represent each institution.",
  },
  {
    question: "I'm not a CONTRIBE Member yet. Can I still apply?",
    answer:
      "Absolutely. If you're not already a member, you'll automatically receive a CONTRIBE Member ID after submitting your application.",
  },
  {
    question: "How long does the ambassador role last?",
    answer:
      "Ambassador appointments are reviewed periodically and continue while ambassadors remain active and eligible to represent their institution.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Active ambassadors who successfully complete their responsibilities will receive an official CONTRIBE Ambassador Certificate.",
  },
  {
    question: "Is there any application fee?",
    answer:
      "No. Applying for and becoming a CONTRIBE Ambassador is completely free.",
  },
  {
    question: "How will I know if I'm selected?",
    answer:
      "Selected applicants will receive an email with the next steps after the review process.",
  },
];

export default function AmbassadorFAQ() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-[#FF7A00]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Have Questions?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Here are answers to some common questions.
          </p>

        </div>

        <div className="mt-16 space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
          }
