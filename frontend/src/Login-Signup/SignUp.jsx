import { useState } from 'react'; 
import './modal.css';
import ContactForm from './ContactForm';
import { useNavigate } from "react-router-dom";

// SignUp component to handle user registration and display the signup form in a modal
// It uses the ContactForm component to handle the form submission and validation
function SignUp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); 

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true);
  }

  const onUpdate = () => {
    closeModal();
    navigate("/Thanks");
  }

  // renders the signup button and modal for user registration
  return (
  <>
    <button onClick={openCreateModal}>Sign Up</button>
    {
      isModalOpen && <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <ContactForm updateCallback={onUpdate}/>
        </div>
      </div>
    }
  </>
  );
}

export default SignUp
