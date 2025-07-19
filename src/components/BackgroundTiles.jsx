import bg from '/src/assets/Background_Dark.png';
import { useState, useEffect } from 'react';

const BackgroundTiles = () => {
  const rows = 2;
  const cols = 3;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initialRotationDegrees = 5;
  const parallaxStrengthX = 0.05;
  const parallaxStrengthY = 0.07;
  const tileRotationStrength = 0.02;

  const tiles = Array.from({ length: rows * cols }).map((_, i) => {
    const translateY = scrollY * (i % 2 === 0 ? parallaxStrengthY : -parallaxStrengthY * 0.75);
    const translateX = scrollY * (i % 3 === 0 ? parallaxStrengthX : -parallaxStrengthX * 0.5);
    const rotateZ = scrollY * (i % 4 === 0 ? tileRotationStrength : -tileRotationStrength * 0.5);

    return (
      <div
        key={i}
        className="bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url(${bg})`,
          transform: `translate3d(${translateX}px, ${translateY}px, 0) rotateZ(${rotateZ}deg)`,
          transition: 'none',
          opacity: 0.6,
        }}
      ></div>
    );
  });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden"> {/* Changed parent div to contain gradient */}
      {/* Dynamic Gradient Overlay */}
      <div
        className="absolute inset-0 z-10" // Make sure it's above the grid, but still below z-index of content
        style={{
          backgroundImage: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)`,
          backgroundSize: '200% 200%', // Make the gradient larger than the screen
          animation: 'light-sweep 30s infinite alternate ease-in-out', // Apply animation
          pointerEvents: 'none', // Important: Make it unclickable so it doesn't block content
        }}
      ></div>

      {/* Your existing grid container */}
      <div
        className="absolute z-0 grid" // Changed from fixed to absolute, relative to parent
        style={{
          width: '120vw',
          height: '120vh',
          left: '-10vw',
          top: '-10vh',
          transform: `rotateZ(${initialRotationDegrees}deg)`,
          transformOrigin: 'center center',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {tiles}
      </div>
    </div>
  );
};

export default BackgroundTiles;