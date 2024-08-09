import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {createUser} from '../api';



const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    dateOfBirth: '',
    gender: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const user = {
      username: formData.username,
      password: formData.password,
      name: formData.name,
      email: formData.email,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender
    };
  
    try {
      const response = await createUser(user);
      console.log('Signup successful', response);
      navigate('/login'); 
    } catch (error) {
      console.error('Signup failed', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Join Sanity Fitness Today!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
