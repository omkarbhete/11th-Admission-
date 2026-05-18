import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Lang } from "../data";

type CollegeListProps = {
  lang: Lang;
};

const CollegeList: React.FC<CollegeListProps> = ({ lang }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <Helmet>
        <title>{lang === "mr" ? "FYJC कॉलेज यादी" : "FYJC College List"}</title>
        <meta
          name="description"
          content={
            lang === "mr"
              ? "पुणे आणि मुंबईतील FYJC कॉलेजची यादी आणि निवडीसाठी मार्गदर्शन."
              : "FYJC college list and selection guidance for Pune and Mumbai."}
        />
      </Helmet>
      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
        <h1 className="text-3xl font-bold text-slate-900">
          {lang === "mr" ? "FYJC कॉलेज यादी" : "FYJC College List"}
        </h1>
        <p className="mt-4 text-slate-700 leading-8">
          {lang === "mr"
            ? "मुंबई आणि पुणे येथील सर्वोत्कृष्ट FYJC कॉलेज व त्यांच्या प्रवेश पर्यायांविषयी माहिती."
            : "Explore the best FYJC colleges in Mumbai and Pune with admission guidance."}
        </p>
      </section>

      <section className="space-y-6">
        <article className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow animate-card">
          <h2 className="text-2xl font-semibold text-slate-900">
            {lang === "mr" ? "मुंबईतील टॉप कॉलेज" : "Top Colleges in Mumbai"}
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            {lang === "mr"
              ? "मुंबई FYJC प्रवेशासाठी रँक, कोटा व विषय प्रवाह विचारात घ्या."
              : "Consider rank, quota, and stream when choosing Mumbai FYJC colleges."}
          </p>
        </article>

        <article className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow animate-card">
          <h2 className="text-2xl font-semibold text-slate-900">
            {lang === "mr" ? "पुण्यातील टॉप कॉलेज" : "Top Colleges in Pune"}
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            {lang === "mr"
              ? "पुण्याच्या science आणि commerce कॉलेजसाठी प्रत्यक्ष कटऑफ आणि बॅकअप पर्याय तपासा."
              : "Review cutoff ranges and backup options for Pune science and commerce colleges."}
          </p>
        </article>

        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            to="/science-colleges"
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-sm font-medium text-slate-800 transition hover:border-sky-300 hover:bg-sky-50"
          >
            {lang === "mr" ? "साइन्स कॉलेज" : "Science Colleges"}
          </Link>
          <Link
            to="/commerce-colleges"
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-sm font-medium text-slate-800 transition hover:border-sky-300 hover:bg-sky-50"
          >
            {lang === "mr" ? "कॉमर्स कॉलेज" : "Commerce Colleges"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CollegeList;
