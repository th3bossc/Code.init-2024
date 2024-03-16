"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Slider from '@mui/material/Slider';
import * as htmlToImage from 'html-to-image';
import Button from "@/components/Button";

const ImageEditor = () => {
    const editedImage = useRef(null);

    const [filter, setFilter] = useState({
        saturation: 100,
        hue: 0,
        contrast: 100,
    });


    const handleChange = (e: any) => {
        setFilter(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const downloadJpg = async () => {
        if (!editedImage.current)
            return;

        const dataUrl = await htmlToImage.toJpeg(editedImage.current);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'test.jpg';
        link.click();

    }

    const downloadPng = async () => {
        if (!editedImage.current)
            return;

        const dataUrl = await htmlToImage.toPng(editedImage.current);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'test.png';
        link.click();

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
                            saturate(${filter.saturation}%) 
                            hue-rotate(${filter.hue}deg)
                            contrast(${filter.contrast}%)
                        `

                    }}
                    ref={editedImage}
                />
            </div>
            <div className="w-full h-full flex justify-center items-center flex-col">
                <Slider
                    name="saturation"
                    value={filter.saturation}
                    defaultValue={100}
                    step={10}
                    marks
                    min={0}
                    max={200}
                    onChange={handleChange}
                />
                <Slider
                    name="hue"
                    value={filter.hue}
                    defaultValue={100}
                    step={20}
                    marks
                    min={0}
                    max={360}
                    onChange={handleChange}
                />
                <Slider
                    name="contrast"
                    value={filter.contrast}
                    defaultValue={100}
                    step={10}
                    marks
                    min={0}
                    max={200}
                    onChange={handleChange}
                />
            </div>
            <Button onClick={downloadPng} text="PNG" />
            <Button onClick={downloadJpg} text="JPG" />
        </div>
    )
}

export default ImageEditor;