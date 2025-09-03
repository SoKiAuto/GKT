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
    icon: <Plane className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-accent group-hover:text-accent/80 transition-colors duration-300" />,
  },
  {
    id: 2,
    title: 'Vehicle Rentals',
    desc: 'Comfortable and reliable vehicles for your custom journey, ensuring smooth and stylish travels.',
    img: tempoVehicle,
    link: '/vehicles',
    buttonLabel: 'View Vehicles',
    icon: <Car className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-accent group-hover:text-accent/80 transition-colors duration-300" />,
  },
];

const ServicesGrid = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-start pt-20 pb-16 px-4 sm:px-6 md:px-12 lg:px-24 text-primary overflow-hidden bg-light">
      
      {/* Animated Background Blobs (now themed) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-accent/20 rounded-full blur-3xl animate-blob-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 sm:w-40 h-28 sm:h-40 bg-primary/20 rounded-full blur-3xl animate-blob-medium animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-36 sm:w-56 h-36 sm:h-56 bg-accent/30 rounded-full blur-3xl animate-blob-fast animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-accent drop-shadow-lg">
            Discover Our Offerings
          </h2>
          <p className="text-lg sm:text-xl mt-4 sm:mt-6 text-primary max-w-3xl mx-auto font-bold leading-relaxed">
            Unveiling seamless journeys and unparalleled comfort for your exploration of Kutch.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {services.map(({ id, img, title, desc, link, buttonLabel, icon }) => (
            <Link
              key={id}
              to={link}
              className="group relative rounded-2xl overflow-hidden
                         border border-primary/10 shadow-lg hover:shadow-accent/40
                         transition-all duration-500 bg-light/90 backdrop-blur-xl
                         hover:scale-[1.02] transform-gpu
                         flex flex-col
                         hover:border-accent/50 hover:ring-2 hover:ring-accent/50"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-72 md:h-80 w-full overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:brightness-105"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <h3 className="flex items-center text-2xl sm:text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-3">
                  {icon}
                  {title}
                </h3>
                <p className="mt-1 sm:mt-2 text-primary/90 leading-relaxed flex-grow text-sm sm:text-base">
                  {desc}
                </p>
                <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 bg-accent hover:bg-accent/90
                                   text-white font-semibold rounded-full transition-all duration-300
                                   shadow-md hover:shadow-lg transform hover:-translate-y-1
                                   focus:outline-none focus:ring-2 focus:ring-accent/70 focus:ring-opacity-75">
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
