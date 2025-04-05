import { useState } from 'react' 
import './App.css'
import ContactForm from './ContactForm'
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate(); 

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  }

  const onUpdate = () => {
    closeModal()
    navigate("/Thanks")
  }

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
