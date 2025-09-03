import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
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
  title: "Road to sub0",
  description: "Road to sub0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
      </body>
    </html>
  );
}
