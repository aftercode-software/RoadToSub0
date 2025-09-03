"use client";

import { Container } from "@/layouts/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import EmailForm from "./EmailForm";
import MetricHero from "./MetricHero";

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-bg", {
      opacity: 0,
      duration: 2,
      ease: "power4.out",
    });
    tl.from(
      ".hero-title",
      {
        opacity: 0,
        scale: 0.5,
        y: -30,
        duration: 1,
        ease: "power4.out",
      },
      "<+0.5"
    );
    tl.from(
      ".hero-description",
      {
        opacity: 0,
        scale: 0.5,
        y: -30,
        duration: 1,
        ease: "power4.out",
      },
      "<+0.2"
    );
    tl.from(
      ".hero-email-form",
      {
        opacity: 0,
        scale: 0.5,
        y: -30,
        duration: 1,
        ease: "power4.out",
      },
      "<+0.2"
    );
    tl.from(
      ".hero-metrics",
      {
        opacity: 0,
        scale: 0.5,
        y: -30,
        duration: 1,
        ease: "power4.out",
      },
      "<+0.2"
    );
  });

  return (
    <div
      className="w-full min-h-[90dvh] bg-cover bg-center bg-no-repeat hero-bg"
      style={{
        background:
          'linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(21, 21, 21, 0.4) 80%, rgba(21, 21, 21, 1) 100%), url("/backgrounds/hero.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="flex flex-col items-center pt-50 md:pt-60 gap-10">
        <h1 className="font-display leading-[0.95] md:max-w-6xl text-center text-white">
          <span className="block text-5xl sm:text-6xl md:text-8xl">
            ship products{" "}
          </span>
          <span className="block text-5xl font-bold sm:text-6xl md:text-8xl">
            solve problems
          </span>
        </h1>

        <p className="font-body max-w-2xl font-manrope text-base text-center text-white/85 sm:text-xl md:max-w-3xl">
          One journey, three hackathons. Compete, lauch your demo, and win cash
          prizes to keep building on Polkadot.
        </p>

        <EmailForm className="hero-email-form" />

        <div className="mt-10 flex w-full max-w-3xl justify-center gap-8 md:gap-20 md:mt-14">
          <MetricHero text="+100K" subtitle="for creative ideas" glowing />
        </div>
      </Container>
      <span id="roadmap" />
    </div>
  );
}
