import auth from "../auth-service/auth";

// Reset authentication status when accessing public route
// This ensures that any previous authentication state is cleared
const PublicRoute = ({ children }) => {
    auth.resetAuthentication(); 
    return (
        children
    );
}

export default PublicRoute;