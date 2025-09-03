"use client";

import { Container } from "@/layouts/Container";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 py-4 z-40 transition-all duration-500 ${
        isScrolled ? "bg-black/30 " : "bg-none"
      } backdrop-blur-xl`}
    >
      <Container className="flex justify-between items-center">
        <img src="/logos/logo.webp" alt="Logo" className="w-28 md:w-32" />
        <section>
          <a
            href="#roadmap"
            className={`
                inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-lg font-bold
                bg-[rgba(24,24,24,0.71)] border focus:outline-none focus-visible:ring-2 hover:bg-[rgba(24,24,24,0.85)]
                text-green-500 border-green-500 ring-green-500/30
                scroll-smooth
                `}
          >
            What is Sub0
          </a>
        </section>
      </Container>
    </div>
  );
}
