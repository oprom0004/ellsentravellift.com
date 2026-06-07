import type { Metadata } from "next";
import HowToUseView from "@/components/HowToUseView";

export const metadata: Metadata = {
  title: "How to Use an 800V DC Power Supply Safely & Correctly",
  description: "Learn step-by-step operational and safety protocols for 800V DC power supplies. Discover grounding, isolation interlocks, LOTO, and active discharge systems.",
  alternates: {
    canonical: "/how-to-use-800v-dc-power-supply",
  },
};

export default function Page() {
  return <HowToUseView />;
}
