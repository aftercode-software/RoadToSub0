"use client";

import { Container } from "@/layouts/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HostAnywhere() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".host-trigger",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.from(
      ".host-title",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power4.out",
      },
      "<+0.1"
    );
    tl.from(
      ".host-description",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power4.out",
      },
      "<+0.1"
    );
    tl.from(
      ".host-button",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power4.out",
      },
      "<+0.1"
    );
  });

  return (
    <Container className="flex items-center justify-center gap-10 relative py-20 host-trigger overflow-hidden">
      <div className="host-card flex flex-col items-center justify-center md:p-20 gap-10 z-10 md:max-w-[60%] text-center">
        <h2 className="text-4xl md:text-5xl font-normal flex flex-col text-white mt-20 md:mt-0 host-title">
          Meet <b className="text-radical-red">Worldwide</b> Builders
        </h2>
        <span className="host-description text-white">
          <p className="text-xl font-normal font-manrope">
            From Argentina to China, join Polkadot meetups worldwide, come hack,
            connect with builders and community while earning reputation in the
            Polkadot Roots program.
          </p>
        </span>
        <a
          href="https://luma.com/roadtosub0"
          target="_blank"
          rel="noopener noreferrer"
          className={`
                mt-8 inline-flex w-fit items-center justify-center rounded-xl px-12 py-3 text-xl font-bold
                bg-[rgba(24,24,24,0.71)] border focus:outline-none focus-visible:ring-2 hover:bg-[rgba(24,24,24,0.85)]
                text-radical-red-500 border-radical-red-500 ring-radical-red-500/30 host-button`}
        >
          Join a meetup
        </a>
      </div>
    </Container>
  );
}
