"use client";

import { useEffect, useRef, useState } from "react";
import LowerHero from "../LowerHero";
import UpperHero from "../UpperHero";
import useScrollPoition from "@/hooks/useScroll";

const HeroSection = () => {
    const ref = useRef(null);
    const { scrollPosition, height, windowHeight } = useScrollPoition({ ref });
    const [scrollYProgress, setScrollYProgress] = useState(0);
    useEffect(() => {
        const calculateScrollYProgress = () => {
            console.log(scrollPosition);
            if (scrollPosition > 0)
                return 0;
            if (scrollPosition < -height + windowHeight)
                return 100;
            return Math.abs(scrollPosition / (height - windowHeight)) * 100;
        }

        setScrollYProgress(calculateScrollYProgress());

    }, [scrollPosition, height, windowHeight]);
    return (
        <div className="h-[300dvh]" ref={ref}>
            <div className="absolute h-[300dvh] w-screen">
                <div className="sticky top-0 w-full h-screen overflow-hidden">
                    <UpperHero />
                    <div className="lower">
                        <LowerHero
                            scrollYProgress={scrollYProgress}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection;