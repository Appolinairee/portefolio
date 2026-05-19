import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { AnimatePresence } from 'framer-motion';
import NavBar from "@/components/navbar/NavBar";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl = "https://adandeappolinaire.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Appolinaire ADANDE | Lead Fullstack Next.js, Node.js et DevOps",
    template: "%s | Appolinaire ADANDE",
  },
  description:
    "Portfolio d'Appolinaire Adande, Lead Fullstack spécialisé en Next.js, React, NestJS, Node.js, architecture web et CI/CD.",
  keywords: [
    "Appolinaire Adande",
    "portfolio développeur",
    "Next.js",
    "React",
    "NestJS",
    "Node.js",
    "DevOps",
    "CI/CD",
    "développeur fullstack",
    "lead technique",
  ],
  authors: [{ name: "Appolinaire Adande", url: siteUrl }],
  creator: "Appolinaire Adande",
  publisher: "Appolinaire Adande",
  applicationName: "Portfolio Appolinaire Adande",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Portfolio Appolinaire Adande",
    title: "Appolinaire ADANDE | Lead Fullstack Next.js, Node.js et DevOps",
    description:
      "Portfolio d'Appolinaire Adande, Lead Fullstack spécialisé en Next.js, React, NestJS, Node.js, architecture web et CI/CD.",
    images: [
      {
        url: "/assets/ApolinaireADANDE.png",
        width: 1200,
        height: 630,
        alt: "Portrait d'Appolinaire Adande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appolinaire ADANDE | Lead Fullstack Next.js, Node.js et DevOps",
    description:
      "Portfolio d'Appolinaire Adande, Lead Fullstack spécialisé en Next.js, React, NestJS, Node.js, architecture web et CI/CD.",
    images: ["/assets/ApolinaireADANDE.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={montserrat.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme') || 'light';
              document.documentElement.classList.remove('light', 'dark');
              document.documentElement.classList.add(theme === 'dark' ? 'dark' : 'light');
            })();
          `
        }} />
      </head>
      <body className="font-montserrat antialiased">
        <NavBar />
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
