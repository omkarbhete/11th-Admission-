import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { Lang, sections } from "../data";

type HomeProps = {
  lang: Lang;
};

const Home: React.FC<HomeProps> = ({ lang }) => {
  const section = sections[lang];
  const navigate = useNavigate();
  const [now, setNow] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [percentage, setPercentage] = useState("85");
  const [category, setCategory] = useState("OPEN");
  const [stream, setStream] = useState("Science");
  const [city, setCity] = useState("Mumbai");

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const targetDate = new Date("2026-05-22T23:59:59");
  const countdownMs = Math.max(0, targetDate.getTime() - now.getTime());
  const countdown = {
    days: Math.floor(countdownMs / 86400000),
    hours: Math.floor((countdownMs % 86400000) / 3600000),
    minutes: Math.floor((countdownMs % 3600000) / 60000),
    seconds: Math.floor((countdownMs % 60000) / 1000),
  };

  const quickButtons = [
    { label: lang === "mr" ? "Apply Now" : "Apply Now", href: "/" },
    { label: lang === "mr" ? "Merit List" : "Merit List", href: "/merit-list" },
    { label: lang === "mr" ? "Required Documents" : "Required Documents", href: "/documents" },
    { label: lang === "mr" ? "Important Dates" : "Important Dates", href: "/faq" },
  ];

  const stats = [
    { label: lang === "mr" ? "विद्यार्थी मार्गदर्शन" : "Students guided", value: "50,000+" },
    { label: lang === "mr" ? "लाइव्ह अपडेट्स" : "Live updates", value: "120+" },
    { label: lang === "mr" ? "सक्रिय यूजर्स" : "Active users", value: "8,500+" },
  ];

  const heroFeatures = [
    { icon: "📄", title: lang === "mr" ? "अधिकृत PDF नोटिस" : "Official PDF notices" },
    { icon: "🧠", title: lang === "mr" ? "तुरंत कॉलेज प्रेडिक्शन" : "Instant college predictions" },
    { icon: "💬", title: lang === "mr" ? "Marathi + English सपोर्ट" : "Marathi + English support" },
  ];

  const testimonials = [
    {
      quote:
        lang === "mr"
          ? "या साइटने माझ्या 11वी प्रवेश प्रक्रियेला गती दिली. GR PDF आणि कॉलेज प्रेडिक्शन फार उपयोगी ठरले."
          : "This site sped up my 11th admission process. The GR PDFs and college predictor were extremely helpful.",
      author: "A. Patil, Mumbai",
    },
    {
      quote:
        lang === "mr"
          ? "फक्त एक क्लिक आणि मला महत्त्वाच्या तारखा व माहिती मिळाली. एक अव्वल प्रवेश मार्गदर्शक."
          : "One click gave me the important dates and guidance I needed. A premium admission companion.",
      author: "S. Deshmukh, Pune",
    },
  ];

  const categoryOptions = [
    { value: "OPEN", label: lang === "mr" ? "ओपन" : "Open" },
    { value: "OBC", label: "OBC / NCL" },
    { value: "EWS", label: lang === "mr" ? "EWS / विशेष" : "EWS / Special" },
    { value: "SC", label: "SC" },
    { value: "ST", label: "ST" },
  ];

  const streamOptions = [
    { value: "Science", label: lang === "mr" ? "Science" : "Science" },
    { value: "Commerce", label: lang === "mr" ? "Commerce" : "Commerce" },
    { value: "Arts", label: lang === "mr" ? "Arts" : "Arts" },
  ];

  const cityOptions = ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"];

  const collegePredictions = useMemo(() => {
    const score = Number(percentage) || 0;
    const base = [] as string[];

    if (stream === "Science") {
      base.push("Ramnarain Ruia Science College, Mumbai");
      base.push("St. Xavier's College, Mumbai");
      base.push("Fergusson College, Pune");
    } else if (stream === "Commerce") {
      base.push("Kishinchand Chellaram College, Mumbai");
      base.push("Sinhagad College, Pune");
      base.push("RJ College, Mumbai");
    } else {
      base.push("Smt. Kapila Khandvala College, Mumbai");
      base.push("St. Mira's College, Pune");
      base.push("Shivaji Arts College, Nagpur");
    }

    const cityHint = city === "Mumbai" ? "(Mumbai preferred)" : city === "Pune" ? "(Pune preferred)" : `(${city} options)`;

    if (score >= 90) {
      return base.map((college) => `${college} ${cityHint}`);
    }

    if (score >= 80) {
      return base.map((college, index) => `${college.replace(/, .+$/, "")} ${index === 0 ? cityHint : "(good chance)"}`);
    }

    if (score >= 70) {
      return [
        `Consider local junior college options in ${city}`,
        "Check SC/ST/OBC/EWS quota seats for higher chance",
        "Review management and minority seat lists",
      ];
    }

    return [
      `Focus on nearby colleges in ${city}`,
      "Use quota and reserved seat guides to improve options",
      "Consult the official cut-off PDF before finalizing choices",
    ];
  }, [percentage, stream, city]);

  const faqs = section.faq.slice(0, 4);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/faq");
  };

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

      <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-10 text-white shadow-glow sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -right-24 top-[-4rem] h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute left-[-3rem] top-20 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.45fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-sky-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              {lang === "mr" ? "Admissions Open Now" : "Admissions Open Now"}
            </span>
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                🎓 {lang === "mr" ? "FYJC Admission 2026 Maharashtra" : "FYJC Admission 2026 Maharashtra"}
              </h1>
              <p className="max-w-3xl text-xl leading-9 text-slate-300 sm:text-2xl">
                {lang === "mr"
                  ? "महाराष्ट्रातील 11वी प्रवेशासाठी अधिकृत मार्गदर्शन, लाइव अपडेट, PDF नोटिसेस आणि कॉलेज प्रेडिक्टर एकाच ठिकाणी."
                  : "Trusted FYJC admission guidance for Maharashtra with live updates, official notices, and college prediction tools."}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {quickButtons.map((button) => (
                <Link
                  key={button.href}
                  to={button.href}
                  className="inline-flex items-center justify-center rounded-[1.75rem] bg-white px-5 py-4 text-sm font-semibold text-slate-950 shadow-xl transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  {button.label}
                </Link>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-white/10 px-5 py-5 text-center shadow-xl backdrop-blur-sm">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-xl ring-1 ring-white/10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
                    {lang === "mr" ? "Count Down" : "Countdown"}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">
                    {lang === "mr" ? "नोंदणी समाप्ती" : "Registration Closes"}
                  </h2>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-2 text-sm font-semibold text-emerald-200">
                  {lang === "mr" ? "पर्यंत" : "Ends In"}
                </span>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: lang === "mr" ? "दिवस" : "Days", value: countdown.days },
                  { label: lang === "mr" ? "तास" : "Hours", value: countdown.hours },
                  { label: lang === "mr" ? "मिनिट" : "Minutes", value: countdown.minutes },
                  { label: lang === "mr" ? "सेकंद" : "Seconds", value: countdown.seconds },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-slate-950/80 p-4 text-center ring-1 ring-white/10">
                    <p className="text-3xl font-bold text-white">{item.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-slate-300">
                {lang === "mr"
                  ? "22 मे 2026 पूर्वी फॉर्म सबमिट करा. अंतिम नोंदणी तारीख जवळ येत आहे."
                  : "Submit your form before 22 May 2026. The final registration deadline is approaching."}
              </p>
            </div>

            <div className="rounded-[2rem] border border-emerald-500/20 bg-emerald-50 p-6 shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                {lang === "mr" ? "लाइव्ह नोटिस" : "Live notice"}
              </p>
              <div className="mt-4 space-y-3 text-slate-700">
                <p>🔴 {lang === "mr" ? "गुणवत्ता यादी 15 मे 2026 रोजी जाहीर" : "Merit list on 15 May 2026"}</p>
                <p>🟠 {lang === "mr" ? "Round 0 प्रक्रिया सुरू" : "Round 0 process started"}</p>
                <p>🟢 {lang === "mr" ? "नोंदणी सुरू आणि भरती चालू" : "Registration open and admission active"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {heroFeatures.map((feature) => (
          <div key={feature.title} className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow backdrop-blur-sm transition duration-300 hover:-translate-y-1">
            <p className="text-4xl">{feature.icon}</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {lang === "mr"
                ? "वेगवान प्रवेश निर्णयांसाठी अपडेट आणि दस्तऐवज एकाच ठिकाणी."
                : "Fast admission decisions with updates and documents in one place."}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-glow">
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">
              {lang === "mr" ? "विश्वासू निवड" : "Trusted selection"}
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              {lang === "mr" ? "50,000+ विद्यार्थ्यांनी आम्हाला निवडले" : "Trusted by 50,000+ students"}
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              {lang === "mr"
                ? "अधिकृत प्रवेश संकेतस्थळ, वेळेवर अद्यतने आणि सोयीस्कर मोबाइल अनुभव."
                : "Official admission guidance, timely updates, and a smooth mobile-friendly experience."}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.author} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-sm leading-7 text-slate-700">“{item.quote}”</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-glow">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">
                  {lang === "mr" ? "कॉलेज प्रेडिक्टर" : "College Predictor"}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                  {lang === "mr" ? "तुमच्या अंकांवरून संभाव्य कॉलेज" : "Predict colleges based on your score"}
                </h2>
              </div>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
                {lang === "mr" ? "वेगवान गणना" : "Fast estimate"}
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <span className="text-sm font-semibold text-slate-700">{lang === "mr" ? "टक्के" : "Percentage"}</span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={percentage}
                  onChange={(event) => setPercentage(event.target.value)}
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </label>
              <label className="space-y-2 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <span className="text-sm font-semibold text-slate-700">{lang === "mr" ? "श्रेणी" : "Category"}</span>
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                >
                  {categoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <span className="text-sm font-semibold text-slate-700">{lang === "mr" ? "स्ट्रीम" : "Stream"}</span>
                <select
                  value={stream}
                  onChange={(event) => setStream(event.target.value)}
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                >
                  {streamOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <span className="text-sm font-semibold text-slate-700">{lang === "mr" ? "शहर" : "City"}</span>
                <select
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                >
                  {cityOptions.map((cityOption) => (
                    <option key={cityOption} value={cityOption}>
                      {cityOption}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">
                {lang === "mr" ? "संभाव्य कॉलेज" : "Possible colleges"}
              </p>
              <ul className="mt-4 space-y-3 text-slate-700">
                {collegePredictions.map((college) => (
                  <li key={college} className="rounded-3xl bg-white p-4 shadow-sm">
                    {college}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-sky-50 p-6 shadow-glow">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                {lang === "mr" ? "ऑफिशियल PDF विभाग" : "Official PDF section"}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                {lang === "mr" ? "GR PDFs, नोटिस आणि कटऑफ" : "GR PDFs, notices and cutoffs"}
              </h2>
              <p className="mt-4 text-slate-700 leading-7">
                {lang === "mr"
                  ? "अधिकृत दस्तऐवज आणि PDF डाउनलोड्स तुमच्या प्रवेश निर्णयासाठी वेळेवर आणि सुरक्षित मार्गाने मिळवा."
                  : "Access official documents and PDF downloads for fast admission decision-making."}
              </p>
              <div className="mt-6 space-y-4">
                {section.cutoffFiles.map((file) => (
                  <div key={file.filename} className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-900">{file.label}</p>
                        <p className="mt-1 text-sm text-slate-600">{file.description}</p>
                      </div>
                      <a
                        href={`/pdfs/${file.filename}`}
                        className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        {lang === "mr" ? "डाउनलोड" : "Download"}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-glow">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">
                {lang === "mr" ? "महत्त्वाचे दस्तऐवज" : "Important documents"}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {section.docs.slice(0, 6).map((doc) => (
                  <div key={doc} className="rounded-[1.75rem] bg-slate-50 p-4 shadow-sm">
                    <p className="font-semibold text-slate-900">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-slate-100 p-6 shadow-glow">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">
              {lang === "mr" ? "महत्वाचे अद्यतन" : "Important update"}
            </p>
            <h2 className="text-2xl font-semibold text-slate-900">
              {lang === "mr" ? "रिअल-टाइम प्रवेश माहिती" : "Real-time admission intelligence"}
            </h2>
            <p className="text-slate-700 leading-7">
              {lang === "mr"
                ? "ठराविक कॉलेज, कटऑफ आणि प्रवेश प्रक्रियेबद्दल ताजी Marathi आणि English सामग्री. सर्व माहिती शोध इंजिनसाठी ऑप्टिमाइज़्ड."
                : "Fresh Marathi and English insights on colleges, cutoffs, and admission process. Content optimized for search engines."}
            </p>
          </div>
          <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 rounded-[1.75rem] bg-slate-50 p-4">
              <span className="text-2xl">🔍</span>
              <div>
                <p className="font-semibold text-slate-900">{lang === "mr" ? "तुमचा प्रश्न शोधा" : "Search your question"}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {lang === "mr" ? "FAQ मध्ये त्वरित शोधा" : "Search FAQs instantly"}
                </p>
              </div>
            </div>
            <form onSubmit={handleSearchSubmit} className="flex gap-3">
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={lang === "mr" ? "तुमचा प्रश्न शोधा..." : "Search your question..."}
                className="flex-1 rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />
              <button className="rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                {lang === "mr" ? "शोधा" : "Search"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
