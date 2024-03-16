"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Slider from '@mui/material/Slider';
import * as htmlToImage from 'html-to-image';
import Button from "@/components/Button";
import Reset from "/public/reset.svg";
import './ImageEditor.css';

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

    const handleSaturation = () => {   
        setFilter(prev => ({
            ...prev,
            saturation : 100,
        }))
    }
    

    const handleHue = () => {
        setFilter(prev => ({
            ...prev,
            hue : 0,
        }))
    }

    const handleContrast = () => {
        setFilter(prev => ({
            ...prev,
            contrast : 100,
        }))
    }

    return (
        <div className="flex justify-center items-center w-screen h-screen p-16 gap-10 editor--container">
            <div className="w-full h-full flex justify-center items-center editor--image">
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
            <div className="below-picture">
            <div className="w-full  flex justify-center items-center flex-col editor--sliders">
                <div className="flex justify-column slider-and-button">
                <div className="slider">
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
                </div>
                <div className="reset-button">
                <Image src = {Reset} onClick = {handleSaturation} alt="reset"/></div>
                </div>
                
                <div className="flex justify-column slider-and-button">
                <div className="slider">
                <Slider
                    name="hue"
                    value={filter.hue}
                    defaultValue={100}
                    step={20}
                    marks
                    min={0}
                    max={360}
                    onChange={handleChange}
                /></div>
                <div className="reset-button">
                <Image src = {Reset} onClick = {handleHue} alt="reset"/></div>
                </div>
                <div className="flex justify-column slider-and-button">
                <div className="slider">
                <Slider
                    name="contrast"
                    value={filter.contrast}
                    defaultValue={100}
                    step={10}
                    marks
                    min={0}
                    max={200}
                    onChange={handleChange}
                /></div>
                <div className="reset-button">
                <Image src = {Reset} onClick = {handleContrast} alt="reset"/>
                </div>
                </div>
               
            </div>
            <div className="buttons">
            <div className="button">
            <Button onClick={downloadPng} text="PNG" />
            </div>
            <div className="button">
            <Button onClick={downloadJpg} text="JPG" />
            </div>
            </div>
            </div>
        </div>
    )
}

export default ImageEditor;