import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../assets/Image.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="bg-[#FBFBFB] w-full flex justify-between items-center px-4 md:px-10 py-2 text-sm text-gray-700">
        <p>Mon - Sat : 9am to 7pm</p>
        <div className="flex gap-2 items-center">
          <Link to="/loginpage" className="hover:text-orange-600 font-medium">Login</Link>
          <span>/</span>
          <Link to="/register" className="hover:text-orange-600 font-medium">Register</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-sm w-full px-4 md:px-10 py-4 flex items-center justify-between">
        <img src={Image} alt="Logo" className="h-10" />
        <ul className="hidden md:flex gap-6 text-gray-800 font-semibold">
          {["Home", "About", "Gallery", "Classes", "Pages", "Blog"].map((text) => (
            <li key={text}>
              <Link to={`/${text.toLowerCase()}`} className="hover:underline hover:text-orange-600">
              </Link>
                {text}
            </li>
          ))}
        </ul>
        <Link
          to="/appointment"
          className="hidden md:inline-block text-orange-600 font-bold border border-orange-600 px-4 py-1 rounded hover:bg-orange-600 hover:text-white transition"
        >
          Appointment
        </Link>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-4 text-gray-800 font-semibold">
          {["Home", "About", "Gallery", "Classes", "Pages", "Blog"].map((text) => (
            <Link
              key={text}
              to={`/${text.toLowerCase()}`}
              className="hover:underline hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              {text}
            </Link>
          ))}
          <Link
            to="/appointment"
            className="font-bold border border-orange-600 px-4 py-1 rounded hover:bg-orange-600 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
