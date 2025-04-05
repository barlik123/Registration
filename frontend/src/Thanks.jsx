import { useState, useEffect } from 'react' 
import { Link } from "react-router-dom";

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