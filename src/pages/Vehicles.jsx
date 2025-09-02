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
      const filtered = vehicles.filter((v) => v.category === activeFilter);
      setFilteredVehicles(filtered);
    }
  }, [activeFilter, vehicles]);

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

  const filterOptions = [
    'All Vehicles',
    'Cab Service',
    'Car Rental',
    'Wedding Car Rental',
    'Bus Section',
    'Tempo Traveller',
  ];

  return (
    <main className="min-h-screen w-full px-3 sm:px-6 md:px-10 lg:px-20 py-12 md:py-20 text-gray-900 bg-transparent">
      <section className="max-w-[1400px] mx-auto">
        {/* Page Heading */}
        <h1 
  className="py-8 sm:py-12 md:py-14 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center leading-tight
  bg-gradient-to-r from-amber-500 to-orange-500 text-transparent bg-clip-text drop-shadow-md">
  Comfortable  Vehicle Rentals for Every Journey
</h1>

        {/* Featured Vehicles Carousel */}
        {activeFilter === 'All Vehicles' && (
          <div className="mb-16 sm:mb-20 px-1 sm:px-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left text-gray-800 mb-6 sm:mb-8">
              Featured Vehicles & Rental Options
            </h2>
            <Slider {...sliderSettings} className="vehicle-slider">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="p-2 sm:p-3">
                  <VehicleCard vehicle={vehicle} showDetailsToggle={false} />
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 md:mb-20 px-1 sm:px-2">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold tracking-wide transition-all duration-300 ease-out transform focus:outline-none ${
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

        {/* Vehicle Grid View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle) => (
              <div key={vehicle.id}>
                <VehicleCard vehicle={vehicle} showDetailsToggle={true} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-lg sm:text-xl text-gray-500 py-8">
              No vehicles available in this category.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Vehicles;
