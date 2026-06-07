import type { Metadata } from "next";
import WhereToBuyView from "@/components/WhereToBuyView";

export const metadata: Metadata = {
  title: "Where to Buy 800V DC Power Supplies - Authorized Channels",
  description: "Locate official sales portals and authorized distributors for eTommens 800V DC power supplies. Get quotes, specs, and certified enterprise compliance info.",
  alternates: {
    canonical: "/where-to-buy-800v-dc-power-supply",
  },
};

export default function Page() {
  return <WhereToBuyView />;
}
