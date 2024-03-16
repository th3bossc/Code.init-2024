"use client";

import React from 'react';
import "./Generated.css";
import sample from "/public/HeroArt.jpg";
import ReactCompareImage from 'react-compare-image';

export default function Generated(){
    return (
        <div className="generatedContainer">
            <div className="generated">
                <div className="generatedImage">
                    <div className="w-full"> 
                        <ReactCompareImage leftImage="/HeroArtGray.png" rightImage="/HeroArt.jpg" handleSize={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};