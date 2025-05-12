import { useState, useEffect } from 'react' 
import { Link } from "react-router-dom";

// Thanks component to display a thank you message after user registration
function Thanks() {
    return (
        <div>
            <h1>Thank You!</h1>
            <p>Your submission has been received.</p>
            <p>
                <Link to="/"><button>Go to home Page</button></Link>
            </p>
        </div>
    );
};

export default Thanks;