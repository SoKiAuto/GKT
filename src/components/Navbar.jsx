// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // React Router hook to get current pathname
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-7xl w-[95%] md:w-[90%] lg:w-4/5 rounded-full px-6 py-3
      transition-all duration-300 ease-in-out border backdrop-blur-md shadow-md
      ${
        scrolled
          ? 'bg-white/80 dark:bg-neutral-900/80 border-gray-200 dark:border-neutral-700 shadow-lg'
          : 'bg-white/60 dark:bg-neutral-800/70 border-gray-200 dark:border-neutral-700/80'
      }`}
    >
      <div className="flex justify-between items-center h-12">
        <Link
          to="/"
          className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-wider transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300"
        >
          Gurukrupa.Travels
        </Link>

        <ul className="hidden md:flex space-x-8 font-semibold">
          {navLinks.map(({ name, path }) => {
            const isActive = currentPath === path;
            return (
              <li key={name}>
                <Link
                  to={path}
                  className={`relative px-2 py-1 transition-all duration-300 text-lg group
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

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-4xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:hidden mt-4 rounded-lg px-6 py-4 border-t transition-all duration-300 ease-in-out
          bg-white/90 dark:bg-neutral-900/95 border-gray-200 dark:border-neutral-700 shadow-md
          ${isOpen ? 'block opacity-100 max-h-screen' : 'hidden opacity-0 max-h-0'}`}
      >
        <ul className="flex flex-col space-y-4 font-semibold text-lg text-gray-700 dark:text-gray-200">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`block px-2 py-1 transition-colors duration-300
                  ${currentPath === path ? 'font-bold text-black dark:text-white' : 'hover:text-black dark:hover:text-white'}`}
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
