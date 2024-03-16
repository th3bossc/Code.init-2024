"use client";

import { useEffect, useState } from "react";
import Drag from "../components/Drag";
import Generated from "@/components/Generated";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { deleteImage } from "@/lib";


export default function Home() {
  const [file, setFile] = useState<File | null>(null); // Initialize file state with null
  const [image, setImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<any>(null);


  useEffect(() => {
    deleteImage();
  }, [])

  return (
    <div className="App">
      <HeroSection />
      {
        generatedImage ? (
          <Generated
            original={image}
            generated={generatedImage}
          />
        ) : (
          <Drag
            setFile={setFile}
            image={image}
            setImage={setImage}
            setGeneratedImage={setGeneratedImage}
          />
        )
      }
      <Footer />
    </div>
  );
}