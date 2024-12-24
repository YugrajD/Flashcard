import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Set from './pages/Set';
import SignUp from './components/SignUp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='set' element={<Set />} />
        <Route path='sign-up' element={<SignUp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
