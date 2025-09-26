"use client";

import RoadmapTimeline, { TimelineItem } from "@/components/RoadmapTimeline";
import { Container } from "@/layouts/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Timeline() {
  const items: TimelineItem[] = [
    {
      id: "latin-hack",
      dateLabel: "27 sept",
      prize: "$21K",
      title: "Latin Hack",
      description:
        "Kick off in LATAM. Welcome first-timers and seniors, with tracks that reward simple, working prototypes.",
      ctaLabel: "Learn more",
      ctaHref: "https://nerdconf.com/",
      variant: "event",
      accent: "green",
    },
    {
      id: "gbp",
      dateLabel: "6 oct",
      prize: "$40K",
      title: "Builder Party",
      description:
        "Global online hackathon that puts your skills to the test with the latest Polkadot tech.",
      ctaLabel: "Learn more",
      ctaHref: "https://polkadot.cloud/build-party ",
      variant: "event",
      accent: "pink",
    },
     {
      id: "doy-your-future",
      dateLabel: "27 oct",
      prize: "$12K",
      title: "Dot Your Future",
      description:
        "The Asia hack on the Road to Sub0. A playground for pros ready to push Polkadot tech to the limit — REVM, PolkaVM, liquid staking on Bifrost",
      ctaLabel: "Learn more",
      ctaHref: "https://luma.com/nwa8qf6e",
      variant: "event",
      accent: "green",
    },
    {
      id: "sub0",
      title: "sub0",
      prize: "$40K",
      dateLabel: "14-16 nov",
      ctaLabel: "Learn more",
      ctaHref: "https://sub0.gg",
      variant: "logo",
      description:
        "Biggest Polkadot event of the year. Builders, experts and communities all in together in Buenos Aires. Don’t miss it.",
      logoSrc: "/logos/sub0-white.svg",
      accent: "pink",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-title",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    tl.from(".timeline-title", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power4.out",
    });

    tl.from(".timeline-description", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power4.out",
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
        <h2 className="mt-12 font-display leading-[0.95] max-w-5xl text-center flex md:flex-row flex-col gap-4 timeline-title">
          <span className="block text-3xl sm:text-4xl md:text-5xl text-white">
            The <b>Roadmap</b>
          </span>
        </h2>
        <p className="mt-4 font-lg max-w-2xl font-manrope text-base text-center text-white/85 sm:text-lg md:max-w-3xl timeline-description">
          Start anywhere. We guide you to a demo and submission.{" "}
          <span className="font-bold">Win cash prizes along the way.</span>
        </p>
        <RoadmapTimeline className="mt-16 mb-16 w-full" items={items} />
      </Container>
    </div>
  );
}
