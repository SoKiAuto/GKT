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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-7xl w-[95%] md:w-[90%] lg:w-4/5 rounded-full px-4 sm:px-6 py-3
        transition-all duration-300 ease-in-out border backdrop-blur-md shadow-md
        ${
          scrolled
            ? 'bg-white/85 border-gray-200 shadow-lg'
            : 'bg-white/60 border-gray-200'
        }`}
    >
      <div className="flex justify-between items-center h-14">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={namedLogo}
            alt="Gurukrupa Travels Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 font-semibold">
          {navLinks.map(({ name, path }) => {
            const isActive = currentPath === path;
            return (
              <li key={name}>
                <Link
                  to={path}
                  className={`relative px-2 py-1 text-base lg:text-lg transition-colors duration-300 group
                    ${
                      isActive
                        ? 'text-[#09328E]'
                        : 'text-gray-600 hover:text-[#09328E]'
                    }`}
                >
                  {name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#EA9236] rounded-full
                      transition-transform duration-300
                      ${isActive ? 'scale-x-100' : 'scale-x-0'}
                      group-hover:scale-x-100 origin-left`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-[#09328E] hover:text-[#EA9236] transition-colors"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="flex flex-col space-y-4 p-4 rounded-lg bg-white/90 border border-gray-200 shadow-md text-lg font-semibold text-[#09328E]">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`block px-3 py-2 rounded transition-colors
                  ${
                    currentPath === path
                      ? 'font-bold bg-[#EA9236]/10 text-[#09328E]'
                      : 'hover:bg-[#EA9236]/10 hover:text-[#09328E]'
                  }`}
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
