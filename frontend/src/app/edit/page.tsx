"use client";

import ImageEditor from "@/components/ImageEditor";

const Editor = () => {
    return (
        <div style={{
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/axiom-pattern.png")'
        }}>
            <ImageEditor />
        </div>
    );
}

export default Editor;