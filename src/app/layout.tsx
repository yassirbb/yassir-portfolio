import type { Metadata } from "next";
import { cookies } from "next/headers";

import {
  Inter,
  JetBrains_Mono,
  Manrope
} from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import type { Language } from "@/hooks/useLanguage";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Yassir Ben Boubker | Frontend Engineer",
  description:
    "Frontend Engineer building React and TypeScript interfaces."
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default async function RootLayout({
  children
}: RootLayoutProps) {
  const cookieStore = await cookies();

  const storedLanguage = cookieStore.get(
    "portfolio-language"
  )?.value;

  const initialLanguage: Language =
    storedLanguage === "fr" ? "fr" : "en";

  return (
    <html 
      lang={initialLanguage}
      className={[
        inter.variable,
        manrope.variable,
        jetBrainsMono.variable
      ].join(" ")} >
      <body>
        <Header initialLanguage={initialLanguage} />

        {children}

        <Footer />
      </body>
    </html>
  );
}