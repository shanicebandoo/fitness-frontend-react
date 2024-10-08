import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

const Login = () => {
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
            navigate('/profile');
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
        <h2>Login</h2>
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
        <p>Not registered? <Link to="/signup">Sign up here!</Link>
        </p>
      </form>
      
    </div>
  );
};

export default Login;
