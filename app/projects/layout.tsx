import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Projets réalisés par Appolinaire Adande: marketplace fullstack, outil ML de prédiction clinique, dashboard data GDELT, site vitrine et modules web.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
