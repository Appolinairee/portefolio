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

export const metadata: Metadata = {
  title: "Appolinaire ADANDE - Portfolio",
  description: "Portfolio personnel d'Appolinaire Adande - Développeur Full Stack",
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
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              }
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
