import { createReducer } from "@reduxjs/toolkit";

export const blogReducer = createReducer({}, {
    getBlogsRequest : (state) => {
        state.loading = true;
    },
    getBlogsSuccess : (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
    },
    getBlogsFail : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    getSpecificBlogRequest : (state) => {
        state.loading = true;
    },
    getSpecificBlogSuccess : (state, action) => {
        state.loading = false;
        state.blog = action.payload;
    },
    getSpecificBlogFail : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    createBlogRequest : (state) => {
        state.loading = true;
    },
    createBlogSuccess : (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    createBlogFail : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    updateBlogRequest : (state) => {
        state.loading = true;
    },
    updateBlogSuccess : (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    updateBlogFail : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    deleteBlogRequest : (state) => {
        state.loading = true;
    },
    deleteBlogSuccess : (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteBlogFail : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    }
});