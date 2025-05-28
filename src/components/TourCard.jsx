const TourCard = ({ tour }) => {
  const whatsappNumber = "919879714494";

  const whatsappMessage = encodeURIComponent(
    `Hi Gurukrupa Travels, I am interested in booking the tour package: "${tour.title}". Please provide more details.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const emailAddress = "info@gurukrupatravels.com";
  const emailSubject = encodeURIComponent(`Booking Inquiry: ${tour.title}`);
  const emailBody = encodeURIComponent(
    `Hello Gurukrupa Travels,\n\nI am interested in booking the tour package: "${tour.title}". Please send me more details.\n\nThank you!`
  );
  const mailtoUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-pink-300 rounded-3xl shadow-lg p-6 flex flex-col hover:shadow-pink-300 transition-all duration-300 min-w-[300px]">
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-60 object-cover rounded-2xl mb-6 shadow-md"
      />
      <h2 className="text-2xl font-bold text-pink-700 mb-2">{tour.title}</h2>
      <p className="text-sm text-pink-600 mb-1">
        <strong>Ideal for:</strong> {tour.idealFor}
      </p>
      <p className="text-sm text-pink-600 mb-2">
        <strong>Highlights:</strong> {tour.highlights.join(', ')}
      </p>
      <div className="mb-3">
        <p className="font-semibold text-pink-700">🗓 Itinerary:</p>
        <ul className="list-disc pl-5 text-sm text-pink-700 space-y-1 mt-1">
          {tour.itinerary.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 text-sm text-pink-700 space-y-1">
        <p>💰 <strong>Cost:</strong> {tour.cost}</p>
        <p>📦 <strong>Includes:</strong> {tour.includes}</p>
      </div>

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
  );
};

export default TourCard;
