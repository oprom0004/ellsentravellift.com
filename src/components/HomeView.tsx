/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, Sparkles, Sliders, Settings, Zap, Layers, Server, Activity, ArrowRight, Table, ZoomIn, X } from "lucide-react";
import { POWER_MODELS } from "../data";

const ROUTE_PATH_MAP = {
  "how-to-use": "/how-to-use-800v-dc-power-supply",
  "where-to-buy": "/where-to-buy-800v-dc-power-supply",
  "price": "/800v-dc-power-supply-price",
  "buy-online": "/buy-800v-dc-power-supplies-online",
  "best": "/best-800v-dc-power-supply",
  "current-series": "/1A-to-6A-800v-dc-series",
  "programmable": "/programmable-800v-dc-power-supply",
  "lab": "/800v-dc-power-supply-for-lab",
  "application": "/800v-dc-power-supply-application",
  "intro-800v": "/800v-dc-technology-introduction",
  "about-faq": "/etommens-etm-series-variable-power-supply-faq"
};

export default function HomeView() {
  // Power Configurator State
  const [selectedCurrent, setSelectedCurrent] = useState<number>(5);
  const [useCase, setUseCase] = useState<string>("lab");
  const [remoteSense, setRemoteSense] = useState<boolean>(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const matchedModel = POWER_MODELS.find(m => m.current === selectedCurrent) || POWER_MODELS[3];
  const calculatedPower = 800 * selectedCurrent;

  return (
    <div id="home-view" className="space-y-12">
      {/* Hero Section */}
      <section id="hero-section" className="relative py-16 px-6 rounded-2xl bg-radial from-yellow-500/10 via-transparent to-transparent border border-gray-800/80 bg-gradient-to-b from-[#161619] to-[#0f0f11] overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <Sparkles size={13} className="text-yellow-500" />
              <span className="text-xs font-mono font-medium text-yellow-500 uppercase tracking-wider">Industrial 800V DC Flagship Series</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-gray-100 tracking-tight leading-tight">
              Premium 800V DC <span className="text-yellow-500">Power Supply</span> Range
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
              High-precision, robust <a href="https://variabledcpowersupply.com/800v-dc-power-supplies" target="_blank" rel="noopener" className="text-[#ffbc00] hover:text-yellow-400 underline font-semibold transition-colors">800V DC power supply</a> custom-designed for mid-to-high-end <span className="text-gray-200 font-medium">high-voltage laboratories, aerospace automation, heavy industrial setups</span>, and <span className="text-gray-200 font-medium">rackmount systems</span>. Engineered for extreme reliability.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#conversion-cta"
                className="px-6 py-3 bg-[#ffbc00] hover:bg-yellow-400 text-gray-950 font-extrabold rounded-lg shadow-lg shadow-yellow-500/20 transition-all text-sm flex items-center gap-2 hover:scale-[1.03] select-none text-center cursor-pointer"
              >
                Check Online Stock & Pricing ↗
              </a>
            </div>

            {/* Micro Badge Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800/80">
              <div className="space-y-1">
                <span className="block text-xs font-mono text-gray-500 uppercase">Input Standard</span>
                <span className="block text-sm font-sans font-semibold text-gray-300">PF Corrected Grid</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-mono text-gray-500 uppercase">Voltage Stability</span>
                <span className="block text-sm font-sans font-semibold text-gray-300">≤ 0.01% drift</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-mono text-gray-500 uppercase">Standard Factor</span>
                <span className="block text-sm font-sans font-semibold text-gray-300">19" Rackmount 2U/3U</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: High-End Product Image with Click-to-Enlarge & Model Link */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-3">
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="relative group overflow-hidden rounded-2xl border border-gray-800 bg-[#121214] p-3 shadow-2xl transition-all duration-350 hover:border-yellow-500/30 cursor-zoom-in flex items-center justify-center w-full max-w-sm lg:max-w-none"
            >
              {/* Blur correction & contain styles */}
              <img
                src="/images/power_supply_800v.webp"
                alt="eTommens eTM-8003C 800V 3A Variable DC Power Supply"
                className="w-full h-auto max-h-[290px] object-contain rounded-xl transition-all duration-550 group-hover:scale-[1.01]"
                loading="eager"
                fetchPriority="high"
              />
              {/* Hover indicator overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                <div className="bg-yellow-500 text-gray-950 p-2.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn size={18} />
                </div>
                <span className="text-[11px] font-mono font-bold text-gray-200 tracking-wider uppercase">Click to Zoom</span>
              </div>
            </div>
            
            {/* Caption & Model Outbound Link */}
            <div className="text-center">
              <a 
                href="https://variabledcpowersupply.com/etm-8003c-2-kob-high-power-dc-bench-power-supply-adjustable-800v-3a-with-5-powerful-protections-output-switch-control-low-noise/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-400 hover:text-yellow-500 transition-colors uppercase tracking-widest font-semibold cursor-pointer"
              >
                Model Shown: eTM-8003C (800V 3A 2.4kW) ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Target Application Industries Segment Banner (Middle to High End focus) */}
      <section id="applications-teaser" className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { icon: Server, title: "Standard Rack Cabinet", desc: "19-inch slide-rail system optimized for industrial automated racks." },
          { icon: Activity, title: "Precision Laboratories", desc: "Ultra-low noise, remote sense feed, CE conforming safety interlocks." },
          { icon: Settings, title: "Heavy Automation", desc: "Continuous 24/7 peak loading stability with digital PLC integration." },
          { icon: Zap, title: "Advanced EV Research", desc: "800V architecture battery cell/pack simulation up to 6A load current." }
        ].map((item, id) => (
          <div key={id} className="p-4 bg-[#121214] border border-gray-800/80 rounded-xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/5 border border-yellow-500/20 flex items-center justify-center text-yellow-500 mb-2">
              <item.icon size={16} />
            </div>
            <h4 className="text-xs font-mono uppercase text-gray-200 tracking-wider font-semibold">{item.title}</h4>
            <p className="text-[11px] text-gray-400 leading-normal">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Interactive Power Configurator Tool Section */}
      <section id="power-configurator" className="bg-[#121214] border border-gray-800/80 rounded-xl p-6 relative">
        <h3 className="text-lg font-sans font-semibold text-gray-200 mb-2 flex items-center gap-2">
          <Sliders className="text-yellow-500" size={18} />
          800V DC Interactive Spec Configurator
        </h3>
        <p className="text-xs text-gray-400 mb-6 max-w-2xl leading-normal">
          Adjust current parameters to find the appropriate 800V DC model variant. This tool calculates real-time auxiliary requirements for industrial rack setup.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left panel toggles */}
          <div className="lg:col-span-6 space-y-4">
            {/* Current Range Selector */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-gray-400 uppercase">Target Peak Current Output:</span>
                <span className="text-yellow-500 font-mono font-bold">{selectedCurrent} Amps</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 5, 6].map(amp => (
                  <button
                    key={amp}
                    id={`amp-select-${amp}`}
                    type="button"
                    onClick={() => setSelectedCurrent(amp)}
                    className={`py-2 px-3 rounded-lg border text-xs font-mono font-bold transition cursor-pointer ${
                      selectedCurrent === amp
                        ? "bg-yellow-500 text-gray-950 border-yellow-500"
                        : "bg-[#18181b] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300"
                    }`}
                  >
                    {amp}A
                  </button>
                ))}
              </div>
            </div>

            {/* Target Environment */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-gray-400 uppercase">Operation Environment:</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "lab", label: "Laboratory" },
                  { id: "shop", label: "Industrial Floor" },
                  { id: "integrator", label: "OEM Rack Integration" }
                ].map(env => (
                  <button
                    key={env.id}
                    type="button"
                    onClick={() => setUseCase(env.id)}
                    className={`py-1.5 px-3 rounded-lg border text-[11px] font-sans font-medium transition cursor-pointer ${
                      useCase === env.id
                        ? "bg-yellow-500/10 border-yellow-500 text-yellow-500"
                        : "bg-[#18181b] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300"
                    }`}
                  >
                    {env.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Remote sensing toggle */}
            <div className="flex items-center justify-between p-3 bg-[#18181b] border border-gray-800 rounded-lg">
              <div className="space-y-0.5">
                <span className="block text-[11px] font-bold text-gray-300 uppercase">Enable Remote Sensing Loop</span>
                <span className="block text-[10px] text-gray-500 leading-normal">Compensates up to 3.0V drop in external cables.</span>
              </div>
              <button
                type="button"
                onClick={() => setRemoteSense(!remoteSense)}
                className={`w-11 h-6 rounded-full transition-colors relative focus:outline-none cursor-pointer ${
                  remoteSense ? "bg-yellow-500" : "bg-gray-800"
                }`}
              >
                <span className={`absolute top-1 left-1 w-4 h-4 bg-gray-950 rounded-full transition-transform ${
                  remoteSense ? "translate-x-5" : ""
                }`}></span>
              </button>
            </div>
          </div>

          {/* Right panel output specs */}
          <div className="lg:col-span-6 bg-[#18181b] border border-gray-800 rounded-xl p-4 space-y-4">
            <h4 className="text-xs font-mono uppercase text-gray-400 border-b border-gray-800 pb-2">Calculated Engineering Profile</h4>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="block text-[10px] text-gray-500 font-mono tracking-wider">RECOMMENDED SKU:</span>
                <span className="text-sm font-bold text-yellow-500 font-mono">{matchedModel.id}</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] text-gray-500 font-mono tracking-wider">CALCULATED POWER:</span>
                <span className="text-sm font-bold text-gray-200 font-mono">{(calculatedPower/1000).toFixed(2)} kW</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] text-gray-500 font-mono tracking-wider">UNIT HEIGHT:</span>
                <span className="text-sm font-bold text-gray-200 font-mono">{matchedModel.rackSize.split(" ")[0]} Unit</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] text-gray-500 font-mono tracking-wider">RECOMMENDED AWG:</span>
                <span className="text-sm font-bold text-gray-200 font-mono">
                  {selectedCurrent <= 2 ? "AWG 16 (Shielded)" : "AWG 14 (High Volt Rated)"}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-800 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Power Factor Correction (PFC):</span>
                <span className="text-gray-200 font-mono">≥ 0.98</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Suggested AC Supply Fuse:</span>
                <span className="text-gray-200 font-mono">{selectedCurrent <= 3 ? "20A Single-Phase" : "15A 3-Phase"}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2 w-full">
              <button
                type="button"
                onClick={() => {
                  window.location.href = matchedModel.buyUrl || "https://variabledcpowersupply.com/800v-dc-power-supplies";
                }}
                className="w-full py-2.5 bg-yellow-500 hover:bg-yellow-400 active:scale-[0.98] active:bg-yellow-600 text-gray-950 font-extrabold text-xs rounded-lg transition-all duration-150 text-center shadow-md shadow-yellow-500/10 flex items-center justify-center gap-1 select-none hover:scale-[1.02] cursor-pointer"
              >
                More details about {matchedModel.id} ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Lineup list (Table representation) */}
      <section id="lineup-table-section" className="space-y-4">
        <div className="flex items-center gap-2">
          <Table className="text-yellow-500" size={18} />
          <h3 className="text-lg font-sans font-semibold text-gray-200">
            eTommens eTM 800V DC Series Parameter Matrix (1A - 6A)
          </h3>
        </div>
        <div id="table-scroll-container" className="overflow-x-auto border border-gray-800 rounded-xl bg-[#121214]">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#161619] border-b border-gray-800 text-gray-400 font-mono uppercase text-[10px] tracking-wider">
                <th className="p-4">Model SKU</th>
                <th className="p-4">Rated Output</th>
                <th className="p-4">Peak Power</th>
                <th className="p-4">Height Frame</th>
                <th className="p-4">Voltage Ripple</th>
                <th className="p-4 text-right">Unit List Price</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/85">
              {POWER_MODELS.map(m => (
                <tr key={m.id} className="hover:bg-gray-800/20 text-gray-300 transition-colors">
                  <td className="p-4 font-mono font-bold text-yellow-500">{m.id}</td>
                  <td className="p-4 font-mono">800V DC / {m.current}.00A</td>
                  <td className="p-4 font-mono font-medium text-gray-100">{m.power} Watts</td>
                  <td className="p-4 font-sans text-gray-400">{m.rackSize.split(" ")[0]} Frame</td>
                  <td className="p-4 font-mono text-gray-400">{m.ripple.split(" / ")[0]}</td>
                  <td className="p-4 text-right font-mono font-bold text-gray-200">${m.basePrice.toLocaleString()} USD</td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() => {
                          window.location.href = m.buyUrl || "https://variabledcpowersupply.com/800v-dc-power-supplies";
                        }}
                        className="py-1 px-4 bg-yellow-500 hover:bg-yellow-400 active:scale-95 active:bg-yellow-600 text-gray-950 font-extrabold uppercase text-[10px] rounded transition-all duration-150 select-none shadow hover:scale-105 text-center cursor-pointer"
                      >
                        More details about {m.id} ↗
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <Link
            id="btn-nav-all-specs"
            href="/1A-to-6A-800v-dc-series"
            className="text-xs text-yellow-500 hover:text-yellow-400 flex items-center gap-1 font-mono uppercase cursor-pointer"
          >
            Review Expanded Specifications
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Quick Inner Page Index */}
      <section id="features-index-grid" className="space-y-4">
        <h3 className="text-sm font-mono uppercase tracking-wider text-gray-400">Technical Information Portal</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { tag: "GUIDE", title: "How to Use 800V Power Supply", route: "how-to-use", desc: "Step-by-step physical installation loop, remote wiring layouts and safety LOTO steps." },
            { tag: "PROCUREMENT", title: "Where to Buy 800V DC Power Supplies", route: "where-to-buy", desc: "Direct factory purchase channels, official checkout landing page, and international logistics." },
            { tag: "VALUATION", title: "800V DC Series Price List", route: "price", desc: "Detailed pricing matrices, cost factors, optional digital interfaces, and bulk volume terms." },
            { tag: "STORE", title: "Online Stock & Pricing Portal", route: "buy-online", desc: "Global depot stock search engine, real-time warehouse inventory, and official e-commerce store links." },
            { tag: "RELIABILITY", title: "Best 800V System Comparison", route: "best", desc: "Contrast analytics matching eTommens units against budget alternatives on core noise indices." },
            { tag: "CODELAB", title: "Programmable Commands SCPI", route: "programmable", desc: "Live terminal syntax simulation using standard SCPI protocols with exported Python blocks." },
            { tag: "SAFETY", title: "800V Power Supplies for Lab", route: "lab", desc: "Safety interlock system schematics, low-drift calibration, and low-ripple guidelines." },
            { tag: "CASE STUDIES", title: "High-Voltage Tech Applications", route: "application", desc: "In-depth deployment reviews in solar MPPT tracks, motor drives, and EV powertrain circuits." },
            { tag: "TECHNOLOGY", title: "800V DC Technology Intro", route: "intro-800v", desc: "Explore why 800V represents the standard electric vehicle blueprint, reducing line losses and copper weight." },
            { tag: "ABOUT / FAQ", title: "About eTommens & ETM FAQs", route: "about-faq", desc: "Discover corporate calibration standards, international shipping weights, and stateful setup responses." }
          ].map((card, idx) => (
            <Link
              key={idx}
              id={`idx-card-${idx}`}
              href={ROUTE_PATH_MAP[card.route as keyof typeof ROUTE_PATH_MAP]}
              className="p-5 bg-[#121214] border border-gray-800 hover:border-yellow-500/40 rounded-xl space-y-3 cursor-pointer hover:bg-gray-800/10 transition group block"
            >
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 bg-gray-800 uppercase tracking-widest text-gray-400 rounded">
                  {card.tag}
                </span>
                <span className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={14} />
                </span>
              </div>
              <h4 className="text-sm font-sans font-bold text-gray-200 group-hover:text-yellow-500 transition-colors">
                {card.title}
              </h4>
              <p className="text-xs text-gray-400 leading-normal">
                {card.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Official Procurement Gateway */}
      <section
        id="conversion-cta"
        className="relative py-10 px-6 rounded-2xl bg-gradient-to-br from-[#0c0c0e] to-[#121214] border border-gray-800 shadow-2xl space-y-6 overflow-hidden max-w-4xl mx-auto"
      >
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="space-y-3 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-mono text-xs uppercase tracking-wider">
            <span>Official Brand Store</span>
          </div>
          <h3 className="text-xl md:text-2xl font-sans font-bold text-gray-100 tracking-tight">
            Official Factory Store Checkout
          </h3>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            For direct online ordering, credit card payments, and factory-direct shipping, please complete your checkout at the official online store.
          </p>
        </div>

        <div className="max-w-md mx-auto pt-2 flex flex-col items-center">
          <button
            type="button"
            onClick={() => { window.location.href = "https://variabledcpowersupply.com/800v-dc-power-supplies"; }}
            className="w-full text-center py-3 bg-[#ffbc00] hover:bg-yellow-400 text-gray-950 font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 select-none shadow-lg shadow-yellow-500/10 hover:scale-[1.01] cursor-pointer"
          >
            🛒 Buy Directly from Official Store ↗
          </button>
          <span className="block text-[10px] text-gray-500 mt-2 font-mono">
            Secure checkout powered by bank-grade encrypted SSL gateway
          </span>
        </div>
      </section>

      {/* Full-screen Lightbox Modal Overlay */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 transition-opacity duration-300"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button 
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-900/80 border border-gray-850 text-gray-400 hover:text-white transition cursor-pointer"
          >
            <X size={24} />
          </button>
          
          {/* Image Container */}
          <div 
            className="relative p-4 max-w-5xl max-h-[90vh] flex flex-col items-center justify-center gap-4 animate-in fade-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <img
              src="/images/power_supply_800v.webp"
              alt="eTommens eTM-8003C 800V 3A Variable DC Power Supply"
              className="max-w-full max-h-[75vh] object-contain rounded-lg border border-gray-800 shadow-2xl"
              loading="lazy"
            />
            <div className="text-center space-y-1.5">
              <span className="block text-sm font-sans font-bold text-gray-200">eTommens eTM-8003C (800V 3A 2.4kW)</span>
              <Link 
                href="/1A-to-6A-800v-dc-series"
                onClick={() => setIsLightboxOpen(false)}
                className="inline-flex items-center gap-1 text-xs font-mono text-yellow-500 hover:underline cursor-pointer"
              >
                View ETM 800V Series Technical Specifications ➔
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
