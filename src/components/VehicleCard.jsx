import React from 'react';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl p-6 flex flex-col h-full bg-neutral-800 dark:bg-neutral-100 text-gray-200 dark:text-gray-900 shadow-xl group">
      <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden mb-4 shadow-lg">
        <img
          src={vehicle.image || 'https://placehold.co/600x400?text=No+Image'}
          alt={vehicle.type}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400?text=Image+Not+Found'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80"></div>
      </div>

      <h2 className="text-2xl font-bold text-amber-500 mb-2">{vehicle.type}</h2>
      <p className="text-sm font-medium text-gray-400 dark:text-gray-600 mb-2">
        <span className="font-semibold text-amber-500">Capacity:</span> {vehicle.capacity}
      </p>

      <div className="text-sm font-medium text-gray-400 dark:text-gray-600 mb-2">
        {vehicle.privateRate && (
          <p>
            <span className="font-semibold text-amber-500">Self-Drive:</span> {vehicle.privateRate}
          </p>
        )}
        {vehicle.driverRate && (
          <p>
            <span className="font-semibold text-amber-500">With Driver:</span> {vehicle.driverRate}
          </p>
        )}
        {vehicle.rate && (
          <p>
            <span className="font-semibold text-amber-500">Rate:</span> {vehicle.rate}
          </p>
        )}
      </div>

      <p className="text-sm text-gray-300 dark:text-gray-700 italic">{vehicle.notes}</p>
    </div>
  );
};

export default VehicleCard;
