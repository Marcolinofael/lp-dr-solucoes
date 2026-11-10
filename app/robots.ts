import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Gera /robots.txt: libera o site inteiro para os buscadores e indica onde está o sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
