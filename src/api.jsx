import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your backend API URL

export const loginUser = async (credentials) => {
  return await axios.post(`${API_URL}/login`, credentials);
};
