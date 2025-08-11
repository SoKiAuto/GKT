import { Link } from 'react-router-dom';
import RannOfKutch from '../../assets/KUTCH.jpg';
import tempoVehicle from '../../assets/vehicles/audi-a6.jpg';
import { Plane, Car } from 'lucide-react'; // Lucide icons for a modern touch

const services = [
  {
    id: 1,
    title: 'Tour Packages',
    desc: 'Curated experiences across Kutch’s vast landscapes and historic sites, designed for unforgettable journeys.',
    img: RannOfKutch,
    link: '/tours',
    buttonLabel: 'Explore Tours',
    icon: <Plane className="w-7 h-7 mr-3 text-amber-500 group-hover:text-amber-400 transition-colors duration-300" />,
  },
  {
    id: 2,
    title: 'Vehicle Rentals',
    desc: 'Comfortable and reliable vehicles for your custom journey, ensuring smooth and stylish travels.',
    img: tempoVehicle,
    link: '/vehicles',
    buttonLabel: 'View Vehicles',
    icon: <Car className="w-7 h-7 mr-3 text-amber-500 group-hover:text-amber-400 transition-colors duration-300" />,
  },
];

const ServicesGrid = () => {
  return (
    <section
      className="relative min-h-screen flex justify-center items-start pt-24 pb-20 px-6 md:px-12 lg:px-24 text-gray-800 overflow-hidden"
    >
      {/* Enhanced Floating Background Elements for a subtle glow (original colors) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-yellow-200 rounded-full opacity-30 blur-3xl animate-blob-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl animate-blob-medium animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-yellow-300 rounded-full opacity-25 blur-3xl animate-blob-fast animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Main Title and Description - More visually impactful with original colors */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-amber-700 text-shadow-custom animate-pulse-more-prominent">
            Discover Our Offerings
          </h2>
        <p className="text-xl mt-6 text-red-950 max-w-4xl mx-auto font-bold leading-relaxed drop-shadow-lg">
          Unveiling seamless journeys and unparalleled comfort for your exploration of Kutch.
        </p>

        </div>

        {/* Service Cards Grid - Enhanced Visuals with original colors and new effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map(({ id, img, title, desc, link, buttonLabel, icon }) => (
            <Link
              key={id}
              to={link}
              className="group relative rounded-3xl overflow-hidden
                         border border-amber-100 shadow-2xl hover:shadow-amber-400/50
                         transition-all duration-500 bg-white/60 backdrop-blur-xl
                         hover:scale-[1.03] transform-gpu
                         flex flex-col
                         hover:border-amber-300 hover:ring-2 hover:ring-amber-300 hover:ring-opacity-75" /* Added ring for glow effect */
            >
              {/* Image Section */}
              <div className="relative h-72 md:h-80 w-full overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:brightness-105" /* Added brightness on hover */
                  loading="lazy"
                />
                {/* Removed the gradient overlay div */}
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <h3 className="flex items-center text-3xl font-bold text-amber-700 group-hover:text-amber-600 transition-colors duration-300 mb-4">
                  {icon}
                  {title}
                </h3>
                <p className="mt-2 text-gray-700 leading-relaxed flex-grow">{desc}</p>
                <button className="mt-8 px-8 py-3 bg-gradient-to-r from-amber-400 to-yellow-300
                                   hover:from-amber-500 hover:to-yellow-400 text-white font-semibold
                                   rounded-full transition-all duration-300 shadow-lg hover:shadow-xl
                                   transform hover:-translate-y-1 focus:outline-none focus:ring-2
                                   focus:ring-amber-500 focus:ring-opacity-75
                                   group-hover:animate-pulse-button-amber"> {/* Custom pulse for amber button */}
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
