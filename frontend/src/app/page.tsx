"use client";

import { useState } from "react";
import Drag from "../components/Drag";
import Generated from "@/components/Generated";

export default function Home() {
  const [generated, setGenerated] = useState(false);
  return (
    <>
      {
        generated ? (
          <Generated />
        ) : (
          <Drag />
        )
      }
    </>
  );
}
