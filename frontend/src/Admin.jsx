import { useState, useEffect } from 'react' 
import ContactList from './ContactList'
import './App.css'
import './admin.css'
import ContactForm from './ContactForm'
import { Link } from "react-router-dom";

import BarChartComponent from "./chart";

// Admin component to manage contacts and display contacts details insights
function Admin() {
  const [contacts,setContacts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentContact, setCurrentContact] = useState({})

  useEffect(() => {
    fetchContacts()
  }, [])

  // Fetch contacts from the backend
  const fetchContacts = async () => {
    const response = await fetch('http://127.0.0.1:5000/contacts')
    const data = await response.json()
    setContacts(data.contacts)
  }

  // Function to close the modal and reset the current contact
  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentContact({})
  }
  // Function to open the modal for creating a new contact
  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  }
  // Function to open the modal for editing an existing contact
  const openEditModal = (contact) => { 
    if (isModalOpen) return
    setCurrentContact(contact)
    setIsModalOpen(true)
  }
  // Function to handle the update callback after creating or updating a contact
  const onUpdate = () => {
    closeModal()
    fetchContacts()
  }

  // renders the admin page 
  return (
    <>
      <h1>Admin Page</h1>
      <div className="admin">
        <div >
          <ContactList contacts={contacts} updateContact={openEditModal} updateCallback={{onUpdate}}/>
          <button onClick={openCreateModal}>Create New Contact</button>
          {
            isModalOpen && <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <ContactForm existingContact={currentContact} updateCallback={onUpdate} adminMode={true}/>
              </div>
            </div>
          }
          <Link to="/"><button>Go to Home Page</button></Link>
        </div>
        <div className="admin-charts">
          <BarChartComponent />
        </div>
      </div>
    </>
  );
}

export default Admin
