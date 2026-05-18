import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const CollegeList: React.FC = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>FYJC College List 2026 | Maharashtra Colleges</title>
        <meta
          name="description"
          content="FYJC College List 2026 page for Maharashtra students. Discover top Mumbai and Pune colleges for science, commerce, and arts."
        />
      </Helmet>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">FYJC College List</h1>
        <p className="mt-4 text-slate-700 leading-7">
          Explore the best FYJC colleges in Maharashtra, including top options in Mumbai and Pune. Use these links to view science and commerce college guidance pages.
        </p>
      </section>

      <section className="space-y-6">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Top FYJC Colleges in Mumbai</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Mumbai FYJC admission depends on rank, quota and preferred subject stream. Check the college list early to prepare your choices for science, commerce, and arts.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Top FYJC Colleges in Pune</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Pune FYJC colleges offer strong programs for science and commerce. Compare popular colleges and make a list of backup options with lower cutoffs.
          </p>
        </article>

        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            to="/science-colleges"
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-sm font-medium text-slate-800 transition hover:border-sky-300 hover:bg-sky-50"
          >
            Science Colleges
          </Link>
          <Link
            to="/commerce-colleges"
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-sm font-medium text-slate-800 transition hover:border-sky-300 hover:bg-sky-50"
          >
            Commerce Colleges
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CollegeList;
