import UpperHero from "@/components/UpperHero";
import LowerHero from "@/components/LowerHero";
import Drag from "@/components/Drag";
export default function Home() {
  return (
    <div className="App">
      <UpperHero />
      <div className="lower">
        <LowerHero />
        <div>
          <Drag />
        </div>
      </div>
    </div>
  );
}
