import type { MetadataRoute } from "next";

const BASE = "https://jadecircuit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/harmonyos-app-development/`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${BASE}/guides/does-your-company-need-a-harmonyos-app/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
