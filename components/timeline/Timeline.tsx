"use client";

import RoadmapTimeline, { TimelineItem } from "@/components/RoadmapTimeline";
import { Container } from "@/layouts/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MetricHero from "../hero/MetricHero";

export default function Timeline() {
  const items: TimelineItem[] = [
    { id: "start", variant: "start" },
    {
      id: "latin-hack",
      dateLabel: "19.09.2025",
      prize: "$21K",
      title: "Latin Hack",
      description:
        "Starting line in LATAM. Onboarding for first-timers and seniors, with tracks that reward simple, working prototypes and fast learning.",
      ctaLabel: "Join the event",
      ctaHref: "#latin-hack",
      variant: "event",
      accent: "green",
    },
    {
      id: "gbp",
      dateLabel: "12.10.2025",
      prize: "$40K",
      title: "Global Builder Party",
      description:
        "Global online hackathon that raises the bar with Polkadot 2.0 topics.",
      ctaLabel: "Join the event",
      ctaHref: "#global-builder-party",
      variant: "event",
      accent: "pink",
    },
    {
      id: "sub0",
      title: "sub0",
      ctaLabel: "Join the event",
      ctaHref: "#sub0",
      variant: "logo",
      logoSrc: "/sub0-logo.svg",
      accent: "pink",
    },
  ];

  useGSAP(() => {
    gsap.from(".timeline-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".timeline-title",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div
      className="w-full min-h-[100dvh] bg-cover bg-center bg-no-repeat timeline-title"
      // style={{ backgroundImage: 'url("/backgrounds/noise.png")' }}
    >
      <Container className="flex flex-col items-center ">
        <h2 className="font-display leading-[0.95] max-w-5xl text-center flex md:flex-row flex-col gap-4">
          <span className="block text-3xl sm:text-4xl md:text-5xl">
            Roadmap To <b>Revolution</b>
          </span>
        </h2>
        <RoadmapTimeline className="mt-16 mb-16 w-full" items={items} />
      </Container>
    </div>
  );
}
