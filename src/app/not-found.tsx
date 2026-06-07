"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Home, BookOpen, Settings, HelpCircle } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 Page Not Found - eTommens 800V DC Series";
  }, []);
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center font-sans">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 animate-pulse">
          <AlertCircle size={32} />
        </div>
      </div>

      <h1 className="text-4xl font-extrabold text-gray-150 tracking-tight mb-2">
        404 - Page Calibrating
      </h1>
      <p className="text-sm text-gray-400 max-w-md mx-auto mb-8 font-mono leading-relaxed">
        The requested URL parameter or technical datasheet page is unavailable. The server loop completed with exit code 404 (Not Found).
      </p>

      {/* Helpful Inner Navigation Grid for Crawlers and Users */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10 text-left">
        <Link 
          href="/" 
          className="p-4 bg-[#121214] border border-gray-800 rounded-xl hover:border-yellow-500/30 transition group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Home size={16} className="text-yellow-500 group-hover:scale-110 transition" />
            <div>
              <span className="block text-xs font-bold text-gray-200">800V Home</span>
              <span className="block text-[10px] text-gray-500">Go to main technical directory</span>
            </div>
          </div>
        </Link>

        <Link 
          href="/1A-to-6A-800v-dc-series" 
          className="p-4 bg-[#121214] border border-gray-800 rounded-xl hover:border-yellow-500/30 transition group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <BookOpen size={16} className="text-yellow-500 group-hover:scale-110 transition" />
            <div>
              <span className="block text-xs font-bold text-gray-200">1A-6A SKU Specs</span>
              <span className="block text-[10px] text-gray-500">Review complete ratings matrix</span>
            </div>
          </div>
        </Link>

        <Link 
          href="/programmable-800v-dc-power-supply" 
          className="p-4 bg-[#121214] border border-gray-800 rounded-xl hover:border-yellow-500/30 transition group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Settings size={16} className="text-yellow-500 group-hover:scale-110 transition" />
            <div>
              <span className="block text-xs font-bold text-gray-200">Automation Guide</span>
              <span className="block text-[10px] text-gray-500">SCPI programming commands</span>
            </div>
          </div>
        </Link>

        <Link 
          href="/etommens-etm-series-variable-power-supply-faq" 
          className="p-4 bg-[#121214] border border-gray-800 rounded-xl hover:border-yellow-500/30 transition group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <HelpCircle size={16} className="text-yellow-500 group-hover:scale-110 transition" />
            <div>
              <span className="block text-xs font-bold text-gray-200">Interactive FAQ</span>
              <span className="block text-[10px] text-gray-500">Get technical answers</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex justify-center gap-4">
        <Link
          href="/"
          className="py-2.5 px-5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-gray-950 font-extrabold text-xs uppercase rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
        >
          <Home size={13} />
          Back to Directory
        </Link>
        <button
          onClick={() => window.history.back()}
          className="py-2.5 px-5 bg-transparent hover:bg-gray-800/40 text-gray-400 hover:text-white rounded-lg text-xs transition border border-gray-800 cursor-pointer font-semibold flex items-center gap-1.5"
        >
          <ArrowLeft size={13} />
          Go Back
        </button>
      </div>
    </div>
  );
}
