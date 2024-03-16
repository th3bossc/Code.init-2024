import "./UpperHero.css"
import leftSVG from "/public/leftSVG.svg";
import rightSVG from "/public/rightSVG.svg";
import Image from "next/image";

export default function UpperHero()
{
    return (
        <div className="upperHero">
            <h1 className="vitalyze">VITAL<span className="Y">Y</span>ZE</h1>
            <Image className="svgLeft" src={leftSVG} alt="leftSVG" />
            <Image className="svgRight" src={rightSVG} alt="rightSVG" />
            <h2 className="vitalyzeSubText">Convert black and white images into <span className="colourized">colourized</span> versions with realistic and aesthetically pleasing results.</h2>
        </div>
    );
}