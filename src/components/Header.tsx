"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const ROUTES = [
  { label: "800V Home", path: "/" },
  { label: "1A-6A Series", path: "/1A-to-6A-800v-dc-series" },
  { label: "Prices", path: "/800v-dc-power-supply-price" },
  { label: "Programmable", path: "/programmable-800v-dc-power-supply" },
  { label: "Lab Edition", path: "/800v-dc-power-supply-for-lab" },
  { label: "Applications", path: "/800v-dc-power-supply-application" },
  { label: "800V Tech Info", path: "/800v-dc-technology-introduction" },
  { label: "About & FAQs", path: "/etommens-etm-series-variable-power-supply-faq" },
];

const MOBILE_ROUTES = [
  { label: "800V DC Home", path: "/" },
  { label: "How to Use Guide", path: "/how-to-use-800v-dc-power-supply" },
  { label: "1A - 6A Series", path: "/1A-to-6A-800v-dc-series" },
  { label: "Where to Buy Channels", path: "/where-to-buy-800v-dc-power-supply" },
  { label: "Price Matrices", path: "/800v-dc-power-supply-price" },
  { label: "Online Stock & Pricing", path: "/buy-800v-dc-power-supplies-online" },
  { label: "Best Supply Benchmark", path: "/best-800v-dc-power-supply" },
  { label: "Programmable 800V DC", path: "/programmable-800v-dc-power-supply" },
  { label: "Laboratory Edition", path: "/800v-dc-power-supply-for-lab" },
  { label: "Application Studies", path: "/800v-dc-power-supply-application" },
  { label: "800V Tech Info", path: "/800v-dc-technology-introduction" },
  { label: "About & FAQs", path: "/etommens-etm-series-variable-power-supply-faq" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="site-header" className="sticky top-0 z-40 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-gray-900">
      <div id="header-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <Link 
          href="/" 
          className="flex items-center gap-2 cursor-pointer group select-none flex-shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center text-gray-950 font-extrabold font-mono text-[10px] tracking-tighter shadow-inner">
            ELLS
          </div>
          <div>
            <span className="block font-sans font-extrabold text-xs sm:text-sm text-gray-100 uppercase tracking-wider group-hover:text-yellow-500 transition leading-tight">
              Ellsen Power
            </span>
            <span className="block text-[8px] sm:text-[9px] font-mono text-gray-500 tracking-wider uppercase font-bold">
              ellsentravellift.com
            </span>
          </div>
        </Link>

        {/* Desktop Nav Bar */}
        <nav id="desktop-navbar" className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-[10px] xl:text-xs font-medium font-sans">
          {ROUTES.map((route) => {
            const isActive = pathname === route.path;
            return (
              <Link
                key={route.path}
                href={route.path}
                className={`px-1.5 xl:px-3 py-1.5 rounded transition cursor-pointer hover:bg-gray-800/40 hover:text-white whitespace-nowrap ${
                  isActive ? "text-yellow-500 bg-[#161619]" : "text-gray-400"
                }`}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Trigger (JS Redirect CTA to avoid First Link pollution) */}
        <div className="hidden lg:flex items-center">
          <button
            id="btn-nav-stock-price"
            type="button"
            onClick={() => {
              window.location.href = "https://variabledcpowersupply.com/800v-dc-power-supplies";
            }}
            className="px-3.5 py-2 bg-yellow-500 text-gray-950 font-extrabold font-sans rounded text-[11px] uppercase tracking-wider hover:bg-yellow-400 active:scale-[0.95] active:bg-yellow-600 cursor-pointer transition shadow-md shadow-yellow-500/10 select-none hover:scale-[1.01] flex items-center gap-1"
          >
            Online Stock & Pricing
            <ArrowUpRight size={12} className="opacity-80" />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="lg:hidden fixed inset-x-0 top-16 z-30 bg-[#0a0a0c] border-b border-gray-800 p-4 space-y-2 text-sm max-h-[calc(100vh-4rem)] overflow-y-auto">
          {MOBILE_ROUTES.map((item, id) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={id}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full block text-left py-2 px-3 rounded-lg font-medium transition cursor-pointer ${
                  isActive 
                    ? "bg-yellow-500/10 text-yellow-500" 
                    : "text-gray-400 hover:bg-gray-800/30 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-gray-800">
            <button
              id="mob-btn-stock-price"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = "https://variabledcpowersupply.com/800v-dc-power-supplies";
              }}
              className="w-full text-center py-2 bg-yellow-500 text-gray-950 font-bold uppercase text-xs rounded-lg cursor-pointer flex items-center justify-center gap-1.5 active:scale-[0.98] active:bg-yellow-600"
            >
              Online Stock & Pricing
              <ArrowUpRight size={13} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
