import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Sélection de projets réalisés par Appolinaire Adande en Next.js, React, NestJS, Node.js et architecture fullstack.",
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
