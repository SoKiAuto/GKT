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
import BackgroundTiles from './components/BackgroundTiles'; // ✅ Import added

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [theme, setTheme] = useState('light'); // default to light theme

  useEffect(() => {
    setShowPopup(true);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-fu font-sans transition-all duration-300 ${theme}`}>
      
      {/* ✅ Add the background tiles here */}
      <BackgroundTiles />

      <div className="relative z-10 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
        
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
          className="fixed bottom-4 right-4 z-50 px-4 py-2 rounded-full shadow-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </div>
  );
};

export default App;
