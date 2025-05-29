import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FiMap, FiStar, FiHeart } from 'react-icons/fi';
import kutchAttractions from '../data/kutchAttractions';
import greatRannOfKutch from '../assets/KUTCH.jpg';
import RannOfKutch from '../assets/great-rann-of-kutch.jpg';
import tempoVehicle from '../assets/vehicles/tempo-12.jpg';


const Home = () => {
  const [attractions] = useState(kutchAttractions);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    setAnimateHero(true);
  }, []);

  return (
    <main className="bg-gradient-to-br from-orange-100 to-yellow-50 min-h-screen font-sans text-stone-800 pt-28">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 flex flex-col-reverse md:flex-row items-center gap-12 relative overflow-hidden">
        <div className={`flex-1 text-center md:text-left transition-opacity duration-1000 ease-in-out ${animateHero ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="text-sm uppercase text-amber-600 tracking-widest mb-3 font-mono drop-shadow-sm">
            Welcome to Kutch
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent mb-6 leading-tight drop-shadow-sm animate-text-flicker">
            Discover Kutch, Gujarat
          </h1>
          <p className="text-orange-700 mb-10 text-lg max-w-md mx-auto md:mx-0 tracking-wide">
            Explore the best of Kutch’s desert landscapes, cultural richness, and timeless beauty.
          </p>
          <Button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-8 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-amber-300/50">
            <Link to="/tours">Explore Attractions</Link>
          </Button>
        </div>
        <div className="flex-1 relative rounded-3xl shadow-amber-200 overflow-hidden max-w-md mx-auto md:mx-0 ring-2 ring-amber-300">
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/70 pointer-events-none rounded-3xl" />
          <img
            src={greatRannOfKutch}
            alt="Great Rann of Kutch"
            className="rounded-3xl object-cover w-full h-96 transition-transform duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* Attractions Section */}
     <section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-extrabold text-center mb-14 text-orange-600">
    Our Services
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

    {/* Tour Packages Card */}
    <Link
      to="/tours"
      className="block bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-orange-300 overflow-hidden transform transition duration-400 hover:shadow-orange-300 hover:scale-[1.05]"
    >
      <img
        src={RannOfKutch}
        alt="Tour Packages"
        className="w-full h-48 object-cover rounded-t-3xl"
      />
      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-extrabold text-orange-600">Tour Packages</h3>
        <p className="text-stone-700">
          Explore curated tours across Kutch’s desert landscapes, cultural sites, and more.
        </p>
        <button className="mt-6 bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full">
          Explore Tours
        </button>
      </div>
    </Link>

    {/* Vehicle Rentals Card */}
    <Link
      to="/vehicles"
      className="block bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-orange-300 overflow-hidden transform transition duration-400 hover:shadow-orange-300 hover:scale-[1.05]"
    >
      <img
        src={tempoVehicle}
        alt="Vehicle Rentals"
        className="w-full h-48 object-cover rounded-t-3xl"
      />
      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-extrabold text-orange-600">Vehicle Rentals</h3>
        <p className="text-stone-700">
          Rent comfortable and reliable vehicles to explore Kutch at your own pace.
        </p>
        <button className="mt-6 bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full">
          Rent Vehicles
        </button>
      </div>
    </Link>

  </div>
</section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-orange-100 rounded-3xl border border-amber-300 shadow-md">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent mb-16 text-center tracking-tight drop-shadow-md animate-text-flicker">
          Why Choose TravelEase?
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-12 text-stone-700">
          {[{
            icon: <FiMap className="text-orange-500 text-7xl mb-6" />,
            title: 'Diverse Destinations',
            desc: 'From deserts to salt plains, find unique experiences.'
          }, {
            icon: <FiStar className="text-yellow-500 text-7xl mb-6" />,
            title: 'Top Rated Services',
            desc: 'Friendly booking, great support, and happy travelers.'
          }, {
            icon: <FiHeart className="text-rose-400 text-7xl mb-6" />,
            title: 'Trusted & Loved',
            desc: 'Thousands of glowing testimonials from explorers.'
          }].map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center max-w-xs text-center space-y-3 p-6 rounded-3xl bg-white/80 shadow-sm hover:shadow-amber-200 transition-shadow duration-300">
              {icon}
              <h3 className="text-2xl font-extrabold text-orange-700">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-md p-12 text-center italic text-stone-700 relative border border-amber-300">
          <svg
            className="w-16 h-16 text-orange-300 absolute top-6 left-1/2 -translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M7.17 6.25C5.95 6.25 5 7.22 5 8.5v4a2.5 2.5 0 005 0v-4c0-1.28-.95-2.25-2.33-2.25zm8 0c-1.22 0-2.17.97-2.17 2.25v4a2.5 2.5 0 005 0v-4c0-1.28-.95-2.25-2.33-2.25z" />
          </svg>
          <p className="text-lg max-w-xl mx-auto mb-6">
            "TravelEase made booking our desert adventure smooth and unforgettable. Highly recommend!"
          </p>
          <p className="font-semibold text-amber-700">— Gurukrupa Travels</p>
        </div>
      </section>

      {/* Custom CSS for flicker animation */}
      <style>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
          }
          20%, 22%, 24%, 55% {
            opacity: 0.7;
          }
        }
        .animate-text-flicker {
          animation: flicker 3.5s infinite;
        }
      `}</style>
    </main>
  );
};

export default Home;
