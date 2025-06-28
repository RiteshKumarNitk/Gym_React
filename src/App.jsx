import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

// Wrap your AppRoutes in a separate component to use hooks like useLocation
const AppRoutes = () => {
  const location = useLocation();

  // Define paths where Navbar should be hidden
  const hideNavbarPaths = ["/dashboard", "/members"];

  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
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
    </>
  );
};

function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
