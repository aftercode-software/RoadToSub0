import MetricHero from "../MetricHero";
import { Container } from "@/layouts/Container";
import RoadmapTimeline, { TimelineItem } from "@/components/RoadmapTimeline";

export default function Timeline() {
    const items: TimelineItem[] = [
    { id: "start", variant: "start" },
    {
      id: "latin-hack",
      dateLabel: "19.09.2025",
      prize: "$21K",
      title: "Latin Hack",
      description: "Starting line in LATAM. Onboarding for first-timers and seniors, with tracks that reward simple, working prototypes and fast learning.",
      ctaLabel: "Join the event",
      ctaHref: "#latin-hack",
      variant: "event",
      accent: "green",
    },
    {
      id: "gbp",
      dateLabel: "12.10.2025",
      prize: "$40K",
      title: "Global Builder Party",
      description: "Global online hackathon that raises the bar with Polkadot 2.0 topics.",
      ctaLabel: "Join the event",
      ctaHref: "#global-builder-party",
      variant: "event",
      accent: "pink",
    },
    {
      id: "sub0",
      title: "sub0",
      ctaLabel: "Join the event",
      ctaHref: "#sub0",
      variant: "logo",
      logoSrc: "/sub0-logo.svg",
      accent: "pink",
    },
  ];
  return (
    <div
      className="w-full min-h-[100dvh] bg-cover bg-center bg-no-repeat bg-[#191818]"
      style={{ backgroundImage: 'url("/backgrounds/noise.png")' }}
    >
      <Container className="flex flex-col items-center pt-50">
        <h2 className="font-display leading-[0.95] max-w-5xl text-center flex md:flex-row flex-col gap-4">
            <span className="block text-3xl sm:text-4xl md:text-6xl">
                Roadmap To
            </span>
            <span className="block text-3xl font-bold sm:text-4xl md:text-6xl">
            Revolution
            </span>
        </h2>
        <RoadmapTimeline className="mt-16 mb-16 w-full" items={items} />

      </Container>
    </div>
  );
}