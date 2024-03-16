"use client";

import { useState } from "react";
import Drag from "../components/Drag";
import ImageEditor from "../components/ImageEditor";

export default function Home() {
  const [generated, setGenerated] = useState(true);
  return (
    <>
      {
        generated ? (
          <ImageEditor />
        ) : (
          <Drag />
        )
      }
    </>
  );
}
