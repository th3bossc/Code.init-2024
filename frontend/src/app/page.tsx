import UpperHero from "../components/UpperHero";
import LowerHero from "../components/LowerHero";
import Drag from "../components/Drag";
import Generated from "../components/Generated";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="App">
      <UpperHero />
      <div className="lower">
        <LowerHero />
        <Drag />
      </div>
      <Footer />
    </div>
  );
}
