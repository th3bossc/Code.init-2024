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