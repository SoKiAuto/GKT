// src/App.jsx
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
import BrandBackground from './components/BrandBackground';
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Delay popup to avoid blocking initial load
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans text-gray-900">
      {/* Background Layer */}
      <BrandBackground />

      {/* Fixed Navbar on top for mobile */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Booking Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <BookingPopup onClose={() => setShowPopup(false)} />
        </div>
      )}

      {/* Main Page Routes */}
      <div className="pt-[4rem] sm:pt-[4.5rem] md:pt-[5rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

       {/* ✅ Add Vercel Analytics */}
      <Analytics />

    </div>
  );
};

export default App;
