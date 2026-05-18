import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MeritList from "./pages/MeritList";
import Documents from "./pages/Documents";
import Cutoff from "./pages/Cutoff";
import Faq from "./pages/Faq";
import CollegeList from "./pages/CollegeList";
import ScienceColleges from "./pages/ScienceColleges";
import CommerceColleges from "./pages/CommerceColleges";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/merit-list", label: "Merit List" },
  { path: "/documents", label: "Documents" },
  { path: "/cutoff", label: "Cutoff" },
  { path: "/college-list", label: "College List" },
  { path: "/faq", label: "FAQ" },
];

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>FYJC Admission 2026 Maharashtra | 11th Admission Guidance</title>
        <meta
          name="description"
          content="FYJC Admission 2026 Maharashtra complete guidance website. Check merit list, admission dates, documents, quota process, FAQs, helpline, and college selection."
        />
        <meta
          name="keywords"
          content="FYJC Admission 2026, Maharashtra 11th Admission, FYJC Merit List, FYJC Documents, Round 0 Admission, FYJC College List"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="FYJC Admission 2026 Maharashtra" />
        <meta property="og:description" content="Complete FYJC admission guidance website." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://11th.vercel.app" />
      </Helmet>
      <div className="min-h-screen bg-slate-100 text-slate-900">
        <header className="border-b border-slate-200 bg-white/90 sticky top-0 z-20 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                FYJC Admission 2026
              </p>
              <p className="text-lg font-semibold">Maharashtra 11th Admission Guidance</p>
            </div>
            <nav className="flex flex-wrap gap-2 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 transition ${
                      isActive
                        ? "bg-sky-600 text-white"
                        : "text-slate-600 hover:bg-slate-200"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merit-list" element={<MeritList />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/cutoff" element={<Cutoff />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/college-list" element={<CollegeList />} />
            <Route path="/science-colleges" element={<ScienceColleges />} />
            <Route path="/commerce-colleges" element={<CommerceColleges />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
