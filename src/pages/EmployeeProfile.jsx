import React, { useState } from 'react';
import './EmployeeProfile.css'; // Import the CSS file

const EmployeeProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    username: 'gigaChad',
    name: 'Giga Chad',
    email: 'gigachad@ggigachad.com',
    dateOfBirth: 'January 1, 1990',
    gender: 'Male'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-card">
      <div className="profile-picture">
        <img
          src="https://i.pinimg.com/236x/62/65/d0/6265d097dabb9e704f8b08c76588ead4.jpg" 
          alt="Profile"
          className="profile-image"
        />  
      </div>
      <h3>Role: Certified Giga Chad</h3>
      <div className="user-info">
        <h1>Account Information</h1>
        <form>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-buttons">
            {isEditing ? (
              <>
                <button type="button" onClick={handleSaveClick}>Save</button>
                <button type="button" onClick={handleEditClick}>Cancel</button>
              </>
            ) : (
              <button type="button" onClick={handleEditClick}>Edit</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeProfile;
