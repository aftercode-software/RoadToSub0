"use client";

import { Container } from "@/layouts/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export default function WhatIsSub0() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".what-is-sub0-container",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    tl.from(".what-is-sub0-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power4.out",
    });

    tl.from(
      ".what-is-sub0-text span",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
        stagger: 0.4,
      },
      "<+0.2"
    );
  });

  return (
    <Container className="sm:max-w-[90%] lg:max-w-[70%] pt-40 pb-20 what-is-sub0-container">
      <p className="text-white text-2xl what-is-sub0-text">
        Three phases to test your idea:{" "}
        <span className="font-bold text-green">start small</span>,{" "}
        <span className="font-bold text-green">build momentum</span>, and{" "}
        <span className="font-bold text-green">
          land on the global stage at sub0
        </span>
        . You can join each hackathon with the same project — improving it step
        by step — and compete for bigger prizes as you go{" "}
        <span className="font-bold text-green">
          while connecting with builders worldwide and solving real-world
          problems with Polkadot
        </span>
      </p>
    </Container>
  );
}
