import type { Metadata } from "next";
import BuyOnlineView from "@/components/BuyOnlineView";

export const metadata: Metadata = {
  title: "Buy 800V DC Power Supply Online - Global Stock Tracker",
  description: "Check regional warehouse stock levels and secure checkout portals to buy eTommens 800V programmable DC power supplies online.",
  alternates: {
    canonical: "/buy-800v-dc-power-supplies-online",
  },
};

export default function Page() {
  return <BuyOnlineView />;
}
