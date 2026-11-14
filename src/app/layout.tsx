import type { Metadata } from "next";
import { Barlow_Condensed, Vollkorn, Kalam } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

// Headings and road-sign numbers.
const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Reading text.
const vollkorn = Vollkorn({
  variable: "--font-vollkorn",
  subsets: ["latin"],
});

// Handwritten notes.
const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.pageTitle,
  description: siteConfig.pageDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${vollkorn.variable} ${kalam.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
