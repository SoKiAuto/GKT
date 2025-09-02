// src/pages/Tours.jsx
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import toursData from '../data/toursData';
import TourCard from '../components/TourCard';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All Tours');

  useEffect(() => {
    setTours(toursData);
    setFilteredTours(toursData);
  }, []);

  useEffect(() => {
    if (activeFilter === 'All Tours') {
      setFilteredTours(tours);
    } else {
      const filtered = tours.filter((tour) => tour.category === activeFilter);
      setFilteredTours(filtered);
    }
  }, [activeFilter, tours]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    swipeToSlide: true,
    cssEase: 'ease-out',
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, dots: true, arrows: false } },
    ],
  };

  return (
    <main className="min-h-screen w-screen px-3 sm:px-5 md:px-10 lg:px-20 py-10 sm:py-14 md:py-20 bg-bg text-text">
      <section className="max-w-[1400px] mx-auto">
        
        {/* Heading */}
        <h1 
          className="py-8 sm:py-12 md:py-14 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center leading-tight
          bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text drop-shadow-md"
        >
          Unforgettable Adventure Awaits in Kutch
        </h1>

        {/* Carousel */}
        {activeFilter === 'All Tours' && (
          <div className="mb-12 sm:mb-16 lg:mb-20 px-1 sm:px-2">
            <h2 className="text-xl sm:text-3xl font-bold text-center sm:text-left text-primary mb-6 sm:mb-8">
              Featured Tours & Exclusive Packages
            </h2>
            <Slider {...sliderSettings} className="tour-slider">
              {tours.map((tour) => (
                <div key={tour.id} className="p-2 sm:p-3">
                  <TourCard tour={tour} showDetailsToggle={false} />
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-14 md:mb-20 px-2">
          {['All Tours', 'Adventure', 'Family', 'Budget', 'Heritage'].map((filter) => (
            <button
              key={filter}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold tracking-wide transition-all duration-300 ease-out transform focus:outline-none ${
                activeFilter === filter
                  ? 'bg-accent text-white shadow-md scale-105'
                  : 'bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white hover:shadow-lg hover:scale-105'
              }`}
              onClick={() => handleFilterClick(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <div key={tour.id}>
                <TourCard tour={tour} showDetailsToggle={true} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-base sm:text-xl text-text-secondary py-6 sm:py-10">
              No tours found for this category.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Tours;
