import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, {
    // Login Reducers 

    loginRequest: (state) => {
        state.loading = true;
    },
    loginSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    loginFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },


    // Register Reducers

    registerRequest: (state) => {
        state.loading = true;
    },
    registerSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.message = action.payload.message;
    },
    registerFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    verifyRegisterRequest: (state) => {
        state.loading = true;
    },
    verifyRegisterSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    verifyRegisterFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    // Update Profile Picture Reducers 

    updateProfilePictureRequest: (state) => {
        state.loading = true;
    },
    updateProfilePictureSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.message = action.payload;
    },
    updateProfilePictureFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
    },


    // isVerifiedCourseUser Reducers
    isVerifiedCourseUserRequest: (state) => {
        state.loading = true;
        state.isVerifiedCourseUser = false;
    },
    isVerifiedCourseUserSuccess: (state, action) => {
        state.loading = false;
        state.isVerifiedCourseUser = action.payload.isVerifiedCourseUser;
    },
    isVerifiedCourseUserFail: (state, action) => {
        state.loading = false;
        state.isVerifiedCourseUser = action.payload.isVerifiedCourseUser;
    },


    // Logout Reducers 

    logoutRequest: (state) => {
        state.loading = true;
    },
    logoutSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
    },
    logoutFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
    },

    // User's data loading Reducers 

    loadUserRequest: (state) => {
        state.loading = true;
    },
    loadUserSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    loadUserFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    }
});


export const profileReducer = createReducer({}, {
    // Update Profile Reducers

    updateProfileRequest: (state) => {
        state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    updateProfileFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    // Change Password Reducers

    changePasswordRequest: (state) => {
        state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    changePasswordFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    // Forgot Password Reducers

    forgotPasswordRequest: (state) => {
        state.loading = true;
    },
    forgotPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    forgotPasswordFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    // Reset New Password Reducers

    // Forgot Password Reducers

    newPasswordRequest: (state) => {
        state.loading = true;
    },
    newPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    newPasswordFail: (state, action) => {
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


export const instructorReducer = createReducer({}, {
    // Public profile data request reducers
    publicProfileRequest: (state) => {
        state.loading = true;
    },
    publicProfileSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
    },
    publicProfileFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearMessage: (state) => {
        state.message = null;
    },
    clearError: (state) => {
        state.error = null;
    }
})


export const paymentReducer = createReducer({}, {
    buyCourseRequest: (state) => {
        state.loading = true;
    },
    buyCourseSuccess: (state, action) => {
        state.loading = false;
        state.order = action.payload.order;
        state.message = action.payload.message;
    },
    buyCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    isValidPaymentRequest: (state) => {
        state.loading = true;
    },
    isValidPaymentSuccess: (state, action) => {
        state.loading = false;
        state.isValidPaymentId = true;
        state.message = action.payload.message
    },
    isValidPaymentFail: (state, action) => {
        state.loading = false;
        state.isValidPaymentId = false;
        state.error = action.payload;
    },

    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    }
})