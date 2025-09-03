import { Container } from "@/layouts/Container";

/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  return (
    <div className="w-full h-98 fixed top-0 py-8">
      <Container>
        <img src="/logos/logo.webp" alt="Logo" className="w-24 md:w-32" />
      </Container>
    </div>
  );
}
