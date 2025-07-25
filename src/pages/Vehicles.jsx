import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import vehiclesData from '../data/vehiclesData';
import VehicleCard from '../components/VehicleCard';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All Vehicles');

  useEffect(() => {
    setVehicles(vehiclesData);
    setFilteredVehicles(vehiclesData);
  }, []);

  useEffect(() => {
    if (activeFilter === 'All Vehicles') {
      setFilteredVehicles(vehicles);
    } else {
      setFilteredVehicles(vehicles.filter(v => v.category === activeFilter));
    }
  }, [activeFilter, vehicles]);

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
      { breakpoint: 1024, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, dots: false, arrows: false } },
    ],
  };

  // Use exact categories from vehiclesData
  const filterOptions = [
    'All Vehicles',
    'Cab Service',
    'Car Rental',
    'Wedding Car Rental',
    'Bus Section',
    'Tempo Traveller',
  ];

  return (
    <main className="min-h-screen w-screen px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20 text-gray-900 bg-transparent">
      <section className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <h1 className="py-14 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center mb-16 md:mb-20 leading-tight 
          bg-gradient-to-br from-amber-500 via-orange-400 to-yellow-300 
          text-transparent bg-clip-text drop-shadow-lg">
          Comfortable <span className="text-white drop-shadow-md">Vehicle Rentals</span> for Every Journey
        </h1>

      {/* Carousel for All Vehicles */}
        {activeFilter === 'All Vehicles' && (
          <div className="mb-20 px-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-gray-800 mb-8">
              Featured Vehicles & Rental Options
            </h2>
            <Slider {...sliderSettings} className="vehicle-slider">
              {vehicles.map((v) => (
                <div key={v.id} className="p-3">
                  <VehicleCard vehicle={v} showDetailsToggle={false} />
                </div>
              ))}
            </Slider>
          </div>
        )}


        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14 md:mb-20 px-2">
          {filterOptions.map(filter => (
            <button
              key={filter}
              className={`px-6 py-3 rounded-full text-base sm:text-lg font-semibold tracking-wide transition-all duration-300 ease-out transform focus:outline-none ${
                activeFilter === filter
                  ? 'bg-amber-500 text-white shadow-md scale-105'
                  : 'bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white hover:shadow-lg hover:scale-105'
              }`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map(v => (
              <div
                key={v.id}
                className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group bg-white border border-gray-200"
                tabIndex={0}
                aria-label={`Vehicle: ${v.type}`}
              >
                <VehicleCard vehicle={v} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-xl text-gray-500 py-10">
              No vehicles available in this category.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Vehicles;
