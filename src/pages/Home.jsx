import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FiMap, FiStar, FiHeart } from 'react-icons/fi';
import kutchAttractions from '../data/kutchAttractions';
import greatRannOfKutch from '../assets/KUTCH.jpg';

const Home = () => {
  const [attractions] = useState(kutchAttractions);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    setAnimateHero(true);
  }, []);

  return (
    <main className="bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen font-sans text-pink-900  pt-28">
      {/* Hero Section */}
      <section
        className="max-w-7xl mx-auto px-6 py-32 flex flex-col-reverse md:flex-row items-center gap-12 relative overflow-hidden"
      >
        <div className={`flex-1 text-center md:text-left transition-opacity duration-1000 ease-in-out ${animateHero ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10' }`}>
          <h2 className="text-sm uppercase text-pink-400 tracking-widest mb-3 font-mono drop-shadow-md">
            Welcome to Kutch
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent mb-6 leading-tight drop-shadow-lg animate-text-flicker">
            Discover Kutch, Gujarat
          </h1>
          <p className="text-pink-700 mb-10 text-lg max-w-md mx-auto md:mx-0 tracking-wide">
            Explore the best of Kutch’s famous attractions and rich culture.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-pink-400/50">
            <Link to="/tours">Explore Attractions</Link>
          </Button>
        </div>
        <div className="flex-1 relative rounded-3xl shadow-pink-400/50 overflow-hidden max-w-md mx-auto md:mx-0 ring-2 ring-pink-400">
          {/* Soft glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/70 pointer-events-none rounded-3xl" />
          <img
            src={greatRannOfKutch}
            alt="Great Rann of Kutch"
            className="rounded-3xl object-cover w-full h-96 transition-transform duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* Attractions Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent mb-14 text-center tracking-tight drop-shadow-lg animate-text-flicker">
          Famous Attractions of Kutch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {attractions.map((place) => (
            <div
              key={place.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden transform transition duration-400 hover:shadow-pink-300 hover:scale-[1.05] border border-pink-300"
            >
              <div className="relative">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-56 object-cover brightness-95 hover:brightness-110 transition duration-500"
                />
                {place.bestTime && (
                  <span className="absolute top-4 right-4 bg-pink-400 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                    Best: {place.bestTime}
                  </span>
                )}
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-extrabold text-pink-600">{place.title}</h3>
                <p className="text-pink-700 text-sm leading-relaxed">{place.overview}</p>
                {place.highlights && (
                  <p className="text-pink-700 text-sm">
                    <strong className="text-pink-600">Highlights:</strong> {place.highlights}
                  </p>
                )}
                {place.activities && (
                  <p className="text-pink-700 text-sm">
                    <strong className="text-pink-600">Activities:</strong> {place.activities}
                  </p>
                )}
                {place.significance && (
                  <p className="text-pink-700 text-sm">
                    <strong className="text-pink-600">Significance:</strong> {place.significance}
                  </p>
                )}
                <button className="mt-4 text-pink-600 font-semibold hover:underline hover:text-pink-500 transition-colors">
                  Read More &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-pink-50 rounded-3xl border border-pink-300 shadow-md">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent mb-16 text-center tracking-tight drop-shadow-md animate-text-flicker">
          Why Choose TravelEase?
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-12 text-pink-700">
          {[{
            icon: <FiMap className="text-pink-500 text-7xl mb-6" />,
            title: 'Diverse Destinations',
            desc: 'From mountains to beaches, find tours for every taste.'
          },{
            icon: <FiStar className="text-pink-500 text-7xl mb-6" />,
            title: 'Top Rated Services',
            desc: 'Highly rated tours and customer-friendly booking experience.'
          },{
            icon: <FiHeart className="text-pink-500 text-7xl mb-6" />,
            title: 'Trusted & Loved',
            desc: 'Thousands of happy travelers and glowing testimonials.'
          }].map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center max-w-xs text-center space-y-3 p-6 rounded-3xl bg-white shadow-md hover:shadow-pink-300 transition-shadow duration-300">
              {icon}
              <h3 className="text-2xl font-extrabold text-pink-600">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-md p-12 text-center italic text-pink-700 relative border border-pink-300">
          <svg
            className="w-16 h-16 text-pink-400 absolute top-6 left-1/2 -translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M7.17 6.25C5.95 6.25 5 7.22 5 8.5v4a2.5 2.5 0 005 0v-4c0-1.28-.95-2.25-2.33-2.25zm8 0c-1.22 0-2.17.97-2.17 2.25v4a2.5 2.5 0 005 0v-4c0-1.28-.95-2.25-2.33-2.25z" />
          </svg>
          <p className="text-lg max-w-xl mx-auto mb-6">
            "TravelEase made booking our vacation so easy and stress-free. Highly recommend!"
          </p>
          <p className="font-semibold text-pink-600">— Gurukrupa Travels</p>
        </div>
      </section>

      {/* Custom CSS for flicker animation */}
      <style>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
          }
          20%, 22%, 24%, 55% {
            opacity: 0.6;
          }
        }
        .animate-text-flicker {
          animation: flicker 3s infinite;
        }
      `}</style>
    </main>
  );
};

export default Home;
