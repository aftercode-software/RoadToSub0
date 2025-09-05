import CountDownSection from "@/components/CountDown";
import Timeline from "@/components/timeline/Timeline";
import Hero from "../components/hero/Hero";
import HostAnywhere from "../components/host-anywhere/HostAnywhere";

export default function Home() {
  return (
    <>
      <Hero />

      <Timeline />
      <section
        className="w-full min-h-screen relative pb-20"
        style={{
          background:
            'linear-gradient(180deg,rgba(2, 1, 79, 1) 0%, rgba(2, 1, 79, 0.2) 50%, rgba(2, 1, 79, 1) 100%), url("/backgrounds/world.webp")',
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <HostAnywhere />
        <CountDownSection target="2025-11-15T00:00:00-03:00" />
      </section>
    </>
  );
}
