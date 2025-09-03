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
    ].filter(Boolean).join('\n');

    const phoneNumber = '+918200441509';
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(waLink, '_blank');
    setShowBookingForm(false);
  };

  return (
    <>
      <div className="bg-light/70 backdrop-blur-lg border border-accent/20 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
        {/* Image */}
        <div className="relative w-full h-48 sm:h-64 md:h-72 overflow-hidden">
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

        {/* Content */}
        <div className="p-4 sm:p-6 text-primary">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 tracking-tight text-accent">
            {vehicle.type}
          </h3>

          {vehicle.category && (
            <p className="text-xs sm:text-sm font-semibold text-accent mb-2">
              Category: {vehicle.category}
            </p>
          )}

          {vehicle.capacity && (
            <p className="text-xs sm:text-sm font-medium text-primary/80 mb-2">
              Capacity: {vehicle.capacity}
            </p>
          )}

          {(vehicle.privateRate || vehicle.driverRate) && (
            <div className="space-y-1 mb-2 text-sm text-primary/80">
              {vehicle.privateRate && (
                <p>
                  <span className="font-semibold text-accent">Self-Drive:</span> {vehicle.privateRate}
                </p>
              )}
              {vehicle.driverRate && (
                <p>
                  <span className="font-semibold text-accent">With Driver:</span> {vehicle.driverRate}
                </p>
              )}
            </div>
          )}

          {showDetailsToggle && (
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="mt-2 mr-3 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-all"
            >
              {showDetails ? 'Hide Details' : 'More Details'}
            </button>
          )}

          {showDetails && (
            <button
              onClick={() => setShowBookingForm(true)}
              className="mt-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-all"
            >
              Book Now
            </button>
          )}

          {/* Details Section */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              showDetails ? 'max-h-[1000px] mt-4 sm:mt-6' : 'max-h-0'
            }`}
          >
            {vehicle.notes && (
              <p className="italic text-primary/70">{vehicle.notes}</p>
            )}
          </div>
        </div>
      </div>

      {/* Booking Form Panel */}
      {showBookingForm && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={() => setShowBookingForm(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Panel */}
          <div
            className="relative ml-auto w-full sm:w-[90%] md:max-w-md bg-white shadow-2xl h-full overflow-y-auto transform transition-transform duration-500 ease-in-out"
            style={{
              transform: showBookingForm ? 'translateX(0)' : 'translateX(100%)',
            }}
          >
            <div className="p-4 sm:p-6 border-b border-accent/20 flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-semibold text-accent">
                Book This Vehicle
              </h3>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-gray-500 hover:text-gray-800 text-xl sm:text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={handleBookingSubmit}
              className="p-4 sm:p-6 space-y-3 sm:space-y-4"
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
                            field !== 'email' ? '*' : '(optional)'
                          }`
                    }
                    value={form[field]}
                    onChange={handleChange}
                    required={field !== 'email'}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-accent/30 placeholder-gray-500 text-sm"
                  />
                </div>
              ))}

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 rounded-lg border border-accent/30 text-sm"
              />

              <input
                type="text"
                name="vehicleType"
                placeholder="Type of Vehicle *"
                value={form.vehicleType}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 rounded-lg border border-accent/30 text-sm"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold py-2 sm:py-3 rounded-xl transition"
              >
                Send Booking via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default VehicleCard;
