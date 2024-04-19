import { server } from "../store"
import axios from "axios"


export const getCreatedCourses = () => async (dispatch) => {
    try {
        dispatch({ type: 'getCreatedCoursesRequest' });

        const { data } = await axios.get(`${server}/instructor/my-courses`, {
            withCredentials: true,
        });
        dispatch({ type: 'getCreatedCoursesSuccess', payload: data.mycourses });
    }
    catch (error) {
        dispatch({ type: 'getCreatedCoursesFail', payload: error.response.data.message });
    }
}

export const createNewCourse = (formData) => async (dispatch) => {
    try {
        dispatch({ type: 'createCourseRequest' });

        const { data } = await axios.post(`${server}/createcourse`,formData,  {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        dispatch({ type: 'createCourseSuccess', payload: data.message });
    }
    catch (error) {
        dispatch({ type: 'createCourseFail', payload: error.response.data.message });
    }
}

export const getSpecificInstructorCourse = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'instructorSpecificCourseRequest' });

        const { data } = await axios.get(`${server}/admin/courses/${id}`, {
            withCredentials: true,
        });

        dispatch({ type: 'instructorSpecificCourseSuccess', payload: data.course });
    }
    catch (error) {
        dispatch({ type: 'instructorSpecificCourseFail', payload: error.response.data.message });
    }
}

export const updateCourseDetails = (formData, id) => async (dispatch) => {
    try {
        dispatch({ type: 'updateCourseDetailsRequest' });

        const { data } = await axios.put(`${server}/courses/${id}`,formData, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        dispatch({ type: 'updateCourseDetailsSuccess', payload: data.message });
    }
    catch (error) {
        dispatch({ type: 'updateCourseDetailsFail', payload: error.response.data.message });
    }
}