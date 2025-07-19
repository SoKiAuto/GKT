import { Link } from 'react-router-dom';
import RannOfKutch from '../../assets/kalo-dungar.jpg';
import tempoVehicle from '../../assets/vehicles/audi-a6.jpg';

const services = [
  {
    id: 1,
    title: 'Tour Packages',
    desc: 'Curated experiences across Kutch’s vast landscapes and historic sites.',
    img: RannOfKutch,
    link: '/tours',
    buttonLabel: 'Explore',
  },
  {
    id: 2,
    title: 'Vehicle Rentals',
    desc: 'Comfortable and reliable vehicles for your custom journey.',
    img: tempoVehicle,
    link: '/vehicles',
    buttonLabel: 'View Options',
  },
];

const ServicesGrid = () => {
  return (
    <section className="min-h-screen flex justify-center items-start pt-24 pb-20 px-6 md:px-12 lg:px-24 bg-transparent text-white">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-xl">
            Explore Our Services
          </h2>
          <p className="text-lg mt-4 text-gray-300 max-w-xl mx-auto">
            Designed to give you the best of Kutch in comfort and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map(({ id, img, title, desc, link, buttonLabel }) => (
            <Link
              key={id}
              to={link}
              className="group relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 shadow-2xl hover:shadow-amber-500/30 transition-all duration-500"
            >
              <div className="relative h-72 md:h-80 w-full overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {title}
                </h3>
                <p className="mt-3 text-gray-300">{desc}</p>
                <button className="mt-6 px-5 py-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-colors duration-300 shadow-md">
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
