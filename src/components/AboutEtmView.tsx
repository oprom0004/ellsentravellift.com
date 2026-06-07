/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Cpu, Globe, Mail, Clock } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "Safety" | "Specifications" | "Programming" | "Shipping";
}

export default function AboutEtmView() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "Specifications",
      question: "How many SKU configurations exist in the ETM 800V DC Series?",
      answer: "We offer five standard high-power variable configurations built specifically around the 800V high-voltage blueprint: eTM-8001 (1A / 800W), eTM-8002 (2A / 1.6kW), eTM-8003 (3A / 2.4kW), eTM-8005 (5A / 4kW), and our flagship heavy-duty eTM-8006 (6A / 4.8kW). Custom higher-current designs can be commissioned directly via our corporate support desk."
    },
    {
      category: "Safety",
      question: "What are the structural safety protection modules on ETM variable supplies?",
      answer: "Every ETM series supply features five levels of hardware-level intelligent protection: Over-Voltage Protection (OVP), Over-Current Protection (OCP), Over-Power Protection (OPP), Over-Temperature Protection (OTP), and robust short-circuit defense. Under any overload trigger, the unit will disconnect active relay output terminals in under 10 microseconds to protect sensitive external loads."
    },
    {
      category: "Programming",
      question: "Does the ETM series support SCPI computer interfaces or PLC automation?",
      answer: "Yes. Customers can select optional rear communication interfaces including RS232, RS485, and USB. Our firmware conforms to the international standard SCPI protocol, allowing you to control power status, adjust voltage/current parameters, or build automated thermal burn-in script loops using Python, LabVIEW, or MATLAB."
    },
    {
      category: "Safety",
      question: "How does the SENSE compensation terminal improve voltage accuracy?",
      answer: "When running at high currents, fine cables experience minor voltage drops. The ETM rear-sensing terminal (S+/S-) feeds the actual voltage at the load side back into our internal feedback operational amplifiers, automatically raising the output slightly to ensure 100% precision directly at your high-voltage target rails."
    },
    {
      category: "Shipping",
      question: "How are the units shipped and what is the standard lead time?",
      answer: "Our 800V professional series are robust heavy assemblies. Every unit is packaged with thick high-density customized foam inserts and robust flight casing. Domestic standard units dispatch from authorized logistic warehouses in 1-2 business days. International distribution centers carry customized regional input parameters (110VAC/220VAC selector loops)."
    },
    {
      category: "Specifications",
      question: "Is there a standard warranty and calibration certificate?",
      answer: "Absolutely. All eTommens ETM-series variable power supplies ship with a 1-year standard manufacturer warranty, a factory-calibrated traceable certificate, heavy-duty 800V input power wires, and terminal screws. We also provide a 3-year warranty extension option during custom RFQ quote configurations."
    }
  ];

  return (
    <div id="about-etm-view" className="space-y-8 animate-fade-in text-gray-200">
      
      {/* Corporate Overview Row */}
      <section id="corporate-profile" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#121214] border border-gray-800 rounded-xl p-6 lg:p-8">
        
        {/* Left Info */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[9px] font-mono text-yellow-500 tracking-wider uppercase font-bold">
            <Globe size={11} /> Global Electromechanical Authority
          </div>
          <h2 className="text-2xl font-sans font-bold text-gray-150">
            About eTommens Co.
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed text-justify font-sans">
            Founded under a commitment to precise, rugged, and stable electrical instrumentation, eTommens Corporation has evolved into a key manufacturer of professional laboratory <a href="https://variabledcpowersupply.com/" target="_blank" rel="noopener" className="text-yellow-500 hover:text-yellow-400 underline font-semibold transition-colors">variable DC power supply</a> models, load simulators, and automated test equipment (ATE).
          </p>
          <p className="text-xs text-gray-400 leading-relaxed text-justify font-sans">
            Our specialized ETM 800V Series addresses safety, low electromagnetic interface (EMI), and persistent long-term continuous loading limits. We supply world-class university laboratories, green aerospace developers, photovoltaic test installations, and rapid electric vehicle charging systems.
          </p>

          <div className="grid grid-cols-3 gap-3 pt-2 text-center font-sans">
            <div className="p-2.5 bg-[#18181b] border border-gray-800 rounded-lg">
              <span className="block text-sm font-bold font-mono text-yellow-500">28+</span>
              <span className="block text-[9px] text-gray-500 uppercase tracking-wider mt-0.5">Years of Research</span>
            </div>
            <div className="p-2.5 bg-[#18181b] border border-gray-800 rounded-lg">
              <span className="block text-sm font-bold font-mono text-yellow-500">120K+</span>
              <span className="block text-[9px] text-gray-500 uppercase tracking-wider mt-0.5">Units Deployed</span>
            </div>
            <div className="p-2.5 bg-[#18181b] border border-gray-800 rounded-lg">
              <span className="block text-sm font-bold font-mono text-yellow-500">ISO 9001</span>
              <span className="block text-[9px] text-gray-500 uppercase tracking-wider mt-0.5">Certificated Quality</span>
            </div>
          </div>
        </div>

        {/* Right Quality badges & details */}
        <div className="bg-[#18181b] border border-gray-800 rounded-xl p-5 space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            ETM Series Quality Commitment
          </h3>
          
          <div className="space-y-3 font-sans text-xs">
            <div className="flex gap-2 text-gray-400">
              <ShieldCheck size={16} className="text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-300 block text-[11px] uppercase tracking-wide">100% Full-Load Burn-In</strong>
                Every single 800V ETM power supply undergoes a mandatory 72-hour continuous dual-frequency peak thermal stress test before shipping out.
              </div>
            </div>

            <div className="flex gap-2 text-gray-400">
              <ShieldCheck size={16} className="text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-300 block text-[11px] uppercase tracking-wide">SCPI Compliance</strong>
                Full protocol coverage allows hassle-free laboratory automated cycle building without proprietary license locking or heavy DLL bindings.
              </div>
            </div>

            <div className="flex gap-2 text-gray-400">
              <ShieldCheck size={16} className="text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-300 block text-[11px] uppercase tracking-wide">Environmental Isolation</strong>
                Includes a dry protective dual ground layout to ensure complete safety and transient immunity during real-world short-circuit arcs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Explorer Accordion */}
      <section id="interactive-faq" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-gray-900 pb-3">
          <HelpCircle size={18} className="text-yellow-500" />
          <h3 className="text-lg font-sans font-semibold text-gray-150">
            ETM 800V Series Interactive FAQs
          </h3>
        </div>

        <p className="text-xs text-gray-400 leading-normal max-w-xl font-sans">
          Review responses to general operator setup inquiries, automation connections, and protective thresholds. Tap any question drawer to expand answers.
        </p>

        <div className="space-y-2 font-sans">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={index} 
                id={`faq-accordion-${index}`}
                className="bg-[#121214] border border-gray-800 rounded-xl overflow-hidden transition-colors"
              >
                {/* Trigger Row */}
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-800/10 cursor-pointer text-xs"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className={`px-1.5 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider font-bold ${
                      faq.category === "Safety" ? "bg-red-500/10 text-red-400" :
                      faq.category === "Specifications" ? "bg-cyan-500/10 text-cyan-400" :
                      faq.category === "Programming" ? "bg-yellow-500/10 text-yellow-500" :
                      "bg-emerald-500/10 text-emerald-400"
                    }`}>
                      {faq.category}
                    </span>
                    <span className="font-sans font-semibold text-gray-200 group-hover:text-yellow-500">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-gray-500 shrink-0">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Content Panel */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-xs text-gray-400 leading-relaxed border-t border-gray-800/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Support Box */}
      <section id="faq-support" className="p-5 border border-gray-800 rounded-xl bg-gradient-to-b from-[#121214] to-[#0d0d0f] flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="space-y-1 font-sans">
          <h4 className="text-xs font-sans font-bold text-gray-200">Have a system-specific research setup question?</h4>
          <p className="text-[11px] text-gray-500">Our engineering dispatch team responds to all custom configuration designs and safety audits under two hours.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0 font-mono">
          <Mail size={16} className="text-yellow-500" />
          <span className="text-xs font-medium text-gray-300">contact@variabledcpowersupply.com</span>
        </div>
      </section>

    </div>
  );
}
