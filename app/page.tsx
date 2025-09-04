/* eslint-disable @next/next/no-img-element */
import Timeline from "@/components/timeline/Timeline";
import Hero from "../components/hero/Hero";
import HostAnywhere from "../components/host-anywhere/HostAnywhere";
import CountDownSection from "@/components/CountDown";

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />
      <section className="w-full min-h-screen relative ">
        <img
          src={"/backgrounds/world.webp"}
          alt="world-bg"
          className="absolute w-full h-full object-cover"
          style={{ backgroundColor: "#02014f" }}
        />
        <div className="absolute inset-0 bg-[#02014f]/70 " />
        <HostAnywhere />
        <CountDownSection target="2025-11-15T00:00:00-03:00" />
      </section>
    </>
  );
}
