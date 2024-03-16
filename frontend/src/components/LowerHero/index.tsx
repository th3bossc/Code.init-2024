"use client"

import styles from "./LowerHero.module.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useScrollPosition from "@/hooks/useScroll";
import Image from "next/image";

export default function LowerHero() {
    const [scrollYProgress, setScrollYProgress] = useState(0);
    const ref = useRef(null);
    const { scrollPosition, height, windowHeight } = useScrollPosition({ ref });
    console.log(scrollPosition, height)


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
        <div className={styles.lowerHero} ref={ref}>
            <div className={styles['container']}>
                <div className={styles["sticky-div"]}>
                    <div className={styles["grayDiv"]}>
                        <Image className={`${styles['art']} ${styles['gray']}`} src="/HeroArtGray.png" alt="Hero Art Gray" width={1000} height={1000} />
                    </div>
                    <div className={styles["colorDiv"]}>
                        <motion.img
                            style={{ clipPath: `polygon(0 0, ${scrollYProgress}% 0,${scrollYProgress}% 100%, 0 100%)` }}
                            className={`${styles['art']} ${styles['colored']}`} src="/HeroArt.jpg" alt="Hero Art" />
                    </div>
                </div>
            </div>
        </div>
    )
}