import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Services.css'; // Import the CSS file

const Services = () => {
  const [workoutSessions, setWorkoutSessions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkoutSessions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/workout-sessions');
        setWorkoutSessions(response.data);
      } catch (error) {
        console.error('Error fetching workout sessions:', error);
        setError('Failed to load workout sessions.');
      }
    };

    fetchWorkoutSessions();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (workoutSessions.length === 0) {
    return <p>No workout sessions available.</p>;
  }

  return (
    <div className="services-container">
      <h1>Training Sessions</h1>
      <div className="workout-cards">
        {workoutSessions.map(session => (
          <div className="workout-card" key={session.id}>
            <div className="card-icon">
              <img src="https://cdn-icons-png.freepik.com/512/4471/4471883.png" alt="Icon" />
            </div>
            <div className="card-content">
              <p><strong>Date:</strong> {new Date(session.date).toLocaleDateString()}</p>
              <p><strong>Duration:</strong> {session.workoutDuration} minutes</p>
              <p><strong>Calories Burned:</strong> {session.caloriesBurned} kcal</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
