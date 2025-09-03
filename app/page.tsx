import Timeline from "@/components/timeline/Timeline";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />
      <div className="flex items-center justify-center h-screen font-unbounded font-black">
        Hola soy un texto de prueba
      </div>
    </>
  );
}
