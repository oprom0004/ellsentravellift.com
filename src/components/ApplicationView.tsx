/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { APPLICATION_CASES } from "../data";
import { AppRoute } from "../types";
import { Zap, BatteryCharging, Sun, FlaskConical, Cpu, ShieldCheck } from "lucide-react";

interface ApplicationProps {
  onNavigate: (route: AppRoute) => void;
}

export default function ApplicationView({ onNavigate }: ApplicationProps) {
  const [activeCaseId, setActiveCaseId] = useState<string>("ev-charging-battery");

  // Interactive Ohm/OBC Load Estimator states:
  const [targetLoadResistance, setTargetLoadResistance] = useState<number>(200);

  // Math equations: at 800V, Power = V^2 / R = 640000 / R
  const calculatedPowerWatts = Math.min(6000, Math.round(640000 / targetLoadResistance));
  const calculatedAmps = parseFloat((800 / targetLoadResistance).toFixed(2));

  // Determine which model matches
  let suggestedModel = "eTM-8001";
  if (calculatedAmps > 5.0) suggestedModel = "eTM-8006";
  else if (calculatedAmps > 3.0) suggestedModel = "eTM-8005";
  else if (calculatedAmps > 2.0) suggestedModel = "eTM-8003";
  else if (calculatedAmps > 1.0) suggestedModel = "eTM-8002";

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BatteryCharging": return <BatteryCharging size={18} />;
      case "Sun": return <Sun size={18} />;
      case "FlaskConical": return <FlaskConical size={18} />;
      default: return <Cpu size={18} />;
    }
  };

  const activeCase = APPLICATION_CASES.find(c => c.id === activeCaseId) || APPLICATION_CASES[0];

  return (
    <div id="application-view" className="space-y-10">
      
      {/* Narrative block */}
      <section id="applications-editorial-header" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
          <Zap size={13} className="text-yellow-500" />
          <span className="text-xs font-mono font-medium text-yellow-500 uppercase tracking-wider font-semibold">Deployment Blueprint</span>
        </div>
        <h1 className="text-3xl font-sans font-bold text-gray-100 tracking-tight">
          Industrial & Research Applications of 800V DC Systems
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
          The transformation toward clean grid-ties, photovoltaic arrays, and high-voltage 800V electric vehicle architectures requires reliable, continuous testing sources. Explore direct application analyses below.
        </p>
      </section>

      {/* Case studies tabbed layout browser */}
      <section id="case-studies-browser" className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Side Tab Buttons */}
        <div className="md:col-span-4 space-y-2">
          <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">Configure Case Analysis:</span>
          {APPLICATION_CASES.map(c => (
            <button
              key={c.id}
              id={`case-tab-${c.id}`}
              type="button"
              onClick={() => setActiveCaseId(c.id)}
              className={`w-full p-4 text-left border rounded-xl transition cursor-pointer flex items-center gap-3 ${
                activeCaseId === c.id
                  ? "bg-yellow-500/10 border-yellow-500 text-gray-100"
                  : "bg-[#121214] border-gray-800 text-gray-450 hover:border-gray-700 hover:text-gray-300"
              }`}
            >
              <div className="text-yellow-500 shrink-0">
                {getIcon(c.icon)}
              </div>
              <div className="font-sans">
                <span className="block text-xs font-semibold">{c.title.split(" & ")[0].split(" for ")[0]}</span>
                <span className="block text-[9px] text-gray-500 font-mono tracking-wider">{c.subtitle}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Right Side Tab Viewer pane */}
        <div className="md:col-span-8 bg-[#121214] border border-gray-800 rounded-xl p-6 space-y-4 font-sans text-xs">
          <span className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest block">{activeCase.subtitle}</span>
          <h3 className="text-lg font-sans font-bold text-gray-150">{activeCase.title}</h3>
          
          <div className="space-y-3 py-2 text-gray-400 leading-relaxed text-[11.5px]">
            <div>
              <strong className="text-gray-200 block mb-1">Testing Challenges:</strong>
              <p>{activeCase.problem}</p>
            </div>
            <div>
              <strong className="text-gray-200 block mb-1">eTommens Modular Solution:</strong>
              <p>{activeCase.solution}</p>
            </div>
            <div className="p-3 bg-[#161619] border border-gray-800 rounded-lg">
              <strong className="text-yellow-400 block mb-1 font-mono uppercase text-[10px]">CRITICAL DEPLOYMENT PERFORMANCE:</strong>
              <p className="text-gray-300 font-mono text-[11px]">{activeCase.specDemanded}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-800 flex gap-2">
            <button
              onClick={() => onNavigate(AppRoute.PRICE)}
              className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-gray-950 font-extrabold uppercase text-[11px] rounded transition cursor-pointer"
            >
              Configure {suggestedModel} specs & prices ➔
            </button>
          </div>
        </div>

      </section>

      {/* INTERACTIVE FORMULA SOLVER & RECOMMENDED SKUS */}
      <section id="load-estimator-tool" className="bg-[#121214] border border-gray-800 p-6 rounded-xl space-y-6">
        <div>
          <h3 className="text-base font-sans font-semibold text-gray-200 mb-2 flex items-center gap-2">
            <ShieldCheck className="text-yellow-500" size={18} />
            800V Ohm Power & Cable Gauge Estimator
          </h3>
          <p className="text-xs text-gray-400">
            For hardware simulation testing, input the minimum electrical load resistance of your device-under-test to estimate peak continuous wattage requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-xs">
          
          {/* Slider input */}
          <div className="space-y-4">
            <div className="flex justify-between items-center font-mono">
              <span className="text-gray-400 uppercase">Device Under Test Resistive Load:</span>
              <span className="text-yellow-500 font-bold text-sm">{targetLoadResistance} Ohms</span>
            </div>
            <input
              id="ohms-slider"
              type="range"
              min={134}
              max={1500}
              value={targetLoadResistance}
              onChange={e => setTargetLoadResistance(parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
            />
            <div className="flex justify-between text-[9px] text-gray-500 font-mono">
              <span>134 Ohms (Full 4.8 kW)</span>
              <span>800 Ohms</span>
              <span>1500 Ohms (low current)</span>
            </div>
          </div>

          {/* Formulas Output summary */}
          <div className="bg-[#18181b] border border-gray-800 rounded-lg p-4 space-y-2 font-mono text-[11px]">
            <div className="flex justify-between text-gray-450 border-b border-gray-800 pb-1.5 mb-1.5 uppercase text-[9px] tracking-wider font-bold font-semibold">
              <span>Analytical Calculation</span>
              <span>Calculated Value</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Target Standard Voltage:</span>
              <span className="text-gray-200">800.00 Volts</span>
            </div>
            <div className="flex justify-between text-gray-400 font-semibold">
              <span>Calculated Current Draw:</span>
              <span className="text-cyan-400 font-mono font-bold">{calculatedAmps} Amps</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Active Peak Thermal Output:</span>
              <span className="text-yellow-400 font-bold">{calculatedPowerWatts.toLocaleString()} Watts ({(calculatedPowerWatts/1000).toFixed(2)} kW)</span>
            </div>
            
            <div className="flex justify-between text-gray-400 pt-1 border-t border-gray-800">
              <span>Recommended eTommens SKU Unit:</span>
              <span className="text-yellow-500 font-bold">{suggestedModel}</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
