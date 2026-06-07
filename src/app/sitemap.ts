import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ellsentravellift.com";
  const routes = [
    "",
    "/1A-to-6A-800v-dc-series",
    "/800v-dc-power-supply-application",
    "/800v-dc-power-supply-for-lab",
    "/800v-dc-power-supply-price",
    "/800v-dc-technology-introduction",
    "/best-800v-dc-power-supply",
    "/buy-800v-dc-power-supplies-online",
    "/etommens-etm-series-variable-power-supply-faq",
    "/how-to-use-800v-dc-power-supply",
    "/programmable-800v-dc-power-supply",
    "/where-to-buy-800v-dc-power-supply",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
