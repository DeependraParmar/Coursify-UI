import { server } from "../store";
import axios from "axios";

export const contact = (name, email, message, token) => async(dispatch) => {
    try {
        dispatch({ type: "contactRequest" });
        const {data} = await axios.post(`${server}/contact`, { name, email, message, token },{
            headers: {
                'Content-Type': 'application/json'
            }
        });

        dispatch({ type: "contactSuccess", payload: data.message });
    }
    catch (error) {
        dispatch({ type: "contactFail", payload: error.response.data.error });
    }
}

export const inviteAFriend = (name, email, friend_name) => async(dispatch) => {
    try {
        dispatch({ type: "inviteRequest" });
        const {data} = await axios.post(`${server}/invite`, { name, email, friend_name },{
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        dispatch({ type: "inviteSuccess", payload: data.message });
    }
    catch (error) {
        dispatch({ type: "inviteFail", payload: error.response.data.error });
    }
}