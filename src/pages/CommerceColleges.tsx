import React from "react";
import { Helmet } from "react-helmet";
import { Lang } from "../data";

type CommerceCollegesProps = {
  lang: Lang;
};

const CommerceColleges: React.FC<CommerceCollegesProps> = ({ lang }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <Helmet>
        <title>{lang === "mr" ? "FYJC कॉमर्स कॉलेज" : "FYJC Commerce Colleges"}</title>
        <meta
          name="description"
          content={
            lang === "mr"
              ? "FYJC कॉमर्स कॉलेज 2026 - मुंबई आणि पुण्यातील commerce कॉलेज मार्गदर्शन."
              : "FYJC commerce colleges 2026 - Mumbai and Pune commerce college guidance."}
        />
      </Helmet>
      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
        <h1 className="text-3xl font-bold text-slate-900">
          {lang === "mr" ? "FYJC कॉमर्स कॉलेज" : "FYJC Commerce Colleges"}
        </h1>
        <p className="mt-4 text-slate-700 leading-8">
          {lang === "mr"
            ? "पुणे व मुंबईतील commerce कॉलेज आणि प्रवेश प्रवाह याची माहिती मिळवा."
            : "Discover Mumbai and Pune commerce colleges and the admission process."}
        </p>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow animate-card">
        <h2 className="text-2xl font-semibold text-slate-900">
          {lang === "mr" ? "मुंबई कॉमर्स प्रवेश" : "Commerce Admission in Mumbai"}
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          {lang === "mr"
            ? "मुंबईतील commerce कॉलेज BBI, BMS आणि सामान्य commerce कटऑफवर आधारित असतात."
            : "Mumbai commerce colleges depend on BBI, BMS, and general commerce cutoff trends."}
        </p>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow animate-card">
        <h2 className="text-2xl font-semibold text-slate-900">
          {lang === "mr" ? "पुणे कॉमर्स प्रवेश" : "Commerce Admission in Pune"}
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          {lang === "mr"
            ? "पुणे commerce कॉलेज मराठी व इंग्रजी माध्यमासाठी समतोल पर्याय देतात. Round 0 आणि कोटा नियम लक्षात घ्या."
            : "Pune commerce colleges offer balanced Marathi and English medium options with quota and Round 0 rules."}
        </p>
      </section>
    </div>
  );
};

export default CommerceColleges;
