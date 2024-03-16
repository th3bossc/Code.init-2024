import Drag from "../components/Drag";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <div className="App">
      <HeroSection />
      <Drag />
      <Footer />
    </div>
  );
}
