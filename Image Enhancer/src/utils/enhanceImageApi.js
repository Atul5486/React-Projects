import axios from "axios";

const BASE_URL = "https://techhk.aoscdn.com/"


export const enhancedImageApi = async (file) => {

    const task_id = await uploadImage(file)

    const enhancedImage = await pollEnhancedImage(task_id);

    return enhancedImage.image;
}

const uploadImage = async (file) => {
    const formData = new FormData()
    formData.append("image_file", file);

    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "X-API-KEY": import.meta.env.VITE_API_KEY
        },
    });
    if (!data?.data?.task_id) {
        throw new Error("Failed To upload image");
    }
    return data.data.task_id;
}

const fetchEnhancedImage = async (task_id) => {
    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${task_id}`, {
        headers: {
            "X-API-KEY": import.meta.env.VITE_API_KEY
        },
    });
    if (!data?.data) {
        throw new Error("Something went wrong");
    }
    return data.data;
}

const pollEnhancedImage=async(task_id,retries=0)=>{
    const result=await fetchEnhancedImage(task_id);

    if(result.state===4){

        if(retries>=20){
            throw new Error("Maximum limit exceed");
        }

        await new Promise((resolve)=>setTimeout(resolve,2500));

        return pollEnhancedImage(task_id,retries+1);
    }
    return result;
}