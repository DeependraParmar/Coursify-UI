import { server } from "../store";
import axios from "axios";

export const contact = (name, email, message) => async(dispatch) => {
    try {
        dispatch({ type: "contactRequest" });
        console.log(name, email, message);
        const {data} = await axios.post(`${server}/contact`, { name, email, message },{
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