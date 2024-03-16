import axios from 'axios';

export const colourizeImage = async (image: any) => {
    const formData = new FormData();
    formData.append('image', image);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/colourize/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
}