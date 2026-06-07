import type { Metadata } from "next";
import CurrentSeriesView from "@/components/CurrentSeriesView";

export const metadata: Metadata = {
  title: "800V DC Power Supply Current Ratings: 1A, 2A, 3A, 5A, 6A Specs",
  description: "Compare continuous power output, dimensions, and conductor wiring requirements for eTommens 800V DC programmable power supplies from 1A to 6A.",
  alternates: {
    canonical: "/1A-to-6A-800v-dc-series",
  },
};

export default function Page() {
  return <CurrentSeriesView />;
}
