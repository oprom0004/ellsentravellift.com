import type { Metadata } from "next";
import HomeView from "@/components/HomeView";

export const metadata: Metadata = {
  title: "800V DC Variable Programmable Power Supplies | eTommens ETM Series",
  description: "Discover high-precision 800V DC power supplies by eTommens. Ideal for high-voltage laboratories, EV testbeds, aerospace automation, and rack integrations.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomeView />;
}
