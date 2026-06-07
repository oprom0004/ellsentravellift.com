/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { FlaskConical, ShieldCheck, ShieldAlert, Cpu, HeartPulse } from "lucide-react";

export default function LabUseView() {
  const [safetyInterlocked, setSafetyInterlocked] = useState<boolean>(true);

  return (
    <div id="lab-use-view" className="space-y-10">
      
      {/* Intro section */}
      <section id="laboratory-focus-header" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
          <FlaskConical size={13} className="text-yellow-500" />
          <span className="text-xs font-mono font-medium text-yellow-500 uppercase tracking-wider font-semibold">Laboratory Specifications</span>
        </div>
        <h1 className="text-3xl font-sans font-bold text-gray-100 tracking-tight">
          800V DC Power Supplies for High Voltage Laboratories
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
          Scientific R&D cells, university electrical engineering classrooms, and national aerospace testing beds require a precise <a href="https://variabledcpowersupply.com/800v-dc-power-supplies" target="_blank" rel="noopener" className="text-yellow-500 hover:text-yellow-400 underline font-semibold transition-colors">800V laboratory DC power supply</a> with rigorous safety precautions. Traditional high-voltage sources lack proper user barriers. eTommens power supplies deploy <span className="text-gray-200">galvanic hardware safety interlocks, remote sensings, and under-75mV residual voltage ripplings</span> specifically customized for precision research environments.
        </p>
      </section>

      {/* Grid of lab specific qualifications */}
      <section id="laboratory-advantages" className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: Cpu, title: "16-Bit Resolution DACs", desc: "Allows precision tuning increments of 12mV. Critical for tracing material dielectric breakdown curves." },
          { icon: ShieldCheck, title: "Ultra Stable Compensation", desc: "Maintains exact selected voltage thresholds with drift deviations under ±0.01% of full scale over 8 hours." },
          { icon: HeartPulse, title: "DB9 Rear Panel Interlock", desc: "A physical contact switch loop. If safety doors or enclosure domes are opened, the unit shuts off instantly." },
          { icon: ShieldAlert, title: "Active Capacitor Bleeder", desc: "Safety discharge circuitry actively bleeds hazardous high-voltage residual levels down below 40V in under 2 seconds." }
        ].map((item, id) => (
          <div key={id} className="p-5 bg-[#121214] border border-gray-800 rounded-xl space-y-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/5 border border-yellow-500/20 flex items-center justify-center text-yellow-500">
              <item.icon size={16} />
            </div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-200 font-bold">{item.title}</h4>
            <p className="text-[11px] text-gray-400 leading-normal">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* INTERACTIVE INTERLOCK SYSTEM DESIGN FOR SAFETY */}
      <section id="interlock-simulator-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121214] border border-gray-800 rounded-xl p-6">
        
        {/* Left explanation detail */}
        <div className="lg:col-span-7 space-y-4">
          <span className="block text-[9px] font-mono text-yellow-500 uppercase tracking-widest">Safety Safeguard Simulation</span>
          <h3 className="text-lg font-sans font-bold text-gray-150">DB9 Hardwired Safety Interlock Loop</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            The rear panel of every eTommens unit incorporates a DB9 interlock terminal block. Laboratories connect this loop to physical door limit switches or emergency shut-off plunger buttons. If a student or worker enters the high-voltage test area, the physical contact path opens, triggering an absolute mechanical-level solid-state shutdown of the high-voltage IGBT inverter stage, independent of microprocessor commands.
          </p>

          <div className="flex items-center gap-3 bg-[#18181b] p-3 border border-gray-800 rounded-lg">
            <div className="space-y-0.5">
              <span className="block text-xs font-bold text-gray-350">Toggle Physical Area Gate Switch:</span>
              <span className="block text-[10px] text-gray-500">Simulate opening the test area barrier door.</span>
            </div>
            <button
              id="btn-gate-interlock-toggle"
              type="button"
              onClick={() => setSafetyInterlocked(!safetyInterlocked)}
              className={`ml-auto py-1 px-3 border rounded text-[10px] font-mono font-bold tracking-wider cursor-pointer ${
                safetyInterlocked
                  ? "bg-emerald-950 border-emerald-500 text-emerald-400"
                  : "bg-red-950 border-red-500 text-red-400"
              }`}
            >
              {safetyInterlocked ? "GATE SHUT (SAFE)" : "GATE OPEN (LATCH)"}
            </button>
          </div>
        </div>

        {/* Right simulated display card */}
        <div className="lg:col-span-5 bg-[#18181b] border border-gray-800 rounded-xl p-5 text-center space-y-4">
          <span className="block text-left text-[9px] font-mono text-gray-500 uppercase">PSU REAR PANEL STATUS</span>

          <div className={`p-6 border rounded-lg transition-colors ${
            safetyInterlocked
              ? "border-emerald-500/20 bg-emerald-500/[0.02]"
              : "border-red-500/30 bg-red-500/[0.04]"
          }`}>
            {safetyInterlocked ? (
              <div className="space-y-2">
                <div className="text-2xl font-mono text-emerald-400 font-bold tracking-wide">800.00 V</div>
                <span className="text-[10px] font-bold text-emerald-500 font-mono tracking-widest uppercase block">
                  ● HIGH VOLTAGE READY
                </span>
                <p className="text-[10px] text-gray-500 font-sans leading-normal">
                  Hardwired safety interlock circuit closed. Output is permitted to activate.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-2xl font-mono text-red-500 font-bold tracking-wide">0.00 V</div>
                <span className="text-[10px] font-bold text-red-400 font-mono tracking-widest uppercase block">
                  ▲ ABSOLUTE INTERLOCK TRIP
                </span>
                <p className="text-[10px] text-red-400/80 font-sans leading-normal font-medium">
                  CRITICAL: Rear DB9 circuit loop opened! High Volt output shut-down within 1.4 microseconds.
                </p>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* Technical Standards & EEAT Citations Section */}
      <section id="technical-references" className="bg-[#121214] border border-gray-800 rounded-xl p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          <h4 className="text-xs font-mono uppercase text-gray-200 tracking-wider">Technical Standards & Regulatory Citations</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-2 text-gray-400">
            <p className="leading-relaxed">
              Laboratory high-voltage electrical setups must satisfy strict safety requirements for testing personnel. Compliance with the international standard <a href="https://www.iec.ch" target="_blank" rel="noopener" className="text-yellow-500 hover:underline">IEC 61010-1 Safety Requirements</a> is essential to ensure measurement and control equipment used in laboratories prevents shock hazards under normal and single-fault conditions.
            </p>
          </div>
          <div className="space-y-2 text-gray-405">
            <p className="leading-relaxed">
              For academic research cells and semiconductor testing requiring low ripple limits, refer to the official <a href="https://variabledcpowersupply.com/etm-8001-4-kob-0-800v-0-1a-high-power-bench-dc-power-supply-variable-with-4-digits-led-display-encoder-coarse-fine-adjustments-knob-short-circuit-protection/" target="_blank" rel="noopener" className="text-yellow-500 hover:underline font-semibold">eTM-8001 Low-Noise Precision Model Specs</a>. It delivers a 1A rated output with low drift deviations and a precise 12mV tuning resolution.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
