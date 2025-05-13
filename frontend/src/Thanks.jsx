import { Link } from "react-router-dom";
import './thanks.css'

// Thanks component to display a thank you message after user registration
function Thanks() {
    return (
        <div className='thanks-container'>
            <h1 className="thanks-title">Thank You!</h1>
            <p>Your submission has been received.</p>
            <p>
                <Link to="/"><button>Go to home Page</button></Link>
            </p>
        </div>
    );
};

export default Thanks;