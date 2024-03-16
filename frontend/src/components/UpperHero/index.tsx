import "./UpperHero.css"
import leftSVG from "/public/leftSVG.svg";
import rightSVG from "/public/rightSVG.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function UpperHero()
{

    
    return (
        <div className="upperHero">
            <motion.h1 className="vitalyze">
                <motion.span
                    style={{display:"inline-block"}}
                    initial={{y:-80,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.3,delay:0.1}}
                >V</motion.span>
                <motion.span
                    style={{display:"inline-block"}}
                    initial={{y:-80,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.3,delay:0.15}}>I</motion.span>
                <motion.span
                    style={{display:"inline-block"}}
                    initial={{y:-80,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.3,delay:0.2}}>T</motion.span>
                <motion.span
                    style={{display:"inline-block"}}
                    initial={{y:-80,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.3,delay:0.25}}>A</motion.span>
                <motion.span
                    style={{display:"inline-block"}}
                    initial={{y:-80,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.3,delay:0.3}}>L</motion.span>
                <motion.span
                    style={{display:"inline-block"}}
                    initial={{y:-80,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.3,delay:0.35}} className="Y">
                    Y
                </motion.span>
                <motion.span
                    style={{display:"inline-block"}}
                    initial={{y:-80,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.3,delay:0.4}}>Z</motion.span>
                <motion.span
                    style={{display:"inline-block"}}
                    initial={{y:-80,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.3,delay:0.45}}>E</motion.span>
            </motion.h1>
            <Image className="svgLeft" src={leftSVG} alt="leftSVG" />
            <Image className="svgRight" src={rightSVG} alt="rightSVG" />
            <h2 className="vitalyzeSubText">convert black and white images into <span className="colourized">colourized</span> versions with realistic and aesthetically pleasing results</h2>
        </div>
    );
}