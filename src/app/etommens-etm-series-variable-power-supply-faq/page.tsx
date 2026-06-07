import type { Metadata } from "next";
import AboutEtmView from "@/components/AboutEtmView";

export const metadata: Metadata = {
  title: "About eTommens & ETM Series Variable Power Supply FAQ",
  description: "Learn about eTommens electromechanical systems and browse our interactive FAQ on safety protection models, SCPI interfaces, warranties, and shipping.",
  alternates: {
    canonical: "/etommens-etm-series-variable-power-supply-faq",
  },
};

export default function Page() {
  return <AboutEtmView />;
}
