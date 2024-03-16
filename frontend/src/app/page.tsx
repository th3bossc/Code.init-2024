"use client";

import { useState } from "react";
import Drag from "../components/Drag";
import Generated from "@/components/Generated";


export default function Home() {
  const [file, setFile] = useState<File | null>(null); // Initialize file state with null
  const [image, setImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<any>(null);
  return (
    <>
      {
        generatedImage ? (
          <Generated
          // original={image}
          // generated={generatedImage}
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
    </>
  );
}