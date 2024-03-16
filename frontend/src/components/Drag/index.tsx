
'use client';
import Image from "next/image";
import Scribble from "../Scribble";
import bottomLeftSVG from "/public/bottomLeftSVG.svg";
import bottomRightSVG from "/public/bottomRightSVG.svg";
import "./Drag.css"
import { useState } from "react";
import { useDropzone } from "react-dropzone";



export default function Drag() {
    const [file, setFile] = useState<File | null>(null); // Initialize file state with null
    const [imag, setImag] = useState<string | null>(null);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            const selectedFile = acceptedFiles[0]; // Use the first accepted file
            setImag(URL.createObjectURL(selectedFile));
            setFile(selectedFile); // Update file state using setFile
        },
        accept:'image/*', // Accept only image files
        multiple: false,
    });

    
    return (
        <>
            {/* <div className='imageDisplay'>
                <Image src={imag} alt='image to convert' />
            </div> */}
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