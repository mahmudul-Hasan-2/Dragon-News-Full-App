"use client";

import { Newspaper, RotateCcw } from "lucide-react";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center bg-white rounded-3xl border border-slate-100 shadow-sm">
      {/* Icon Container with subtle animation */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-purple-100 rounded-full blur-2xl opacity-40 animate-pulse" />
        <div className="relative bg-purple-50 p-6 rounded-full border border-purple-100">
          <Newspaper size={48} className="text-purple-600 stroke-[1.5px]" />
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
        No News Available
      </h3>

      <p className="mt-3 text-slate-500 max-w-sm leading-relaxed">
        We couldn&apos;t find any news in this category at the moment. Our
        editors are working hard to bring you the latest updates!
      </p>

      {/* Refresh Button */}
      <button
        onClick={() => window.location.reload()}
        className="mt-8 flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-200"
      >
        <RotateCcw size={18} />
        Check for Updates
      </button>
    </div>
  );
};

export default NotFound;
