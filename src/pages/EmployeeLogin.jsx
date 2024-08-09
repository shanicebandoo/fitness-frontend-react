import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

const EmployeeLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const data = await loginUser(username, password); 

        if (data && data.token) {  
            localStorage.setItem('token', data.token);
            console.log('Login successful');
            navigate('/employeeprofile');
        } else {
            console.log('Unexpected response:', data);
        }
    } catch (error) {
        console.error('Login failed', error);
    }
};


  return (
    
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Employee Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      
    </div>
  );
};

export default EmployeeLogin;
