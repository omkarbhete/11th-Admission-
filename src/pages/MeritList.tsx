import React from "react";
import { Helmet } from "react-helmet";
import { Lang, sections } from "../data";

type MeritListProps = {
  lang: Lang;
};

const MeritList: React.FC<MeritListProps> = ({ lang }) => {
  const section = sections[lang];
  return (
    <div className="space-y-8 animate-fade-in">
      <Helmet>
        <title>{lang === "mr" ? "FYJC मेरिट लिस्ट 2026" : "FYJC Merit List 2026"}</title>
        <meta
          name="description"
          content={
            lang === "mr"
              ? "FYJC मेरिट लिस्ट 2026 - महाराष्ट्र 11वी प्रवेशासाठी अपडेट आणि Round 0 मार्गदर्शन."
              : "FYJC Merit List 2026 - Maharashtra 11th admission updates and Round 0 guidance."
          }
        />
      </Helmet>
      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
        <h1 className="text-3xl font-bold text-slate-900">
          {lang === "mr" ? "FYJC मेरिट लिस्ट 2026" : "FYJC Merit List 2026"}
        </h1>
        <p className="mt-4 text-slate-700 leading-8">
          {lang === "mr"
            ? "या पृष्ठावर तुम्हाला मेरिट लिस्ट कशी तपासायची, कॉलेज अलॉटमेंट कसे समजून घ्यायचे आणि Round 0 admission प्रक्रिया कशी पार पडते हे दिलेले आहे."
            : "This page explains how to check the merit list, understand college allotment, and follow the Round 0 admission process."}
        </p>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow animate-card">
        <h2 className="text-2xl font-semibold text-slate-900">
          {lang === "mr" ? "मेरिट लिस्ट अपडेट" : "Merit List Updates"}
        </h2>
        <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-700">
          <li>{lang === "mr" ? "सामान्य आणि कोटा दोन्ही सीटसाठी 26 मे 2026 रोजी मेरिट लिस्ट जाहीर." : "Merit list published on 26 May 2026 for general and quota seats."}</li>
          <li>{lang === "mr" ? "Round 0 अपडेट्स अल्पसंख्याक आणि विशेष श्रेणीसाठी प्रथम प्रकाशित होतात." : "Round 0 updates publish first for minority and special category seats."}</li>
          <li>{lang === "mr" ? "अलॉटमेंट पत्र काळजीपूर्वक वाचा आणि अंतिम तारखेपूर्वी कागदपत्रे सादर करा." : "Read the allotment letter carefully and submit documents before the deadline."}</li>
          <li>{lang === "mr" ? "गुणवत्ता क्रमांकात फरक असल्यास कॉलेज किंवा हेल्पलाइनशी संपर्क करा." : "Contact the college or helpline if there is any discrepancy in merit rank."}</li>
        </ul>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
        <h2 className="text-2xl font-semibold text-slate-900">
          {lang === "mr" ? "मेरिट लिस्ट कशी वापरावी" : "How to Use the Merit List"}
        </h2>
        <div className="mt-4 space-y-4 text-slate-700">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              {lang === "mr" ? "तुमचा क्रमांक तपासा" : "Check Your Rank"}
            </h3>
            <p className="mt-2 leading-7">
              {lang === "mr"
                ? "तुमचा वर्ग, श्रेणी आणि विषय क्रमांक बरोबर आहे का ते तपासा. नंतर ऑनलाईन व कॉलेजमध्ये प्रवेशची पुष्टी करा."
                : "Verify your category and subject rank, then confirm admission online and at the college."}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              {lang === "mr" ? "Round 0 प्रवेश" : "Round 0 Admissions"}
            </h3>
            <p className="mt-2 leading-7">
              {lang === "mr"
                ? "Round 0 हा विशेष कोटा आणि आगाऊ निवडीसाठी असतो. यामध्ये स्वतंत्र वेळापत्रक आणि कटऑफ असते."
                : "Round 0 is for quota and early allotments, with its own schedule and cutoff."}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              {lang === "mr" ? "मुंबई आणि पुणे ट्रेंड" : "Mumbai and Pune Trends"}
            </h3>
            <p className="mt-2 leading-7">
              {lang === "mr"
                ? "मुंबई व पुणे दोन्ही शहरांतील FYJC मेरिट व कटऑफ ट्रेंड जाणून घ्या आणि योग्य कॉलेज निवडा."
                : "Learn merit and cutoff trends in Mumbai and Pune to choose the right college."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeritList;
