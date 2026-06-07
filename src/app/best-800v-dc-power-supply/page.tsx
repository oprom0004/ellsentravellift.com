import type { Metadata } from "next";
import BestSupplyView from "@/components/BestSupplyView";

export const metadata: Metadata = {
  title: "Best 800V DC Power Supply for Laboratory R&D Benchmarks",
  description: "Learn what technical features define the best 800V DC power supply for high-voltage testing. Compare ripple noise, isolation margins, and response transient times.",
  alternates: {
    canonical: "/best-800v-dc-power-supply",
  },
};

export default function Page() {
  return <BestSupplyView />;
}
