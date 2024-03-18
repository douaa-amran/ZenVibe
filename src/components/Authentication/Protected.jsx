import react from "react";
import { Navigate, Outlet } from "react-router-dom";

// Protected component:
// This component is used to protect routes that need authentication.
// If the user is not authenticated, the component redirects the user to the login page.
const Protected = () => {
    // Check if the user has a token in localStorage
    const token = localStorage.getItem('token');
    // If the user has a token, render the children of the Protected component
    // (in this case, the component that should only be accessible if the user is authenticated)
    // Otherwise, redirect the user to the login page
    return (
        token ? <Outlet /> :<Navigate to = "/login"/>
        
    );
}

export default Protected;

