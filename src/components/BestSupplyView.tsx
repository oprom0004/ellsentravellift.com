/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import Link from "next/link";
import { TECHNICAL_COMPARISONS } from "../data";
import { Award, AlertCircle, ArrowRight } from "lucide-react";

export default function BestSupplyView() {
  return (
    <div id="best-supply-view" className="space-y-10">
      {/* Editorial guide title block */}
      <section id="ranking-content-editorial" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
          <Award size={13} className="text-yellow-500" />
          <span className="text-xs font-mono font-medium text-yellow-500 uppercase tracking-wider">Benchmark Standards</span>
        </div>
        <h1 className="text-3xl font-sans font-bold text-gray-100 tracking-tight">
          What Defines the Best 800V DC Power Supply for High Voltage R&D?
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
          Selecting a high-voltage power system is a long-term commitment. Low-quality power supplies suffer from high residual AC noise ripple, long transient recovery lags that trigger protective safety shutdowns. When choosing the <a href="https://variabledcpowersupply.com/800v-dc-power-supplies" target="_blank" rel="noopener" className="text-yellow-500 hover:text-yellow-400 underline font-semibold transition-colors">best 800V DC power supply</a>, this analytical guide presents standard benchmark criteria contrasting <span className="text-gray-200 font-bold">eTommens Premium High-Voltage Units</span> against generic components.
        </p>
      </section>

      {/* Grid of core metrics */}
      <section id="evaluation-criteria-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "1. Ultra-Low Ripple voltage (<0.01% V-rated)",
            desc: "Residual high-frequency switching noise on 800V supplies can skew delicate semiconductor drift measurements or disrupt battery management (BMS) communications. Best-in-class units incorporate multi-stage active filter circuits."
          },
          {
            title: "2. Isolation Boundary Rating (3000VAC+)",
            desc: "When connected to high-voltage equipment, proper physical isolation prevents current feedback surges. Superior power supplies include isolated optical interfaces and heavy chassis earthing bolts."
          },
          {
            title: "3. Rapid Transient Response (<1.5ms)",
            desc: "Active electrical loads switch current draw states in microseconds. A fast recovery speed keeps voltage within ±1% limits, preventing system breakdowns or device-under-test damage during power swings."
          }
        ].map((item, id) => (
          <div key={id} className="p-5 bg-[#121214] border border-gray-800 rounded-xl space-y-3">
            <div className="text-xs font-sans font-bold text-yellow-400">{item.title}</div>
            <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Side-by-side comparison directory */}
      <section id="comparative-matrix-segment" className="space-y-4">
        <h3 className="text-xs font-mono uppercase text-gray-400 tracking-wider">
          Side-By-Side Technical Contrast Ledger (eTommens Gen-II vs Budget Generic)
        </h3>

        <div id="comparison-cards-holder" className="space-y-4">
          {TECHNICAL_COMPARISONS.map((comp, idx) => (
            <div key={idx} className="bg-[#121214] border border-gray-800 rounded-xl p-5 space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                <span className="font-sans font-bold text-gray-200 text-sm">{comp.feature}</span>
                <span className="text-[10px] bg-yellow-500/10 text-yellow-500 font-mono tracking-wider px-2 py-0.5 rounded">
                  METRIC {idx + 1}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#161619] p-3 border border-gray-800 rounded-lg space-y-1">
                  <span className="block text-[10px] font-mono text-emerald-500 font-bold uppercase">eTommens Premium standard:</span>
                  <p className="text-[11px] text-gray-350 leading-relaxed font-mono">{comp.ellsenSpec}</p>
                </div>
                <div className="bg-[#161619] p-3 border border-gray-800 rounded-lg space-y-1">
                  <span className="block text-[10px] font-mono text-red-400 font-bold uppercase">Generic Low-Rate Standard:</span>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-mono">{comp.cheaperSpec}</p>
                </div>
              </div>

              <div className="text-[11px] text-gray-500 leading-relaxed pt-1 select-none flex items-start gap-1.5">
                <AlertCircle size={13} className="text-yellow-500 shrink-0 mt-0.5" />
                <span><strong>Impact on Testing:</strong> {comp.importance}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended actions box */}
      <section id="recommendations-curated" className="bg-[#121214] border border-gray-800 rounded-xl p-6">
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-yellow-500">Choosing the Best 800V Model</h4>
          <p className="text-xs text-gray-400 leading-normal">
            For pure R&D, physical material labs, and high-precision sensors, choose the <span className="text-gray-200 font-bold">eTommens eTM-8001 (1A)</span> with high resolution sensing. For EV components testing and battery charging, choose the robust active PFC high thermal density <span className="text-gray-200 font-bold">eTommens eTM-8005 (5A)</span> or <span className="text-gray-200 font-bold">eTM-8006 (6A)</span> with embedded I-V profile controllers.
          </p>
          <div className="pt-2">
            <Link
              id="best-supply-navigate-specs"
              href="/1A-to-6A-800v-dc-series"
              className="text-xs text-yellow-500 font-mono flex items-center gap-1 hover:text-yellow-400 cursor-pointer"
            >
              Examine model spectrum (1A to 6A)
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
