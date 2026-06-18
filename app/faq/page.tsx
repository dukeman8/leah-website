import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about wills, probate, trusts and lasting powers of attorney.",
};

const faqSections = [
  {
    title: "Wills & Estate Planning",
    faqs: [
      {
        question: "Do I need a Will?",
        answer:
          "Yes. A Will ensures your wishes are followed and your assets are distributed as you intend. Without one, your estate will be divided according to the law, which may not reflect your personal circumstances.",
      },
      {
        question: "How often should I review my Will?",
        answer:
          "It is generally advisable to review your Will every few years, or sooner if your circumstances change — for example, following marriage, divorce, the birth of children or changes to your financial position.",
      },
      {
        question: "Can I prepare my own Will?",
        answer:
          "While it is possible, a professionally prepared Will ensures your wishes are clearly documented and helps avoid complications, disputes or unintended tax consequences.",
      },
    ],
  },
  {
    title: "Probate & Estate Administration",
    faqs: [
      {
        question: "What is probate?",
        answer:
          "Probate is the legal process of administering a person's estate after they have passed away, including obtaining authority to deal with assets, settling liabilities and distributing the estate to beneficiaries.",
      },
      {
        question: "How long does estate administration take?",
        answer:
          "The timeframe varies depending on the complexity of the estate, including factors such as the number of assets, whether inheritance tax is payable, and whether there are any complications.",
      },
      {
        question: "Do I have to deal with probate myself?",
        answer:
          "No. Many clients choose to instruct a solicitor to handle the process on their behalf, particularly where the estate is complex or includes inheritance tax, business or agricultural assets.",
      },
      {
        question: "Can you provide a fixed fee?",
        answer:
          "Yes. We are happy to provide a fixed fee for estate administration services following an initial, no-obligation meeting to discuss the details of the estate.",
      },
    ],
  },
  {
    title: "Powers of Attorney",
    faqs: [
      {
        question: "What is a Lasting Power of Attorney (LPA)?",
        answer:
          "An LPA is a legal document that allows you to appoint someone you trust to make decisions on your behalf if you become unable to do so.",
      },
      {
        question: "What types of LPA are there?",
        answer:
          "There are two types: Property and Financial Affairs, and Health and Welfare. Each covers different aspects of decision-making.",
      },
      {
        question: "What happens if I don't have an LPA?",
        answer:
          "If you lose capacity without an LPA in place, your family may need to apply to the Court of Protection to obtain authority to act on your behalf, which can be a longer and more complex process.",
      },
      {
        question: "What is the Court of Protection?",
        answer:
          "The Court of Protection deals with decisions or appointments on behalf of individuals who lack mental capacity, including appointing someone to manage their affairs where no LPA exists.",
      },
    ],
  },
  {
    title: "Trusts",
    faqs: [
      {
        question: "What is a trust?",
        answer:
          "A trust is a legal arrangement where assets are held on behalf of beneficiaries, often used to protect wealth, provide for family members and assist with long-term planning.",
      },
      {
        question: "Why might I need a trust?",
        answer:
          "Trusts can be used for a variety of reasons, including asset protection, inheritance tax planning, and ensuring funds are managed appropriately for future generations.",
      },
      {
        question: "Are trusts only for high-value estates?",
        answer:
          "No. Trusts can be appropriate in a range of circumstances, depending on your objectives and family situation.",
      },
    ],
  },
  {
    title: "General",
    faqs: [
      {
        question: "How do I get started?",
        answer:
          "The first step is an initial meeting to discuss your circumstances and objectives. From there, we will guide you through the options available and recommend the best course of action.",
      },
      {
        question: "Do you work with other advisers?",
        answer:
          "Yes. We often work alongside financial advisers, accountants and other professionals to ensure your legal and financial planning is fully aligned.",
      },
      {
        question: "Where are you based and how do meetings work?",
        answer:
          "We can meet in person or remotely, depending on your preference, making the process as convenient as possible.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="bg-[#f6f1e7] text-[#1f1f1f]">
      {/* HERO */}
      <section className="bg-[#161c19] text-[#f5f0e6]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            FAQs
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight max-w-4xl">
            Frequently asked questions
          </h1>

          <p className="mt-6 text-lg text-[#b9b2a6] max-w-3xl leading-relaxed">
            Clear answers to common questions about wills, probate, trusts and
            lasting powers of attorney.
          </p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="bg-[#f6f1e7]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="space-y-16">
            {faqSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1f1f1f] mb-8">
                  {section.title}
                </h2>

                <div className="space-y-5">
                  {section.faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="rounded-xl border border-[#d8d2c7] bg-[#fffaf0] p-6"
                    >
                      <h3 className="text-xl font-semibold tracking-tight text-[#1f1f1f]">
                        {faq.question}
                      </h3>

                      <p className="mt-4 leading-relaxed text-[#5f5a52]">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}