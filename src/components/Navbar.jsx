import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Image from "../assets/Image.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Classes", path: "/classes" },
    { name: "Pages", path: "/pages" },
    { name: "Blog", path: "/blog" },
  ];

  const activeClass = "text-orange-600 underline";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowTopbar(false);
      } else {
        setShowTopbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Topbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-[#FBFBFB] text-sm text-gray-700 transition-transform duration-300 ${
          showTopbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full flex justify-between items-center px-4 md:px-10 py-2">
          <p>Mon - Sat : 9am to 7pm</p>
          <div className="flex gap-2 items-center">
            <NavLink to="/login" className={({ isActive }) => isActive ? activeClass : "hover:text-orange-600 font-medium"}>Login</NavLink>
            <span>/</span>
            <NavLink to="/register" className={({ isActive }) => isActive ? activeClass : "hover:text-orange-600 font-medium"}>Register</NavLink>
          </div>
        </div>
      </div>

      {/* Sticky navbar with dynamic top spacing */}
      <div
        className={`fixed left-0 right-0 z-40 bg-white shadow-sm transition-all duration-300 ${
          showTopbar ? "top-[40px]" : "top-0"
        }`}
      >
        <div className="px-4 md:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <img src={Image} alt="Logo" className="h-10" />

          {/* Desktop nav links */}
          <ul className="hidden md:flex gap-6 text-gray-800 font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? activeClass
                      : "hover:underline hover:text-orange-600"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Appointment button */}
          <NavLink
            to="/appointment"
            className={({ isActive }) =>
              `hidden md:inline-block border px-4 py-1 rounded font-bold transition ${
                isActive
                  ? "bg-orange-600 text-white border-orange-600"
                  : "text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
              }`
            }
          >
            Appointment
          </NavLink>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Push body content down by max height of both bars */}
      <div className="h-[96px]" />

      {/* Mobile dropdown menu (always relative to navbar, not pushed by spacer) */}
      {isOpen && (
        <div className="md:hidden fixed top-[96px] left-0 right-0 bg-white z-30 px-4 pb-4 flex flex-col gap-4 text-gray-800 font-semibold">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "hover:underline hover:text-orange-600"
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/appointment"
            className={({ isActive }) =>
              `font-bold border px-4 py-1 rounded transition ${
                isActive
                  ? "bg-orange-600 text-white border-orange-600"
                  : "text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Appointment
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
