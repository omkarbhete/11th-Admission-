import React from "react";
import { Helmet } from "react-helmet";

const MeritList: React.FC = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>FYJC Merit List 2026 | Maharashtra 11th Admission</title>
        <meta
          name="description"
          content="FYJC Merit List 2026 page for Maharashtra 11th admission. Find merit list updates, college allotment guidance, and Round 0 merit process."
        />
      </Helmet>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">FYJC Merit List 2026</h1>
        <p className="mt-4 text-slate-700 leading-7">
          This page covers the FYJC Merit List 2026 process for Maharashtra. Students can learn how to read the merit list, understand cutoff patterns, and prepare for college allotment.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Merit List Updates</h2>
        <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-700">
          <li>Merit List published on 26 May 2026 for general and quota seats</li>
          <li>Round 0 merit updates are published first for minority and special category seats</li>
          <li>Check the allotment letter carefully and submit documents before the deadline</li>
          <li>Contact the college or helpline if there is any discrepancy in the merit rank</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">How to Use the Merit List</h2>
        <div className="mt-4 space-y-4 text-slate-700">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Check Your Rank</h3>
            <p className="mt-2 leading-7">
              Verify your rank, category, and subject group. If the merit list shows your name, follow the instructions to confirm admission online and in the college.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Round 0 Admissions</h3>
            <p className="mt-2 leading-7">
              Round 0 meaning: this round is used for early quota allotments, minority quota seats, and other reserved categories. It often has a separate schedule and cutoff process.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Mumbai and Pune Merit Trends</h3>
            <p className="mt-2 leading-7">
              Mumbai FYJC admission and Pune FYJC colleges both publish merit trends early. Compare expected cutoffs for science, commerce, and arts to choose the right college.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeritList;
