import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://jillanne-portfolio.vercel.app/sitemap.xml",
    host: "https://jillanne-portfolio.vercel.app",
  };
}