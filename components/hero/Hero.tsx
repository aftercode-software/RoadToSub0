import { Container } from "@/layouts/Container";
import MetricHero from "./MetricHero";
import EmailForm from "./EmailForm";

export default function Hero() {
  return (
    <div
      className="w-full min-h-[100dvh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/backgrounds/hero.webp")' }}
    >
      <Container className="flex flex-col items-center pt-50 md:pt-60 gap-10">
        <h1 className="font-display leading-[0.95] md:max-w-6xl text-center">
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

        <EmailForm />

        <div className="mt-10 flex w-full max-w-3xl justify-center gap-8 md:gap-20 md:mt-14">
          {/* <MetricHero text="+40" subtitle="countries" glowing marginTop /> */}
          <MetricHero text="+100K" subtitle="for creative ideas" glowing />
          {/* <MetricHero text="3" subtitle="hackathons" glowing marginTop /> */}
        </div>
      </Container>
    </div>
  );
}
