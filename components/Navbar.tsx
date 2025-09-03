import { Container } from "@/layouts/Container";

/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  return (
    <div className="w-full h-98 fixed top-0 py-4 ">
      <Container className="flex justify-between items-center">
        <img src="/logos/logo.webp" alt="Logo" className="w-24 md:w-32" />
        <section>
          <a
            href="#roadmap"
            className={`
                inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-xl font-bold
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
