import React, { useState } from 'react';

const VehicleCard = ({ vehicle }) => {
  const [expanded, setExpanded] = useState(false);

  const whatsappNumber = "919879714494";

  const whatsappMessage = encodeURIComponent(
    `Hi Gurukrupa Travels, I am interested in booking the vehicle: "${vehicle.type}". Please provide more details.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const emailAddress = "info@gurukrupatravels.com";
  const emailSubject = encodeURIComponent(`Vehicle Booking Inquiry: ${vehicle.type}`);
  const emailBody = encodeURIComponent(
    `Hello Gurukrupa Travels,\n\nI am interested in booking the vehicle: "${vehicle.type}". Please send me more details.\n\nThank you!`
  );
  const mailtoUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-orange-300 transform transition duration-300 cursor-pointer
        hover:shadow-orange-300
        min-w-[300px] max-w-md
        ${expanded ? 'scale-105' : 'hover:scale-105'}
      `}
      style={{ willChange: 'transform' }}
    >
      {vehicle.image && (
        <img
          src={vehicle.image}
          alt={vehicle.type}
          className="w-full h-48 object-cover rounded-t-3xl"
        />
      )}
      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-extrabold text-orange-600">{vehicle.type}</h3>
        <p><strong>Category:</strong> {vehicle.category}</p>
        <p><strong>Capacity:</strong> {vehicle.capacity}</p>

        {/* Show rates and notes only if expanded */}
        {expanded && (
          <>
            {vehicle.privateRate && (
              <p><strong>Private (Self-Drive) Rate*:</strong> {vehicle.privateRate}</p>
            )}
            {vehicle.driverRate && (
              <p><strong>With Driver Rate* (Per Day):</strong> {vehicle.driverRate}</p>
            )}
            {vehicle.rate && (
              <p><strong>Rate (Per Day):</strong> {vehicle.rate}</p>
            )}
            {vehicle.notes && (
              <p><strong>Notes:</strong> {vehicle.notes}</p>
            )}
          </>
        )}

        <div className="mt-6 flex space-x-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()} // prevent card toggle when clicking link
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2 rounded-lg transition-transform duration-300 hover:scale-105 shadow-green-300/50 shadow"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.88 7.41a5.5 5.5 0 11-7.78 7.78L6 21l3.81-1.03a5.5 5.5 0 006.07-12.56z"
              />
            </svg>
            <span>WhatsApp</span>
          </a>

          <a
            href={mailtoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center space-x-2 bg-gradient-to-r from-yellow-600 to-orange-700 hover:from-yellow-700 hover:to-orange-800 text-white font-bold px-5 py-2 rounded-lg transition-transform duration-300 hover:scale-105 shadow-orange-300/50 shadow"
          >
            {/* Email Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12H8m0 0l-4-4m4 4l4 4m8-12v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12z"
              />
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
