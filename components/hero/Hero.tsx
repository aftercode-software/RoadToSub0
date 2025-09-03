import { Container } from "@/layouts/Container";
import MetricHero from "./MetricHero";
import EmailForm from "./EmailForm";

export default function Hero() {
  return (
    <div
      className="w-full min-h-[100dvh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/backgrounds/hero.webp")' }}
    >
      <Container className="flex flex-col items-center pt-50 gap-10">
        <h1 className="font-display leading-[0.95] max-w-6xl text-center">
          <span className="block text-5xl sm:text-6xl md:text-8xl">
            Make your ideas
          </span>
          <span className="block text-5xl font-bold sm:text-6xl md:text-8xl">
            come true
          </span>
        </h1>

        <p className="font-body max-w-2xl font-manrope text-base text-center text-white/85 sm:text-lg md:max-w-3xl">
          Road to Sub0 is a{" "}
          <span className="font-bold">global, collaborative</span> program that
          aligns the ecosystem around one{" "}
          <span className="font-bold">journey</span> to
          <span className="font-bold font-unbounded"> Sub0</span> and delivers
          new projects building on Polkadot.
        </p>

        <EmailForm />

        <div className="mt-10 flex w-full max-w-3xl justify-center gap-8 md:gap-20 md:mt-14">
          <MetricHero text="+40" subtitle="countries" glowing marginTop />
          <MetricHero text="+100K" subtitle="for creative ideas" glowing />
          <MetricHero text="3" subtitle="hackathons" glowing marginTop />
        </div>
      </Container>
    </div>
  );
}
