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

        console.log(data);
        dispatch({type: 'loginSuccess', payload: data, });
    }
    catch(error){
        dispatch({ type: 'loginFail', payload: error.response.data.message, });

    }
}


export const getMyProfile = () => async(dispatch) => {
    try{
        dispatch({type: "loadUserRequest"});
        const {data} = await axios.get(`${server}/profile`, {
            withCredentials: true,
        });

        console.log(data);
        dispatch({type: 'loadUserSuccess', payload: data.user });
    }
    catch(error){
        dispatch({ type: 'loadUserFail', payload: error.response.data.message, });

    }
}