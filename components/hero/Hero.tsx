/* eslint-disable @next/next/no-img-element */
"use client";

import { Container } from "@/layouts/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import EmailForm from "./EmailForm";
import MetricHero from "./MetricHero";

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".polkadot-logo", {
      opacity: 0,
      scale: 0.5,
      y: -30,
      duration: 1,
      ease: "power4.out",
    });
    tl.from(
      ".mision",
      {
        opacity: 0,
        scale: 0.5,
        y: -30,
        duration: 1,
        ease: "power4.out",
      },
      "<+0.1"
    );

    tl.add("afterIntro");

    tl.from(
      ".hero-bg",
      {
        opacity: 0,
        duration: 2,
        ease: "power4.out",
      },
      "afterIntro+=0.1"
    );

    tl.from(
      ".hero-title",
      {
        opacity: 0,
        scale: 0.5,
        y: -30,
        duration: 1.2,
        ease: "power4.out",
      },
      "<+0.2"
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
      id="hero"
      style={{
        background:
          'linear-gradient(180deg,rgba(255, 255, 255, 0) 0%, rgba(21, 21, 21, 0.2) 70%, rgba(21, 21, 21, 1) 100%), url("/backgrounds/hero-2.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="flex flex-col items-center pt-40 md:pt-50 gap-6 md:gap-8">
        <img
          src="/logos/polkadot.svg"
          alt="Polkadot logo"
          className="polkadot-logo w-40 md:w-auto"
        />
        <p className="text-green text-lg md:text-3xl text-center mision">
          One journey. Three hackathons
        </p>
        <h1 className="font-display leading-[0.95] md:max-w-7xl text-center text-white hero-title">
          <span className="font-bold text-5xl sm:text-6xl md:text-8xl flex items-center gap-3 md:gap-6">
            Road to
            <img
              src="/sub0-logo.svg"
              alt="sub0-logo"
              className="w-28 md:w-52"
            />
          </span>
        </h1>

        <p className="font-medium max-w-2xl font-manrope text-base text-center text-white sm:text-xl md:max-w-md hero-description">
          Complete, launch and win cash prizes to keep building on Polkadot
        </p>

        <EmailForm className="hero-email-form" />

        <div className=" flex w-full max-w-3xl justify-center gap-8 md:gap-20 md:mt-14 hero-metrics">
          <MetricHero text="+$100K" subtitle="for creative ideas" glowing />
        </div>
      </Container>
      <span id="roadmap" />
    </div>
  );
}
