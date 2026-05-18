import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>FYJC Admission 2026 Maharashtra | Home</title>
        <meta
          name="description"
          content="FYJC Admission 2026 Maharashtra - latest merit list updates, important dates, document checklist, quota guidance, Marathi and English support."
        />
      </Helmet>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">FYJC Admission 2026 Maharashtra</h1>
        <p className="mt-4 text-slate-700 leading-7">
          Welcome to the FYJC 11th admission guidance portal for Maharashtra. Find updated information for Mumbai FYJC admission, Pune FYJC colleges, science cutoff, commerce cutoff, arts colleges, Round 0 meaning, minority quota, spot round details and more.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Merit List Updates", href: "/merit-list" },
            { title: "Required Documents", href: "/documents" },
            { title: "Cutoff and Quota", href: "/cutoff" },
            { title: "College List", href: "/college-list" },
            { title: "Science Colleges", href: "/science-colleges" },
            { title: "Commerce Colleges", href: "/commerce-colleges" },
          ].map((card) => (
            <Link
              key={card.href}
              to={card.href}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-sm font-medium text-slate-800 transition hover:border-sky-300 hover:bg-sky-50"
            >
              {card.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Important Dates</h2>
        <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-700">
          <li>21-22 May 2026: New registration and form editing window</li>
          <li>23-26 May 2026: Allotment process for FYJC admission</li>
          <li>26 May 2026: Merit List release and confirmation deadlines</li>
          <li>Round 0 admission: 16-19 May 2026 for quota and special category seats</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">FYJC Admission Topics Covered</h2>
        <div className="mt-4 space-y-4 text-slate-700">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">FYJC Merit List 2026</h3>
            <p className="mt-2 leading-7">
              Track the latest merit list updates, how to check your college allotment, and what to do if you need to file a correction or complaint before the deadline.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Mumbai FYJC Admission</h3>
            <p className="mt-2 leading-7">
              Get local guidance for Mumbai FYJC colleges, Round 0 admission, quota seats, minority quota, and spot round options.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Pune FYJC Colleges</h3>
            <p className="mt-2 leading-7">
              Discover the best colleges in Pune for science, commerce, and arts courses, plus document requirements and cutoff information.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Science, Commerce, and Arts Cutoff</h3>
            <p className="mt-2 leading-7">
              Learn about cutoff trends for FYJC science, commerce, and arts streams so you can choose the best college and subject group.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Round 0 Meaning</h3>
            <p className="mt-2 leading-7">
              Round 0 admission is the first special round for quota seats and early allotments. Find how it works and what documents are essential.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
