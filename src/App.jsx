// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import About from "./features/pages/About";
import Gallery from "./features/pages/Gallery";
import Classes from "./features/pages/Classes";
import Pages from "./features/pages/Pages";
import Blog from "./features/pages/Blog";
import Navbar from "./components/Navbar";
import LoginPage from "./features/auth/LoginPage";
import RegisterPage from "./features/auth/RegisterPage";
import Home from "./features/home/Home";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // List of routes where Navbar should be hidden
  const hideNavbarRoutes = ["/login", "/register"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname.toLowerCase());

  return (
    <div className="overflow-x-hidden">
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />

        {/* Auth pages (no navbar) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
