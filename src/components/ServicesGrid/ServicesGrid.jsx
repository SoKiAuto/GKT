import { Link } from 'react-router-dom';
import RannOfKutch from '../../assets/great-rann-of-kutch.jpg';
import tempoVehicle from '../../assets/vehicles/tempo-12.jpg';

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
    <section className="min-h-screen w-full px-4 sm:px-6 py-20 md:py-28 bg-neutral-950 text-gray-200 dark:bg-white dark:text-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-gray-900 drop-shadow-sm">
            Explore Our Services
          </h2>
          <p className="text-gray-400 dark:text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Designed with precision and simplicity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map(({ id, img, title, desc, link, buttonLabel }) => (
            <Link
              key={id}
              to={link}
              className="group relative block overflow-hidden rounded-2xl border border-neutral-700 dark:border-gray-200 bg-neutral-600 dark:bg-gray-300 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300"

            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-90 dark:brightness-95 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black/30 via-transparent to-transparent group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-white dark:text-gray-900 group-hover:text-amber-600 transition-colors">
                  {title}
                </h3>
                <p className="mt-2 text-gray-400 dark:text-gray-600">{desc}</p>
                <button className="mt-6 inline-block px-6 py-2 bg-amber-500 text-black text-sm font-medium rounded-full hover:bg-amber-600 transition-colors duration-300">
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
