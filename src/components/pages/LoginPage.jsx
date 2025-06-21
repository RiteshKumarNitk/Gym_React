import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-sans">
      
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-center items-center p-8 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome Back</h2>
        <form className="w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link to="/Register">
          <span className="text-blue-600 cursor-pointer">Register</span>
          </Link>
        </p>
      </div>

      {/* Right Side - Static Graphic Design */}
      <div className="relative bg-[#1E3A8A] flex items-center justify-center overflow-hidden">
        {/* Top-right circle */}
        <div className="absolute top-8 right-8 w-24 h-24 bg-orange-400 rounded-full opacity-80"></div>
        
        {/* Bottom-left ellipse */}
        <div className="absolute bottom-8 left-8 w-48 h-48 bg-green-400 rounded-full opacity-60 rotate-12"></div>

        {/* Center text */}
        <div className="z-10 text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Log in</h1>
          <p className="text-lg max-w-md">
            Access your dashboard, manage your progress, and stay consistent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
