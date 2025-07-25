// src/components/WhyChooseUs/WhyChooseUs.jsx
import { FiMap, FiStar, FiHeart } from 'react-icons/fi';

const reasons = [
  {
    icon: <FiMap className="text-orange-400 text-4xl md:text-5xl" />,
    title: 'Diverse Destinations',
    desc: 'From deserts to salt plains, experience the real Kutch like never before.',
  },
  {
    icon: <FiStar className="text-orange-400 text-4xl md:text-5xl" />,
    title: 'Top Rated Services',
    desc: 'Personalized support, smooth bookings & top travel reviews.',
  },
  {
    icon: <FiHeart className="text-orange-400 text-4xl md:text-5xl" />,
    title: 'Trusted & Loved',
    desc: 'Thousands of happy explorers sharing beautiful memories.',
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="w-full px-4 sm:px-6 py-24 md:py-32 bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: "url('/images/dune-bg.jpg')" }} // desert image path
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-amber-700 drop-shadow-lg">
             Why Choose Us
          </h2>
         <p className="text-lg mt-4 text-gray-600 max-w-xl mx-auto">
            Designed for comfort. Powered by passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          {reasons.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-8 bg-black/50 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-6 rounded-full bg-orange-100/20 shadow-inner">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-orange-100 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
