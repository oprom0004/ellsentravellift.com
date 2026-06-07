import type { Metadata } from "next";
import Intro800VView from "@/components/Intro800VView";

export const metadata: Metadata = {
  title: "800V DC Technology Introduction: Advantages & High-Voltage Safeties",
  description: "Learn about the engineering benefits of 800V DC power architectures. Discover how dual-frequency switching and active discharge circuits optimize efficiency.",
  alternates: {
    canonical: "/800v-dc-technology-introduction",
  },
};

export default function Page() {
  return <Intro800VView />;
}
