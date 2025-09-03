import { Container } from "@/layouts/Container";
import React from "react";

export default function HostAnywhere() {
  return (
    <Container className="flex items-center justify-center gap-10 relative md:h-[80vh] mt-10">
      <div className="flex flex-col items-center justify-center md:p-20 gap-10 z-10 md:bg-black/10 md:backdrop-blur-sm md:max-w-[60%] text-center rounded-2xl">
        <h2 className="text-4xl font-normal text-radical-red mt-20 md:mt-0">
          Host Your Event <b>Anywhere</b>
        </h2>
        <p className="text-xl font-normal font-manrope">
          Turn your ideas into reality: host your own event from any city, for a
          global audience.
        </p>
        <p className="text-xl font-normal font-manrope">
          Our platform connects creators, communities, and talent without
          borders—making it easy for anyone to share, learn, and build together.
        </p>
        <button>placeholder-button</button>
      </div>
      <img
        src="/host-anywhere/map.svg"
        alt=""
        className="absolute top-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full"
        draggable={false}
      />
    </Container>
  );
}
