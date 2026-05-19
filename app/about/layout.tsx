import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Parcours, compétences, expérience et vision d'Appolinaire Adande, développeur fullstack et lead technique.",
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
