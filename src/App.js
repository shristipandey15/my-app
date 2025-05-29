import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from './Components/Navbar.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Course from './pages/Course.jsx';
import StudentLife from './pages/StudentLife.jsx';
import Career from './pages/Career.jsx';
import Contact from './pages/Contact.jsx';
import ProjectHub from './pages/ProjectHub.jsx';
import EventDetails from './Components/EventDetails.jsx';
import Events from './Components/Events.jsx';
import CourseDetail from './pages/CourseDetails.jsx';

function App() {
  const location = useLocation();

  // Show header only on the homepage
  const showHeader = location.pathname === '/';

  return (
    <div className="App">
      <Navbar />

      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projecthub" element={<ProjectHub />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/event/:id" element={<EventDetails/>} />
        
     
        <Route />
      </Routes>

      {/* Show Footer on every page including /about */}
      <Footer />
    </div>
  );
}

export default App;
