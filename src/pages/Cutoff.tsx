import React from "react";
import { Helmet } from "react-helmet";
import { Lang } from "../data";

type CutoffProps = {
  lang: Lang;
};

const Cutoff: React.FC<CutoffProps> = ({ lang }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <Helmet>
        <title>{lang === "mr" ? "FYJC कटऑफ 2026" : "FYJC Cutoff 2026"}</title>
        <meta
          name="description"
          content={
            lang === "mr"
              ? "FYJC कटऑफ 2026 - science, commerce आणि arts कटऑफ ट्रेंडसाठी मार्गदर्शन."
              : "FYJC cutoff 2026 guidance for science, commerce, and arts trends."}
        />
      </Helmet>
      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
        <h1 className="text-3xl font-bold text-slate-900">
          {lang === "mr" ? "FYJC कटऑफ 2026" : "FYJC Cutoff 2026"}
        </h1>
        <p className="mt-4 text-slate-700 leading-8">
          {lang === "mr"
            ? "महाराष्ट्रातील science, commerce आणि arts प्रवेश कटऑफची माहिती आणि कटऑफ तुलना येथे मिळवा."
            : "Discover science, commerce, and arts cutoff guidance for Maharashtra FYJC admission."}
        </p>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow animate-card">
        <h2 className="text-2xl font-semibold text-slate-900">
          {lang === "mr" ? "Science कटऑफ" : "Science Cutoff"}
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          {lang === "mr"
            ? "Top science कॉलेजसाठी कटऑफ स्पर्धात्मक असतो. PCMC, PCB आणि मराठी माध्यमासाठी अनुमानित मार्क्स पाहा."
            : "Top science colleges are competitive. Review PCMC, PCB, and Marathi-medium cutoff expectations."}
        </p>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow animate-card">
        <h2 className="text-2xl font-semibold text-slate-900">
          {lang === "mr" ? "Commerce कटऑफ" : "Commerce Cutoff"}
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          {lang === "mr"
            ? "कॉमर्स कटऑफ शहर आणि जिल्हानुसार बदलतो. पुण्यातील BBI, BMS आणि मराठी कॉमर्सचे पर्याय तपासा."
            : "Commerce cutoff varies by city and district. Check Pune options for BBI, BMS, and Marathi commerce."}
        </p>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow animate-card">
        <h2 className="text-2xl font-semibold text-slate-900">
          {lang === "mr" ? "Arts कॉलेज" : "Arts Colleges"}
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          {lang === "mr"
            ? "आर्ट्स कॉलेज हा flexibility आणि कमी कटऑफसाठी चांगला पर्याय आहे. मुंबई व पुण्यातील पर्याय शोधा."
            : "Arts colleges provide flexibility and lower cutoffs. Explore options in Mumbai and Pune."}
        </p>
      </section>
    </div>
  );
};

export default Cutoff;
