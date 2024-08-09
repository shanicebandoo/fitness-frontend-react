import './App.css'
import React from'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Services from './pages/Services';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import EmployeeLogin from './pages/EmployeeLogin';
import EmployeeProfile from "./pages/EmployeeProfile";
import MyClients from "./pages/MyClients";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/employeelogin" element={<EmployeeLogin />} />
        <Route path="/employeeprofile" element={<EmployeeProfile />} />
        <Route path="/myclients" element={<MyClients />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App;
