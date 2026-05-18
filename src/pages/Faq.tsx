import React from "react";
import { Helmet } from "react-helmet";
import { sections } from "../data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sections.en.faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const Faq: React.FC = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>FYJC FAQ 2026 | Admission Questions Answered</title>
        <meta
          name="description"
          content="FYJC FAQ 2026 for Maharashtra admission. Answers on merit list, documents, Round 0, quota seats, and Mumbai FYJC admission."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">FYJC Admission FAQ 2026</h1>
        <p className="mt-4 text-slate-700 leading-7">
          Frequently asked questions for FYJC Admission 2026 in Maharashtra. This FAQ covers merit list timing, document uploads, quota policies, and Round 0 admission details.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        {sections.en.faq.map((item) => (
          <article key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{item.q}</h2>
            <p className="mt-3 text-slate-700 leading-7">{item.a}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Faq;
