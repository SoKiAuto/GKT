import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import toursData from '../data/toursData'; // Make sure this data has a 'category' field
import TourCard from '../components/TourCard'; // Ensure TourCard is designed to fit modern aesthetics

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All Tours');

  useEffect(() => {
    // Simulate fetching data or just load it
    setTours(toursData);
    setFilteredTours(toursData); // Initially show all tours
  }, []);

  useEffect(() => {
    if (activeFilter === 'All Tours') {
      setFilteredTours(tours);
    } else {
      // Filter tours based on category. Ensure toursData has a 'category' field.
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
    speed: 700, // Slightly slower for smoother feel
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Auto-play for a dynamic look
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    swipeToSlide: true, // More intuitive swipe
    cssEase: 'ease-out', // Smoother transitions
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false, // Less clutter on smaller screens
        },
      },
      {
        breakpoint: 768, // Adjusted breakpoint for medium screens
        settings: {
          slidesToShow: 1,
          dots: false, // Less clutter on small screens
          arrows: false,
        },
      },
    ],
  };

  return (
     <main className="min-h-screen w-screen px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20 text-gray-200 dark:text-gray-900 transition-colors duration-500 ease-in-out bg-transparent">
        <section className="max-w-[1400px] mx-auto">
        <h1 className="py-14 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-gray-900 drop-shadow-md text-center mb-16 md:mb-20 leading-tight">
          Unforgettable <span className="text-amber-500">Adventures</span> Await in Kutch
        </h1>

        {/* Highlighted Tours Section (Carousel) - Only visible for 'All Tours' */}
        {activeFilter === 'All Tours' && (
          <div className="mb-20 relative px-2"> {/* Added padding for slider overflow */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 dark:text-gray-800 mb-8 text-center sm:text-left">
              Featured Tours & Exclusive Packages
            </h2>
            <Slider {...sliderSettings} className="tour-slider">
              {tours.map((tour) => (
                <div key={tour.id} className="p-3"> {/* Use p-3 for gap between cards */}
                  <div
                    // *** FIX: REMOVED style={{ minHeight: '380px' }} from here ***
                    className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group bg-neutral-800 dark:bg-neutral-100 border border-neutral-700 dark:border-neutral-300"
                  >
                    <TourCard tour={tour} />
                    {/* Optional: Add a subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* Filter Buttons Section */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14 md:mb-20 px-2">
          {['All Tours', 'Adventure', 'Family', 'Budget'].map((filter) => (
            <button
              key={filter}
              className={`
                px-6 py-3 rounded-full text-base sm:text-lg font-semibold tracking-wide
                transition-all duration-300 ease-out transform
                ${
                  activeFilter === filter
                    ? 'bg-amber-500 text-black shadow-md scale-105'
                    : 'bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black hover:shadow-lg hover:scale-105'
                }
              `}
              onClick={() => handleFilterClick(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Tours Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <div
                key={tour.id}
                // *** FIX: REMOVED style={{ minHeight: '480px' }} from here ***
                className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group bg-neutral-800 dark:bg-neutral-100 border border-neutral-700 dark:border-neutral-300"
                tabIndex={0}
                aria-label={`Tour: ${tour.name}`}
              >
                <TourCard tour={tour} />
                {/* Optional: Add a subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-xl text-gray-400 dark:text-gray-600 py-10">
              No tours found for this category.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Tours;
