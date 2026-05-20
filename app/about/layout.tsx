import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Parcours d'Appolinaire Adande: fullstack, DevOps, ML engineer, projets web et data, stack Next.js, FastAPI, Python, Docker.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
