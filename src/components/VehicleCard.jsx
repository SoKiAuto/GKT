import React from 'react';

const VehicleCard = ({ vehicle }) => {
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
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-pink-300 transform transition duration-400 hover:shadow-pink-300 hover:scale-[1.05]">
      {vehicle.image && (
        <img
          src={vehicle.image}
          alt={vehicle.type}
          className="w-full h-48 object-cover rounded-t-3xl"
        />
      )}
      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-extrabold text-pink-600">{vehicle.type}</h3>
        <p><strong>Category:</strong> {vehicle.category}</p>
        <p><strong>Capacity:</strong> {vehicle.capacity}</p>
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

        <div className="mt-6 flex space-x-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
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
            className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white font-bold px-5 py-2 rounded-lg transition-transform duration-300 hover:scale-105 shadow-pink-300/50 shadow"
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
