import auth from '../auth-service/auth'; // imports the auth object to check user status
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    if( !auth.isUser ) { // Check if the user is not authenticated
        return <Navigate to="/" />; // Redirect to login page if not authenticated
    }
    return (
      children
    );
  }

  export default PrivateRoute;