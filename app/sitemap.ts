import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Gera /sitemap.xml. Ao criar novas páginas (ex.: /blog), adicione-as aqui.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
