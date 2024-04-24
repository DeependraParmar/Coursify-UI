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