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
      <Container className="flex flex-col items-center pt-50 gap-10">
        <h1 className="font-display leading-[0.95] max-w-6xl text-center hero-title">
          <span className="block text-5xl sm:text-6xl md:text-8xl">
            Make your ideas
          </span>
          <span className="block text-5xl font-bold sm:text-6xl md:text-8xl">
            come true
          </span>
        </h1>

        <p className="font-body max-w-2xl font-manrope text-base text-center text-white/85 sm:text-lg md:max-w-3xl hero-description">
          Road to Sub0 is a{" "}
          <span className="font-bold">global, collaborative</span> program that
          aligns the ecosystem around one{" "}
          <span className="font-bold">journey</span> to
          <span className="font-bold font-unbounded"> Sub0</span> and delivers
          new projects building on Polkadot.
        </p>

        <EmailForm className="hero-email-form" />

        <div className="mt-10 flex w-full max-w-3xl justify-center gap-8 md:gap-20 md:mt-14 hero-metrics">
          <MetricHero text="+40" subtitle="countries" glowing marginTop />
          <MetricHero text="+100K" subtitle="for creative ideas" glowing />
          <MetricHero text="3" subtitle="hackathons" glowing marginTop />
        </div>
      </Container>
    </div>
  );
}
