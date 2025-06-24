import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Vehicles from './pages/Vehicles';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import BookingPopup from './components/BookingPopup';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [theme, setTheme] = useState('dark'); // 'light' or 'dark'

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme}>
      <div className="bg-white text-gray-900 dark:bg-neutral-950 dark:text-gray-100 transition-colors duration-300 min-h-screen">
        <Navbar />
        {showPopup && <BookingPopup onClose={() => setShowPopup(false)} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="fixed bottom-4 right-4 z-50 px-4 py-2 rounded-full shadow-lg bg-gray-200 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </div>
  );
};

export default App;
