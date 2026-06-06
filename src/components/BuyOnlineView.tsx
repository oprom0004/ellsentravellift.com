/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { AppRoute } from "../types";
import { POWER_MODELS } from "../data";
import { ShoppingCart, Check, ShieldAlert, Globe, ExternalLink, RefreshCw, FileText, Store } from "lucide-react";

interface BuyOnlineProps {
  onNavigate: (route: AppRoute) => void;
}

// Mock of realistic inventory data across key regional warehouse hubs
const REGIONAL_INVENTORY = [
  {
    modelId: "eTM-8001",
    stocks: {
      domestic: { status: "In Stock", qty: 24 },
      usa: { status: "In Stock", qty: 8 },
      europe: { status: "Low Stock", qty: 3 },
      singapore: { status: "In Stock", qty: 15 }
    }
  },
  {
    modelId: "eTM-8002",
    stocks: {
      domestic: { status: "In Stock", qty: 18 },
      usa: { status: "In Stock", qty: 11 },
      europe: { status: "In Stock", qty: 7 },
      singapore: { status: "In Stock", qty: 12 }
    }
  },
  {
    modelId: "eTM-8003",
    stocks: {
      domestic: { status: "In Stock", qty: 14 },
      usa: { status: "Low Stock", qty: 2 },
      europe: { status: "Backorder", qty: 0, leadTime: "3 Weeks" },
      singapore: { status: "In Stock", qty: 9 }
    }
  },
  {
    modelId: "eTM-8005",
    stocks: {
      domestic: { status: "In Stock", qty: 32 },
      usa: { status: "In Stock", qty: 14 },
      europe: { status: "In Stock", qty: 9 },
      singapore: { status: "In Stock", qty: 22 }
    }
  },
  {
    modelId: "eTM-8006",
    stocks: {
      domestic: { status: "In Stock", qty: 11 },
      usa: { status: "Low Stock", qty: 1 },
      europe: { status: "Low Stock", qty: 2 },
      singapore: { status: "Low Stock", qty: 3 }
    }
  }
];

