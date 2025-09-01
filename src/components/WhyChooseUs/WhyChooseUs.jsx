import { FiMap, FiStar, FiHeart } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import reviewsData from '../../data/reviews.json';
import ReviewTile from '../ReviewTile'; // Corrected import path for ReviewTile

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
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewsData);
  }, []);

  // renderStars and getInitials are now handled within ReviewTile or passed implicitly
  // so they are removed from here to reduce prop drilling.
  // If you need them elsewhere on this page, you can keep them here.

  return (
    <>
      {/* Original section - unchanged */}
      <section
        className="w-full px-4 sm:px-6 py-24 md:py-32 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: "url('/images/dune-bg.jpg')" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-amber-700 drop-shadow-lg">
              Why Choose Us
            </h2>
            <p className="text-xl mt-6 text-red-950 max-w-4xl mx-auto font-bold leading-relaxed drop-shadow-lg">
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

      {/* Traveler Reviews section using ReviewTile component */}
      <section className="py-16 px-4 sm:px-6 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-12 text-center">
            Traveler Reviews 
            <span role="img" aria-label="star emoji">⭐</span>
          </h2>

          <div className=" relative group">
          <div className="flex animate-scroll whitespace-nowrap space-x-6 items-start">
            {[...reviews, ...reviews].map((reviewData, index) => (
                <ReviewTile
                  key={index} // Use index as key, or a unique ID from reviewData if available
                  name={reviewData.name}
                  review={reviewData.review}
                  rating={reviewData.rating}
                  time={reviewData.time}           // ✅ Added
                
                />
              ))}
            </div>
          </div>
          
          {/* CSS for scrolling */}
         <style>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .animate-scroll {
    display: inline-flex;
    animation: scroll 80s linear infinite;
    width: max-content; /* ensures it takes up only its needed width */
  }
  .group:hover .animate-scroll {
    animation-play-state: paused;
  }
`}</style>

        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
