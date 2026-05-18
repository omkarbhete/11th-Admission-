import React from "react";
import { Helmet } from "react-helmet";

const Cutoff: React.FC = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>FYJC Cutoff 2026 | Science, Commerce, Arts</title>
        <meta
          name="description"
          content="FYJC cutoff information for Maharashtra 11th admission. Science cutoff, commerce cutoff, arts colleges, and quota seat trends."
        />
      </Helmet>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">FYJC Cutoff 2026</h1>
        <p className="mt-4 text-slate-700 leading-7">
          Here are the latest cutoff themes for FYJC admission in Maharashtra. Use this guide to compare science cutoff, commerce cutoff, and arts college admission thresholds across Mumbai and Pune. 
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Science Cutoff</h2>
        <p className="mt-4 leading-7 text-slate-700">
          Science cutoff in top FYJC colleges is competitive. Look for yearly trends and category-specific marks to estimate your chances for PCMC, PCB, and Marathi medium courses.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Commerce Cutoff</h2>
        <p className="mt-4 leading-7 text-slate-700">
          Commerce cutoff varies across city and district colleges. Pune FYJC commerce colleges often offer strong options for BBI, BMS, and Marathi commerce streams.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Arts Colleges</h2>
        <p className="mt-4 leading-7 text-slate-700">
          Arts colleges are a great choice for students seeking flexibility and lower cutoffs. Explore Marathi, English, and regional arts college options in Mumbai and Pune.
        </p>
      </section>
    </div>
  );
};

export default Cutoff;