export default function BuyOnlineView({ onNavigate }: BuyOnlineProps) {
  const [selectedRegion, setSelectedRegion] = useState<"all" | "usa" | "europe" | "singapore" | "domestic">("all");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const triggerStockRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  const getRegionBadge = (status: string, qty: number, leadTime?: string) => {
    if (status === "In Stock") {
      return (
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span className="text-emerald-400 font-medium">{qty} Units Available</span>
        </div>
      );
    }
    if (status === "Low Stock") {
      return (
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          <span className="text-amber-400 font-medium">Low Stock ({qty} left)</span>
        </div>
      );
    }
    return (
      <div className="flex flex-col">
        <span className="text-rose-400 font-semibold uppercase text-[9px] tracking-wider">Backorder</span>
        <span className="text-gray-500 text-[10px]">Lead time: {leadTime}</span>
      </div>
    );
  };

  return (
    <div id="buy-online-view" className="space-y-10">
      
      {/* Dynamic Introduction Header */}
      <section id="online-buy-intro" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
          <Store size={13} className="text-yellow-500" />
          <span className="text-xs font-mono font-bold text-yellow-500 uppercase tracking-wider">
            Procurement & Stock Finder
          </span>
        </div>
        <h1 className="text-3xl font-sans font-bold text-gray-100 tracking-tight">
          Global Warehouse Stock & Pricing Portal
        </h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2 pb-6 border-b border-gray-800">
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl text-justify">
            We provide access to real factory warehouse stock statuses and direct purchase channels for our eTommens 800V Programmable DC Power Supplies. Select your model to purchase or checkout securely on our official online store. All orders are protected by a manufacturer warranty.
          </p>
          <a
            href="https://variabledcpowersupply.com/800v-dc-power-supplies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-extrabold uppercase text-xs tracking-wider rounded-lg transition-all shadow-lg shadow-yellow-500/15 hover:scale-[1.02] shrink-0 text-center"
          >
            Buy 800V DC Power Supply Online ↗
          </a>
        </div>
      </section>

      {/* Unified Store Action Card */}
      <section id="procurement-tracks">
        <div className="p-6 bg-gradient-to-b from-[#141417] to-[#101012] border border-gray-800 rounded-xl space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/[0.02] rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-wider text-yellow-500 uppercase font-bold bg-yellow-500/10 px-2.5 py-0.5 rounded-full border border-yellow-500/20">
              Retail & Integrator Direct Checkout
            </span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 bg-emerald-500/5 border border-emerald-500/15 px-2 py-0.5 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              SSL SECURE PORTAL
            </span>
          </div>

          <h3 className="text-lg font-sans font-extrabold text-gray-100">
            Official E-Commerce Store Checkout
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Verify actual end-user pricing, check active factory promotions, calculate shipping rates automatically, and complete transactions securely via credit/debit or company cards directly on our official store domain.
          </p>

          <div className="p-4 bg-black/45 border border-gray-900 rounded-lg max-w-xl">
            <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">Official Checkout Channel:</span>
            <div className="text-xs text-gray-300 font-mono flex items-center justify-between">
              <span className="font-semibold text-yellow-500">variabledcpowersupply.com</span>
              <span className="text-emerald-400">Online & Active</span>
            </div>
          </div>

          <div className="pt-2 max-w-sm">
            <a
              href="https://variabledcpowersupply.com/800v-dc-power-supplies"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold rounded-lg text-xs tracking-wider uppercase transition flex items-center justify-center gap-1.5 select-none shadow-lg shadow-yellow-500/5 hover:scale-[1.01] cursor-pointer"
            >
              Visit E-Commerce Store Checkout ↗
            </a>
          </div>
        </div>
      </section>

      {/* Global Stock Finder (Replaces PO sandbox with high-value utility) */}
      <section id="stock-finder" className="bg-[#121214] border border-gray-800 rounded-xl p-6 space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-4">
          <div className="space-y-1">
            <h3 className="text-base font-sans font-bold text-gray-200 flex items-center gap-2">
              <Globe size={18} className="text-yellow-500" />
              Real-Time Global Depot Inventory Search
            </h3>
            <p className="text-xs text-gray-500">
              Review current chassis model units in local storage at regional hubs.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-1.5 font-mono text-[9px] uppercase font-bold shrink-0">
            {(["all", "domestic", "usa", "europe", "singapore"] as const).map(reg => (
              <button
                key={reg}
                type="button"
                onClick={() => setSelectedRegion(reg)}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  selectedRegion === reg
                    ? "bg-yellow-500 text-gray-950 font-extrabold"
                    : "bg-[#18181b] hover:bg-gray-800 text-gray-400 border border-gray-800/80"
                }`}
              >
                {reg === "all" ? "View All Stocks" : reg === "domestic" ? "Factory Root" : reg.toUpperCase() + " Hub"}
              </button>
            ))}
          </div>
        </div>

        {/* Inventory Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-400 border-collapse">
            <thead>
              <tr className="border-b border-gray-800 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                <th className="py-3 px-4 font-bold">Model SKU</th>
                <th className="py-3 px-4 font-bold">Specs Summary</th>
                {selectedRegion === "all" && (
                  <>
                    <th className="py-3 px-4 font-bold">Factory Depot</th>
                    <th className="py-3 px-4 font-bold">USA (Chicago)</th>
                    <th className="py-3 px-4 font-bold">EU (Munich)</th>
                    <th className="py-3 px-4 font-bold">APAC (Singapore)</th>
                  </>
                )}
                {selectedRegion === "domestic" && <th className="py-3 px-4 font-bold">Factory Depot Stock</th>}
                {selectedRegion === "usa" && <th className="py-3 px-4 font-bold">USA Chicago Depot Stock</th>}
                {selectedRegion === "europe" && <th className="py-3 px-4 font-bold">EU Munich Depot Stock</th>}
                {selectedRegion === "singapore" && <th className="py-3 px-4 font-bold">APAC Singapore Depot Stock</th>}
                <th className="py-3 px-4 text-right font-bold">Acquisition Support</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {POWER_MODELS.map(m => {
                const inv = REGIONAL_INVENTORY.find(item => item.modelId === m.id)!;
                return (
                  <tr key={m.id} className="hover:bg-gray-800/10 transition-colors">
                    <td className="py-4 px-4 font-mono font-bold text-gray-200">
                      {m.id}
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-300 font-sans font-medium text-[11px]">800V DC / {m.current} Amps</div>
                      <div className="text-[10px] text-gray-500 font-mono mt-0.5 leading-none">{m.rackSize} Rack</div>
                    </td>

                    {selectedRegion === "all" && (
                      <>
                        <td className="py-4 px-4 whitespace-nowrap">
                          {getRegionBadge(inv.stocks.domestic.status, inv.stocks.domestic.qty)}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          {getRegionBadge(inv.stocks.usa.status, inv.stocks.usa.qty)}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          {getRegionBadge(inv.stocks.europe.status, inv.stocks.europe.qty, "europe" in inv.stocks.europe ? undefined : "3 Weeks")}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          {getRegionBadge(inv.stocks.singapore.status, inv.stocks.singapore.qty)}
                        </td>
                      </>
                    )}

                    {selectedRegion === "domestic" && (
                      <td className="py-4 px-4 whitespace-nowrap">
                        {getRegionBadge(inv.stocks.domestic.status, inv.stocks.domestic.qty)}
                      </td>
                    )}

                    {selectedRegion === "usa" && (
                      <td className="py-4 px-4 whitespace-nowrap">
                        {getRegionBadge(inv.stocks.usa.status, inv.stocks.usa.qty)}
                      </td>
                    )}

                    {selectedRegion === "europe" && (
                      <td className="py-4 px-4 whitespace-nowrap">
                        {getRegionBadge(
                          inv.stocks.europe.status, 
                          inv.stocks.europe.qty, 
                          !("qty" in inv.stocks.europe) || inv.stocks.europe.qty === 0 ? "3 Weeks" : undefined
                        )}
                      </td>
                    )}

                    {selectedRegion === "singapore" && (
                      <td className="py-4 px-4 whitespace-nowrap">
                        {getRegionBadge(inv.stocks.singapore.status, inv.stocks.singapore.qty)}
                      </td>
                    )}

                     <td className="py-4 px-4 text-right">
                      <div className="flex justify-end">
                        <a 
                          href={m.buyUrl || "https://variabledcpowersupply.com/800v-dc-power-supplies"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 text-[10px] font-extrabold bg-yellow-500 hover:bg-yellow-400 text-gray-950 uppercase rounded flex items-center gap-0.5 border border-yellow-500/20 select-none font-sans cursor-pointer inline-flex items-center hover:scale-105 active:scale-95 transition"
                        >
                          Checkout Store ↗
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Global Delivery Note */}
        <div id="logistics-disclosure" className="p-4 bg-gray-950/45 border border-gray-800 rounded-lg flex items-start gap-3">
          <ShieldAlert size={16} className="text-yellow-500 shrink-0 mt-0.5" />
          <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
            <strong>Logistics Transit & Compliance:</strong> All shipments of ETM 800V-series variable DC power units are dispatched securely via heavy-duty flight casing or shock-proof wood crates. Transit from our Chicago hub to US-internal locations typically completed in 3-5 standard business days. Real-time customized tracking details will be routed immediately to the purchase integrator post dispatch.
          </p>
        </div>

      </section>

    </div>
  );
}
