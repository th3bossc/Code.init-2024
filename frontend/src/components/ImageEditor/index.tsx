"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import domtoimage from 'dom-to-image';
import Slider from '@mui/material/Slider';
const ImageEditor = () => {
    const editedImage = useRef(null);
    const [saturation, setSaturation] = useState(100);
    const [hue, setHue] = useState(0);
    const [contrast, setContrast] = useState(100);

    const handleSaturationChange = (e: any) => {
        setSaturation(e.target.value);
    }

    const handleHueChange = (e: any) => {
        setHue(e.target.value);
    }

    const handleContrastChange = (e: any) => {
        setContrast(e.target.value);
    }

    const downloadJpg = async () => {
        if (!editedImage.current)
            return;
        const dataUrl = await domtoimage.toJpeg(editedImage.current, { quality: 0.95 });

    }

    const downloadPng = async () => {
        if (!editedImage.current)
            return;

    }

    return (
        <div className="flex justify-center items-center w-screen h-screen p-16 gap-10">
            <div className="w-full h-full flex justify-center items-center">
                <Image
                    src="/HeroArt.jpg"
                    alt="HeroArt"
                    width={500}
                    height={500}
                    style={{
                        filter: `
                            saturate(${saturation}%) 
                            hue-rotate(${hue}deg)
                            contrast(${contrast}%)
                        `

                    }}
                    ref={editedImage}
                />
            </div>
            <div className="w-full h-full flex justify-center items-center flex-col">
                <Slider
                    name="saturation"
                    value={saturation}
                    defaultValue={100}
                    step={10}
                    marks
                    min={0}
                    max={200}
                    onChange={handleSaturationChange}
                />
                <Slider
                    name="hue"
                    value={hue}
                    defaultValue={100}
                    step={20}
                    marks
                    min={0}
                    max={360}
                    onChange={handleHueChange}
                />
                <Slider
                    name="contrast"
                    value={contrast}
                    defaultValue={100}
                    step={10}
                    marks
                    min={0}
                    max={200}
                    onChange={handleContrastChange}
                />
            </div>
            <button onClick={downloadPng}> PNG </button>
            <button onClick={downloadJpg}> JPG </button>
        </div>
    )
}

export default ImageEditor;