import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const loginUser = async (username, password) => {
  try {
    const response = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const contentType = response.headers.get('content-type');
    let data;

    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
      throw new Error(`Unexpected response format: ${data}`);
    }

    if (response.ok) {
      console.log('Login successful:', data);
      return data;
    } else {
      console.log('Login failed:', response.status, data);
      throw new Error(data.message || 'Login failed');
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/register`, user, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error during signup:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    throw error;
  }
};

export const fetchUsers = () => axios.get(`${API_URL}/users`);

export const updateUser = (id, user) => axios.put(`${API_URL}/users/${id}`, user);

export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);
