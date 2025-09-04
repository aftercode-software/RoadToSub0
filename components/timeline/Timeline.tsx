"use client";

import RoadmapTimeline, { TimelineItem } from "@/components/RoadmapTimeline";
import { Container } from "@/layouts/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Timeline() {
  const items: TimelineItem[] = [
    { id: "start", variant: "start" },
    {
      id: "latin-hack",
      dateLabel: "27 sept",
      prize: "$21K",
      title: "Latin Hack",
      description:
        "Starting line in LATAM. Welcome first-timers and seniors, with tracks that reward simple, working prototypes.",
      ctaLabel: "Claim your spot",
      ctaHref: "#hero",
      variant: "event",
      accent: "green",
    },
    {
      id: "gbp",
      dateLabel: "6 oct",
      prize: "$40K",
      title: "Global Builder Party",
      description:
        "Global online hackathon that raises the bar with Polkadot 2.0 topics.",
      ctaLabel: "Claim your spot",
      ctaHref: "#hero",
      variant: "event",
      accent: "pink",
    },
    {
      id: "sub0",
      title: "sub0",
      ctaLabel: "Claim your spot",
      ctaHref: "https://sub0.gg/",
      variant: "logo",
      logoSrc: "/logos/sub0-white.svg",
      accent: "pink",
    },
  ];

  useGSAP(() => {
    gsap.from(".timeline-title", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".timeline-title",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat timeline-title"
      // change the background opacity to 0.5, backgroundOpacity doesnt exist
      // style={{
      //   background: 'url("/backgrounds/noise.png")',
      // }}
    >
      <Container className="flex flex-col items-center ">
        <h2 className="mt-12 font-display leading-[0.95] max-w-5xl text-center flex md:flex-row flex-col gap-4">
          <span className="block text-3xl sm:text-4xl md:text-5xl text-white">
            The <b>Roadmap</b>
          </span>
        </h2>
        <p className="mt-4 font-lg max-w-2xl font-manrope text-base text-center text-white/85 sm:text-lg md:max-w-3xl hero-description">
          Start anywhere. We guide you to a demo and submission.{" "}
          <span className="font-bold">Win cash prizes along the way.</span>
        </p>
        <RoadmapTimeline className="mt-16 mb-16 w-full" items={items} />
      </Container>
    </div>
  );
}
