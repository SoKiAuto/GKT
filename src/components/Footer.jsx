// src/components/Footer/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-6 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left text-gray-800">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Gurukrupa Travels</h2>

        <p className="font-medium max-w-xl mx-auto md:mx-0 mb-2 text-gray-600">
          Ward 10, Plot 95, Vidyanagar, Gurukul Area, Rambaug Rd, Gandhidham, Gujarat 370201
        </p>

        <p className="font-medium text-gray-700">📞 +91 98797 14494</p>
        <p className="font-medium mb-4 text-gray-700">🕒 Open 24 hours</p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 text-sm">
          <a href="mailto:info@gurukrupatravels.com" className="text-gray-700 hover:text-gray-900 transition">
            📧 info@gurukrupatravels.com
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

        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Gurukrupa Travels. All rights reserved.
        </p>
      </div>

      {/* Bottom-left developer credit */}
      <div className="absolute bottom-2 left-4 text-sm text-gray-500">
        Crafted by <span className="font-semibold text-gray-800">Kandira</span>
      </div>
    </footer>
  );
};

export default Footer;
