/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { AppRoute } from "./types";
import { 
  ShieldAlert, 
  Menu, 
  X, 
  Settings, 
  HelpCircle, 
  Layers, 
  Sliders, 
  Activity, 
  MapPin, 
  DollarSign, 
  ShoppingCart, 
  Cpu, 
  FlaskConical, 
  Zap, 
  Globe, 
  Clock, 
  ArrowUpRight,
  ChevronRight
} from "lucide-react";

// Sub views
import HomeView from "./components/HomeView";
import HowToUseView from "./components/HowToUseView";
import WhereToBuyView from "./components/WhereToBuyView";
import PriceView from "./components/PriceView";
import BuyOnlineView from "./components/BuyOnlineView";
import BestSupplyView from "./components/BestSupplyView";
import CurrentSeriesView from "./components/CurrentSeriesView";
import ProgrammableView from "./components/ProgrammableView";
import LabUseView from "./components/LabUseView";
import ApplicationView from "./components/ApplicationView";
import Intro800VView from "./components/Intro800VView";
import AboutEtmView from "./components/AboutEtmView";

// SEO Friendly Path Maps requested by user:
const ROUTE_SEO_PATHS_MAP: Record<AppRoute, string> = {
  [AppRoute.HOME]: "/",
  [AppRoute.HOW_TO_USE]: "/how-to-use-800v-dc-power-supply",
  [AppRoute.WHERE_TO_BUY]: "/where-to-buy-800v-dc-power-supply",
  [AppRoute.PRICE]: "/800v-dc-power-supply-price",
  [AppRoute.BUY_ONLINE]: "/buy-800v-dc-power-supplies-online",
  [AppRoute.BEST_SUPPLY]: "/best-800v-dc-power-supply",
  [AppRoute.CURRENT_SERIES]: "/1A-to-6A-800v-dc-series",
  [AppRoute.PROGRAMMABLE]: "/programmable-800v-dc-power-supply",
  [AppRoute.LAB_USE]: "/800v-dc-power-supply-for-lab",
  [AppRoute.APPLICATION]: "/800v-dc-power-supply-application",
  [AppRoute.INTRO_800V]: "/800v-dc-technology-introduction",
  [AppRoute.ABOUT_ETM]: "/etommens-etm-series-variable-power-supply-faq",
};

const ROUTE_LABELS_MAP: Record<AppRoute, string> = {
  [AppRoute.HOME]: "800V Home",
  [AppRoute.HOW_TO_USE]: "How to Use Guide",
  [AppRoute.WHERE_TO_BUY]: "Where to Buy Channels",
  [AppRoute.PRICE]: "Price Matrices",
  [AppRoute.BUY_ONLINE]: "Online Stock & Pricing",
  [AppRoute.BEST_SUPPLY]: "Best Supply Benchmark",
  [AppRoute.CURRENT_SERIES]: "1A-6A Series",
  [AppRoute.PROGRAMMABLE]: "Programmable 800V DC",
  [AppRoute.LAB_USE]: "Laboratory Edition",
  [AppRoute.APPLICATION]: "Application Studies",
  [AppRoute.INTRO_800V]: "800V Tech Info",
  [AppRoute.ABOUT_ETM]: "About & FAQs",
};

// Map URL Hash back to AppRoute for deep-linking support
const PATH_TO_ROUTE_MAP: Record<string, AppRoute> = {
  "#home": AppRoute.HOME,
  "#how-to-use": AppRoute.HOW_TO_USE,
  "#where-to-buy": AppRoute.WHERE_TO_BUY,
  "#price": AppRoute.PRICE,
  "#buy-online": AppRoute.BUY_ONLINE,
  "#best-supply": AppRoute.BEST_SUPPLY,
  "#current-series": AppRoute.CURRENT_SERIES,
  "#programmable": AppRoute.PROGRAMMABLE,
  "#lab-use": AppRoute.LAB_USE,
  "#application": AppRoute.APPLICATION,
  "#intro-800v": AppRoute.INTRO_800V,
  "#about-faq": AppRoute.ABOUT_ETM,
};

