"use client";

import { Container } from "@/layouts/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".countdown-container",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    tl.from(".countdown-timer", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power4.out",
    });
    tl.from(
      ".countdown-title",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power4.out",
      },
      "<+0.1"
    );

    tl.from(
      ".countdown-description",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power4.out",
      },
      "<+0.1"
    );
    tl.from(
      ".countdown-email-form",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power4.out",
      },
      "<+0.1"
    );
    tl.from(
      ".countdown-form-description",
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
    <Container className="flex justify-center flex-col gap-2 py-20 items-center countdown-container">
      <h2 className="text-4xl my-10 text-center md:text-5xl font-normal flex flex-col z-10 text-white countdown-title">
        <span>
          The <b>countdown</b>{" "}
        </span>
        <span>
          to <b className="mt-1">sub0 starts here </b>
        </span>
      </h2>
      <Countdown target={target} />
      <p className="mt-4 font-lg max-w-2xl mb-10 font-manrope text-base text-center text-white/85 sm:text-lg z-10 md:max-w-md countdown-description">
        Sign up for free and find out how to participate.
      </p>
      <EmailForm className="countdown-email-form" />
      <p className="mt-4 font-lg mb-10 font-manrope text-base text-center text-white/65 sm:text-lg z-10 countdown-form-description">
        We’ll keep it simple — only Road to Sub0 updates, nothing extra.
      </p>
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
    <div className="px-4 py-2 sm:px-6 sm:py-3 text-center ">
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
      className={`inline-flex items-stretch rounded-2xl border-2 overflow-hidden
        backdrop-blur-md bg-green-800/60 border-green/50 ${className} countdown-timer`}
    >
      <Cell value={t.days} label="days" />
      <div className="my-2 w-px bg-green" />
      <Cell value={t.minutes} label="minutes" />
      <div className="my-2 w-px bg-green" />
      <Cell value={t.seconds} label="seconds" />
    </div>
  );
}
