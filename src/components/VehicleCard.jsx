import { useState } from 'react';

const VehicleCard = ({ vehicle, showDetailsToggle = true }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', date: '', vehicleType: ''
  });

  const images = Array.isArray(vehicle.image) ? vehicle.image : [vehicle.image];

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const message = [
      `Hello, I'm interested in booking a vehicle:\n`,
      `🚗 Vehicle Type: ${vehicle.type}`,
      `📦 Category: ${vehicle.category || 'N/A'}`,
      `👥 Capacity: ${vehicle.capacity || 'N/A'}`,
      vehicle.privateRate ? `💰 Self-Drive Rate: ${vehicle.privateRate}` : '',
      vehicle.driverRate ? `🧑‍✈️ With Driver Rate: ${vehicle.driverRate}` : '',
      `\n👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      `📧 Email: ${form.email || 'N/A'}`,
      `🗓️ Travel Start Date: ${form.date}`,
      `🚘 Requested Vehicle Type: ${form.vehicleType}`,
      `\nPlease send me pricing and booking confirmation. Thanks!`
    ]
      .filter(Boolean)
      .join('\n');

    const phoneNumber = '+918200441509';
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(waLink, '_blank');
  };

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
            e.target.src =
              'https://placehold.co/600x400?text=Image+Not+Found';
          }}
        />
      </div>

      {/* Text Content */}
      <div className="p-6 text-gray-800">
        <h3 className="text-2xl font-bold mb-3 tracking-tight text-amber-600">
          {vehicle.type}
        </h3>

        {vehicle.category && (
          <p className="text-sm font-semibold text-amber-500 mb-2">
            {vehicle.category}
          </p>
        )}

        {vehicle.capacity && (
          <p className="text-sm font-medium text-gray-700 mb-2">
            <span className="font-semibold text-amber-600">Capacity:</span>{' '}
            {vehicle.capacity}
          </p>
        )}

        {images.length > 1 && (
          <p className="text-xs italic text-gray-500">
            + {images.length - 1} interior image
            {images.length > 2 ? 's' : ''}
          </p>
        )}

        {/* Buttons */}
        <div className="mt-2 space-x-2">
          {showDetailsToggle && (
            <button
              onClick={() => setShowDetails(!showDetails)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                showDetails
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-amber-200 text-amber-700 hover:bg-amber-300'
              }`}
            >
              {showDetails ? 'Hide Details' : 'View Details'}
            </button>
          )}

          {showDetails && (
            <button
              onClick={() => setShowBookingForm(true)}
              className="px-5 py-2 rounded-full text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-all"
            >
              Book Now
            </button>
          )}
        </div>

        {/* Details Section */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showDetails ? 'max-h-[1000px] mt-6' : 'max-h-0'
          }`}
        >
          <div className="space-y-3 text-sm text-gray-700">
            {vehicle.privateRate && (
              <p>
                <span className="font-semibold text-amber-600">
                  Self-Drive:
                </span>{' '}
                {vehicle.privateRate}
              </p>
            )}
            {vehicle.driverRate && (
              <p>
                <span className="font-semibold text-amber-600">
                  With Driver:
                </span>{' '}
                {vehicle.driverRate}
              </p>
            )}
            {vehicle.notes && (
              <p className="italic text-gray-600">{vehicle.notes}</p>
            )}
          </div>
        </div>
      </div>

      {/* Slide-in Booking Panel */}
      {showBookingForm && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={() => setShowBookingForm(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Slide-in Panel */}
          <div
            className="relative ml-auto w-full max-w-md bg-white shadow-2xl h-full overflow-y-auto transform transition-transform duration-500 ease-in-out"
            style={{
              transform: showBookingForm
                ? 'translateX(0)'
                : 'translateX(100%)'
            }}
          >
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-amber-600">
                Book This Vehicle
              </h3>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={handleBookingSubmit}
              className="p-6 space-y-4"
            >
              {['name', 'phone', 'email'].map((field) => (
                <div key={field}>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    placeholder={
                      field === 'phone'
                        ? 'Phone Number *'
                        : `${field.charAt(0).toUpperCase() + field.slice(1)} ${
                            field !== 'email'
                              ? '*'
                              : '(optional)'
                          }`
                    }
                    value={form[field]}
                    onChange={handleChange}
                    required={field !== 'email'}
                    className="w-full px-4 py-2 rounded-lg border border-amber-300 placeholder-gray-500 text-sm"
                  />
                </div>
              ))}

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-amber-300 text-sm"
              />

              <input
                type="text"
                name="vehicleType"
                placeholder="Type of Vehicle *"
                value={form.vehicleType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-amber-300 text-sm"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold py-3 rounded-xl transition"
              >
                Send Booking via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleCard;
