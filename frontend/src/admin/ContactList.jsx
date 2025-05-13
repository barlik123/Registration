import React from "react";
import './admin.css';

// ContactList component that receives contacts info from backend 
// to display a list of contacts with options to update or delete them
const ContactList = ({ contacts, updateContact, updateCallback }) => {
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            };
            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options);
            if (response.status === 200) {
                updateCallback.onUpdate();
            } else {
                console.error("Failed to delete contact");
            }
        } catch (error) {
            alert(error);
        }
    }

    // Render the contact list with a table displaying contact details
    return <div>
        <h2>Contacts</h2>
        <div className="admin-list">
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Admin</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <tr key = {contact.id}>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.email}</td>
                        <td>{contact.location}</td>
                        <td>{contact.isAdmin ? "True" : "False"}</td>
                        <td>
                            <button onClick={() => updateContact(contact)}>Update</button>
                            <button onClick={() => onDelete(contact.id)}>Delete</button>
                        </td>    

                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
}

export default ContactList;