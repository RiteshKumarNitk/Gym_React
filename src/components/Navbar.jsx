import { Link } from "react-router-dom";
import Image from "../assets/Image.png";


const Navbar = () => {
  return (
    <>
    <nav className="w-full">
      {/* Top Bar */}
      <div className="bg-[#FBFBFB] w-full flex justify-between items-center px-10 py-2 text-sm text-gray-700">
        <p>Mon - Sat : 9am to 7pm</p>
        <div className="flex gap-2 items-center">
          <button className="hover:text-orange-600 font-medium">Login</button>
          <span>/</span>
          <button className="hover:text-orange-600 font-medium">Register</button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full h-16 bg-white shadow-sm flex items-center justify-between px-10">
        {/* Logo */}
        <img src={Image} alt="Logo" className="h-10" />

        {/* Navigation Links */}
        <ul className="flex gap-6 text-gray-800 font-semibold">
          <li>
            <Link to="/" className="hover:underline hover:text-orange-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline hover:text-orange-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:underline hover:text-orange-600">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/classes" className="hover:underline hover:text-orange-600">
              Classes
            </Link>
          </li>
          <li>
            <Link to="/pages" className="hover:underline hover:text-orange-600">
              Pages
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:underline hover:text-orange-600">
              Blog
            </Link>
          </li>
        </ul>

        {/* Appointment CTA */}
        <div>
          <Link
            to="/appointment"
            className=""
          >
            | Appointment |
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
