import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Location from "@/components/Location";
import Timeline from "@/components/Timeline";
import DressCode from "@/components/DressCode";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import QRCode from "@/components/QRCode";
import Footer from "@/components/Footer";
import Music from "@/components/Music";

export default function Home() {
  return (
    <main className="bg-[#00120f]">

      <Music />

      <Hero />

      <Countdown />

      <Location />

      <Timeline />

      <DressCode />

      <Gallery />

      <RSVP />

      <QRCode />

      <Footer />

    </main>
  );
}