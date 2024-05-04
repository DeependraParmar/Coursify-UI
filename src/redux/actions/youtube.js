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

export const getSpecificYoutubeCourse = (id) => async(dispatch) => {
    try{
        dispatch({ type: 'getSpecificYoutubeCourseRequest'});
        const { data } = await axios.get(`${server}/free-course/${id}`);
        dispatch({ type: 'getSpecificYoutubeCourseSuccess', payload: data.course});
    }
    catch(error){
        dispatch({ type: 'getSpecificYoutubeCourseFail', payload: error.response.data.message});
    }
}

export const updateYoutubeCourse = (formData, id) => async(dispatch) => {
    try {
        dispatch({ type: 'updateYoutubeCourseRequest' });
        const { data } = await axios.put(`${server}/free-course/${id}`, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        dispatch({ type: 'updateYoutubeCourseSuccess', payload: data.message });
    }
    catch (error) {
        dispatch({ type: 'updateYoutubeCourseFail', payload: error.response.data.message });
    }
}

export const deleteYoutubeCourse = (id) => async(dispatch) => {
    try{
        dispatch({ type: 'deleteYoutubeCourseRequest'});
        const { data } = await axios.delete(`${server}/free-course/${id}`, {
            withCredentials: true,
        });
        dispatch({ type: 'deleteYoutubeCourseSuccess', payload: data.message});
    }
    catch(error){
        dispatch({ type: 'deleteYoutubeCourseFail', payload: error.response.data.message});
    }
}

export const deleteLectureFromYoutubeCourse = (courseid, lectureid) => async(dispatch) => {
    try {
        dispatch({ type: 'deleteYoutubeLectureRequest' });
        const { data } = await axios.delete(`${server}/free-course/${courseid}/${lectureid}`, {
            withCredentials: true,
        });
        dispatch({ type: 'deleteYoutubeLectureSuccess', payload: data.message });
    }
    catch (error) {
        dispatch({ type: 'deleteYoutubeLectureFail', payload: error.response.data.message });
    }
}


export const addLectureToYoutubeCourse = (formData, id) => async(dispatch) => {
    try {
        dispatch({ type: 'addLectureToYoutubeCourseRequest' });
        const { data } = await axios.post(`${server}/free-course/${id}`, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        dispatch({ type: 'addLectureToYoutubeCourseSuccess', payload: data.message });
    }
    catch (error) {
        dispatch({ type: 'addLectureToYoutubeCourseFail', payload: error.response.data.message });
    }
}

export const getSpecificYoutubeLecture = (courseid, lectureid) => async(dispatch) => {
    try {
        dispatch({ type: 'getSpecificYoutubeLectureRequest' });
        const { data } = await axios.get(`${server}/free-course/${courseid}/${lectureid}`);
        dispatch({ type: 'getSpecificYoutubeLectureSuccess', payload: data.lecture });
    }
    catch (error) {
        dispatch({ type: 'getSpecificYoutubeLectureFail', payload: error.response.data.message });
    }
}

export const editSpecificYoutubeLecture = (formData, courseid, lectureid) => async(dispatch) => {
    try {
        dispatch({ type: 'updateYoutubeLectureRequest' });
        const { data } = await axios.put(`${server}/free-course/${courseid}/${lectureid}`, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        dispatch({ type: 'updateYoutubeLectureSuccess', payload: data.message });
    }
    catch (error) {
        dispatch({ type: 'updateYoutubeLectureFail', payload: error.response.data.message });
    }
}