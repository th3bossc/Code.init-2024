import UpperHero from "./components/UpperHero";
import LowerHero from "./components/LowerHero";

export default function Home() {
  return (
    <div>
        <UpperHero />
        <div className="lower">
            <LowerHero />
        </div>
    </div>
  );
}
