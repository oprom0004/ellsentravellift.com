/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { POWER_MODELS } from "../data";
import { DollarSign, Info, Sliders, ReceiptText } from "lucide-react";

export default function PriceView() {
  // Option State variables
  const [selectedModelId, setSelectedModelId] = useState<string>("eTM-8005");
  const [qty, setQty] = useState<number>(1);
  
  // Optional hardware add-ons
  const [options, setOptions] = useState({
    rackSlides: false,
    gpibCard: false,
    lanCard: false,
    analogSafetyCard: false,
    extendedWarranty: false
  });

  const selectedModel = POWER_MODELS.find(m => m.id === selectedModelId) || POWER_MODELS[3];

  // Price Calculation Logic
  const baseRate = selectedModel.basePrice;
  const slideRate = options.rackSlides ? 45 : 0;
  const gpibRate = options.gpibCard ? 95 : 0;
  const lanRate = options.lanCard ? 65 : 0;
  const analogRate = options.analogSafetyCard ? 75 : 0;
  const warrantyRate = options.extendedWarranty ? 80 : 0;

  const unitRateSum = baseRate + slideRate + gpibRate + lanRate + analogRate + warrantyRate;
  const subTotalRaw = unitRateSum * qty;

  // Apply Volume Discount: 3+ units is 5%, 5+ units is 10%, 10+ units is 15%
  let discountPercent = 0;
  if (qty >= 10) discountPercent = 15;
  else if (qty >= 5) discountPercent = 10;
  else if (qty >= 3) discountPercent = 5;

  const discountValue = (subTotalRaw * discountPercent) / 100;
  const totalDueSum = subTotalRaw - discountValue;

  return (
    <div id="price-view" className="space-y-10">
      {/* Page Title & Cost Explanation Content */}
      <section id="cost-analysis" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
          <DollarSign size={13} className="text-yellow-500" />
          <span className="text-xs font-mono font-medium text-yellow-500 uppercase tracking-wider">Financial Matrices</span>
        </div>
        <h1 className="text-3xl font-sans font-bold text-gray-100 tracking-tight">
          800V DC Power Supply Pricing Analysis
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
          High-voltage programmable DC power systems occupy a specialized category. Compared to common sub-100V benches, 800V systems must deploy <span className="text-gray-200 font-semibold">creepage and clearance space isolations exceeding 8.0mm</span>, oversized ceramic line capacitors, high-speed active discharge protection bridges, and 3000VAC isolated telemetry pathways. Standard configurations of the <span className="text-yellow-500 font-bold">eTommens eTM series</span> are detailed below.
        </p>
      </section>

      {/* Pricing table by current size */}
      <section id="pricing-matrix" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400">Standard Price Tier by Amperage Series</h3>
          <div className="border border-gray-800 rounded-xl bg-[#121214] divide-y divide-gray-800">
            {POWER_MODELS.map(m => (
              <div 
                key={m.id} 
                onClick={() => setSelectedModelId(m.id)}
                className={`p-4 flex items-center justify-between transition-colors cursor-pointer text-xs ${
                  selectedModelId === m.id ? "bg-yellow-500/[0.03]" : "hover:bg-gray-800/15"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <a
                      href={m.buyUrl}
                      target="_blank"
                      rel="noopener"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="font-mono font-bold text-yellow-500 hover:text-yellow-400 underline decoration-yellow-500/30 hover:decoration-yellow-400 cursor-pointer transition-colors"
                    >
                      View {m.id} (800V {m.current}A) spec ↗
                    </a>
                    <span className="text-[10px] bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded uppercase font-mono">{m.rackSize.split(" ")[0]} Frame</span>
                  </div>
                  <p className="text-[11px] text-gray-400 font-sans">{m.description.slice(0, 105)}...</p>
                </div>
                <div className="text-right pl-4 shrink-0 font-mono flex flex-col items-end gap-1">
                  <span className="block font-bold text-yellow-500 text-sm">${m.basePrice.toLocaleString()} USD</span>
                  <span className="block text-[10px] text-gray-500">800V @ {m.current} Amps</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = m.buyUrl || "https://variabledcpowersupply.com/800v-dc-power-supplies";
                    }}
                    className="mt-1 px-2.5 py-1 bg-yellow-500 text-gray-950 hover:bg-yellow-400 text-[10px] font-sans font-extrabold uppercase tracking-wider rounded transition-all shadow shadow-yellow-500/10 flex items-center gap-1 select-none cursor-pointer inline-flex"
                  >
                    Buy Unit Direct ↗
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Informational Warning sidebar */}
        <div className="p-6 bg-[#121214] border border-gray-800 rounded-xl space-y-4">
          <div className="w-8 h-8 rounded-lg bg-yellow-500/5 border border-yellow-500/10 flex items-center justify-center text-yellow-500">
            <Info size={16} />
          </div>
          <h4 className="text-xs font-mono uppercase text-gray-200 tracking-wider">Why Buy Direct from eTommens?</h4>
          <ul className="space-y-2 text-xs text-gray-400 leading-normal list-disc pl-4">
            <li>Factory-issued safety telemetry certification verifying protection latch cutoff limits.</li>
            <li>No intermediary markups — <span className="text-yellow-500 font-semibold">variabledcpowersupply.com</span> provides official e-commerce direct-to-buyer sales.</li>
            <li>Lifetime software remote GUI console updates included.</li>
            <li>Standard ISO-certified rugged packaging safe for long-distance air or maritime shipping.</li>
          </ul>
        </div>
      </section>

      {/* Interactive Itemizer & Discount Calculator */}
      <section id="interactive-price-calculator" className="bg-[#121214] border border-gray-800 rounded-xl p-6">
        <h3 className="text-base font-sans font-semibold text-gray-200 mb-6 flex items-center gap-2">
          <Sliders className="text-yellow-500" size={18} />
          800V DC Enterprise Custom Estimator
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Options Panel Left */}
          <div className="lg:col-span-7 space-y-6">
            {/* SKU and Quantity selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-mono text-gray-400 uppercase">Target SKU Chassis:</label>
                <select
                  value={selectedModelId}
                  onChange={e => setSelectedModelId(e.target.value)}
                  className="w-full bg-[#18181b] border border-gray-800 rounded-lg py-2 px-3 text-xs text-gray-200 focus:outline-none focus:border-yellow-500"
                >
                  {POWER_MODELS.map(m => (
                    <option key={m.id} value={m.id} className="bg-[#121214]">
                      {m.id} (Base: ${m.basePrice.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono text-gray-400 uppercase">System Integration Quantity:</label>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={e => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-[#18181b] border border-gray-800 rounded-lg py-1.5 px-3 text-xs text-gray-200 focus:outline-none focus:border-yellow-500 font-mono"
                />
              </div>
            </div>

            {/* Hardware cards add-on check links */}
            <div className="space-y-3">
              <label className="block text-xs font-mono text-gray-400 uppercase">Optional Interface Cards & Servicing Packages:</label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setOptions(o => ({ ...o, rackSlides: !o.rackSlides }))}
                  className={`p-3 text-left border rounded-lg transition-colors cursor-pointer flex justify-between items-center ${
                    options.rackSlides ? "bg-yellow-500/5 border-yellow-500 text-gray-200" : "bg-[#18181b] border-gray-800 text-gray-400"
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="block text-[11px] font-bold">Cabinet Slides Rail Kit</span>
                    <span className="block text-[10px] text-gray-500">Rear sliding bracket frame</span>
                  </div>
                  <span className="font-mono text-xs text-yellow-500 font-bold">+$130</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOptions(o => ({ ...o, gpibCard: !o.gpibCard }))}
                  className={`p-3 text-left border rounded-lg transition-colors cursor-pointer flex justify-between items-center ${
                    options.gpibCard ? "bg-yellow-500/5 border-yellow-500 text-gray-200" : "bg-[#18181b] border-gray-800 text-gray-400"
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="block text-[11px] font-bold">GPIB IEEE-488 Card</span>
                    <span className="block text-[10px] text-gray-500">For older LabVIEW test bays</span>
                  </div>
                  <span className="font-mono text-xs text-yellow-500 font-bold">+$350</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOptions(o => ({ ...o, lanCard: !o.lanCard }))}
                  className={`p-3 text-left border rounded-lg transition-colors cursor-pointer flex justify-between items-center ${
                    options.lanCard ? "bg-yellow-500/5 border-yellow-500 text-gray-200" : "bg-[#18181b] border-gray-800 text-gray-400"
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="block text-[11px] font-bold">Ethernet LAN / Web Console</span>
                    <span className="block text-[10px] text-gray-500">Direct TCP/IP LAN control WebUI</span>
                  </div>
                  <span className="font-mono text-xs text-yellow-500 font-bold">+$180</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOptions(o => ({ ...o, analogSafetyCard: !o.analogSafetyCard }))}
                  className={`p-3 text-left border rounded-lg transition-colors cursor-pointer flex justify-between items-center ${
                    options.analogSafetyCard ? "bg-yellow-500/5 border-yellow-500 text-gray-200" : "bg-[#18181b] border-gray-800 text-gray-400"
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="block text-[11px] font-bold">Isolated Analog Card</span>
                    <span className="block text-[10px] text-gray-500">High-isolation DAC control port</span>
                  </div>
                  <span className="font-mono text-xs text-yellow-500 font-bold">+$220</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOptions(o => ({ ...o, extendedWarranty: !o.extendedWarranty }))}
                  className={`p-3 text-left border rounded-lg transition-colors cursor-pointer sm:col-span-2 ${
                    options.extendedWarranty ? "bg-yellow-500/5 border-yellow-500 text-gray-200" : "bg-[#18181b] border-gray-800 text-gray-400"
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="block text-[11px] font-bold">Extended 3-Year On-Site Calibration Suite</span>
                    <span className="block text-[10px] text-gray-500">Full firmware update, thermal safety analysis and calibration adjustments</span>
                  </div>
                  <span className="font-mono text-xs text-yellow-500 font-bold">+$450</span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Ledger Right */}
          <div className="lg:col-span-5 self-start bg-[#18181b] border border-gray-800 rounded-xl p-5 space-y-4">
            <h4 className="text-xs font-mono uppercase text-gray-400 border-b border-gray-800 pb-2 flex items-center justify-between">
              <span>Configured System Invoice Estimate</span>
              <ReceiptText size={13} className="text-gray-500" />
            </h4>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between text-gray-400">
                <span>Selected Base SKU ({selectedModelId}):</span>
                <span className="text-gray-200">${baseRate.toLocaleString()}</span>
              </div>

              {/* Detail optional prices if active */}
              {options.rackSlides && (
                <div className="flex justify-between text-gray-500 text-[11px]">
                  <span>+ Sliding Brackets:</span>
                  <span>$130</span>
                </div>
              )}
              {options.gpibCard && (
                <div className="flex justify-between text-gray-500 text-[11px]">
                  <span>+ GPIB IEEE Card:</span>
                  <span>$350</span>
                </div>
              )}
              {options.lanCard && (
                <div className="flex justify-between text-gray-500 text-[11px]">
                  <span>+ LAN/Web Card:</span>
                  <span>$180</span>
                </div>
              )}
              {options.analogSafetyCard && (
                <div className="flex justify-between text-gray-500 text-[11px]">
                  <span>+ Safe Analog Telemetry:</span>
                  <span>$220</span>
                </div>
              )}
              {options.extendedWarranty && (
                <div className="flex justify-between text-gray-500 text-[11px]">
                  <span>+ 3-Year Calib Warranty:</span>
                  <span>$450</span>
                </div>
              )}

              <div className="border-t border-gray-800 my-2 pt-2 flex justify-between text-gray-400">
                <span>Unit Config Rate:</span>
                <span className="text-gray-200">${unitRateSum.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-gray-400">
                <span>Subtotal ({qty} units):</span>
                <span className="text-gray-100">${subTotalRaw.toLocaleString()}</span>
              </div>

              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-500 text-[11px]">
                  <span>Volume Discount ({discountPercent}%):</span>
                  <span>-${discountValue.toLocaleString()}</span>
                </div>
              )}

              <div className="border-t border-gray-800 my-2 pt-2 flex justify-between text-sm font-bold text-yellow-500 uppercase">
                <span>Estimated Quote Sum:</span>
                <span>${totalDueSum.toLocaleString()} USD</span>
              </div>
            </div>

            {/* Note on validity */}
            <div className="text-[10px] text-gray-500 leading-normal font-sans rounded bg-[#121214] border border-gray-950 p-2.5">
              <strong>Note:</strong> Catalog list prices are listed in USD. Safe on-site purchase is managed directly on our verified checkout portal.
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  window.location.href = selectedModel.buyUrl || "https://variabledcpowersupply.com/800v-dc-power-supplies";
                }}
                className="block w-full py-3 bg-[#ffbc00] hover:bg-yellow-400 active:scale-[0.98] active:bg-yellow-500 text-gray-950 font-extrabold rounded-lg text-xs tracking-wider uppercase transition-all duration-150 text-center shadow-lg select-none cursor-pointer"
              >
                🛒 Buy Directly from Official Store ↗
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
