import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const unbounded = localFont({
  src: "/fonts/Unbounded-Variable.ttf",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Road to Sub0",
  description:
    "Make your idea come to life. Join four hackathons, win prizes, and showcase at sub0 — the biggest Polkadot event in front of global experts.",
  keywords:
    "hackathon, polkadot, blockchain competition, project, ship, vercel, developer, contest, prizes, crypto, web3, smart contracts, parachain, cryptocurrency, innovation",
  openGraph: {
    title: "Road to Sub0",
    description:
      "Global hackathon series. Start your project on Polkadot and compete for $100k in funding and mentoring",
    url: "https://roadtosub0.com",
    siteName: "Road to Sub0",
    images: [
      {
        url: "https://roadtosub0.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sub0 Competition Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Road to Sub0",
    description:
      "Global hackathon series. Start your project on Polkadot and compete for $100k in funding and mentoring.",
    images: ["https://roadtosub0.com/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#151515" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />

        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${unbounded.className} ${manrope.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""}
        />
      </body>
    </html>
  );
}
