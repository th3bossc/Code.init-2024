"use client";

import { useState } from "react";
import Drag from "../components/Drag";
import Generated from "@/components/Generated";


export default function Home() {
  const [generated, setGenerated] = useState(false);
  const [file, setFile] = useState<File | null>(null); // Initialize file state with null
  const [imag, setImag] = useState<string | null>(null);
  return (
    <>
      {
        generated ? (
          <Generated />
        ) : (
          <Drag 
            setFile={setFile}
            imag={imag}
            setImag={setImag}
          />
        )
      }
    </>
  );
}