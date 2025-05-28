import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-6xl w-[95%] md:w-[90%] rounded-full px-6 py-3
        transition-all duration-300
        ${
          scrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-xl border-b border-pink-200'
            : 'bg-pink-100/90 backdrop-blur-lg shadow-md border-b border-pink-300'
        }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-pink-600 tracking-tight">
          Gurukrupa.Travels
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-semibold text-pink-700">
          {navLinks.map(({ name, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={name}>
                <Link
                  to={path}
                  className={`relative px-2 py-1 transition-all duration-300 ${
                    isActive ? 'text-pink-600 font-bold' : 'hover:text-pink-500'
                  }`}
                >
                  {name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-400 to-pink-600 rounded-full
                    transition-transform duration-300
                    ${isActive ? 'scale-x-100' : 'scale-x-0'}
                    hover:scale-x-100 origin-left`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-pink-600"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-2 bg-pink-50/90 rounded-xl px-6 py-4 border-t border-pink-200 shadow-md transition-all ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col space-y-4 text-pink-800 font-semibold">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`block transition-colors duration-300 ${
                  location.pathname === path ? 'text-pink-600 font-bold' : 'hover:text-pink-500'
                }`}
                onClick={() => setIsOpen(false)}
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
