import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomePage = () => {

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/sign-up');
  }
  return (
    <div>
        <Navbar />
        <button onClick={handleSignUpClick}>Sign up</button>
    </div>
  )
}

export default HomePage