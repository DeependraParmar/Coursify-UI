import { configureStore } from '@reduxjs/toolkit';
import { paymentReducer, profileReducer, userReducer } from './reducers/userReducer';
import { instructorReducer } from './reducers/instructorReducer';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';
import { blogReducer } from './reducers/blogReducer';
import { youtubeReducer } from './reducers/youtubeReducer';
import { otherReducers } from './reducers/otherReducers';

export const server = "https://coursify-9oco.onrender.com/api/v1"

const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        course: courseReducer,
        payment: paymentReducer,
        instructor: instructorReducer,
        admin: adminReducer,
        blog: blogReducer,
        youtube: youtubeReducer,
        other: otherReducers,
    }
});

export default store;