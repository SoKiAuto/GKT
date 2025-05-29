import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-orange-100 to-yellow-50 text-stone-800 py-8 mt-20 border-t border-stone-300">
      <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-xl font-extrabold text-stone-700 mb-2">Gurukrupa Travels</h2>
        <p className="font-semibold leading-relaxed max-w-xl mx-auto md:mx-0 mb-2">
          Ward 10, plot no. 95, Vidyanagar, Gurukul Area, Rambaug Rd, Gandhidham, Gujarat 370201
        </p>
        <p className="font-semibold mb-1">📞 +91 98797 14494</p>
        <p className="font-semibold mb-3">🕒 Open 24 hours</p>
        <div className="space-x-4">
          <a
            href="mailto:info@gurukrupatravels.com"
            className="text-orange-600 hover:text-orange-700 underline"
          >
            📧 Email
          </a>
          <a
            href="https://wa.me/919879714494"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 underline"
          >
            💬 WhatsApp
          </a>
          <a
            href="https://gurukrupatravels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-700 underline"
          >
            🌐 Website
          </a>
        </div>
        <p className="text-sm text-stone-600 mt-4">
          &copy; {new Date().getFullYear()} Gurukrupa Travels. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
