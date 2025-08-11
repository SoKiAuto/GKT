import { useState } from "react";

const TourCard = ({ tour, showDetailsToggle = true }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    people: "",
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const itinerary = tour.days
      .map((day) => `${day.day}: ${day.activities.join(", ")}`)
      .join("\n");

    const message = [
      `Hello, I'm interested in the following tour package:\n`,
      `📦 Package: ${tour.title}`,
      `🕒 Duration: ${tour.days.length} Days`,
      `📍 Destinations: ${tour.destinations || "As per itinerary"}`,
      `\n📅 Itinerary:\n${itinerary}`,
      `\n👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      `📧 Email: ${form.email || "N/A"}`,
      `🗓️ Travel Start Date: ${form.date}`,
      `👥 No. of People: ${form.people}`,
      `\nPlease send me pricing and booking details. Thank you!`,
    ].join("\n");

    const phoneNumber = "+918200441509";
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(waLink, "_blank");
    setShowBookingForm(false); // close panel after sending
  };

  return (
    <>
      <div className="bg-white/60 backdrop-blur-lg border border-amber-200 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
        {/* Image */}
        <div className="relative w-full h-64 sm:h-72 overflow-hidden">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6 text-gray-800">
          <h3 className="text-2xl font-bold mb-3 tracking-tight text-amber-600">
            {tour.title}
          </h3>

          {showDetailsToggle && (
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="mt-2 mr-3 px-5 py-2 rounded-full text-sm font-semibold bg-amber-100 text-amber-700 hover:bg-amber-200 transition-all"
            >
              {showDetails ? "Hide Details" : "More Details"}
            </button>
          )}

          {showDetails && (
            <button
              onClick={() => setShowBookingForm(true)}
              className="mt-2 px-5 py-2 rounded-full text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-all"
            >
              Book Now
            </button>
          )}

          {/* Tour Details */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              showDetails ? "max-h-[1000px] mt-6" : "max-h-0"
            }`}
          >
            <div className="space-y-6">
              {tour.days.map((day, index) => (
                <div key={index}>
                  <h4 className="text-lg font-bold text-amber-600 mb-2">
                    {day.day}
                  </h4>
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
      style={{ transform: showBookingForm ? "translateX(0)" : "translateX(100%)" }}
    >
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-amber-600">Book This Tour</h3>
        <button
          onClick={() => setShowBookingForm(false)}
          className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
        >
          ×
        </button>
      </div>

      <form onSubmit={handleBookingSubmit} className="p-6 space-y-4">
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
          type="number"
          name="people"
          placeholder="Number of People *"
          min="1"
          value={form.people}
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

    </>
  );
};

export default TourCard;
