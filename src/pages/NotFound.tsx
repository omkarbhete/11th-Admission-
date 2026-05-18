import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm text-center">
      <h1 className="text-4xl font-bold text-slate-900">404</h1>
      <p className="mt-4 text-slate-700">Page not found. Please use the main menu to navigate to the FYJC admission pages.</p>
      <Link
        to="/"
        className="mt-6 inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
