import type { Metadata } from "next";
import LabUseView from "@/components/LabUseView";

export const metadata: Metadata = {
  title: "800V DC Power Supply for Research & High Voltage Labs",
  description: "Explore lab-grade features for eTommens 800V DC power supplies. Test our DB9 safety interlock simulator and review required certifications.",
  alternates: {
    canonical: "/800v-dc-power-supply-for-lab",
  },
};

export default function Page() {
  return <LabUseView />;
}
