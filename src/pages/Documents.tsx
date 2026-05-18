import React from "react";
import { Helmet } from "react-helmet";
import { Lang, sections } from "../data";

type DocumentsProps = {
  lang: Lang;
};

const Documents: React.FC<DocumentsProps> = ({ lang }) => {
  const section = sections[lang];
  return (
    <div className="space-y-8 animate-fade-in">
      <Helmet>
        <title>{lang === "mr" ? "FYJC कागदपत्रे" : "FYJC Documents"}</title>
        <meta
          name="description"
          content={
            lang === "mr"
              ? "FYJC प्रवेशासाठी आवश्यक सर्व कागदपत्रांची यादी आणि महत्त्वपूर्ण टीपा."
              : "All required documents for FYJC admission with essential guidance."}
        />
      </Helmet>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
        <h1 className="text-3xl font-bold text-slate-900">
          {lang === "mr" ? "FYJC प्रवेशासाठी आवश्यक कागदपत्रे" : "Required Documents for FYJC Admission"}
        </h1>
        <p className="mt-4 text-slate-700 leading-8">
          {lang === "mr"
            ? "या सूचीमध्ये सर्व आवश्यक प्रमाणपत्रे आणि कोटा अर्जासाठी आवश्यक कागदपत्रे आहे."
            : "This checklist includes required certificates and documents for quota and general FYJC admission."}
        </p>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow animate-card">
        <h2 className="text-2xl font-semibold text-slate-900">
          {lang === "mr" ? "कागदपत्रे तपासा" : "Documents Checklist"}
        </h2>
        <ul className="mt-4 space-y-2 pl-5 text-slate-700 list-disc">
          {section.docs.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
        <h2 className="text-2xl font-semibold text-slate-900">
          {lang === "mr" ? "महत्त्वाची टीप" : "Important Notes"}
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          {lang === "mr"
            ? "मूळ कागदपत्रे सोबत ठेवा आणि ऑनलाईन अपलोड करताना स्कॅन केलेल्या प्रतिका तयार ठेवा."
            : "Keep original documents ready and have scanned copies available for online upload."}
        </p>
      </section>
    </div>
  );
};

export default Documents;
