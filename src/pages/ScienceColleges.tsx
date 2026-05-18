import React from "react";
import { Helmet } from "react-helmet";
import { Lang } from "../data";

type ScienceCollegesProps = {
  lang: Lang;
};

const ScienceColleges: React.FC<ScienceCollegesProps> = ({ lang }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <Helmet>
        <title>{lang === "mr" ? "FYJC साइन्स कॉलेज" : "FYJC Science Colleges"}</title>
        <meta
          name="description"
          content={
            lang === "mr"
              ? "FYJC साइन्स कॉलेज 2026 - मुंबई आणि पुणेमधील सर्वोत्तम science कॉलेज मार्गदर्शन."
              : "FYJC science colleges 2026 - top Mumbai and Pune science college guidance."}
        />
      </Helmet>
      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
        <h1 className="text-3xl font-bold text-slate-900">
          {lang === "mr" ? "FYJC साइन्स कॉलेज" : "FYJC Science Colleges"}
        </h1>
        <p className="mt-4 text-slate-700 leading-8">
          {lang === "mr"
            ? "महाराष्ट्रातील सर्वोत्तम FYJC science कॉलेज आणि कटऑफ निरीक्षणे शोधा."
            : "Learn about top Maharashtra FYJC science colleges and cutoff trends."}
        </p>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow animate-card">
        <h2 className="text-2xl font-semibold text-slate-900">
          {lang === "mr" ? "मुंबई विद्याशाखा" : "Mumbai Science Options"}
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          {lang === "mr"
            ? "मुंबईतील कॉलेज PCMC, PCB आणि बाय-फोकल स्ट्रीमसाठी प्रसिद्ध आहेत. गणित आणि विज्ञानातील चांगले गुण आवश्यक असतात."
            : "Mumbai colleges are popular for PCMC, PCB, and bi-focal streams, often requiring strong 10th marks."}
        </p>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow animate-card">
        <h2 className="text-2xl font-semibold text-slate-900">
          {lang === "mr" ? "पुणे विद्याशाखा" : "Pune Science Options"}
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          {lang === "mr"
            ? "पुणेतील science कॉलेज FYJC विद्यार्थ्यांसाठी प्रतिष्ठित आणि स्पर्धात्मक कटऑफसह असतात."
            : "Pune science colleges are prestigious and often have competitive FYJC cutoffs."}
        </p>
      </section>
    </div>
  );
};

export default ScienceColleges;
