import React from "react";
import { Helmet } from "react-helmet";
import { Lang, sections } from "../data";

type CutoffFilesProps = {
  lang: Lang;
};

const CutoffFiles: React.FC<CutoffFilesProps> = ({ lang }) => {
  const section = sections[lang];

  return (
    <div className="space-y-8 animate-fade-in">
      <Helmet>
        <title>{lang === "mr" ? "कटऑफ फाइल्स - FYJC 2026" : "Cutoff Files - FYJC 2026"}</title>
        <meta
          name="description"
          content={
            lang === "mr"
              ? "Round 0 आणि Maharashtra FYJC कटऑफ PDF डाउनलोड करा. प्रवेश संधी तपासण्याकरिता फाइल्स उपलब्ध आहेत."
              : "Download Round 0 and Maharashtra FYJC cutoff PDFs. Access cutoff files for admission guidance."
          }
        />
      </Helmet>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
        <div className="space-y-4">
          <p className="text-4xl font-bold text-slate-900">
            {lang === "mr" ? "कटऑफ फाइल्स" : "Cutoff Files"}
          </p>
          <p className="max-w-3xl text-slate-700 leading-8">
            {lang === "mr"
              ? "खालील PDF फाइल्स डाउनलोड करून Round 0 आणि FYJC कटऑफ माहिती तपासा. फाइल्स ऑफलाइन वाचण्यासाठीही उपलब्ध आहेत."
              : "Download the PDF files below to review Round 0 and FYJC cutoff information. Files are available for offline reference too."}
          </p>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {section.cutoffFiles.map((file) => (
          <article
            key={file.filename}
            className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-500/10 via-cyan-50 to-fuchsia-100 p-6 shadow-glow transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">{file.label}</h2>
                  <p className="mt-2 text-sm text-slate-600">{file.description}</p>
                </div>
                <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  PDF
                </span>
              </div>
              <a
                href={`/${file.filename}`}
                download={file.filename}
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-700"
              >
                {lang === "mr" ? "डाउनलोड करा" : "Download"}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow animate-card">
        <h3 className="text-2xl font-semibold text-slate-900">
          {lang === "mr" ? "महत्वाचे टीप" : "Important Tip"}
        </h3>
        <p className="mt-4 text-slate-700 leading-8">
          {lang === "mr"
            ? "कटऑफ फाइल्स तपासताना तुमच्या श्रेणी आणि कॉलेजच्या प्रवेश निकषांनुसार तुलना करा. Round 0 प्रवेश वेळेत PDF वापरणे सोयीस्कर असते."
            : "Compare cutoff files with your category and college eligibility. Using the PDF during Round 0 admission is convenient and reliable."}
        </p>
      </section>
    </div>
  );
};

export default CutoffFiles;
