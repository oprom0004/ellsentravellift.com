/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { POWER_MODELS } from "../data";
import { Activity } from "lucide-react";

export default function CurrentSeriesView() {
  const [activeAmperage, setActiveAmperage] = useState<number>(5);

  const matched = POWER_MODELS.find(m => m.current === activeAmperage) || POWER_MODELS[3];

  // Helper arrays describing each current option
  const listSpecs = [
    {
      amp: 1,
      targetUseCase: "Academic & Lab Precision Sensing",
      voltage: "800.0V",
      powerWatts: "800W",
      dimensions: "19-inch 2U Space",
      cableGauge: "AWG 18 (Shielded Teflon)",
      fanStyle: "Eco Silent Dual Exhaust"
    },
    {
      amp: 2,
      targetUseCase: "ATE Cabinet Systems & Coil Testing",
      voltage: "800.0V",
      powerWatts: "1,600W (1.6 kW)",
      dimensions: "19-inch 2U Space",
      cableGauge: "AWG 16 (Shielded Teflon)",
      fanStyle: "Dynamic Fan Speed Control"
    },
    {
      amp: 3,
      targetUseCase: "Material Creep Stress & Solar Cells",
      voltage: "800.0V",
      powerWatts: "2,400W (2.4 kW)",
      dimensions: "19-inch 3U Rugged",
      cableGauge: "AWG 14 (High Volt Rated)",
      fanStyle: "High Density Twin Impellers"
    },
    {
      amp: 5,
      targetUseCase: "Battery Pack Simulation & Inverters",
      voltage: "800.0V",
      powerWatts: "4,000W (4.0 kW)",
      dimensions: "19-inch 3U Rugged",
      cableGauge: "AWG 14 (High Volt Rated)",
      fanStyle: "Redundant Thermal Vent Hoods"
    },
    {
      amp: 6,
      targetUseCase: "Electric Drivetrain, Motors & Servo Drives",
      voltage: "800.0V",
      powerWatts: "4,800W (4.8 kW)",
      dimensions: "19-inch 3U Heavy Duty",
      cableGauge: "AWG 12 (Heavy Isolation Silicone)",
      fanStyle: "Triple Exhaust High-Stat Fan"
    }
  ];

  const currentSpecDetail = listSpecs.find(s => s.amp === activeAmperage) || listSpecs[3];

  return (
    <div id="current-series-view" className="space-y-10">
      
      {/* Editorial explanation */}
      <section id="series-intro-block" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
          <Activity size={13} className="text-yellow-500" />
          <span className="text-xs font-mono font-medium text-yellow-500 uppercase tracking-wider font-semibold">Chassis Current Configurations</span>
        </div>
        <h1 className="text-3xl font-sans font-bold text-gray-100 tracking-tight text-sans">
          800V DC Power Supply Current Ratings: 1A, 2A, 3A, 5A to 6A
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
          Varying current thresholds require different gauge conductor windings, thermal management designs, and input AC grid phases. The eTommens eTM series categorizes key <a href="https://variabledcpowersupply.com/800v-dc-power-supplies" target="_blank" rel="noopener" className="text-yellow-500 hover:text-yellow-400 underline font-semibold transition-colors">800V DC power supply current ratings</a> range from 1A, 2A, 3A, 5A to 6A to fit standard 19-inch rack enclosures. Adjust the slider or pick an amperage level to review custom design profiles.
        </p>
      </section>

      {/* Selector button bar for 1A, 2A, 3A, 5A, 6A */}
      <section id="amperage-spec-explorer" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left side checklist parameters picker */}
        <div className="md:col-span-4 space-y-4">
          <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest">Select Amperage SKU Level:</span>
          
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 5, 6].map(amp => (
              <button
                key={amp}
                id={`amp-btn-explore-${amp}`}
                type="button"
                onClick={() => setActiveAmperage(amp)}
                className={`p-4 text-left border rounded-xl transition cursor-pointer flex justify-between items-center ${
                  activeAmperage === amp
                    ? "bg-yellow-500/10 border-yellow-500 text-gray-100"
                    : "bg-[#121214] border-gray-800 text-gray-450 hover:border-gray-700 hover:text-gray-300"
                }`}
              >
                <div className="space-y-0.5 font-sans">
                  <span className="block text-xs font-bold font-sans">800V DC Series - {amp} Amp Unit</span>
                  <span className="block text-[10px] text-gray-500 uppercase font-mono">
                    Peak Power: {amp * 800} Watts
                  </span>
                </div>
                <span className="text-sm font-mono font-bold text-yellow-500">{amp}A</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right side detailed card configuration */}
        <div className="md:col-span-8 bg-[#121214] border border-gray-800 rounded-xl p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 pb-4 border-b border-gray-800">
            <div>
              <span className="block text-[9px] font-mono text-yellow-500 uppercase tracking-widest">Target Application Scope</span>
              <h3 className="text-base font-sans font-bold text-gray-150">{currentSpecDetail.targetUseCase}</h3>
            </div>
            <div className="bg-[#161619] px-3 py-1.5 border border-gray-800 rounded font-mono text-right shrink-0">
              <span className="block text-[10px] text-gray-500">MAX CONTINUOUS POWER</span>
              <span className="block text-sm text-yellow-500 font-bold font-mono">{currentSpecDetail.powerWatts}</span>
            </div>
          </div>

          {/* Grid profile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-gray-400">
            <div className="space-y-1">
              <span className="text-gray-500 text-[10px] uppercase">Voltage Spec Range:</span>
              <span className="block text-gray-200">{currentSpecDetail.voltage} Fixed limit</span>
            </div>
            <div className="space-y-1">
              <span className="text-gray-500 text-[10px] uppercase">Racks Fitting Layout:</span>
              <span className="block text-gray-200">{currentSpecDetail.dimensions}</span>
            </div>
            <div className="space-y-1">
              <span className="text-gray-500 text-[10px] uppercase">Mandatory Cable Connection:</span>
              <span className="block text-gray-200">{currentSpecDetail.cableGauge}</span>
            </div>
            <div className="space-y-1">
              <span className="text-gray-500 text-[10px] uppercase">Cooling Fans Module:</span>
              <span className="block text-gray-200">{currentSpecDetail.fanStyle}</span>
            </div>
          </div>

          {/* Dynamic Interactive SVG Graph illustrating power vs voltage line */}
          <div className="bg-black/30 border border-gray-900 rounded-lg p-4 text-center space-y-2">
            <span className="block text-left text-[9px] font-mono text-gray-500 uppercase tracking-wider">
              Calculated Operating Envelope Curve ({activeAmperage}A Frame)
            </span>
            <div className="h-32 flex items-center justify-center">
              <svg className="w-full h-full max-w-sm" viewBox="0 0 100 40">
                {/* Background grid line vectors */}
                <line x1="10" y1="5" x2="10" y2="35" stroke="#1f2937" strokeWidth="0.5" />
                <line x1="50" y1="5" x2="50" y2="35" stroke="#1f2937" strokeWidth="0.5" />
                <line x1="90" y1="5" x2="90" y2="35" stroke="#1f2937" strokeWidth="0.5" />
                <line x1="10" y1="35" x2="90" y2="35" stroke="#1f2937" strokeWidth="0.5" />
                <line x1="10" y1="5" x2="90" y2="5" stroke="#1f2937" strokeWidth="0.5" />
                
                {/* Target Operating Envelope shaded area */}
                <polygon
                  points={`10,5 90,5 90,35 10,35`}
                  fill="rgba(234, 179, 8, 0.05)"
                  stroke="#eab308"
                  strokeWidth="1"
                />

                {/* Voltage markings */}
                <text x="10" y="39" fill="#4b5563" fontSize="3" textAnchor="middle">0V</text>
                <text x="50" y="39" fill="#4b5563" fontSize="3" textAnchor="middle">400V</text>
                <text x="90" y="39" fill="#4b5563" fontSize="3" textAnchor="middle">800V</text>

                {/* Current markings */}
                <text x="8" y="35" fill="#4b5563" fontSize="3" textAnchor="end">0A</text>
                <text x="8" y="5" fill="#eab308" fontSize="3" textAnchor="end" fontWeight="bold">{activeAmperage}A</text>

                {/* Interactive Operating Point bubble */}
                <circle cx="90" cy="5" r="2" fill="#eab308" className="animate-ping" />
                <circle cx="90" cy="5" r="1.5" fill="#eab308" />
              </svg>
            </div>
            <p className="text-[10px] text-gray-500 font-mono">
              The eTM constant-current technology maintains nominal current safety margin up to the maximum 800V voltage, yielding a true constant power operation range.
            </p>
          </div>
        </div>

      </section>

      {/* Complete 800V DC Series Model Lineup Directory */}
      <section id="all-models-directory" className="space-y-6 pt-8 border-t border-gray-800">
        <div>
          <h3 className="text-lg font-sans font-bold text-gray-200 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
            800V DC Power Supply Complete Specifications Matrix
          </h3>
          <p className="text-xs text-gray-400 mt-1 max-w-4xl">
            Compare technical parameters, interface characteristics, and direct purchase channels across all 10 standard and C-series models. All documentation links refer to official product entries.
          </p>
        </div>

        <div className="overflow-x-auto border border-gray-800 rounded-xl bg-[#121214]">
          <table className="w-full border-collapse text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/50 text-[10px] uppercase tracking-wider text-gray-450 font-mono">
                <th className="p-4 font-semibold">Model SKU</th>
                <th className="p-4 font-semibold">Rated Output</th>
                <th className="p-4 font-semibold">Peak Power</th>
                <th className="p-4 font-semibold">Interface Control Type</th>
                <th className="p-4 font-semibold text-right">Unit Price</th>
                <th className="p-4 font-semibold text-center">Documentation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 text-gray-300">
              {POWER_MODELS.map(m => {
                const isCModel = m.id.endsWith("C");
                return (
                  <tr key={m.id} className="hover:bg-gray-800/10 transition-colors">
                    <td className="p-4 font-mono font-bold">
                      <span className="text-yellow-500">{m.id}</span>
                      <span className={`ml-2 text-[9px] px-1.5 py-0.5 rounded font-mono ${
                        isCModel 
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                          : "bg-gray-800 text-gray-400"
                      }`}>
                        {isCModel ? "C-Series" : "Standard"}
                      </span>
                    </td>
                    <td className="p-4 font-mono">800V / {m.current}A</td>
                    <td className="p-4 font-mono">{m.power} Watts</td>
                    <td className="p-4 text-gray-400">
                      {isCModel 
                        ? "2-Knob control (independent Output Switch, 5 protections)" 
                        : "4-Knob control (dedicated Coarse/Fine adjustments)"
                      }
                    </td>
                    <td className="p-4 font-mono text-right font-bold text-gray-200">${m.basePrice} USD</td>
                    <td className="p-4 text-center">
                      <a
                        href={m.buyUrl}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-yellow-500 hover:text-yellow-400 underline decoration-yellow-500/20 hover:decoration-yellow-400/50 transition-colors whitespace-nowrap"
                      >
                        View {m.id} Spec ↗
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
