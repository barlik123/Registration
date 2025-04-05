import { useState } from "react";
import countries from "./countries.json";

const ContactForm = ({ existingContact = {}, updateCallback, adminMode= false }) => {
    const [firstName, setFirstName] = useState(existingContact.firstName || "");
    const [lastName, setLastName] = useState(existingContact.lastName || "");
    const [email, setEmail] = useState(existingContact.email || "");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState(existingContact.location || "");
    const [isAdmin, setAdmin] = useState(false); 
    
    const updating = Object.keys(existingContact).length !== 0 ; // Check if we have an existing contact to update

    const onSubmit = async (e) => {
        e.preventDefault() 
        
        
        const data = {  // Create a data object to send to the backend
            firstName,
            lastName,
            email,
            location,
            password,
            isAdmin: isAdmin 
        }

        // Determine the URL based on whether we're updating or creating a new contact
        const url = "http://127.0.0.1:5000/" + (updating ? `update_contact/${existingContact.id}` : "create_contact")   
        const options = {
            method: updating ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message) // if contact submit fails, show the error message
        } else {
            updateCallback()
        }
    }

    return (
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input 
                type="text"
                id="firstName" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="lastName">Last Name:</label>
            <input 
                type="text"
                id="lastName" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input 
                type="text"
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>Select Country: </label>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
                {countries.map(({ name}) => (
                <option value={name}> {name} </option> ))}
            </select>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input 
                type="password"
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
        </div>
        {adminMode && (
            <div>
                <label htmlFor="admin">Admin:</label>
                <input 
                    type="checkbox"
                    id="admin" 
                    checked={isAdmin}
                    onChange={(e) => setAdmin(e.target.checked)}
                />
            </div>
        )}
        <button type="submit">{updating ? "Update" : "Create"}</button>
    </form>)
}

export default ContactForm;