import { server } from "../store";
import axios from "axios";


export const createYoutubeCourse = (formData) => async(dispatch) => {
    try{
        dispatch({ type: 'createYoutubeCourseRequest'});
        const {data} = await axios.post(`${server}/free-course`, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        dispatch({ type: 'createYoutubeCourseSuccess', payload: data.message });
    }
    catch(error){
        dispatch({ type: 'createYoutubeCourseFail', payload: error.response.data.message });
    }
}

export const getYoutubeCourses = () => async(dispatch) => {
    try{
        dispatch({ type: 'getYoutubeCourseRequest'});
        const {data} = await axios.get(`${server}/free-course`);
        dispatch({ type: 'getYoutubeCourseSuccess', payload: data.courses });
    }
    catch(error){
        dispatch({ type: 'getYoutubeCourseFail', payload: error.response.data.message });
    }
}