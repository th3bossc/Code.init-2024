"use client";
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './index.scss'

const ImageUploader = () => {
    const [file, setFile] = useState<File | null>(null); // Initialize file state with null
    const [img, setImg] = useState<string | null>(null);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            const selectedFile = acceptedFiles[0]; // Use the first accepted file
            setImg(URL.createObjectURL(selectedFile));
            setFile(selectedFile); // Update file state using setFile
        },
        accept: 'image/*', // Accept only image files
        multiple: false,
    });

    return (
        <>
            <div className='imageDisplay'>
                <img src={img} alt='image to convert' />
            </div>
            <div className="imageUploader" {...getRootProps()}>
                <input {...getInputProps()} style={{ display: "none" }} />
                <label htmlFor="file" style={{ cursor: "pointer" }}>
                    <span>{file ? file.name : 'DRAG/BROWSE IMAGE'}</span>
                </label>
            </div>
        </>
    )
}

export default ImageUploader;