"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronRight } from "lucide-react";

const ROUTE_LABELS_MAP: Record<string, string> = {
  "/": "800V Home",
  "/how-to-use-800v-dc-power-supply": "How to Use Guide",
  "/where-to-buy-800v-dc-power-supply": "Where to Buy Channels",
  "/800v-dc-power-supply-price": "Price Matrices",
  "/buy-800v-dc-power-supplies-online": "Online Stock & Pricing",
  "/best-800v-dc-power-supply": "Best Supply Benchmark",
  "/1A-to-6A-800v-dc-series": "1A-6A Series",
  "/programmable-800v-dc-power-supply": "Programmable 800V DC",
  "/800v-dc-power-supply-for-lab": "Laboratory Edition",
  "/800v-dc-power-supply-application": "Application Studies",
  "/800v-dc-technology-introduction": "800V Tech Info",
  "/etommens-etm-series-variable-power-supply-faq": "About & FAQs",
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const label = ROUTE_LABELS_MAP[pathname] || "";

  return (
    <div id="breadcrumbs" className="flex items-center gap-2 text-xs text-gray-500 py-1.5 font-sans border-b border-gray-900 pb-3">
      <Link 
        href="/"
        className="hover:text-yellow-500 font-semibold cursor-pointer transition flex items-center gap-1.5 text-gray-400"
      >
        <Globe size={13} className="text-yellow-500" />
        <span>800V DC Power Supply</span>
      </Link>
      
      {pathname !== "/" && label && (
        <>
          <ChevronRight size={12} className="text-gray-600 shrink-0" />
          <span className="text-gray-200 font-semibold">
            {label}
          </span>
        </>
      )}
    </div>
  );
}
