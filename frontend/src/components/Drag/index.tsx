
'use client';
import Image from "next/image";
import Scribble from "../Scribble";
import bottomLeftSVG from "/public/bottomLeftSVG.svg";
import bottomRightSVG from "/public/bottomRightSVG.svg";
import "./Drag.css"
import { Dispatch, SetStateAction, useState } from "react";
import { useDropzone } from "react-dropzone";
import { colourizeImage, saveImage } from "@/lib";



export default function Drag({
    setFile,
    image,
    setImage,
    setGeneratedImage
}: {
    setFile: Dispatch<SetStateAction<File | null>>,
    image: string | null,
    setImage: Dispatch<SetStateAction<string | null>>,
    setGeneratedImage: Dispatch<SetStateAction<any>>
}) {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: async (acceptedFiles: any) => {
            const selectedFile = acceptedFiles[0];
            setImage(URL.createObjectURL(selectedFile));
            setFile(selectedFile);
            const img = await colourizeImage(selectedFile);
            setGeneratedImage(img);
            if (img)
                saveImage(img);
        },
        accept: {
            'image/*': []
        },
        multiple: false,
    });


    return (
        <>
            {/* {image && <div className='imageDisplay'>
                <Image src={image} alt='image to convert' width={100} height={100} />
            </div>} */}
            <form className="imageUploader" {...getRootProps()}>
                <input {...getInputProps()} style={{ display: 'none' }} />
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
            </form>
        </>

    );
}