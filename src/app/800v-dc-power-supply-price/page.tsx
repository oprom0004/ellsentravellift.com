import type { Metadata } from "next";
import PriceView from "@/components/PriceView";

export const metadata: Metadata = {
  title: "800V DC Power Supply Price Matrices & Custom RFQ Quotes",
  description: "Browse pricing for eTommens 800V variable DC power supplies. Select models, interfaces, and warranty options to calculate instant corporate quote proposals.",
  alternates: {
    canonical: "/800v-dc-power-supply-price",
  },
};

export default function Page() {
  return <PriceView />;
}
