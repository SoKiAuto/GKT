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
    setShowBookingForm(false);
  };

  return (
    <>
      <div className="bg-white/60 backdrop-blur-lg border border-border rounded-xl overflow-hidden shadow-shadow hover:shadow-2xl transition-all duration-300">
        {/* Image */}
        <div className="relative w-full h-48 sm:h-64 md:h-72 overflow-hidden">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 text-text-secondary">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 tracking-tight text-accent">
            {tour.title}
          </h3>

          {showDetailsToggle && (
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="mt-2 mr-3 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold  bg-primary hover:bg-primary/90 text-white  sm:py-3 transition-all duration-300 hover:shadow-glow-primary"
              // The classes here are from your original component. If you defined new shades, these will work.
              // We'll apply a different glow to the "Book Now" button for a more prominent effect.
            >
              {showDetails ? "Hide Details" : "More Details"}
            </button>
          )}

          {showDetails && (
            <button
              onClick={() => setShowBookingForm(true)}
              className="mt-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-primary text-bg hover:bg-primary/90 transition-all duration-300 hover:shadow-glow-primary"
              // Added transition-all and hover:shadow-glow-primary
            >
              Book Now
            </button>
          )}

          {/* Tour Details */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              showDetails ? "max-h-[1000px] mt-4 sm:mt-6" : "max-h-0"
            }`}
          >
            <div className="space-y-4 sm:space-y-6">
              {tour.days.map((day, index) => (
                <div key={index}>
                  <h4 className="text-base sm:text-lg font-bold text-accent mb-2">
                    {day.day}
                  </h4>
                  <ul className="border-l-2 border-accent pl-3 sm:pl-4 space-y-1 sm:space-y-2">
                    {tour.destinations && (
                      <li className="text-sm font-medium text-text-secondary">
                        <span className="font-bold">Destinations:</span>{" "}
                        {tour.destinations}
                      </li>
                    )}
                    {day.activities.map((activity, idx) => (
                      <li
                        key={idx}
                        className="relative pl-4 before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-accent before:rounded-full text-xs sm:text-sm text-text"
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
            className="relative ml-auto w-full sm:w-[90%] md:max-w-md bg-white shadow-2xl h-full overflow-y-auto transform transition-transform duration-500 ease-in-out"
            style={{
              transform: showBookingForm
                ? "translateX(0)"
                : "translateX(100%)",
            }}
          >
            <div className="p-4 sm:p-6 border-b border-border flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-semibold text-accent">
                Book This Tour
              </h3>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-text-secondary hover:text-text text-xl sm:text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={handleBookingSubmit}
              className="p-4 sm:p-6 space-y-3 sm:space-y-4"
            >
              {["name", "phone", "email"].map((field) => (
                <div key={field}>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={
                      field === "phone"
                        ? "Phone Number *"
                        : `${field.charAt(0).toUpperCase() + field.slice(1)} ${
                            field !== "email" ? "*" : "(optional)"
                          }`
                    }
                    value={form[field]}
                    onChange={handleChange}
                    required={field !== "email"}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-border placeholder-text-secondary text-sm"
                  />
                </div>
              ))}

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 rounded-lg border border-border text-sm"
              />

              <input
                type="number"
                name="people"
                placeholder="Number of People *"
                min="1"
                value={form.people}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 rounded-lg border border-border text-sm"
              />

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 sm:py-3 rounded-xl transition-all duration-300 hover:shadow-glow-primary"
                // Simplified the gradient and added the glowing effect
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