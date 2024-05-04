import { createReducer } from "@reduxjs/toolkit";

export const youtubeReducer = createReducer({}, {
    createYoutubeCourseRequest: (state) => {
        state.loading = true;
    },
    createYoutubeCourseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    createYoutubeCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    getYoutubeCourseRequest: (state) => {
        state.loading = true;
    },
    getYoutubeCourseSuccess: (state, action) => {
        state.loading = false;
        state.courses = action.payload;
    },
    getYoutubeCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    getSpecificYoutubeCourseRequest: (state) => {
        state.loading = true;
    },
    getSpecificYoutubeCourseSuccess: (state, action) => {
        state.loading = false;
        state.course = action.payload;
    },
    getSpecificYoutubeCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    updateYoutubeCourseRequest: (state) => {
        state.loading = true;
    },
    updateYoutubeCourseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    updateYoutubeCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    addLectureToYoutubeCourseRequest: (state) => {
        state.loading = true;
    },
    addLectureToYoutubeCourseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    addLectureToYoutubeCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    deleteYoutubeCourseRequest: (state) => {
        state.loading = true;
    },
    deleteYoutubeCourseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteYoutubeCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    getSpecificYoutubeLectureRequest: (state) => {
        state.loading = true;
    },
    getSpecificYoutubeLectureSuccess: (state, action) => {
        state.loading = false;
        state.lecture = action.payload;
    },
    getSpecificYoutubeLectureFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    updateYoutubeLectureRequest: (state) => {
        state.loading = true;
    },
    updateYoutubeLectureSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    updateYoutubeLectureFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    deleteYoutubeLectureRequest: (state) => {
        state.loading = true;
    },
    deleteYoutubeLectureSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteYoutubeLectureFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    }
})