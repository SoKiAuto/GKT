import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours'; // ✅ Import the Tours page
import Vehicles from './pages/Vehicles';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} /> 
          <Route path="/Vehicles" element={<Vehicles />}/> 
          <Route path="/Booking" element={<Booking />}/> 
          <Route path="/Contact" element={<Contact />}/> 
        </Routes>
      <Footer />
    </>
  );
};

export default App;
