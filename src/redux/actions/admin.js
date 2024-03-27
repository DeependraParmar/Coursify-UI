import { server } from "../store"
import axios from "axios"

export const getadminCourses = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'adminCoursesRequest' });

        const { data } = await axios.get(`${server}/admin/courses/${id}`,{
            withCredentials: true,
        });

        dispatch({ type: 'adminCoursesSuccess', payload: data.course });
    }
    catch (error) {
        dispatch({ type: 'adminCoursesFail', payload: error.response.data.message });
    }
}