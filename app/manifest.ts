import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio Appolinaire Adande",
    short_name: "Appolinaire",
    description:
      "Portfolio d'Appolinaire Adande, Lead Fullstack spécialisé en Next.js, Node.js et DevOps.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "fr",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
