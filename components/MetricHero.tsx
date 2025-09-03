type ComponentProps = {
  text: string;
  subtitle: string;
  glowing?: boolean;
  marginTop?: boolean;
};

export default function MetricHero({
  text,
  subtitle,
  glowing = false,
  marginTop = false,
}: ComponentProps) {
  return (
    <div className={`text-center ${marginTop ? " mt-4 md:mt-0 " : ""}`}>
      <div
        className={`font-display text-3xl font-bold sm:text-4xl md:text-5xl text-green ${
          glowing ? "drop-shadow-[0_4px_8px_rgba(34,197,94,0.5)]" : ""
        }`}
      >
        {text}
      </div>
      <div className="font-light text-white/85">{subtitle}</div>
    </div>
  );
}
