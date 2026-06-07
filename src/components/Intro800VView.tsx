/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Zap, ShieldCheck, Cpu, Sliders, Layers, Sparkles, AlertTriangle } from "lucide-react";

export default function Intro800VView() {
  return (
    <div id="intro-800v-view" className="space-y-8 animate-fade-in">
      
      {/* Editorial Banner */}
      <section id="intro-hero" className="p-8 rounded-2xl bg-gradient-to-r from-[#141417] to-[#0d0d0f] border border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/[0.03] rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[10px] font-mono text-yellow-500 tracking-wider uppercase font-bold">
            <Zap size={11} /> 800V High-Voltage Paradigm
          </div>
          <h2 className="text-3xl font-sans font-extrabold text-white tracking-tight">
            Understanding 800V DC Power Tech
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed font-sans">
            The transition from low-voltage systems to high-voltage direct current (HVDC) architectures like <a href="https://variabledcpowersupply.com/800v-dc-power-supplies" target="_blank" rel="noopener" className="text-yellow-500 hover:text-yellow-400 underline font-semibold transition-colors">800V DC power supply</a> systems represents a monumental shift across electric vehicles, renewable storage grid integrations, aerospace electronics, and core research laboratorial test loops. Discover why 800V is the sweet spot of heavy duty simulation.
          </p>
        </div>
      </section>

      {/* Core Insights Grid */}
      <section id="core-insights" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Industry standard */}
        <div className="p-6 bg-[#121214] border border-gray-800 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500">
            <Cpu size={20} />
          </div>
          <h3 className="text-md font-sans font-bold text-gray-200">The 800V EV Standard</h3>
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            Leading automotive manufacturers are abandoning traditional 400V power blocks for 800V architectures. This doubles the charging speed, minimizes heat dissipation, and decreases the copper weight of cables inside high-density electric vehicle drivetrains.
          </p>
        </div>

        {/* Efficiency */}
        <div className="p-6 bg-[#121214] border border-gray-800 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Layers size={20} />
          </div>
          <h3 className="text-md font-sans font-bold text-gray-200">Minimal Line Losses</h3>
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            Applying the fundamental law of electric power (<span className="font-mono text-gray-300">P = I²R</span>), running systems at 800V drops the transmission current (<span className="font-mono text-gray-300">I</span>) needed for a given power level, which mathematically slashes cable resistance heat loss exponentially.
          </p>
        </div>

        {/* Safety regulations */}
        <div className="p-6 bg-[#121214] border border-gray-800 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
            <ShieldCheck size={20} />
          </div>
          <h3 className="text-md font-sans font-bold text-gray-200">Laboratory Precautions</h3>
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            High voltages above 600V demand specialized insulating barriers, fast isolation relays, and remote interlock options. Standard power supplies bypass these, whereas professional 800V DC Series incorporate structural safety first.
          </p>
        </div>
      </section>

      {/* Tech Specifications and Applications details */}
      <section id="specs-breakdown" className="bg-[#121214] border border-gray-800 rounded-xl p-6 space-y-6">
        
        <div className="border-b border-gray-800 pb-4">
          <h3 className="text-lg font-sans font-semibold text-gray-200">
            Key Engineering Advantages of eTommens 800V Variable DC Supplies
          </h3>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            How eTM units optimize extreme high-voltage operations while guaranteeing lab-grade noise indices and seamless PC software programming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs text-gray-300">
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center shrink-0 font-mono font-bold">1</div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-200">Dual-Frequency Switching Core</h4>
                <p className="text-gray-400 leading-relaxed">
                  Utilizes state-of-the-art dual frequency switching control topology. Minimizes internal energy dissipation by up to 35% compared to legacy linear or single-frequency designs, satisfying strict green laboratory standards.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center shrink-0 font-mono font-bold">2</div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-200">Advanced Voltage Discharge Circuit</h4>
                <p className="text-gray-400 leading-relaxed">
                  Shutting down 800V manually can normally pose a residual capacitor storage hazard. ETM 800V supplies incorporate direct active discharge logic, safely draining maximum output terminals to under 10V within only 1.5 seconds.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center shrink-0 font-mono font-bold">3</div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-200">Galvanic Isolation Integrity</h4>
                <p className="text-gray-400 leading-relaxed">
                  Safety rating reaches up to 3000VAC dry galvanic isolation barriers. Bypasses external high voltage surges completely from backing up into upper operational computers or operator-adjacent controllers.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center shrink-0 font-mono font-bold">4</div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-200">Pre-configuration & Decimal Overflows</h4>
                <p className="text-gray-400 leading-relaxed">
                  Preset high-precision knobs enable fine and coarse values to be dialled before output is toggled ON. Multi-digit micro LED indicators automatically scale the decimal floating carry based on active configuration ratings.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center shrink-0 font-mono font-bold">5</div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-200">Short Circuit Ignition Resistance</h4>
                <p className="text-gray-400 leading-relaxed">
                  Includes unique hardware safeguards designed to endure continuous full loads and short-circuit sparks. Extremely helpful in testing switchgears, circuit breakers, or material drawing machines under stressful load spikes.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center shrink-0 font-mono font-bold">6</div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-200">Smart Temperature Noise Fan</h4>
                <p className="text-gray-400 leading-relaxed font-sans">
                  Dual-active speed intelligent cooling system stays completely silent under low power output, only engaging high-capacity exhaust flow when temperature indices cross predefined safety threshold limits.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Safety Warning Highlight */}
      <section id="safety-disclaimer" className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 flex gap-3 items-center">
        <div className="w-8 h-8 rounded bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
          <AlertTriangle size={16} />
        </div>
        <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
          <span className="text-red-400 font-bold uppercase tracking-wider font-mono mr-1">High Voltage Warning:</span>
          800V DC is highly conductive. When researching using eTM variable supplies, operators must employ personal protective equipment (PPE), maintain minimum clearance boundaries, and verify dry galvanic grounds are strictly interconnected.
        </p>
      </section>

    </div>
  );
}
