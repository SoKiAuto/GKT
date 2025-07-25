import { useState } from 'react';

const VehicleCard = ({ vehicle, showDetailsToggle = true }) => {
  const [showDetails, setShowDetails] = useState(false);
  const images = Array.isArray(vehicle.image) ? vehicle.image : [vehicle.image];

  return (
    <div className="bg-white/60 backdrop-blur-lg border border-amber-200 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-64 sm:h-72 overflow-hidden">
        <img
          src={images[0] || 'https://placehold.co/600x400?text=No+Image'}
          alt={vehicle.type}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/600x400?text=Image+Not+Found';
          }}
        />
      </div>

      {/* Text Content */}
      <div className="p-6 text-gray-800">
        <h3 className="text-2xl font-bold mb-3 tracking-tight text-amber-600">{vehicle.type}</h3>

        {vehicle.category && (
          <p className="text-sm font-semibold text-amber-500 mb-2">{vehicle.category}</p>
        )}

        {vehicle.capacity && (
          <p className="text-sm font-medium text-gray-700 mb-2">
            <span className="font-semibold text-amber-600">Capacity:</span> {vehicle.capacity}
          </p>
        )}

        {/* Interior Image Note */}
        {images.length > 1 && (
          <p className="text-xs italic text-gray-500">
            + {images.length - 1} interior image{images.length > 2 ? 's' : ''}
          </p>
        )}

        {/* Button */}
        {showDetailsToggle && (
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mt-2 px-5 py-2 rounded-full text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-all"
            aria-expanded={showDetails}
            aria-controls={`details-${vehicle.id || vehicle.type}`}
          >
            {showDetails ? 'Hide Details' : 'More Details'}
          </button>
        )}

        {/* Expanding Section */}
        <div
          id={`details-${vehicle.id || vehicle.type}`}
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showDetails ? 'max-h-[1000px] mt-6' : 'max-h-0'
          }`}
        >
          <div className="space-y-3 text-sm text-gray-700">
            {vehicle.privateRate && (
              <p>
                <span className="font-semibold text-amber-600">Self-Drive:</span> {vehicle.privateRate}
              </p>
            )}
            {vehicle.driverRate && (
              <p>
                <span className="font-semibold text-amber-600">With Driver:</span> {vehicle.driverRate}
              </p>
            )}
            {vehicle.notes && <p className="italic text-gray-600">{vehicle.notes}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
