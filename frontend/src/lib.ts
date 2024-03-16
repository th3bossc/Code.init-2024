import axios from 'axios';


export const colourizeImage = async (image: any) => {
    if (!image)
        return;
    const formData = new FormData();
    formData.append('image', image);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/colourize/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    const base64String = Buffer.from(response.data.image, 'binary').toString('base64');
    const dataURL = `data:image/jpg;base64,${base64String}`;
    return dataURL;
}


export const downloadImage = (dataUrl: string) => {
    var link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'colourized.jpg';
    link.click();
}

export const saveImage = (dataUrl: string) => {
    if (typeof window !== undefined)
        window.localStorage.setItem('image', dataUrl);
}

export const deleteImage = () => {
    if (typeof window !== undefined)
        window.localStorage.removeItem('image');
}

export const loadImage = () => {
    if (typeof window !== undefined)
        return window.localStorage.getItem('image') || "/HeroArt.jpg";
    else
        return "/HeroArt.jpg";
}