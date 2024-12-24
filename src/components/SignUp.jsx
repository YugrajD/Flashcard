import React, { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefualt();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
    }
  return (
    <div>
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <br />
        <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <label>
            Confirm Password:
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Sign Up</button>
    </form>
    
</div>
  )
}

export default SignUp