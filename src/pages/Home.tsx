import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Lang, sections } from "../data";

type HomeProps = {
  lang: Lang;
};

const Home: React.FC<HomeProps> = ({ lang }) => {
  const section = sections[lang];
  const deadline = lang === "mr" ? "22 मे 2026" : "22 May 2026";
  const actionCards = [
    { icon: "✔", label: { mr: "मेरिट लिस्ट", en: "Merit List" }, href: "/merit-list" },
    { icon: "✔", label: { mr: "कागदपत्रे", en: "Required Documents" }, href: "/documents" },
    { icon: "✔", label: { mr: "कॉलेज निवड", en: "College Selection" }, href: "/college-list" },
    { icon: "✔", label: { mr: "महत्त्वाच्या तारखा", en: "Important Dates" }, href: "/faq" },
    { icon: "✔", label: { mr: "कटऑफ फाइल्स", en: "Cutoff Files" }, href: "/cutoff-files" },
    { icon: "✔", label: { mr: "क्वोटा प्रवेश", en: "Quota Admission" }, href: "/cutoff" },
  ];

  const segments = [
    {
      title: lang === "mr" ? "OPEN CATEGORY" : "OPEN CATEGORY",
      badge: lang === "mr" ? "🟢 ओपन" : "🟢 OPEN",
      items:
        lang === "mr"
          ? ["मार्कशीट", "Leaving Certificate", "Aadhaar Card"]
          : ["Marksheet", "Leaving Certificate", "Aadhaar Card"],
    },
    {
      title: lang === "mr" ? "OBC / NCL" : "OBC / NCL",
      badge: lang === "mr" ? "🔵 OBC / NCL" : "🔵 OBC / NCL",
      items:
        lang === "mr"
          ? ["जात प्रमाणपत्र", "NCL प्रमाणपत्र", "आय प्रमाणपत्र"]
          : ["Caste Certificate", "NCL Certificate", "Income Certificate"],
    },
    {
      title: lang === "mr" ? "EWS / विशेष" : "EWS / Special",
      badge: lang === "mr" ? "🟣 EWS / विशेष" : "🟣 EWS / Special",
      items:
        lang === "mr"
          ? ["डोमिसाइल", "पासपोर्ट फोटो", "इतर आधार कागद" ]
          : ["Domicile", "Passport Photo", "Other identity documents"],
    },
  ];

  const timelineSteps = [
    lang === "mr"
      ? "1. नोंदणी करा"
      : "1. Register",
    lang === "mr"
      ? "2. Part 1 भरा"
      : "2. Fill Part 1",
    lang === "mr"
      ? "3. कागदपत्रे अपलोड करा"
      : "3. Upload Documents",
    lang === "mr"
      ? "4. कॉलेज निवडा"
      : "4. Select Colleges",
    lang === "mr"
      ? "5. मेरिट लिस्ट पहा"
      : "5. Merit List",
    lang === "mr"
      ? "6. प्रवेश पुष्टी करा"
      : "6. Confirm Admission",
  ];

  const faqs = section.faq.slice(0, 4);

  return (
    <div className="space-y-8 animate-fade-in">
      <Helmet>
        <title>{lang === "mr" ? "FYJC Admission 2026 Maharashtra | पूर्ण प्रवेश मार्गदर्शन" : "FYJC Admission 2026 Maharashtra | Complete 11th Admission Guidance"}</title>
        <meta
          name="description"
          content={
            lang === "mr"
              ? "FYJC Admission 2026 महाराष्ट्र - मेरिट लिस्ट, कागदपत्रे, कटऑफ, कॉलेज निवड आणि महत्त्वाच्या तारखा. सर्व माहिती एका ठिकाणी."
              : "FYJC Admission 2026 Maharashtra - merit list, documents, cutoff, college selection, and key admission dates. All guidance in one place."
          }
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: lang === 'mr' ? 'FYJC Admission 2026 Maharashtra' : 'FYJC Admission 2026 Maharashtra',
            description:
              lang === 'mr'
                ? 'FYJC Admission 2026 महाराष्ट्र - मेरिट लिस्ट, कागदपत्रे, कटऑफ, कॉलेज निवड आणि महत्त्वाच्या तारखा.'
                : 'FYJC Admission 2026 Maharashtra - merit list, documents, cutoff, college selection, and key admission dates.',
            url: 'https://11th.vercel.app',
          })}
        </script>
      </Helmet>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              {lang === "mr" ? "विश्वासार्ह प्रवेश पोर्टल" : "Trusted admission portal"}
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-bold text-slate-900 sm:text-6xl">
                {lang === "mr"
                  ? "FYJC Admission 2026 Maharashtra"
                  : "FYJC Admission 2026 Maharashtra"}
              </h1>
              <p className="text-2xl leading-10 text-slate-700 sm:text-3xl">
                {lang === "mr"
                  ? "Complete 11वी Admission Guidance — मेरिट लिस्ट, कागदपत्रे, कॉलेज निवड आणि महत्त्वाच्या तारखा."
                  : "Complete 11th Admission Guidance — merit list, documents, college selection, and key dates."}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {actionCards.slice(0, 4).map((card) => (
                <Link
                  key={card.href}
                  to={card.href}
                  className="inline-flex items-center justify-center gap-3 rounded-[1.75rem] bg-slate-900 px-6 py-4 text-base font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  <span>{card.icon}</span>
                  {card.label[lang]}
                </Link>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-sky-50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                  {lang === "mr" ? "या वेबसाइटवर आहे" : "This website includes"}
                </p>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {[
                    lang === "mr" ? "✔ Merit List" : "✔ Merit List",
                    lang === "mr" ? "✔ आवश्यक कागदपत्रे" : "✔ Required Documents",
                    lang === "mr" ? "✔ कॉलेज निवड" : "✔ College Selection",
                    lang === "mr" ? "✔ महत्त्वाच्या तारखा" : "✔ Important Dates",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-emerald-50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  {lang === "mr" ? "नोंदणी अंतिम तारीख" : "Registration deadline"}
                </p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">{deadline}</p>
                <p className="mt-3 text-slate-700">
                  {lang === "mr"
                    ? "त्यानंतर नोंदणी बंद होईल. आत्ता घ्या अगोदर."
                    : "Registration closes soon. Act now to secure your seat."}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 p-6 shadow-glow">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                {lang === "mr" ? "त्वरित प्रवेश मार्ग" : "Quick admission path"}
              </p>
              <div className="mt-6 space-y-4">
                {actionCards.map((card) => (
                  <div key={card.href} className="flex items-start gap-4 rounded-3xl bg-slate-100/80 p-4">
                    <span className="mt-1 text-2xl">{card.icon}</span>
                    <div>
                      <p className="font-semibold text-slate-900">{card.label[lang]}</p>
                      <p className="mt-1 text-sm text-slate-600">
                        {lang === "mr" ? "तुरूवत क्लिक करा" : "Tap for quick access"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
                {lang === "mr" ? "Admission Timeline" : "Admission Timeline"}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                {lang === "mr" ? "काय करावे आणि कधी" : "What to do and when"}
              </h2>
            </div>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
              {lang === "mr" ? "मोबाईल फर्स्ट" : "Mobile First"}
            </span>
          </div>
          <div className="mt-6 space-y-4">
            {timelineSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{step}</p>
                  <p className="mt-2 text-sm text-slate-600">
                    {lang === "mr"
                      ? "सोप्या टप्प्यांमध्ये प्रवेश प्रक्रिया पूर्ण करा."
                      : "Complete the admission process in easy steps."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">
            {lang === "mr" ? "महत्वाचे सूचन" : "Important Notifications"}
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                label: lang === "mr" ? "🔴 मेरिट लिस्ट प्रकाशित" : "🔴 Merit List Released",
                detail:
                  lang === "mr"
                    ? "तुमचा फॉर्म अद्यतनित असल्याची खात्री करा."
                    : "Make sure your form is updated.",
              },
              {
                label: lang === "mr" ? "🟠 नोंदणी वाढवली" : "🟠 Registration Extended",
                detail:
                  lang === "mr"
                    ? "22 मे 2026 पर्यंत नोंदणी उपलब्ध आहे."
                    : "Registration open through 22 May 2026.",
              },
              {
                label: lang === "mr" ? "🟢 Round 0 सुरु" : "🟢 Round 0 Started",
                detail:
                  lang === "mr"
                    ? "Round 0 प्रवेशापूर्वी कटऑफ तपासा."
                    : "Check cutoff before Round 0 admission.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              {lang === "mr" ? "दस्तऐवज कार्ड" : "Document Cards"}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              {lang === "mr" ? "प्रत्येक श्रेणीसाठी आवश्यक कागदपत्रे" : "Required documents by category"}
            </h2>
          </div>
          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
            {lang === "mr" ? "मोबाईलवर सोपे वाचण्यासाठी" : "Easy to view on mobile"}
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {segments.map((segment) => (
            <div key={segment.title} className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-5 shadow-sm">
              <p className="text-base font-semibold text-slate-900">{segment.badge}</p>
              <p className="mt-3 text-sm font-semibold text-slate-800">{segment.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {segment.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-sky-600">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            {lang === "mr" ? "FAQ" : "FAQ"}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            {lang === "mr" ? "आमचे सर्वाधिक शोधलेले प्रश्न" : "Top searched questions"}
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <p className="font-semibold text-slate-900">{item.q}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              to="/faq"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
            >
              {lang === "mr" ? "सर्व FAQ वाचा" : "Read all FAQs"}
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            {lang === "mr" ? "विश्वसनीय समर्थन" : "Trusted support"}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            {lang === "mr" ? "आधिकारिक हेल्पलाइन" : "Official helpline"}
          </h2>
          <p className="mt-4 text-slate-700 leading-7">
            {lang === "mr"
              ? "काही शंका असल्यास त्वरित कॉल करा किंवा अधिकृत संकेतस्थळावर तपासा."
              : "If you have questions, call the helpline or check the official website."}
          </p>
          <div className="mt-6 space-y-4 text-slate-700">
            <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">{lang === "mr" ? "वेबसाइट" : "Website"}</p>
              <p className="mt-2 text-sm text-slate-600">https://mahafyjcadmissions.in</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">{lang === "mr" ? "ईमेल" : "Email"}</p>
              <p className="mt-2 text-sm text-slate-600">support@mahafyjcadmissions.in</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">{lang === "mr" ? "हेल्पलाइन" : "Helpline"}</p>
              <p className="mt-2 text-sm text-slate-600">8530955564</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
