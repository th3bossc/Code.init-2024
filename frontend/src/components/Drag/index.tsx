
'use client';
import leftSVG from "/public/leftSVG.svg";
import Image from "next/image";
import scribble from "/public/scribble.svg";
// import Spline from '@splinetool/react-spline';
import Scribble from "../Scribble";
import "./Drag.css"




export default function Drag() {
    
    return (
        <div className="drag--container">
            <Image className="drag--svg" src={leftSVG} alt="rightSVG" />
            <div className="drag--scribble--div">
                <h2 className="drag--text">DR<span className="A" >A</span>G/BR<span className="O">O</span>WSE IMAGES</h2>
                <Scribble />
            </div>
            <Image className="drag--svg" src={leftSVG} alt="rightSVG" />
        </div>
    );
}