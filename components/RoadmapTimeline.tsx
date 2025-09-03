"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";

export type TimelineItem = {
  id: string;
  dateLabel?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  prize?: string;
  variant?: "start" | "event" | "logo";
  logoSrc?: string;
  accent?: "green" | "pink";
};

type Props = {
  items: TimelineItem[];
  className?: string;
};

gsap.registerPlugin(ScrollTrigger);

export default function RoadmapTimeline({ items, className }: Props) {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".roadmap-timeline-heading",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });
    tl.from(".border-dashed-timeline", {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: "power4.out",
    });
    items.forEach((item, i) => {
      tl.from(
        `#${item.id}`,
        {
          opacity: 0,
          scale: 0.8,
          y: 20,
          duration: 0.5,
          ease: "power4.out",
        },
        i === 0 ? "<" : "<+0.2"
      );
    });
  });

  return (
    <section
      aria-labelledby="roadmap-timeline-heading"
      className={`w-full ${className || ""} mt-40 roadmap-timeline-heading`}
    >
      <div className="relative w-full lg:h-[360px]">
        <ol
          className="
             relative z-10
              flex flex-col items-center gap-42 
              lg:flex-row lg:items-center lg:justify-between lg:gap-10 
              before:content-[''] before:absolute before:pointer-events-none before:-z-10
              before:left-1/2 before:top-0 before:bottom-0 before:-translate-x-1/2
              before:border-l before:border-dashed before:border-white/75
              lg:before:left-0 lg:before:right-[12.5%] lg:before:top-1/2 lg:before:bottom-auto
              lg:before:translate-x-0 lg:before:-translate-y-1/2
              lg:before:border-l-0 lg:before:border-t
              border-dashed-timeline
          "
        >
          {items.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className={`relative w-full lg:w-1/4
                ${
                  item.variant === "event"
                    ? "lg:self-stretch"
                    : "lg:self-center"
                }
                ${item.variant === "start" ? "lg:flex lg:justify-start" : ""}
                ${item.variant === "logo" ? "lg:flex lg:justify-end" : ""}
                `}
            >
              <Card item={item} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Card({ item }: { item: TimelineItem }) {
  const isGreen = item.accent === "green";
  const isPink = item.accent === "pink";

  // START
  if (item.variant === "start") {
    return (
      <div
        className="
           flex w-[160px] items-start justify-center
        rounded-xl border-[3px] border-dotted border-white/75
        bg-[rgba(24,24,24,0.71)] px-4 py-3
        text-white/90 backdrop-blur-sm
        mx-auto md:mx-0
        "
      >
        <span className=" text-md font-extrabold tracking-[0.18em]">START</span>
      </div>
    );
  }

  // LOGO
  if (item.variant === "logo" && item.logoSrc) {
    return (
      <div className="relative  w-full max-w-[360px]">
        {item.dateLabel && (
          <span
            className="
              absolute -top-7 left-1/2 -translate-x-1/2 rounded-md border border-white/75
              bg-black/55 px-3 py-1 text-xs font-semibold tracking-wider text-white shadow-md
            "
          >
            {item.dateLabel}
          </span>
        )}
        <article
          className="
            rounded-2xl border border-[#6E6E6E]/[.32]
            bg-[rgba(24,24,24,0.71)] backdrop-blur-xl
            p-6 text-center
          "
        >
          <div className="mx-auto h-24 w-40">
            <Image
              src={item.logoSrc}
              alt={item.title ?? "Logo"}
              width={160}
              height={96}
              className="mx-auto h-24 w-40 object-contain"
              priority
            />
          </div>
          {item.ctaHref && item.ctaLabel && (
            <a
              href={item.ctaHref}
              className={`
                mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-xl font-bold
                bg-[rgba(24,24,24,0.71)] border focus:outline-none focus-visible:ring-2 hover:bg-[rgba(24,24,24,0.85)]
                ${
                  isGreen
                    ? "text-green-500 border-green-500 ring-green-500/30"
                    : ""
                }
                ${
                  isPink
                    ? "text-radical-red-500 border-radical-red-500 ring-radical-red-500/30"
                    : ""
                }
                `}
            >
              {item.ctaLabel}
            </a>
          )}
        </article>
      </div>
    );
  }

  // EVENT
  return (
    <div className="relative mx-auto w-full max-w-[380px] h-full flex">
      {item.dateLabel && (
        <span
          className="
            absolute md:-top-14 -top-12  rounded-xl border border-white/60
            bg-black/55 px-5 py-2 text-xs md:text-base font-extrabold tracking-wider text-white shadow-md
          "
        >
          {item.dateLabel}
        </span>
      )}

      {item.prize && (
        <span
          className={`
                absolute -top-5 -right-5 z-10 rounded-lg px-4 py-1.5
                text-2xl font-black
                bg-[rgba(24,24,24,0.71)] border shadow-[0_4px_20px_rgba(0,0,0,0.35)]
                ${isGreen ? "text-green-500 border-green-500/35" : ""}
                ${
                  isPink ? "text-radical-red-500 border-radical-red-500/35" : ""
                }
            `}
        >
          {item.prize}
        </span>
      )}

      {/* Card */}
      <article
        aria-label={item.title}
        className="
            rounded-2xl border border-[#6E6E6E]/[.32]
            bg-[rgba(24,24,24,0.71)] backdrop-blur-xl
            p-6 h-full w-full flex flex-col
            lg:min-h-[380px] 
            min-h-[340px]

        "
      >
        {item.title && (
          <h3
            className={`
            mt-2 font-display text-3xl font-extrabold leading-tight
            ${isGreen ? "text-green-500" : ""}
            ${isPink ? "text-radical-red-500" : ""}
        `}
          >
            {item.title}
          </h3>
        )}

        {item.description && (
          <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-white/75">
            {item.description}
          </p>
        )}

        {item.ctaHref && item.ctaLabel && (
          <a
            href={item.ctaHref}
            className={`
            mt-auto inline-flex items-center justify-center rounded-xl px-5 py-3
            text-xl font-bold
            bg-[rgba(24,24,24,0.71)] hover:bg-[rgba(24,24,24,0.85)]
            border focus:outline-none focus-visible:ring-2
            ${
              isGreen ? "text-green-500 border-green-500 ring-green-500/30" : ""
            }
            ${
              isPink
                ? "text-radical-red-500 border-radical-red-500 ring-radical-red-500/30"
                : ""
            }
        `}
          >
            {item.ctaLabel}
          </a>
        )}
      </article>
    </div>
  );
}
