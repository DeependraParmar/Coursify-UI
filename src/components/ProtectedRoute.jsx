import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, isVerifiedInstructor, isVerifiedAdmin, redirectUrl, children }) => {

    const location = useLocation();

    if (!isAuthenticated) {
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
