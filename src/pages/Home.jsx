// src/pages/Home.jsx

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
      className="
        relative min-h-screen font-sans text-stone-800
        pt-0
        bg-[url('/src/assets/Background.png')]
        bg-repeat bg-fixed
        bg-[length:300px_300px] sm:bg-[length:400px_400px]
        px-2 sm:px-4 md:px-2 
      "
    >
      {/* Hero Section with scrolling images */}
      {images.length > 0 && (
        <section className="mb-8 sm:mb-12 md:mb-16  ">
          <HeroCarousel images={images} />
        </section>
      )}

      {/* Services */}
      <section className="mb-8 sm:mb-12 md:mb-16">
        <ServicesGrid />
      </section>

      {/* Why Choose Us */}
      <section className="mb-8 sm:mb-12 md:mb-16">
        <WhyChooseUs />
      </section>

      {/* Testimonial */}
      <section className="mb-8 sm:mb-12 md:mb-16">
        <Testimonial />
      </section>
    </main>
  );
};

export default Home;
