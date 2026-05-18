import React from "react";
import { Helmet } from "react-helmet";
import { sections } from "../data";

const Documents: React.FC = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>FYJC Documents | 11th Admission Checklist</title>
        <meta
          name="description"
          content="FYJC Admission 2026 documents checklist for Maharashtra 11th admission. Learn which certificates, marksheets, and proofs are required."
        />
      </Helmet>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Required Documents for FYJC Admission</h1>
        <p className="mt-4 text-slate-700 leading-7">
          Prepare your document set for FYJC Admission 2026. This checklist includes all required certificates and optional proofs for quota or minority seat applications.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">FYJC Documents Checklist</h2>
        <ul className="mt-4 space-y-2 pl-5 text-slate-700 list-disc">
          {sections.en.docs.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Important Notes</h2>
        <p className="mt-4 leading-7 text-slate-700">
          Keep original documents ready and keep scanned copies for online upload. Documents such as caste certificate, income certificate, and minority quota proofs are essential for quota-based FYJC admission rounds.
        </p>
      </section>
    </div>
  );
};

export default Documents;
