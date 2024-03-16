"use client"

import "./LowerHero.css"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LowerHero() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll();

    const artScroll = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="lowerHero" ref={ref}>
            <div className="grayDiv">
                <img className="art gray" src="/HeroArtGray.png" alt="Hero Art Gray" />
            </div>
            <div className="colorDiv">
                <motion.img
                    style={{ clipPath: `polygon(0 0, ${artScroll} 0,${artScroll} 100%, 0 100%)` }}
                    className="art colored" src="/HeroArt.jpg" alt="Hero Art" />
            </div>
        </div>
    )
}