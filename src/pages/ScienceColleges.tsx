import React from "react";
import { Helmet } from "react-helmet";

const ScienceColleges: React.FC = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>FYJC Science Colleges 2026 | Maharashtra</title>
        <meta
          name="description"
          content="FYJC Science Colleges 2026 page for Maharashtra students. Find Mumbai and Pune science college guidance and cutoff trends."
        />
      </Helmet>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">FYJC Science Colleges</h1>
        <p className="mt-4 text-slate-700 leading-7">
          Learn about top science colleges for FYJC admission in Maharashtra. This page helps you compare Pune and Mumbai FYJC colleges with science cutoff expectations. 
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Mumbai Science College Options</h2>
        <p className="mt-4 leading-7 text-slate-700">
          Mumbai science colleges offer PCMC, PCB and bi-focal streams. High cutoff colleges typically require strong 10th marks in mathematics and science.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Pune Science College Options</h2>
        <p className="mt-4 leading-7 text-slate-700">
          Pune science colleges are popular for FYJC students seeking strong science foundations and competitive cutoff ranges in both commerce and arts alternative streams.
        </p>
      </section>
    </div>
  );
};

export default ScienceColleges;
