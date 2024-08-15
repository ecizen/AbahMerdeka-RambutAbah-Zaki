import Image from "next/image";
import Hero from "../components/Hero/hero";

import "../styles/hero.css";
import "../styles/moving.css";
import Sejarah from "../components/sejarah/sejarah";
import Pahlawan from "../components/pahlawan/pahlawan";
import Footer from "../components/footer";
import CountdownTimer from "../components/countdown/countdown";
import Tema from "../components/tema/tema";
import Event from "../components/event/event";

export default function Home() {
  return (
    <main className="  bg-white overflow-x-hidden">
      <section id="hero" className="hero">
        <Hero />
      </section>
      <section id="sejarah">
        <Sejarah />
      </section>
      <section id="pahlawan">
        <Pahlawan />
      </section>
      <section id="tema">
        <Tema />
      </section>
      <section className="count">
        <CountdownTimer />
      </section>
      <section id="event">
        <Event />
      </section>
   
    </main>
  );
}
