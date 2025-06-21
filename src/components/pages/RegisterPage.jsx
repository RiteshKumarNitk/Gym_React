import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-sans">
      
      {/* Left Side - Static Colorful Design */}
      <div className="relative bg-[#0F172A] flex items-center justify-center overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500 rounded-full opacity-60"></div>
        <div className="z-10 text-white text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Join Us</h1>
          <p className="text-lg max-w-md">
            Unlock premium access to exclusive classes, personalized training plans, and more.
          </p>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex flex-col justify-center items-center p-8 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Account</h2>
        <form className="w-full max-w-sm space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/LoginPage">
          <span className="text-blue-600 cursor-pointer">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
