
'use client';
import leftSVG from "/public/leftSVG.svg";
import Image from "next/image";
import scribble from "/public/scribble.svg";
// import Spline from '@splinetool/react-spline';
import Scribble from "../Scribble";


export default function Drag() {
    return (
        <div className="drag--container">
            <Image className="drag--svg" src={leftSVG} alt="rightSVG" />
            <div className="drag--scribble--div">
                <h2 className="drag--text">Drag and drop your image here</h2>
                <Scribble />
            </div>
            <Image className="drag--svg" src={leftSVG} alt="rightSVG" />
        </div>
    );
}