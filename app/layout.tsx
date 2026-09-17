import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import ClientLayout from "./client-layout";
import "./globals.css";
import { Suspense } from "react";

const siteUrl = "https://www.nuriddin.uz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nuriddin Sobirjonov | Software Developer",
    template: "%s | Nuriddin Sobirjonov",
  },
  description:
    "Terminal-style portfolio of Nuriddin Sobirjonov, a fullstack software developer building modern web applications.",
  keywords: [
    "Nuriddin Sobirjonov",
    "Software Developer",
    "Fullstack Developer",
    "React",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: "Nuriddin Sobirjonov", url: siteUrl }],
  creator: "Nuriddin Sobirjonov",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nuriddin Sobirjonov",
    title: "Nuriddin Sobirjonov | Software Developer",
    description:
      "Terminal-style portfolio of Nuriddin Sobirjonov, a fullstack software developer building modern web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuriddin Sobirjonov | Software Developer",
    description:
      "Terminal-style portfolio of Nuriddin Sobirjonov, a fullstack software developer building modern web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-mono ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientLayout>{children}</ClientLayout>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
