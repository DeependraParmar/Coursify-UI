import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, isVerifiedInstructor, isVerifiedAdmin, redirectUrl, children, ...rest }) => {

    const location = useLocation();

    const allowedRoutes = ['/profile/edit', '/mycourses', '/reset-password', '/profile',];

    const isAllowedRoute = allowedRoutes.some(route => location.pathname.includes(route));

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
