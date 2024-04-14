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