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

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
 <div className="relative min-h-screen w-full overflow-x-hidden font-sans text-gray-900">
     {/* Background SVG illustration */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        <svg
          viewBox="130 0 1440 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Gradient Sky */}
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#cfefff" /> {/* Soft blue */}
              <stop offset="100%" stopColor="#fff6d8" /> {/* Warm yellow */}
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#sky)" />

          {/* Sun */}
          <circle cx="1200" cy="200" r="80" fill="#ffe9a7" opacity="0.6" />

          {/* Sky Clouds */}
          <g opacity="0.3">
            <ellipse cx="300" cy="120" rx="100" ry="30" fill="white" />
            <ellipse cx="400" cy="140" rx="80" ry="25" fill="white" />
            <ellipse cx="700" cy="110" rx="120" ry="35" fill="white" />
            <ellipse cx="1000" cy="160" rx="90" ry="28" fill="white" />
          </g>

          {/* Decorative Dunes Layer */}
          <path
            d="M0 600 C 400 520, 900 720, 1440 620 L1440 1024 L0 1024 Z"
            fill="#f9e0ae"
          />
          <path
            d="M0 700 C 500 650, 900 800, 1440 740 L1440 1024 L0 1024 Z"
            fill="#fff0c4"
            fillOpacity="0.8"
          />
          <path
            d="M0 800 C 600 780, 1000 880, 1440 860 L1440 1024 L0 1024 Z"
            fill="#fce9b4"
            fillOpacity="0.6"
          />

          {/* Accent Road Dash */}
          <path
            d="M0 900 C 300 880, 1100 950, 1440 920"
            stroke="#e8d3a0"
            strokeWidth="4"
            fill="none"
            strokeDasharray="15,10"
            opacity="0.5"
          />
        </svg>
      </div>


      {/* Content */}
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
    </div>
  );
};

export default App;
