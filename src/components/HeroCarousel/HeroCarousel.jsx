import React, { useState, useEffect, useRef } from 'react';
import '@fontsource/playfair-display';
import '@fontsource/great-vibes';


import img1 from '../../assets/Photos/7.jpg';
import img2 from '../../assets/Photos/2.jpg';
import img3 from '../../assets/Photos/3.jpg';
import img4 from '../../assets/Photos/4.jpg';
import img5 from '../../assets/Photos/5.jpg';
import img6 from '../../assets/Photos/6.jpg';
import img7 from '../../assets/Photos/1.jpg';
import img8 from '../../assets/Photos/8.jpg';
import img9 from '../../assets/Photos/9.jpg';
import img10 from '../../assets/Photos/10.jpg';
import img11 from '../../assets/Photos/11.jpg';
import img12 from '../../assets/Photos/12.jpg';

const images = [
  { src: img1, title: 'Welcome to the Kutch', desc: 'Where the white desert meets tradition.' },
  { src: img2, title: 'Colors of Kutch', desc: 'A land woven with culture and craft.' },
  { src: img3, title: 'Heritage in Every Grain', desc: 'Timeless stories told by the sand.' },
  { src: img4, title: 'Echoes of Tradition', desc: 'Experience culture beyond imagination.' },
  { src: img5, title: 'Mystic Kutch', desc: 'Where history dances on the salt plains.' },
  { src: img6, title: 'Desert Symphony', desc: 'Nature’s canvas in every direction.' },
  { src: img7, title: 'Art of the Land', desc: 'Handcrafted wonders await your eyes.' },
  { src: img8, title: 'Winds of Kutch', desc: 'Feel the spirit of Gujarat’s pride.' },
  { src: img9, title: 'Kutch Calling', desc: 'Explore the rhythm of tradition and travel.' },
  { src: img10, title: 'Beyond the Horizon', desc: 'Every sunset tells a different tale.' },
  { src: img11, title: 'Salt & Soul', desc: 'Witness the grandeur of the Rann.' },
  { src: img12, title: 'Journey into Kutch', desc: 'Uncover the vibrant soul of the desert.' },
];


