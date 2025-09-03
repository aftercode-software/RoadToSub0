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
        toggleActions: "play none none reverse",
      },
    });
    tl.from(".host-map", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });
    tl.from(
      ".host-card",
      {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "power4.out",
      },
      "<+0.5"
    );

    tl.from(
      ".host-title",
      {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power4.out",
      },
      "<+0.1"
    );
    tl.from(
      ".host-description",
      {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power4.out",
      },
      "<+0.1"
    );
    tl.from(
      ".host-button",
      {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power4.out",
      },
      "<+0.1"
    );
  });

  return (
    <Container className="flex items-center justify-center gap-10 relative md:h-[80vh] mt-20 host-trigger overflow-hidden">
      <div className="host-card flex flex-col items-center justify-center md:p-20 gap-10 z-10 md:bg-black/10 md:backdrop-blur-sm md:max-w-[60%] text-center rounded-2xl md:border-2 border-radical-red/30">
        <h2 className="text-4xl font-normal text-radical-red mt-20 md:mt-0 host-title">
          Host Your Event <b>Anywhere</b>
        </h2>
        <span className="host-description">
          <p className="text-xl font-normal font-manrope">
            Turn your ideas into reality: host your own event from any city, for
            a global audience.
          </p>
          <p className="text-xl font-normal font-manrope">
            Our platform connects creators, communities, and talent without
            borders—making it easy for anyone to share, learn, and build
            together.
          </p>
        </span>
        <a
          href={"#"}
          className={`
                mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-xl font-bold
                bg-[rgba(24,24,24,0.71)] border focus:outline-none focus-visible:ring-2 hover:bg-[rgba(24,24,24,0.85)]
                text-radical-red-500 border-radical-red-500 ring-radical-red-500/30`}
        >
          Be a host
        </a>
      </div>
      <img
        src="/host-anywhere/map.svg"
        alt=""
        className="host-map absolute top-0 left-0 w-full h-full object-contain object-left-top"
        draggable={false}
      />
    </Container>
  );
}
