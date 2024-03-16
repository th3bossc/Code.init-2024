"use client";

import { downloadImage } from "@/lib";
import Button from "../Button";
import "./Generated.css";
import ReactCompareImage from 'react-compare-image';

export default function Generated({
    original,
    generated
}: {
    original: string | null,
    generated: string | null
}) {
    return (
        <div className="generatedContainer">
            <div className="generated">
                <div className="generatedImage">
                    <ReactCompareImage leftImage={original || ""} sliderLineWidth={1} rightImage={generated || ""} handleSize={18} />
                </div>
                <div className="flex justify-center items-center w-full px-16">
                    <Button text="Download" invert onClick={() => downloadImage(generated || "")} />
                    <Button text="Edit" invert href={`/edit`} />
                </div>
            </div>
        </div>
    );
};