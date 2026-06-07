import type { Metadata } from "next";
import ApplicationView from "@/components/ApplicationView";

export const metadata: Metadata = {
  title: "800V DC Power Supply Applications: EV, PV & Battery Simulation",
  description: "Read deployment blueprints for 800V DC power systems. Use our interactive Ohm load and cable gauge estimator to suggest the right model for your test setup.",
  alternates: {
    canonical: "/800v-dc-power-supply-application",
  },
};

export default function Page() {
  return <ApplicationView />;
}
