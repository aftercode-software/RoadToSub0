"use client";
import { useScrollOffset } from "@/hooks/useScroll";
import { Container } from "@/layouts/Container";

/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  const scrollY = useScrollOffset();

  return (
    <div
      className={`w-full fixed top-0 py-8 z-40 transition-all duration-500 ${
        scrollY > 20 ? "bg-[#15143A]/30 backdrop-blur-xl " : "bg-none"
      } `}
    >
      <Container className="flex justify-between items-center">
        <div>
          <img
            src="/logo.svg"
            alt="Logo"
            className={`w-28 md:w-32 transition-all duration-500 ${
              scrollY > 20 ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <section>
          <a
            href="https://sub0.gg"
            className={`
              inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-md font-bold
              bg-[15143A] border focus:outline-none focus-visible:ring-2 hover:bg-[15143A]
              text-green-500 border-green-500 ring-green-500/30 transition-all duration-500 
         ${scrollY > 20 ? "opacity-100" : "opacity-0"}
              `}
          >
            What is{" "}
            <img
              src={"/logos/sub0-green.svg"}
              alt="Sub0 logo"
              className="h-6 w-auto ml-1"
            />
          </a>
        </section>
      </Container>
    </div>
  );
}
