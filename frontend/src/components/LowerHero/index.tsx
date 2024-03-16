"use client"

import styles from "./LowerHero.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LowerHero({
    scrollYProgress
}: {
    scrollYProgress: number
}) {

    return (
        <div className={styles.lowerHero}>
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
    )
}