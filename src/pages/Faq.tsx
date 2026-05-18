import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Lang, sections } from "../data";

type FaqProps = {
  lang: Lang;
};

const Faq: React.FC<FaqProps> = ({ lang }) => {
  const section = sections[lang];
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: section.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const filteredFaq = useMemo(
    () =>
      section.faq.filter((item) =>
        `${item.q} ${item.a}`.toLowerCase().includes(search.toLowerCase())
      ),
    [search, section.faq]
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <Helmet>
        <title>{lang === "mr" ? "FYJC FAQ 2026" : "FYJC FAQ 2026"}</title>
        <meta
          name="description"
          content={
            lang === "mr"
              ? "FYJC प्रवेशाबद्दल सामान्य प्रश्न आणि उत्तरे. मेरिट लिस्ट, कागदपत्रे, Round 0 आणि कोटा प्रक्रिया."
              : "FYJC admission FAQ: merit list, documents, Round 0, quota process, and college admission."}
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
        <h1 className="text-3xl font-bold text-slate-900">
          {lang === "mr" ? "FYJC प्रवेश FAQ 2026" : "FYJC Admission FAQ 2026"}
        </h1>
        <p className="mt-4 text-slate-700 leading-8">
          {lang === "mr"
            ? "FYJC प्रवेशासंबंधी सामान्य प्रश्न आणि ते कसे सोडवावे हे येथे वाचा."
            : "Read the frequently asked questions about FYJC admission and how to resolve them."}
        </p>
        <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={lang === "mr" ? "FAQ शोधा" : "Search FAQs"}
            className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          />
        </div>
      </section>

      <section className="space-y-4">
        {filteredFaq.length === 0 ? (
          <div className="rounded-[2rem] border border-rose-200 bg-rose-50 p-6 text-slate-900 shadow-sm">
            {lang === "mr"
              ? "तुम्ही शोधलेले प्रश्न सापडले नाही. कृपया शोध शब्द बदला किंवा बहुतेक विचारलेले प्रश्न पहा."
              : "No questions matched your search. Try another term or review the top questions."}
          </div>
        ) : (
          filteredFaq.map((item, index) => (
            <article
              key={item.q}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 shadow-glow"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-slate-900">{item.q}</span>
                <span className="text-2xl text-slate-500">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="border-t border-slate-200 bg-slate-50 px-6 py-5 text-slate-700 leading-7">
                  {item.a}
                </div>
              )}
            </article>
          ))
        )}
      </section>
    </div>
  );
};

export default Faq;
