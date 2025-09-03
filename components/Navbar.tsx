import { Container } from "@/layouts/Container";

/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  return (
    <div className="w-full h-98 fixed top-0 py-4 ">
      <Container className="flex justify-between items-center">
        <img src="/logos/logo.webp" alt="Logo" className="w-24 md:w-32" />
        <section>
          <a
            href="https://sub0.gg"
            target="_blank"
            className="select-none rounded-xl px-3 py-3 font-semibold
                     bg-pink-600/80 text-white shadow-lg ring-1 ring-black/10
                     hover:bg-pink-500 transition
                     disabled:opacity-60 disabled:cursor-not-allowed
                     sm:min-w-[220px]"
          >
            What is sub0?
          </a>
        </section>
      </Container>
    </div>
  );
}
