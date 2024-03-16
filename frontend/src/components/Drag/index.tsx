
'use client';
import Image from "next/image";
import Scribble from "../Scribble";
import bottomLeftSVG from "/public/bottomLeftSVG.svg";
import bottomRightSVG from "/public/bottomRightSVG.svg";
import "./Drag.css"
import { Dispatch, SetStateAction, useState } from "react";
import { useDropzone } from "react-dropzone";
import { colourizeImage } from "@/lib";



export default function Drag({
    setFile,
    imag,
    setImag
} : {
    setFile : Dispatch<SetStateAction<File | null>>,
    imag : string | null,
    setImag : Dispatch<SetStateAction<string | null>>
}) {
    
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            const selectedFile = acceptedFiles[0]; 
            setImag(URL.createObjectURL(selectedFile));
            setFile(selectedFile);
            colourizeImage(selectedFile);
        },
        accept: {
            'image/*': []
        },
        multiple: false,
    });

    
    return (
        <>
            {imag && <div className='imageDisplay'>
                <img src={imag} alt='image to convert' />
            </div>}
            <div className="imageUploader" {...getRootProps()}>
                <input {...getInputProps()} style={{ display: "none" }} />
                <label htmlFor="file" style={{ cursor: "pointer" }}>
                    <div className="drag--container">
                        <Image className="drag--svg--left" src={bottomLeftSVG} alt="rightSVG" />
                        <div className="drag--scribble--div">
                            <h2 className="drag--text">DR<span className="A" >A</span>G/BR<span className="O">O</span>WSE IMAGES</h2>
                            <Scribble />
                        </div>
                        <Image className="drag--svg--right" src={bottomRightSVG} alt="rightSVG" />
                    </div>
                </label>
            </div>
        </>

    );
}