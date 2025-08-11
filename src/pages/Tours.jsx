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
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, arrows: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, dots: false, arrows: false },
      },
    ],
  };

  return (
   <main className="min-h-screen w-screen px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20 text-gray-200 dark:text-gray-900 bg-transparent">
      <section className="max-w-[1400px] mx-auto">
       <h1 className="py-14 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center mb-16 md:mb-20 leading-tight 
          bg-gradient-to-br from-amber-500 via-orange-400 to-yellow-300 
          text-transparent bg-clip-text drop-shadow-lg">
          Unforgettable 
          
          <span
  className="relative inline-block px-2 py-1 mx-2 font-bangers
  bg-gradient-to-br from-gray-300 to-gray-400 bg-clip-text text-transparent 
  drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] animate-glitch-text"
  style={{
    WebkitTextStroke: '1.5px black',
    textStroke: '1.5px black', // for other browsers
  }}
>
  Adventure
</span>
          Await in 
          
         <span
  className="relative inline-block px-2 py-1 mx-2 font-bangers
  bg-gradient-to-br from-gray-300 to-gray-400 bg-clip-text text-transparent 
  drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] animate-glitch-text"
  style={{
    WebkitTextStroke: '1.5px black',
    textStroke: '1.5px black', // for other browsers
  }}
>
  Kutch
</span>

        </h1>


        {/* Carousel */}
        {activeFilter === 'All Tours' && (
          <div className="mb-20 px-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-gray-800 mb-8">
              Featured Tours & Exclusive Packages
            </h2>
            <Slider {...sliderSettings} className="tour-slider">
              {tours.map((tour) => (
                <div key={tour.id} className="p-3">
                  <TourCard tour={tour} showDetailsToggle={false} />
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14 md:mb-20 px-2">
          {['All Tours', 'Adventure', 'Family', 'Budget', 'Heritage'].map((filter) => (
            <button
              key={filter}
              className={`px-6 py-3 rounded-full text-base sm:text-lg font-semibold tracking-wide transition-all duration-300 ease-out transform focus:outline-none ${
                activeFilter === filter
                  ? 'bg-amber-500 text-white shadow-md scale-105'
                  : 'bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white hover:shadow-lg hover:scale-105'
              }`}
              onClick={() => handleFilterClick(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <div key={tour.id}>
                <TourCard tour={tour} showDetailsToggle={true} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-xl text-gray-500 py-10">
              No tours found for this category.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Tours;
