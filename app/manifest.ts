import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jill Anne Basit Portfolio",
    short_name: "Jill Anne",
    description:
      "Portfolio of Jill Anne Basit, Social Media Manager, Content Creator, and Graphic Designer.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f3",
    theme_color: "#faf8f3",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}