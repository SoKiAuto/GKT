// src/components/Footer/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 dark:bg-gray-50 border-t border-neutral-700 dark:border-gray-200 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left text-gray-200 dark:text-stone-800">
        <h2 className="text-2xl font-extrabold text-white dark:text-gray-800 mb-4">Gurukrupa Travels</h2>

        <p className="font-semibold leading-relaxed max-w-xl mx-auto md:mx-0 mb-3 text-gray-400 dark:text-gray-600">
          Ward 10, plot no. 95, Vidyanagar, Gurukul Area, Rambaug Rd, Gandhidham, Gujarat 370201
        </p>

        <p className="font-semibold mb-1 text-gray-300 dark:text-gray-700">📞 +91 98797 14494</p>
        <p className="font-semibold mb-6 text-gray-300 dark:text-gray-700">🕒 Open 24 hours</p>

        <div className="space-x-6 max-w-xs mx-auto md:mx-0 mb-6">
          <a
            href="mailto:info@gurukrupatravels.com"
            className="text-orange-400 dark:text-orange-600 hover:text-orange-500 dark:hover:text-orange-700 underline transition-colors duration-300"
          >
            📧 Email
          </a>
          <a
            href="https://wa.me/919879714494"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 dark:text-green-600 hover:text-green-500 dark:hover:text-green-700 underline transition-colors duration-300"
          >
            💬 WhatsApp
          </a>
          <a
            href="https://gurukrupatravels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 dark:text-orange-600 hover:text-orange-500 dark:hover:text-orange-700 underline transition-colors duration-300"
          >
            🌐 Website
          </a>
        </div>

        <p className="text-sm text-gray-400 dark:text-gray-500 max-w-xl mx-auto md:mx-0">
          &copy; {new Date().getFullYear()} Gurukrupa Travels. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