const HeroCarousel = () => {
  // State to keep track of the current active slide index
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  // Ref to store the autoplay interval ID
  const autoplayIntervalRef = useRef(null);
  // State to manage a subtle background parallax effect based on mouse movement
  const [backgroundOffset, setBackgroundOffset] = useState({ x: 0, y: 0 });

  // Function to move to the next slide in the carousel
  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous slide in the carousel
  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Function to navigate to a specific slide by its index
  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  // Effect hook for handling autoplay functionality
  useEffect(() => {
    // Clear any existing interval to prevent multiple intervals from running simultaneously
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    // Set up a new interval for autoplay, advancing slides every 5 seconds (5000 ms)
    autoplayIntervalRef.current = setInterval(goToNextSlide, 5000);

    // Cleanup function: This runs when the component unmounts or before the effect re-runs
    // It clears the interval to prevent memory leaks
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [currentSlideIndex]); // Dependency array: Effect re-runs when currentSlideIndex changes to reset the autoplay timer

  // Effect hook for handling the subtle background parallax effect based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate horizontal offset: mouseX relative to screen width, centered, scaled by 20px max
      const xOffset = (e.clientX / window.innerWidth - 0.5) * 20;
      // Calculate vertical offset: mouseY relative to screen height, centered, scaled by 20px max
      const yOffset = (e.clientY / window.innerHeight - 0.5) * 20;
      setBackgroundOffset({ x: xOffset, y: yOffset });
    };

    // Add event listener for mouse movement across the window
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array: Effect runs only once after initial render

  return (
    // Main container for the carousel. It takes full viewport width and height,
    // applies a dark gradient background, sets the font to 'Inter', and hides overflow.
    <div className="relative w-screen h-screen bg-gradient-to-br from-gray-900 to-black font-inter overflow-hidden">
      {/* Background image element for a subtle parallax effect.
          It covers the entire container and transitions smoothly. */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `url(${images[currentSlideIndex].src})`, // Dynamically set background image
          backgroundSize: 'cover', // Ensures image covers the entire element
          backgroundPosition: 'center', // Centers the background image
          transform: `translate(${backgroundOffset.x}px, ${backgroundOffset.y}px) scale(1.05)`, // Apply parallax and slight zoom
          filter: 'brightness(0.4) saturate(1.2)', // Darken and slightly enhance colors for better text contrast
        }}
      ></div>

      {/* Slide content container. Positioned relatively to allow absolute children.
          It acts as a flex container to center its main content. */}
      <div className="relative w-full h-full flex items-center justify-center z-10">
        {/* Map over the images array to create individual slides */}
        {images.map((slide, index) => (
          <div
            key={index} // Unique key for each slide
            // Apply absolute positioning, transition for opacity, and control visibility
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentSlideIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            {/* Gradient overlay to ensure text readability over varying image brightness */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>

            {/* Content for the current slide (title and description) */}
            <div className="absolute bottom-20 left-10 md:left-20 lg:left-32 p-6 max-w-lg text-white">
              {/* Title with responsive font sizes, glowing effect, and animated slide-up entrance */}
              <h1
                    className={`text-7xl md:text-8xl font-bold mb-6
                      transition-transform duration-700 ease-out
                      ${index === currentSlideIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: '200ms', fontFamily: 'Playfair Display, serif' }}
                  >
                    {slide.title}
                  </h1>

                  <p
                    className={`text-4xl md:text-5xl text-orange-300 font-light
                      transition-transform duration-700 ease-out
                      ${index === currentSlideIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: '350ms', fontFamily: 'Great Vibes, cursive' }}
                  >
                    {slide.desc}
                  </p>



            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        {/* Previous Button: positioned on the left, responsive padding/left, styled for interaction */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 md:left-10 z-20 p-3 bg-white/10 text-white rounded-full
                     shadow-lg hover:bg-white/20 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
          aria-label="Previous slide"
        >
          {/* SVG icon for previous arrow (rotated right arrow) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transform rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Next Button: positioned on the right, responsive padding/right, styled for interaction */}
        <button
          onClick={goToNextSlide}
          className="absolute right-4 md:right-10 z-20 p-3 bg-white/10 text-white rounded-full
                     shadow-lg hover:bg-white/20 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
          aria-label="Next slide"
        >
          {/* SVG icon for next arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination Dots: centrally positioned at the bottom, responsive spacing */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, index) => (
            <button
              key={index} // Unique key for each dot
              onClick={() => goToSlide(index)} // Navigate to corresponding slide on click
              // Style based on active state: purple/scaled if active, white/transparent if not, with hover effects
              className={`block w-3 h-3 rounded-full transition-all duration-300
                ${index === currentSlideIndex ? 'bg-purple-500 scale-125 ring-2 ring-purple-500 ring-opacity-75' : 'bg-white/40 hover:bg-white/70'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Scroll Down Indicator: positioned at the bottom center, with text and an animated arrow */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white z-20 flex flex-col items-center animate-bounce-subtle">
          <p className="text-sm font-light mb-2 opacity-70">Scroll for More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-purple-400 drop-shadow-[0_0_5px_rgba(128,0,128,0.7)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Global styles for font and custom animations.
          These are embedded within the component for self-containment in this environment. */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

        /* Keyframes for a subtle fade-in-up animation, used for text elements */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Applying the fade-in-up animation class */
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        /* Keyframes for a subtle vertical bounce animation for the scroll indicator */
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px); /* Defines the peak of the bounce */
          }
        }

        /* Applying the subtle bounce animation class */
        .animate-bounce-subtle {
          animation: bounce-subtle 1.5s infinite ease-in-out;
        }

        /* Basic Tailwind CSS setup for the preview environment to remove default body margin */
        body { margin: 0; }
      `}</style>
      {/* Tailwind CSS CDN: This script must be included for Tailwind classes to work. */}
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
};

export default HeroCarousel;
