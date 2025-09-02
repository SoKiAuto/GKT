// src/components/Footer.jsx
import React from "react";
import logo from "../assets/logos/main-logo.png"; // update path if needed

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-8 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left text-gray-800 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        
        {/* Left Section - Logo + Info side by side */}
        <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Main Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Gurukrupa Travels Logo"
              className="w-36 h-36 object-contain" // bigger size
            />
          </div>

          {/* Company Info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Gurukrupa Travels</h2>
            <p className="font-medium max-w-xl mb-2 text-gray-600 text-sm sm:text-base">
              Ward 10, Plot 95, Vidyanagar, Gurukul Area, Rambaug Rd, Gandhidham, Gujarat 370201
            </p>
            <p className="font-medium text-gray-700 text-sm sm:text-base">
              📞 +91 9879714494 , +91 9879679233
            </p>
            <p className="font-medium mb-4 text-gray-700 text-sm sm:text-base">
              🕒 Open 24 hours
            </p>
          </div>
        </div>

        {/* Right Section - Contact Links */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start gap-3 text-sm sm:text-base mb-4">
            <a
              href="mailto:gurukrupatravels5555@gmail.com"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              📧 gurukrupatravels5555@gmail.com
            </a>
            <a
              href="https://wa.me/919879714494"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              💬 WhatsApp Us
            </a>
            <a
              href="https://gurukrupatravels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              🌐 Visit Website
            </a>
          </div>
          <p className="text-xs text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Gurukrupa Travels. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom-left developer credit */}
      <div className="mt-6 md:mt-0 md:absolute bottom-2 left-4 text-xs sm:text-sm text-gray-500 text-center md:text-left">
        Crafted by{" "}
        <a
          href="https://www.thekandira.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-gray-800 hover:text-amber-500 hover:underline"
        >
          Kandira
        </a>
      </div>

    </footer>
  );
};

export default Footer;
