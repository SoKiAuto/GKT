import { Link } from 'react-router-dom';
import RannOfKutch from '../../assets/KUTCH.jpg';
import tempoVehicle from '../../assets/vehicles/audi-a6.jpg';
import { Plane, Car } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Tour Packages',
    desc: 'Curated experiences across Kutch’s vast landscapes and historic sites, designed for unforgettable journeys.',
    img: RannOfKutch,
    link: '/tours',
    buttonLabel: 'Explore Tours',
    icon: <Plane className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-amber-500 group-hover:text-amber-400 transition-colors duration-300" />,
  },
  {
    id: 2,
    title: 'Vehicle Rentals',
    desc: 'Comfortable and reliable vehicles for your custom journey, ensuring smooth and stylish travels.',
    img: tempoVehicle,
    link: '/vehicles',
    buttonLabel: 'View Vehicles',
    icon: <Car className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-amber-500 group-hover:text-amber-400 transition-colors duration-300" />,
  },
];

const ServicesGrid = () => {
  return (
    <section
      className="relative min-h-screen flex justify-center items-start pt-20 pb-16 px-4 sm:px-6 md:px-12 lg:px-24 text-gray-800 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-yellow-200 rounded-full opacity-30 blur-3xl animate-blob-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 sm:w-40 h-28 sm:h-40 bg-blue-200 rounded-full opacity-20 blur-3xl animate-blob-medium animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-36 sm:w-56 h-36 sm:h-56 bg-yellow-300 rounded-full opacity-25 blur-3xl animate-blob-fast animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Title & Description */}
        <div className="text-center mb-12 sm:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-amber-700 text-shadow-custom animate-pulse-more-prominent">
            Discover Our Offerings
          </h2>
          <p className="text-lg sm:text-xl mt-4 sm:mt-6 text-red-950 max-w-3xl mx-auto font-bold leading-relaxed drop-shadow-lg">
            Unveiling seamless journeys and unparalleled comfort for your exploration of Kutch.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {services.map(({ id, img, title, desc, link, buttonLabel, icon }) => (
            <Link
              key={id}
              to={link}
              className="group relative rounded-2xl overflow-hidden
                         border border-amber-100 shadow-xl hover:shadow-amber-400/50
                         transition-all duration-500 bg-white/70 backdrop-blur-xl
                         hover:scale-[1.02] transform-gpu
                         flex flex-col
                         hover:border-amber-300 hover:ring-2 hover:ring-amber-300 hover:ring-opacity-75"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-72 md:h-80 w-full overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:brightness-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <h3 className="flex items-center text-2xl sm:text-3xl font-bold text-amber-700 group-hover:text-amber-600 transition-colors duration-300 mb-3">
                  {icon}
                  {title}
                </h3>
                <p className="mt-1 sm:mt-2 text-gray-700 leading-relaxed flex-grow text-sm sm:text-base">
                  {desc}
                </p>
                <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-amber-400 to-yellow-300
                                   hover:from-amber-500 hover:to-yellow-400 text-white font-semibold
                                   rounded-full transition-all duration-300 shadow-lg hover:shadow-xl
                                   transform hover:-translate-y-1 focus:outline-none focus:ring-2
                                   focus:ring-amber-500 focus:ring-opacity-75
                                   group-hover:animate-pulse-button-amber">
                  {buttonLabel}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
