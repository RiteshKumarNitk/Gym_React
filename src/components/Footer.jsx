import React from "react";
import { Facebook, Twitter, Linkedin, Mail, PhoneCall, MapPin, Send } from "lucide-react";
// import Image from '../../assets/image.png';
import Image from '../assets/image.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-orange-500 font-bold mb-4">ABOUT US</h3>
          <p className="text-sm text-gray-400 mb-4">
            The longest running gym in Chicago. Owned and operated by a personal trainer with over 25 years experience.
          </p>
          <div className="flex gap-3">
            <a href="#"><Facebook size={18} className="hover:text-orange-500" /></a>
            <a href="#"><Twitter size={18} className="hover:text-orange-500" /></a>
            <a href="#"><Linkedin size={18} className="hover:text-orange-500" /></a>
          </div>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-orange-500 font-bold mb-4">GET IN TOUCH</h3>
          <div className="text-sm text-gray-400 space-y-2">
            <div className="flex items-start gap-2"><MapPin size={16} />92 Princess Road, Parkvenue, London</div>
            <div className="flex items-center gap-2"><Mail size={16} />contact123@gmail.com</div>
            <div className="flex items-center gap-2"><PhoneCall size={16} />(+291) 912-3456-073</div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-orange-500 font-bold mb-4">USEFUL LINKS</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-orange-500">→ About</a></li>
            <li><a href="#" className="hover:text-orange-500">→ Gallery</a></li>
            <li><a href="#" className="hover:text-orange-500">→ Blog</a></li>
            <li><a href="#" className="hover:text-orange-500">→ FAQ</a></li>
            <li><a href="#" className="hover:text-orange-500">→ Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-orange-500 font-bold mb-4">NEWSLETTER</h3>
          <p className="text-sm text-gray-400 mb-4">
            Our newsletters contain useful blog posts, case studies, how to’s, and ways to grow your business.
          </p>
          <div className="flex items-center border border-gray-400 rounded px-2 py-1">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="bg-transparent outline-none text-sm text-white placeholder:text-gray-400 flex-grow"
            />
            <button className="text-orange-500 hover:text-white">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <div className="flex">
          <img src={Image} alt="logo" className=" pl-12" />
        </div>
        <div>© 2025 Your Company. Designed by Thewebmax</div>
        <div className="flex gap-4">
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
