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
    default: "Appolinaire ADANDE | Fullstack, DevOps, ML Engineer",
    template: "%s | Appolinaire ADANDE",
  },
  description:
    "Portfolio d'Appolinaire Adande. Développement fullstack avec Next.js, React, FastAPI et Python. CI/CD, Docker, Linux, VPS, ML applicatif et dashboards data.",
  keywords: [
    "Appolinaire Adande",
    "portfolio développeur",
    "Next.js",
    "React",
    "FastAPI",
    "Python",
    "DevOps",
    "Docker",
    "Linux",
    "VPS",
    "Machine Learning",
    "ML Engineer",
    "CI/CD",
    "développeur fullstack",
    "ingénieur devops",
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
    title: "Appolinaire ADANDE | Fullstack, DevOps, ML Engineer",
    description:
      "Développement fullstack avec Next.js, React, FastAPI et Python. CI/CD, Docker, Linux, VPS, ML applicatif et dashboards data.",
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
    title: "Appolinaire ADANDE | Fullstack, DevOps, ML Engineer",
    description:
      "Développement fullstack avec Next.js, React, FastAPI et Python. CI/CD, Docker, Linux, VPS, ML applicatif et dashboards data.",
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
        <script id="theme-initializer" dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const versionKey = 'theme-version';
              const themeKey = 'theme';
              const expectedVersion = '2';
              const savedVersion = localStorage.getItem(versionKey);
              if (savedVersion !== expectedVersion) {
                localStorage.setItem(themeKey, 'system');
                localStorage.setItem(versionKey, expectedVersion);
              }
              const savedTheme = localStorage.getItem(themeKey);
              const theme = savedTheme === 'light' || savedTheme === 'dark'
                ? savedTheme
                : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.classList.remove('light', 'dark');
              document.documentElement.classList.add(theme === 'dark' ? 'dark' : 'light');
            })();
          `
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "ADANDE Appolinaire",
              "url": "https://adandeappolinaire.me",
              "sameAs": [
                "https://github.com/Appolinairee",
                "https://www.linkedin.com/in/appolinaire-adande/"
              ],
              "jobTitle": "Ingénieur Généraliste, Fullstack, DevOps & ML Engineer",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "École Centrale Casablanca"
              },
              "knowsAbout": [
                "Software Engineering",
                "DevOps",
                "Machine Learning",
                "Next.js",
                "React",
                "NestJS",
                "Docker",
                "FastAPI"
              ]
            })
          }}
        />
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
