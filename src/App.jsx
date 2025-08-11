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



const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans text-gray-900">
        <BrandBackground />
      
      {/* Content Layer */}
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
