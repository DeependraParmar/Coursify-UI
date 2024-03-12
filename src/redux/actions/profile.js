import { server } from "../store";
import axios from "axios";

export const updateProfile = (name, email, phoneNumber, about, linkedin, twitter, github, facebook, website, youtube) => async (dispatch) => {
    try {
        dispatch({ type: 'updateProfileRequest' });

        const {data} = await axios.put(`${server}/updateprofile`, { name, email, phoneNumber, about, linkedin, twitter, github, facebook, website, youtube }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });

        dispatch({ type: 'updateProfileSuccess', payload: data.message });
    }
    catch (error) {
        dispatch({ type: 'updateProfileFail', payload: error.response.data.message });
    }
}

export const resetPassword = (oldPassword, newPassword) => async(dispatch) => {
    try{
        dispatch({ type: 'changePasswordReqeust'});

        const {data} = await axios.put(`${server}/changepassword`, {oldPassword, newPassword}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });

        dispatch({ type: 'changePasswordSuccess', payload: data.message})
    }
    catch(error){
        dispatch({ type: 'changePasswordFail', payload: error.response.data.message})
    }
}

export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: 'forgotPasswordReqeust' });

        const { data } = await axios.post(`${server}/forgotpassword`, { email }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });

        dispatch({ type: 'forgotPasswordSuccess', payload: data.message })
    }
    catch (error) {
        dispatch({ type: 'forgotPasswordFail', payload: error.response.data.message })
    }
}

export const newPassword = (password, token) => async (dispatch) => {
    try {
        dispatch({ type: 'newPasswordReqeust' });

        const { data } = await axios.put(`${server}/resetpassword/${token}`, { password }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });

        dispatch({ type: 'newPasswordSuccess', payload: data.message })
    }
    catch (error) {
        dispatch({ type: 'newPasswordFail', payload: error.response.data.message })
    }
}