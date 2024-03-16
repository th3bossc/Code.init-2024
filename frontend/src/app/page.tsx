import UpperHero from "../components/UpperHero";
import LowerHero from "../components/LowerHero";
import Drag from "../components/Drag";
import Box from "/public/gradientbox.svg";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="App">
      <UpperHero />
      <div className="lower">
        <LowerHero />
        <Image src={Box} alt = "gradientbox" />
        <Drag />
      </div>
      <Footer />
    </div>
  );
}
