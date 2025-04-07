import auth from "../auth-service/auth";

const PublicRoute = ({ children }) => {
    // Reset authentication status when accessing public route
    // This ensures that any previous authentication state is cleared
    auth.resetAuthentication(); 
    
    return (
        children
    );
}

export default PublicRoute;