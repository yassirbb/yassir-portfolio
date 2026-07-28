import type { Metadata } from "next";
import { cookies } from "next/headers";

import { siteConfig } from "@/config/site";

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
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },

  description: siteConfig.description,

  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.url
    }
  ],

  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,

  keywords: [
    "Frontend Engineer",
    "React Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Frontend Developer Morocco",
    "Enterprise Frontend",
    "Yassir Ben Boubker"
  ],

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,

    images: [
      {
        url: siteConfig.images.social,
        width: 1200,
        height: 630,
        alt:
          "Yassir Ben Boubker Frontend Engineer portfolio"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      siteConfig.images.social
    ]
  }
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