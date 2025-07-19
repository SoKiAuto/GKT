// src/components/WhyChooseUs/WhyChooseUs.jsx
import { FiMap, FiStar, FiHeart } from 'react-icons/fi';

const reasons = [
  {
    icon: <FiMap className="text-gray-300 dark:text-gray-700 text-4xl md:text-5xl" />, // swapped colors
    title: 'Diverse Destinations',
    desc: 'From deserts to salt plains, find unique experiences.',
  },
  {
    icon: <FiStar className="text-gray-300 dark:text-gray-700 text-4xl md:text-5xl" />,
    title: 'Top Rated Services',
    desc: 'Friendly booking, great support, and happy travelers.',
  },
  {
    icon: <FiHeart className="text-gray-300 dark:text-gray-700 text-4xl md:text-5xl" />,
    title: 'Trusted & Loved',
    desc: 'Thousands of glowing testimonials from explorers.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-20 md:py-28 transition-colors"> {/* swapped bg */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-100 dark:text-gray-800 tracking-tight"> {/* swapped text */}
            Why Choose Us
          </h2>
          <p className="text-gray-400 dark:text-gray-500 text-lg mt-4 max-w-xl mx-auto"> {/* swapped text */}
            Crafted for comfort. Designed for discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-8 bg-neutral-950 dark:bg-white border border-neutral-700 dark:border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"              >
              <div className="w-20 h-20 flex items-center justify-center mb-6 rounded-full bg-neutral-800 dark:bg-gray-100 shadow-inner"> {/* swapped bg */}
                {icon}
              </div>
              <h3 className="text-xl font-medium text-gray-100 dark:text-gray-800 mb-2"> {/* swapped text */}
                {title}
              </h3>
              <p className="text-gray-400 dark:text-gray-500 text-sm leading-relaxed"> {/* swapped text */}
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
