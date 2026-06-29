import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MeritList from "./pages/MeritList";
import Documents from "./pages/Documents";
import Cutoff from "./pages/Cutoff";
import Faq from "./pages/Faq";
import CollegeList from "./pages/CollegeList";
import ScienceColleges from "./pages/ScienceColleges";
import CommerceColleges from "./pages/CommerceColleges";
import CutoffFiles from "./pages/CutoffFiles";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";
import { Lang, sections } from "./data";

const menuItems = [
  { path: "/", label: { mr: "मुख्यपृष्ठ", en: "Home" } },
  { path: "/merit-list", label: { mr: "मेरिट लिस्ट", en: "Merit List" } },
  { path: "/documents", label: { mr: "कागदपत्रे", en: "Documents" } },
  { path: "/cutoff", label: { mr: "कटऑफ", en: "Cutoff" } },
  { path: "/cutoff-files", label: { mr: "कटऑफ फाइल्स", en: "Cutoff Files" } },
  { path: "/college-list", label: { mr: "कॉलेज यादी", en: "College List" } },
  { path: "/faq", label: { mr: "सामान्य प्रश्न", en: "FAQ" } },
];

const languageTabs: Record<Lang, string> = {
  mr: "मराठी",
  en: "English",
};

const alertText: Record<Lang, string> = {
  mr: "🚨 नवीन नोंदणी 22 मे 2026 पर्यंत खुली आहे. त्वरित फॉर्म भरा आणि महत्त्वाच्या तारखा वाचा.",
  en: "🚨 omkar bhete AWS student builder group leader.",
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>("mr");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const currentSection = sections[lang];
  const title = `${currentSection.title} | OMKAR BHETE CREATED Maharashtra FYJC Admission 2026`;
  const description = "FYJC Admission 2026 Maharashtra complete guidance website with Marathi and English options. Check merit list, documents, cutoffs, college list, and FAQ.";

  const nav = useMemo(
    () =>
      menuItems.map((item) => ({
        path: item.path,
        label: item.label[lang],
      })),
    [lang]
  );

  return (
    <BrowserRouter>
      <Helmet>
        <html lang={lang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="FYJC Admission 2026, महाराष्ट्र 11वी प्रवेश, FYJC Merit List, मुंबई FYJC प्रवेश, पुणे कॉलेज यादी, Round 0, minority quota"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="FYJC Admission 2026 Maharashtra" />
        <meta property="og:description" content="Complete FYJC admission guidance website in Marathi and English." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://11th.vercel.app" />
        <meta property="og:locale" content={lang === "mr" ? "mr_IN" : "en_US"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-slate-950/95 text-white shadow-xl backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center overflow-hidden px-4 py-3 text-sm sm:text-base">
          <div className="flex min-w-full animate-ticker whitespace-nowrap gap-8">
            <span className="font-semibold text-amber-200">🔴 Merit List Releases on 15 May 2026</span>
            <span className="font-semibold text-orange-200">🟠 Round 0 Process Started</span>
            <span className="font-semibold text-emerald-200">🟢 Registration Open</span>
            <span className="font-semibold text-sky-200">📌 Complete your form before the deadline</span>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.16),_transparent_22%),linear-gradient(180deg,_#eef2ff_0%,_#f8fafc_100%)] text-slate-900">
          <div>
            <div className="border-b border-white/20 bg-gradient-to-r from-rose-600 via-orange-500 to-amber-400 px-4 py-3 text-white shadow-glow animate-pulse-glow">
              <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="overflow-hidden whitespace-nowrap text-sm font-semibold tracking-wide sm:text-base">
                  <div className="inline-flex animate-ticker gap-8">
                    <span>{alertText[lang]}</span>
                    <span>{alertText[lang]}</span>
                    <span>{alertText[lang]}</span>
                  </div>
                </div>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/95 shadow-sm">
                  {lang === "mr" ? "ताजे अपडेट" : "Latest Update"}
                </span>
              </div>
            </div>
            <header className="border-b border-white/20 bg-gradient-to-r from-sky-500/95 via-cyan-400/35 to-fuchsia-500/90 backdrop-blur-xl shadow-glow">
              <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1 animate-fade-in">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/90 drop-shadow-lg">
                    FYJC प्रवेश 2026
                  </p>
                  <p className="text-lg font-semibold text-white drop-shadow-lg">{currentSection.title}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  {nav.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `rounded-full px-3 py-2 transition duration-200 ${
                          isActive
                            ? "bg-white/85 text-slate-900 shadow-lg"
                            : "text-white/90 hover:bg-white/20"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <div className="ml-2 flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-2 py-1 shadow-lg backdrop-blur-sm">
                    {Object.entries(languageTabs).map(([value, label]) => (
                      <button
                        key={value}
                        onClick={() => setLang(value as Lang)}
                        className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                          lang === value
                            ? "bg-white text-slate-900 shadow-sm"
                            : "text-white/80 hover:bg-white/25"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </header>
          </div>
          <main className="mx-auto max-w-6xl px-4 py-8 pb-28">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/merit-list" element={<MeritList lang={lang} />} />
            <Route path="/documents" element={<Documents lang={lang} />} />
            <Route path="/cutoff" element={<Cutoff lang={lang} />} />
            <Route path="/cutoff-files" element={<CutoffFiles lang={lang} />} />
            <Route path="/faq" element={<Faq lang={lang} />} />
            <Route path="/college-list" element={<CollegeList lang={lang} />} />
            <Route path="/science-colleges" element={<ScienceColleges lang={lang} />} />
            <Route path="/commerce-colleges" element={<CommerceColleges lang={lang} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:hidden">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-700">
            <NavLink to="/college-list" className="inline-flex flex-1 flex-col items-center gap-1 rounded-3xl px-3 py-2 text-slate-900 transition hover:bg-slate-100">
              <span>🏫</span>
              Colleges
            </NavLink>
            <NavLink to="/documents" className="inline-flex flex-1 flex-col items-center gap-1 rounded-3xl px-3 py-2 text-slate-900 transition hover:bg-slate-100">
              <span>📄</span>
              Docs
            </NavLink>
            <NavLink to="/faq" className="inline-flex flex-1 flex-col items-center gap-1 rounded-3xl px-3 py-2 text-slate-900 transition hover:bg-slate-100">
              <span>🔔</span>
              Updates
            </NavLink>
            <a href="tel:8530955564" className="inline-flex flex-1 flex-col items-center gap-1 rounded-3xl bg-slate-900 px-3 py-2 text-white transition hover:bg-slate-800">
              <span>📞</span>
              Help
            </a>
          </div>
        </nav>
        <a
          href="tel:8530955564"
          className="fixed bottom-20 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-rose-700"
        >
          📞 Need Help?
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
