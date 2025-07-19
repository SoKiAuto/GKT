// src/pages/Home.jsx (or wherever your Home page is)

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';
import ServicesGrid from '../components/ServicesGrid/ServicesGrid';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Testimonial from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer';

// Dynamically import images using Vite import.meta.glob
const importImages = () => {
  const modules = import.meta.glob('../assets/Photos/*.jpg', { eager: true });
  return Object.values(modules).map((mod) => ({ src: mod.default }));
};

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(importImages());
  }, []);

  return (
   <main
  className="relative min-h-screen font-sans text-stone-800 pt-0 bg-[url('/src/assets/Background.png')] bg-[length:400px_400px] bg-repeat bg-fixed"
>
  <div className="absolute inset-0 backdrop-brightness-95 backdrop-contrast-125"></div>
 {/* Hero Section with scrolling images */}
      {images.length > 0 && <HeroCarousel images={images} />}

      {/* Services */}
      <ServicesGrid />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonial */}
      <Testimonial />

    </main>
  );
};

export default Home;
