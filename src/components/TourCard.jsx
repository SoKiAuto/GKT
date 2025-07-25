import { useState } from 'react';

const TourCard = ({ tour, showDetailsToggle = true }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white/60 backdrop-blur-lg border border-amber-200 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="relative w-full h-64 sm:h-72 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6 text-gray-800">
        <h3 className="text-2xl font-bold mb-3 tracking-tight text-amber-600">{tour.title}</h3>

        {showDetailsToggle && (
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mt-2 px-5 py-2 rounded-full text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-all"
            aria-expanded={showDetails}
            aria-controls={`details-${tour.id}`}
          >
            {showDetails ? 'Hide Details' : 'More Details'}
          </button>
        )}

        {/* Animated expanding container */}
        <div
          id={`details-${tour.id}`}
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showDetails ? 'max-h-[1000px] mt-6' : 'max-h-0'
          }`}
        >
          <div className="space-y-6">
            {tour.days.map((day, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold text-amber-600 mb-2">{day.day}</h4>
                <ul className="border-l-2 border-amber-500 pl-4 space-y-2">
                  {day.activities.map((activity, idx) => (
                    <li
                      key={idx}
                      className="relative pl-4 before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-amber-500 before:rounded-full text-sm text-gray-700"
                    >
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
