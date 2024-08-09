import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyClients.css';

const MyClients = () => {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    username: '',
    name: '',
    email: '',
    dateOfBirth: '',
    gender: '',
  });

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/users');
        setClients(response.data);
        setFilteredClients(response.data);
      } catch (err) {
        console.error('Error fetching clients:', err);
        setError('Failed to load clients.');
      }
    };

    fetchClients();
  }, []);

  useEffect(() => {
    // Filter clients based on the criteria
    const filtered = clients.filter(client => {
      return (
        (!filters.username || client.username.toLowerCase().includes(filters.username.toLowerCase())) &&
        (!filters.name || client.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.email || client.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (!filters.dateOfBirth || client.dateOfBirth.includes(filters.dateOfBirth)) &&
        (!filters.gender || client.gender.toLowerCase().includes(filters.gender.toLowerCase()))
      );
    });

    setFilteredClients(filtered);
  }, [filters, clients]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="clients-container">
      <h1>My Clients</h1>
      <div className="filters">
        <input
          type="text"
          name="username"
          placeholder="Filter by Username"
          value={filters.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Filter by Name"
          value={filters.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Filter by Email"
          value={filters.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="dateOfBirth"
          placeholder="Filter by Date of Birth"
          value={filters.dateOfBirth}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gender"
          placeholder="Filter by Gender"
          value={filters.gender}
          onChange={handleChange}
        />
      </div>
      <br></br>
      <div className="clients-list">
        {filteredClients.length > 0 ? (
          filteredClients.map(client => (
            <div key={client.id} className="client-card">
              <div className="client-info">
                <p><strong>Username:</strong> {client.username}</p>
                <p><strong>Name:</strong> {client.name}</p>
                <p><strong>Email:</strong> {client.email}</p>
                <p><strong>Date of Birth:</strong> {client.dateOfBirth}</p>
                <p><strong>Gender:</strong> {client.gender}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No clients found.</p>
        )}
      </div>
    </div>
  );
};

export default MyClients;
