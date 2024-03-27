import { server } from "../store"
import axios from "axios"


export const getAdminUsers = (type = 'users') => async(dispatch) => {
    try {
        dispatch({ type: 'adminUsersRequest' });

        const { data } = await axios.get(`${server}/admin/${type}`, {
            withCredentials: true,
        });

        dispatch({ type: 'adminUsersSuccess', payload: type === 'users' ? data.users : data.instructors });
    }
    catch (error) {
        dispatch({ type: 'adminUsersFail', payload: error.response.data.message });
    }
}

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