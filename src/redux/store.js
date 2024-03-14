import { configureStore } from '@reduxjs/toolkit';
import { paymentReducer, profileReducer, userReducer, instructorReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';

export const server = "https://coursify-9oco.onrender.com/api/v1"

const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        course: courseReducer,
        payment: paymentReducer,
        instructor: instructorReducer,
    }
});

export default store;