"use client";

import React, { useEffect, useState } from 'react';
import "./Generated.css";
import ReactCompareImage from 'react-compare-image';

export default function Generated() {
    const [animate, setAnimate] = useState(100);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="generatedContainer">
            <div className="generated">
                <div className="generatedImage">
                    <ReactCompareImage leftImage="/HeroArtGray.png" sliderLineWidth={1} rightImage="/HeroArt.jpg" handleSize={18} />
                </div>
            </div>
        </div>
    );
};