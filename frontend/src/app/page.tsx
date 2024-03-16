import UpperHero from "../components/UpperHero";
import LowerHero from "../components/LowerHero";
import Drag from "../components/Drag";
import Box from "/public/gradientbox.svg";
import Image from "next/image";


export default function Home() {
  return (
    <div className="App">
      <UpperHero />
      <div className="lower">
        <LowerHero />
        <Image src={Box} alt = "gradientbox" />
        <Drag />
      </div>
    </div>
  );
}
