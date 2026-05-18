import React from "react";
import { Helmet } from "react-helmet";

const CommerceColleges: React.FC = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>FYJC Commerce Colleges 2026 | Maharashtra</title>
        <meta
          name="description"
          content="FYJC Commerce Colleges 2026 page for Maharashtra students. Learn about Mumbai and Pune commerce admission trends and college choices."
        />
      </Helmet>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">FYJC Commerce Colleges</h1>
        <p className="mt-4 text-slate-700 leading-7">
          Discover commerce colleges for FYJC admission in Maharashtra. This page covers commerce cutoff and college selection advice for Mumbai and Pune. 
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Commerce Admission in Mumbai</h2>
        <p className="mt-4 leading-7 text-slate-700">
          Mumbai commerce colleges are known for strong business programs. Choose colleges based on BBI, BMS, and general commerce cutoff trends for FYJC admission 2026.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Commerce Admission in Pune</h2>
        <p className="mt-4 leading-7 text-slate-700">
          Pune commerce colleges offer balanced options for both Marathi and English medium students. Review quota seats and Round 0 admission rules to choose the right course.
        </p>
      </section>
    </div>
  );
};

export default CommerceColleges;
