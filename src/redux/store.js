import { configureStore } from '@reduxjs/toolkit';
import { paymentReducer, profileReducer, userReducer } from './reducers/userReducer';
import { instructorReducer } from './reducers/instructorReducer';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';

export const server = "https://coursify-9oco.onrender.com/api/v1"

const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        course: courseReducer,
        payment: paymentReducer,
        instructor: instructorReducer,
        admin: adminReducer,
    }
});

export default store;