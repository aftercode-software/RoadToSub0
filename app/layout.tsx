import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
      <body
        className={`${unbounded.className} ${manrope.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
