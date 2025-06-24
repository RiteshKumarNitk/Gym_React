// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Classes from "./components/pages/Classes";
import Pages from "./components/pages/Pages";
import Blog from "./components/pages/Blog";
import Navbar from "./components/Navbar"; 
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Members from "./components/pages/dashboard/Members";




function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
