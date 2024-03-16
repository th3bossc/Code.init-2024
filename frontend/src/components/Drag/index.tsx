
'use client';
import Image from "next/image";
import Scribble from "../Scribble";
import bottomLeftSVG from "/public/bottomLeftSVG.svg";
import bottomRightSVG from "/public/bottomRightSVG.svg";
import "./Drag.css"


export default function Drag() {
    return (
        <div className="drag--container">
            <Image className="drag--svg--left" src={bottomLeftSVG} alt="rightSVG" />
            <div className="drag--scribble--div">
                <h2 className="drag--text">DRAG/BROWSE IMAGES</h2>
                <Scribble />
            </div>
            <Image className="drag--svg--right" src={bottomRightSVG} alt="rightSVG" />
        </div>
    );
}