import Timeline from "@/components/timeline/Timeline";
import Hero from "../components/hero/Hero";
import HostAnywhere from "../components/host-anywhere/HostAnywhere";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sub0 Competition - Road to Sub0",
  description:
    "Make your idea come to life. Join three hackathons, win prizes, and showcase at sub0 — the biggest Polkadot event in front of global experts.",
  keywords:
    "Sub0, Substrate, Polkadot, blockchain competition, developer contest, Web3, decentralized applications, smart contracts, parachain development, cryptocurrency, blockchain innovation",
  openGraph: {
    title: "Sub0 Competition - Road to Sub0",
    description:
      "The premier Substrate and Polkadot developer competition. Build, compete, and win in the decentralized ecosystem.",
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
    title: "Sub0 Competition - Road to Sub0",
    description:
      "Join the ultimate Substrate and Polkadot developer competition. Build innovative blockchain solutions and win amazing prizes.",
    images: ["https://roadtosub0.com/og-image.webp"],
  },
};
export default function Home() {
  return (
    <>
      <Hero />

      <Timeline />
      <HostAnywhere />
    </>
  );
}
