// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// import logo
import namedLogo from "../assets/logos/named-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-7xl w-[95%] md:w-[90%] lg:w-4/5 rounded-full px-4 sm:px-6 py-3
        transition-all duration-300 ease-in-out border backdrop-blur-md shadow-md
        ${
          scrolled
            ? 'bg-white/85 dark:bg-neutral-900/80 border-gray-200 dark:border-neutral-700 shadow-lg'
            : 'bg-white/60 dark:bg-neutral-800/70 border-gray-200 dark:border-neutral-700/80'
        }`}
    >
      {/* Navbar container */}
      <div className="flex justify-between items-center h-14">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={namedLogo}
            alt="Gurukrupa Travels Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 font-semibold">
          {navLinks.map(({ name, path }) => {
            const isActive = currentPath === path;
            return (
              <li key={name}>
                <Link
                  to={path}
                  className={`relative px-2 py-1 transition-all duration-300 text-base lg:text-lg group
                    ${
                      isActive
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                    }`}
                >
                  {name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-current rounded-full
                      transition-transform duration-300
                      ${isActive ? 'scale-x-100' : 'scale-x-0'}
                      group-hover:scale-x-100 origin-left`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-9 sm:w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-9 sm:w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 mt-3 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <ul className="flex flex-col space-y-4 p-4 rounded-lg bg-white/95 dark:bg-neutral-900/95 border border-gray-200 dark:border-neutral-700 shadow-md text-lg font-semibold text-gray-700 dark:text-gray-200">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`block px-2 py-1 transition-colors duration-300 rounded
                  ${currentPath === path ? 'font-bold text-black dark:text-white bg-gray-100 dark:bg-neutral-800' : 'hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-800'}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
