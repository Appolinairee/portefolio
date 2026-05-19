import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles et réflexions d'Appolinaire Adande sur le développement web, l'architecture logicielle et l'entrepreneuriat.",
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
