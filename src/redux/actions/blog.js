import {server} from "../store.js";
import axios from "axios";

export const getBlogs = () => async(dispatch) => {
    try{
        dispatch({ type: 'getBlogsRequest' });
        const { data } = await axios.get(`${server}/blogs/all`);
        dispatch({ type: 'getBlogsSuccess', payload: data.blogs });
    }
    catch(error){
        dispatch({ type: 'getBlogsFail', payload: error.response.data.message });
    }
}

export const getSpecificBlog = (id) => async(dispatch) => {
    try{
        dispatch({ type: 'getSpecificBlogRequest' });
        const { data } = await axios.get(`${server}/blogs/${id}`);
        dispatch({ type: 'getSpecificBlogSuccess', payload: data.blog });
    }
    catch(error){
        dispatch({ type: 'getSpecificBlogFail', payload: error.response.data.message });
    }
}

export const createBlog = (title, content, file) = async(dispatch) => {
    try{
        dispatch({ type: 'createBlogRequest' });
        const { data } = await axios.post(`${server}/blogs/new`, { title, content, file },{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        dispatch({ type: 'createBlogSuccess', payload: data.message });
    }
    catch(error){
        dispatch({ type: 'createBlogFail', payload: error.response.data.message });
    }
}

export const updateBlog = (id, title, content, file) = async(dispatch) => {
    try{
        dispatch({ type: 'updateBlogRequest' });
        const { data } = await axios.put(`${server}/blogs/edit/${id}`, { title, content, file },{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        dispatch({ type: 'updateBlogSuccess', payload: data.message });
    }
    catch(error){
        dispatch({ type: 'updateBlogFail', payload: error.response.data.message });
    }
}

export const deleteBlog = (id) = async(dispatch) => {
    try{
        dispatch({ type: 'deleteBlogRequest' });
        const { data } = await axios.delete(`${server}/blogs/delete/${id}`);
        dispatch({ type: 'deleteBlogSuccess', payload: data.message });
    }
    catch(error){
        dispatch({ type: 'deleteBlogFail', payload: error.response.data.message });
    }
}