// Route hashes
const ROUTE_TO_HASH: Record<AppRoute, string> = {
  [AppRoute.HOME]: "#home",
  [AppRoute.HOW_TO_USE]: "#how-to-use",
  [AppRoute.WHERE_TO_BUY]: "#where-to-buy",
  [AppRoute.PRICE]: "#price",
  [AppRoute.BUY_ONLINE]: "#buy-online",
  [AppRoute.BEST_SUPPLY]: "#best-supply",
  [AppRoute.CURRENT_SERIES]: "#current-series",
  [AppRoute.PROGRAMMABLE]: "#programmable",
  [AppRoute.LAB_USE]: "#lab-use",
  [AppRoute.APPLICATION]: "#application",
  [AppRoute.INTRO_800V]: "#intro-800v",
  [AppRoute.ABOUT_ETM]: "#about-faq",
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(AppRoute.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [preselectedInquiryModel, setPreselectedInquiryModel] = useState<string>("eTM-8005");

  // Sync hash changes for deep links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (PATH_TO_ROUTE_MAP[hash]) {
        setCurrentRoute(PATH_TO_ROUTE_MAP[hash]);
      } else {
        setCurrentRoute(AppRoute.HOME);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial check on load
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Update Route helper
  const navigateTo = (route: AppRoute) => {
    setCurrentRoute(route);
    window.location.hash = ROUTE_TO_HASH[route];
    setMobileMenuOpen(false);
    // Scroll content container into view
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render proper page view based on state
  const renderActiveView = () => {
    switch (currentRoute) {
      case AppRoute.HOW_TO_USE:
        return <HowToUseView />;
      case AppRoute.WHERE_TO_BUY:
        return <WhereToBuyView />;
      case AppRoute.PRICE:
        return <PriceView onNavigate={navigateTo} />;
      case AppRoute.BUY_ONLINE:
        return <BuyOnlineView onNavigate={navigateTo} />;
      case AppRoute.BEST_SUPPLY:
        return <BestSupplyView onNavigate={navigateTo} />;
      case AppRoute.CURRENT_SERIES:
        return <CurrentSeriesView onNavigate={navigateTo} />;
      case AppRoute.PROGRAMMABLE:
        return <ProgrammableView onNavigate={navigateTo} />;
      case AppRoute.LAB_USE:
        return <LabUseView />;
      case AppRoute.APPLICATION:
        return <ApplicationView onNavigate={navigateTo} />;
      case AppRoute.INTRO_800V:
        return <Intro800VView />;
      case AppRoute.ABOUT_ETM:
        return <AboutEtmView />;
      default:
        return <HomeView onNavigate={navigateTo} />;
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#0a0a0c] text-gray-300 font-sans antialiased selection:bg-yellow-500/20 selection:text-yellow-500">
      
      {/* Top Professional Header Bar */}
      <header id="site-header" className="sticky top-0 z-40 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-gray-900">
        <div id="header-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div 
            id="brand-logo" 
            onClick={() => navigateTo(AppRoute.HOME)} 
            className="flex items-center gap-2 cursor-pointer group select-none flex-shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center text-gray-950 font-extrabold font-mono text-[11px] tracking-tighter shadow-inner">
              eTM
            </div>
            <div>
              <span className="block font-sans font-extrabold text-xs sm:text-sm text-gray-150 uppercase tracking-wider group-hover:text-yellow-500 transition leading-tight">
                eTommens Power
              </span>
              <span className="block text-[8px] sm:text-[9px] font-mono text-gray-500 tracking-wider uppercase font-bold">
                variabledcpowersupply.com
              </span>
            </div>
          </div>

          {/* Desktop Nav Bar */}
          <nav id="desktop-navbar" className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-[10px] xl:text-xs font-medium font-sans">
            <button 
              id="nav-home"
              onClick={() => navigateTo(AppRoute.HOME)} 
              className={`px-1.5 xl:px-3 py-1.5 rounded transition cursor-pointer hover:bg-gray-800/40 hover:text-white whitespace-nowrap ${
                currentRoute === AppRoute.HOME ? "text-yellow-500 bg-[#161619]" : "text-gray-400"
              }`}
            >
              800V Home
            </button>
            <button 
              id="nav-specs"
              onClick={() => navigateTo(AppRoute.CURRENT_SERIES)} 
              className={`px-1.5 xl:px-3 py-1.5 rounded transition cursor-pointer hover:bg-gray-800/40 hover:text-white whitespace-nowrap ${
                currentRoute === AppRoute.CURRENT_SERIES ? "text-yellow-500 bg-[#161619]" : "text-gray-450"
              }`}
            >
              1A-6A Series
            </button>
            <button 
              id="nav-price"
              onClick={() => navigateTo(AppRoute.PRICE)} 
              className={`px-1.5 xl:px-3 py-1.5 rounded transition cursor-pointer hover:bg-gray-800/40 hover:text-white whitespace-nowrap ${
                currentRoute === AppRoute.PRICE ? "text-yellow-500 bg-[#161619]" : "text-gray-450"
              }`}
            >
              Prices
            </button>
            <button 
              id="nav-program"
              onClick={() => navigateTo(AppRoute.PROGRAMMABLE)} 
              className={`px-1.5 xl:px-3 py-1.5 rounded transition cursor-pointer hover:bg-gray-800/40 hover:text-white whitespace-nowrap ${
                currentRoute === AppRoute.PROGRAMMABLE ? "text-yellow-500 bg-[#161619]" : "text-gray-450"
              }`}
            >
              Programmable
            </button>
            <button 
              id="nav-lab"
              onClick={() => navigateTo(AppRoute.LAB_USE)} 
              className={`px-1.5 xl:px-3 py-1.5 rounded transition cursor-pointer hover:bg-gray-800/40 hover:text-white whitespace-nowrap ${
                currentRoute === AppRoute.LAB_USE ? "text-yellow-500 bg-[#161619]" : "text-gray-450"
              }`}
            >
              Lab Edition
            </button>
            <button 
              id="nav-app"
              onClick={() => navigateTo(AppRoute.APPLICATION)} 
              className={`px-1.5 xl:px-3 py-1.5 rounded transition cursor-pointer hover:bg-gray-800/40 hover:text-white whitespace-nowrap ${
                currentRoute === AppRoute.APPLICATION ? "text-yellow-500 bg-[#161619]" : "text-gray-400"
              }`}
            >
              Applications
            </button>
            <button 
              id="nav-intro800v"
              onClick={() => navigateTo(AppRoute.INTRO_800V)} 
              className={`px-1.5 xl:px-3 py-1.5 rounded transition cursor-pointer hover:bg-gray-800/40 hover:text-white whitespace-nowrap ${
                currentRoute === AppRoute.INTRO_800V ? "text-yellow-500 bg-[#161619]" : "text-gray-400"
              }`}
            >
              800V Tech Info
            </button>
            <button 
              id="nav-about-faq"
              onClick={() => navigateTo(AppRoute.ABOUT_ETM)} 
              className={`px-1.5 xl:px-3 py-1.5 rounded transition cursor-pointer hover:bg-gray-800/40 hover:text-white whitespace-nowrap ${
                currentRoute === AppRoute.ABOUT_ETM ? "text-yellow-500 bg-[#161619]" : "text-gray-400"
              }`}
            >
              About & FAQs
            </button>
          </nav>

          {/* Right Action Trigger */}
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
      </header>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="lg:hidden fixed inset-x-0 top-16 z-30 bg-[#0a0a0c] border-b border-gray-800 p-4 space-y-2 text-sm">
          {[
            { label: "800V DC Home", route: AppRoute.HOME },
            { label: "How to Use Guide", route: AppRoute.HOW_TO_USE },
            { label: "1A - 6A Series", route: AppRoute.CURRENT_SERIES },
            { label: "Where to Buy Channels", route: AppRoute.WHERE_TO_BUY },
            { label: "Price Matrices", route: AppRoute.PRICE },
            { label: "Online Stock & Pricing", route: AppRoute.BUY_ONLINE },
            { label: "Best Supply Benchmark", route: AppRoute.BEST_SUPPLY },
            { label: "Programmable 800V DC", route: AppRoute.PROGRAMMABLE },
            { label: "Laboratory Edition", route: AppRoute.LAB_USE },
            { label: "Application Studies", route: AppRoute.APPLICATION },
            { label: "800V Tech Info", route: AppRoute.INTRO_800V },
            { label: "About & FAQs", route: AppRoute.ABOUT_ETM },
          ].map((item, id) => (
            <button
              key={id}
              id={`mob-nav-${id}`}
              onClick={() => {
                setMobileMenuOpen(false);
                navigateTo(item.route);
              }}
              className={`w-full text-left py-2 px-3 rounded-lg font-medium transition cursor-pointer ${
                currentRoute === item.route 
                  ? "bg-yellow-500/10 text-yellow-500" 
                  : "text-gray-400 hover:bg-gray-800/30 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
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

      {/* Main Content Workspace Layout with Interactive Breadcrumbs */}
      <main id="primary-workspace" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-7">
        
        {/* Elegant Standard Breadcrumbs Navigation */}
        <div id="breadcrumbs" className="flex items-center gap-2 text-xs text-gray-500 py-1.5 font-sans border-b border-gray-900 pb-3">
          <button 
            id="breadcrumb-home"
            onClick={() => navigateTo(AppRoute.HOME)}
            className="hover:text-yellow-500 font-semibold cursor-pointer transition flex items-center gap-1.5 text-gray-400"
          >
            <Globe size={13} className="text-yellow-500" />
            <span>800V DC Power Supply</span>
          </button>
          
          {currentRoute !== AppRoute.HOME && (
            <>
              <ChevronRight size={12} className="text-gray-600 shrink-0" />
              <span className="text-gray-200 font-semibold">
                {ROUTE_LABELS_MAP[currentRoute]}
              </span>
            </>
          )}
        </div>

        {/* Dynamic page content node */}
        <div id="dynamic-content-wrapper" className="min-h-[450px]">
          {renderActiveView()}
        </div>

      </main>

      {/* Site footer */}
      <footer id="site-footer" className="bg-[#0b0b0d] border-t border-gray-900 mt-16 text-xs text-gray-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-gray-200">
              <div className="w-6 h-6 rounded bg-yellow-500 text-gray-950 flex items-center justify-center font-bold font-mono text-xs">eTM</div>
              <span className="font-sans uppercase text-xs tracking-wider">eTommens Power Co.</span>
            </div>
            <p className="leading-relaxed text-gray-500">
              Premium manufacturer of high-reliability 800V DC programmable power systems. Empowering research labs, automation clusters, and automated electrical systems.
            </p>
          </div>

          <div className="space-y-3 font-sans">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold">Quick Inner Links</h4>
            <ul className="space-y-1.5 text-gray-400">
              <li>
                <button onClick={() => navigateTo(AppRoute.HOW_TO_USE)} className="hover:text-yellow-500 text-[11px] underline text-left cursor-pointer">
                  How to Use 800V Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo(AppRoute.WHERE_TO_BUY)} className="hover:text-yellow-500 text-[11px] underline text-left cursor-pointer">
                  Where to Buy Channels
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo(AppRoute.PRICE)} className="hover:text-yellow-500 text-[11px] underline text-left cursor-pointer">
                  800V DC Series Price List
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo(AppRoute.BUY_ONLINE)} className="hover:text-yellow-500 text-[11px] underline text-left cursor-pointer">
                  Online Stock & Pricing Portal
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3 font-sans">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold">Amperage Matrix</h4>
            <ul className="space-y-1.5 font-mono text-gray-450">
              <li>800V / 1A (Model eTM-8001)</li>
              <li>800V / 2A (Model eTM-8002)</li>
              <li>800V / 3A (Model eTM-8003)</li>
              <li>800V / 5A (Model eTM-8005)</li>
              <li>800V / 6A (Model eTM-8006)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold">Digital Inquiries</h4>
            <p className="leading-normal">
              Direct all official R&D tenders, system RFQs, and distribution request files to our support desk.
            </p>
            <div className="pt-1.5">
              <span className="block text-gray-300 font-mono text-xs">contact@variabledcpowersupply.com</span>
              <span className="block text-gray-500 text-[11px] mt-0.5">Response within 2 hours</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright detail */}
        <div id="footer-copyright" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-gray-950 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <span>
            &copy; 1998 - 2026 eTommens Electromechanical Corporation. All rights reserved. Registered under domain: variabledcpowersupply.com
          </span>
          <div className="flex gap-4 text-gray-500">
            <span className="hover:text-gray-400 cursor-help underline">High-Voltage Safeties Standard</span>
            <span>&middot;</span>
            <span className="hover:text-gray-400 cursor-help underline">ISO 9001 Audited</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
