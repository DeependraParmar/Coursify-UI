import { server } from "../store";
import axios from "axios";

export const login = (email, password) => async(dispatch) => {
    try{
        dispatch({type: "loginRequest"});
        const {data} = await axios.post(`${server}/login`, {email, password}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        });

        dispatch({type: 'loginSuccess', payload: data, });
    }
    catch(error){
        dispatch({ type: 'loginFail', payload: error.response.data.message, });

    }
}


export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: "registerRequest" });
        const { data } = await axios.post(`${server}/register`, {name, email, password}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        });

        dispatch({ type: 'registerSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'registerFail', payload: error.response.data.message, });

    }
}

export const verifyRegister = (name, email, password, otp) => async (dispatch) => {
    try {
        dispatch({ type: "verifyRegisterRequest" });
        const { data } = await axios.post(`${server}/verify-register`, { name, email, password, otp }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        });

        dispatch({ type: 'verifyRegisterSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'verifyRegisterFail', payload: error.response.data.message });

    }
}

export const getMyProfile = () => async(dispatch) => {
    try{
        dispatch({type: "loadUserRequest"});
        const {data} = await axios.get(`${server}/profile`, {
            withCredentials: true,
        });

        dispatch({type: 'loadUserSuccess', payload: data.user });
    }
    catch(error){
        dispatch({ type: 'loadUserFail', payload: error.response.data.message, });

    }
}

export const getPublicProfile = (id) => async(dispatch) => {
    try{
        dispatch({type: "publicProfileRequest"});
        const {data} = await axios.get(`${server}/profile/public/${id}`);

        dispatch({type: 'publicProfileSuccess', payload: data.user });
    }
    catch(error){
        dispatch({ type: 'publicProfileFail', payload: error.response.data.message, });

    }
}

export const updateProfilePicture = (file) => async (dispatch) => {
    try {
        dispatch({ type: "updateProfilePictureRequest" });
        const { data } = await axios.put(`${server}/updateprofilepicture`,file, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true,
        });

        dispatch({ type: 'updateProfilePictureSuccess', payload: data.message });
    }
    catch (error) {
        dispatch({ type: 'updateProfilePictureFail', payload: error.response.data.message, });

    }
}

export const buyCourse = (amount) => async(dispatch) => {
    try{
        dispatch({type: "buyCourseRequest"});
        const {data} = await axios.post(`${server}/checkout`, {amount} , {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            }
        });

        dispatch({type: 'buyCourseSuccess', payload: data });
    
    }
    catch(error){
        dispatch({ type: 'buyCourseFail', payload: error.response.data.message, });

    }
}

export const getUserCourseStatus = (courseId) => async(dispatch) => {
    try{
        dispatch({type: "isVerifiedCourseUserRequest"});
        const { data } = await axios.get(`${server}/ispurchased/${courseId}`, {
            withCredentials: true,
        });

        dispatch({ type: 'isVerifiedCourseUserSuccess', payload: data });
    }
    catch(error){
        dispatch({ type: 'isVerifiedCourseUserFail', payload: error.response.data });
    }
}

export const logout = () => async(dispatch) => {
    try {
        dispatch({ type: "logoutRequest" });
        const { data } = await axios.get(`${server}/logout`, {
            withCredentials: true,
        });

        dispatch({ type: 'logoutSuccess', payload: data.message });

    }
    catch (error) {
        dispatch({ type: 'logoutFail', payload: error.response.data.message, });

    }
}
