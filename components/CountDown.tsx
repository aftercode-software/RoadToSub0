"use client";

import { Container } from "@/layouts/Container";
import { useEffect, useMemo, useState } from "react";
import EmailForm from "./hero/EmailForm";

type Parts = { total: number; days: number; minutes: number; seconds: number };

function calcParts(target: Date): Parts {
  const total = +target - Date.now();
  const clamped = Math.max(0, total);
  const days = Math.floor(clamped / 86_400_000);
  const minutes = Math.floor((clamped % 3_600_000) / 60_000);
  const seconds = Math.floor((clamped % 60_000) / 1000);
  return { total, days, minutes, seconds };
}

export default function CountDownSection({
  target,
}: {
  target: string | number | Date;
}) {
  return (
    <Container className="flex justify-center flex-col gap-2 min-h-[80dvh] items-center">
      <Countdown target={target} />
      <h2 className="text-4xl mt-10 text-center md:text-5xl font-normal flex flex-col z-10 text-white">
        <span>
          <b>Connect</b> now,{" "}
        </span>
        <b className="mt-1">Stay informed</b>
      </h2>
      <p className="mt-4 font-lg max-w-2xl mb-10 font-manrope text-base text-center text-white/85 sm:text-lg z-10 md:max-w-md hero-description">
        We’ll only send updates when they’re relevant — no noise, just what
        matters.
      </p>
      <EmailForm />
    </Container>
  );
}

function Countdown({
  target,
  onComplete,
  className = "",
}: {
  target: string | number | Date;
  onComplete?: () => void;
  className?: string;
}) {
  const targetDate = useMemo(() => new Date(target), [target]);
  const [t, setT] = useState<Parts>(() => calcParts(targetDate));

  useEffect(() => {
    const tick = () => {
      const next = calcParts(targetDate);
      setT(next);
      if (next.total <= 0) onComplete?.();
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate, onComplete]);

  const Cell = ({
    value,
    label,
  }: {
    value: number | string;
    label: string;
  }) => (
    <div className="px-4 py-2 sm:px-6 sm:py-3 text-center">
      <div className="tabular-nums tracking-tight text-3xl sm:text-4xl font-extrabold text-green">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-0.5 text-[10px] sm:text-sm font-medium tracking-wide text-green/90">
        {label}
      </div>
    </div>
  );

  return (
    <div
      aria-live="polite"
      className={`inline-flex items-stretch rounded-2xl border overflow-hidden
        backdrop-blur-md bg-green/20 border-green ${className}`}
    >
      <Cell value={t.days} label="days" />
      <div className="my-2 w-px bg-green" />
      <Cell value={t.minutes} label="minutes" />
      <div className="my-2 w-px bg-green" />
      <Cell value={t.seconds} label="seconds" />
    </div>
  );
}
