import type { Metadata } from "next";
import ProgrammableView from "@/components/ProgrammableView";

export const metadata: Metadata = {
  title: "Programmable 800V DC Power Supply Specs & Automation Guide",
  description: "Learn to automate eTommens 800V DC power supplies. Test our interactive SCPI terminal simulator and download custom Python serial interface scripts.",
  alternates: {
    canonical: "/programmable-800v-dc-power-supply",
  },
};

export default function Page() {
  return <ProgrammableView />;
}
