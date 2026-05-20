import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles d'Appolinaire Adande sur le développement logiciel, l'architecture, le DevOps, le machine learning et la construction de produits.",
  alternates: {
    canonical: "/articles",
  },
};

export default function ArticlesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
