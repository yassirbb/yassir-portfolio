import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Manrope
} from "next/font/google";

import "./globals.css";

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

export default function RootLayout({
  children
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={[
        inter.variable,
        manrope.variable,
        jetBrainsMono.variable
      ].join(" ")}
    >
      <body>{children}</body>
    </html>
  );
}