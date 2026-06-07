"use client";

import React from "react";
import { Mail, Phone, MapPin, Globe, Award, ShieldCheck, Clock, FileText } from "lucide-react";

export default function WhereToBuyView() {
  const regions = [
    {
      name: "Official E-Commerce Portal",
      zone: "Direct Online Channels",
      desc: "Our primary direct e-commerce portal optimized for quick checkout, credit card, or corporate bank invoice processing. Ideal for immediate dispatch of standalone 800V DC power supply chassis.",
      contact: "Web Checkout Gateway",
      phone: "Online Store",
      addr: "https://variabledcpowersupply.com",
      url: "https://variabledcpowersupply.com",
      isWeb: true
    },
    {
      name: "Factory-Direct Sales & Technical Inquiries",
      zone: "Centralized Procurement",
      desc: "For bulk university laboratory procurement, customized high-voltage cabinets, educational pricing partnerships, and special analog/digital interface requests.",
      contact: "contact@variabledcpowersupply.com",
      phone: "Global support desk",
      addr: "Direct Factory Shipping & Custom Assembly"
    }
  ];

  return (
    <div id="where-to-buy-view" className="space-y-10">
      {/* Intro section emphasizing the domain */}
      <section id="buy-intro" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
          <Globe size={13} className="text-yellow-500" />
          <span className="text-xs font-mono font-medium text-yellow-500 uppercase tracking-wider">Acquisition Platforms</span>
        </div>
        <h1 className="text-3xl font-sans font-bold text-gray-100 tracking-tight">
          Where to Buy 800V DC Power Supplies
        </h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2 pb-6 border-b border-gray-800">
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
            Purchase directly from the factory at <span className="text-yellow-500 font-bold">variabledcpowersupply.com</span> or contact our local distributors. We facilitate global customs clearance, supply safety datasheets, and assign localized technician support for high-power system commissioning.
          </p>
          <button
            type="button"
            onClick={() => { window.location.href = "https://variabledcpowersupply.com/800v-dc-power-supplies"; }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-extrabold uppercase text-xs tracking-wider rounded-lg transition-all shadow-lg shadow-yellow-500/15 hover:scale-[1.02] shrink-0 text-center cursor-pointer"
          >
            Buy 800V DC Power Supply Online ↗
          </button>
        </div>
      </section>

      {/* Global Distribution contacts */}
      <section id="distribution-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {regions.map((region, id) => (
          <div key={id} className="p-6 bg-[#121214] border border-gray-800 rounded-xl space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono font-bold text-yellow-500 uppercase tracking-widest px-2.5 py-1 bg-yellow-500/5 border border-yellow-500/10 rounded">
                {region.zone}
              </span>
            </div>
            
            <h3 className="text-base font-sans font-bold text-gray-100">{region.name}</h3>
            <p className="text-xs text-gray-400 leading-normal">{region.desc}</p>
            
            <div className="pt-4 border-t border-gray-800 space-y-2 text-xs">
              {'isWeb' in region && region.isWeb ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-400 font-mono">
                    <Globe size={13} className="text-yellow-500 shrink-0" />
                    <a
                      href="https://variabledcpowersupply.com"
                      target="_blank"
                      rel="noopener"
                      className="text-yellow-500 hover:text-yellow-400 underline transition-colors"
                    >
                      variabledcpowersupply.com ↗
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 font-mono">
                    <ShieldCheck size={13} className="text-yellow-500 shrink-0" />
                    <span>Secure Gateway Active</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 font-mono">
                    <Clock size={13} className="text-yellow-500 shrink-0" />
                    <span>Instant Credit Checkout Ready</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-gray-400 font-mono">
                    <Mail size={13} className="text-yellow-500" />
                    <span className="text-gray-200 select-all">{region.contact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 font-mono">
                    <Phone size={13} className="text-yellow-500" />
                    <span>{region.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={13} className="text-yellow-500 shrink-0" />
                    <span className="truncate">{region.addr}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Logistics & Safety Certification Compliance */}
      <section id="regulatory-compliance" className="bg-[#121214] border border-gray-800 rounded-xl p-6">
        <h3 className="text-sm font-mono uppercase text-gray-200 tracking-wider mb-6 flex items-center gap-2">
          <Award className="text-yellow-500" size={16} /> REQUIRED ENTERPRISE CERTIFICATIONS
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { tag: "CE / LVD & EMC", title: "EN 61010-1", desc: "Meets product safety principles for laboratory measurement equipment and CE-rated electromagnetic immunity guidelines." },
            { tag: "ISO 9001:2015", title: "Certified Factory", desc: "Each 800V DC unit undergoes a rigorous 48-hour continuous burning test at peak current to minimize early infant mortality failures." },
            { tag: "RoHS Compliant", title: "Directives 2011/65/EU", desc: "Free from hazardous lead or cadmium compositions, certified safe for high-temperature cleanroom equipment racks." },
            { tag: "Calibration Traceable", title: "NIST / DAkkS Ready", desc: "Supplied with high-accuracy calibration certification proving internal 16-bit analog-to-digital converters drift range." }
          ].map((cert, id) => (
            <div key={id} className="space-y-2 p-4 bg-[#161619] border border-gray-800/80 rounded-lg">
              <span className="block text-[10px] font-mono text-yellow-500 uppercase tracking-widest">{cert.tag}</span>
              <h4 className="text-xs font-sans font-bold text-gray-200">{cert.title}</h4>
              <p className="text-[11px] text-gray-400 leading-normal">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
