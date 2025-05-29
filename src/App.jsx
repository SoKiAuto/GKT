import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Vehicles from './pages/Vehicles';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import BookingPopup from './components/BookingPopup';  // Adjust path if needed

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup on first load
    setShowPopup(true);
  }, []);

  return (
    <>
      <Navbar />
      
      {showPopup && <BookingPopup onClose={() => setShowPopup(false)} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} /> 
        <Route path="/vehicles" element={<Vehicles />}/> 
        <Route path="/booking" element={<Booking />}/> 
        <Route path="/contact" element={<Contact />}/> 
      </Routes>
      
      <Footer />
    </>
  );
};

export default App;
