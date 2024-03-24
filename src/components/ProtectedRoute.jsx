import React from 'react';
import { Route, Navigate, Routes, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, isVerifiedInstructor, isVerifiedAdmin, redirectUrl, children, ...rest }) => {

    const location = useLocation();

    const allowedRoutes = ['/profile/edit', '/mycourses', '/reset-password', '/profile',];

    // Check if the current route is in the list of allowed routes
    const isAllowedRoute = allowedRoutes.some(route => location.pathname.includes(route));

    // Perform redirection only if not authenticated and not an allowed route
    if (!isAuthenticated && !isAllowedRoute) {
        return <Navigate to={redirectUrl} />;
    }
    if (location.pathname.includes('/instructor') && !isVerifiedInstructor) {
        return <Navigate to={redirectUrl} />;
    }
    if (location.pathname.includes('/admin') && !isVerifiedAdmin) {
        return <Navigate to={redirectUrl} />;
    }

    return (
        <>
            {children}
        </>
    );
};

export default ProtectedRoute;
