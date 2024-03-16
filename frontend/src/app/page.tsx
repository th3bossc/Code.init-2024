import Drag from "../components/Drag";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Generated from "@/components/Generated";

export default function Home() {
  return (
    <div className="App">
      <HeroSection />
      <Drag />
      <Generated />
      <Footer />
    </div>
  );
}
