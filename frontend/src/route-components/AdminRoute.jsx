import auth from '../auth-service/auth'; // imports the auth object to check user status
import { Navigate } from 'react-router-dom';

// AdminRoute component to protect admin routes
// It checks if the user is an admin and redirects if not
const AdminRoute = ({ children }) => {
    if( !auth.isAdmin ) { // Check if not an admin
        return <Navigate to="/" />; // Redirect to login page
    }
    return (
      children 
    );
  }

  export default AdminRoute;