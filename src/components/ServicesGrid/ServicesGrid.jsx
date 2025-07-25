import { Link } from 'react-router-dom';
import RannOfKutch from '../../assets/KUTCH.jpg';
import tempoVehicle from '../../assets/vehicles/audi-a6.jpg';
import { Plane, Car } from 'lucide-react'; // Optional: Lucide icons

const services = [
  {
    id: 1,
    title: 'Tour Packages',
    desc: 'Curated experiences across Kutch’s vast landscapes and historic sites.',
    img: RannOfKutch,
    link: '/tours',
    buttonLabel: 'Explore',
    icon: <Plane className="w-6 h-6 mr-2 text-amber-500" />,
  },
  {
    id: 2,
    title: 'Vehicle Rentals',
    desc: 'Comfortable and reliable vehicles for your custom journey.',
    img: tempoVehicle,
    link: '/vehicles',
    buttonLabel: 'View Options',
    icon: <Car className="w-6 h-6 mr-2 text-amber-500" />,
  },
];

const ServicesGrid = () => {
  return (
    <section
      className="relative min-h-screen flex justify-center items-start pt-24 pb-20 px-6 md:px-12 lg:px-24 text-gray-800"
      style={{
        background: 'linear-gradient(to bottom, #fefae0, #d0f0f8)',
      }}
    >
      {/* Optional Floating Icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-16 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-amber-700 drop-shadow-lg">
            Explore Our Services
          </h2>
          <p className="text-lg mt-4 text-gray-600 max-w-xl mx-auto">
            Designed to give you the best of Kutch in comfort and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map(({ id, img, title, desc, link, buttonLabel, icon }) => (
            <Link
              key={id}
              to={link}
              className="group relative rounded-3xl overflow-hidden border border-amber-100 shadow-2xl hover:shadow-amber-400/50 transition-all duration-500 bg-white/60 backdrop-blur-xl hover:scale-[1.02]"
            >
              <div className="relative h-72 md:h-80 w-full overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="flex items-center text-2xl font-semibold text-amber-700 group-hover:text-amber-600 transition-colors">
                  {icon}
                  {title}
                </h3>
                <p className="mt-3 text-gray-700">{desc}</p>
                <button className="mt-6 px-6 py-2 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-500 hover:to-yellow-400 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
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
