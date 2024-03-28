import { server } from "../store"
import axios from "axios"


export const getAdminUsers = (type = 'users') => async(dispatch) => {
    try {
        dispatch({ type: 'adminUsersRequest' });

        const { data } = await axios.get(`${server}/admin/${type}`, {
            withCredentials: true,
        });

        dispatch({ type: 'adminUsersSuccess', payload: data.users });
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

export const getAdminTransactions = () => async (dispatch) => {
    try {
        dispatch({ type: 'adminTransactionsRequest' });

        const { data } = await axios.get(`${server}/admin/transactions`,{
            withCredentials: true,
        });

        dispatch({ type: 'adminTransactionsSuccess', payload: data.transactions });
    }
    catch (error) {
        dispatch({ type: 'adminTransactionsFail', payload: error.response.data.message });
    }
}

export const getAdminApprovalRequests = () => async (dispatch) => {
    try {
        dispatch({ type: 'adminApprovalFetchRequest' });

        const { data } = await axios.get(`${server}/fetch-review-requests`, {
            withCredentials: true,
        });

        dispatch({ type: 'adminApprovalFetchSuccess', payload: data.requests });
    }
    catch (error) {
        dispatch({ type: 'adminApprovalFetchFail', payload: error.response.data.message });
    }
}

export const adminApproveRequest = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'adminApproveRequest' });

        const { data } = await axios.put(`${server}/approve-instructor-request/${id}`,{}, {
            withCredentials: true,
        });

        dispatch({ type: 'adminApproveSuccess', payload: data.message });
    }
    catch (error) {
        dispatch({ type: 'adminApproveFail', payload: error.response.data.message });
    }
}

export const adminDiscardRequest = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'adminDiscardRequest' });

        const { data } = await axios.put(`${server}/discard-instructor-request/${id}`, {} , {
            withCredentials: true,
        });

        dispatch({ type: 'adminDiscardSuccess', payload: data.message });
    }
    catch (error) {
        dispatch({ type: 'adminDiscardFail', payload: error.response.data.message });
    }
}