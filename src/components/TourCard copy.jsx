import React, { useState } from 'react';

const TourCard = ({ tour }) => {
  const [expanded, setExpanded] = useState(false);
  const [openItineraryDay, setOpenItineraryDay] = useState(null); // State to manage which day's itinerary is open

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

  const handleItineraryToggle = (dayIndex) => {
    setOpenItineraryDay(openItineraryDay === dayIndex ? null : dayIndex);
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl p-6 flex flex-col h-full
        bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-100 dark:to-neutral-200
        text-gray-200 dark:text-gray-900
        shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-[1.01]
        ${expanded ? 'max-h-[1200px] md:max-h-[1500px] lg:max-h-[1800px]' : 'max-h-[520px]'}
        group
      `}
      style={{
        transitionProperty: 'max-height',
        transitionDuration: '700ms', // Increased duration for smoother expansion
        transitionTimingFunction: 'ease-in-out',
      }}
    >
      {/* Tour Image with enhanced overlay */}
      <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden mb-5 shadow-xl">
        <img
          src={tour.image || 'https://placehold.co/600x400/333333/FFFFFF?text=Tour+Image'}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/333333/FFFFFF?text=Image+Not+Found'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
        <div className="absolute bottom-4 left-4">
            <span className="bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                {tour.duration}
            </span>
        </div>
      </div>

      {/* Main Tour Info */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-amber-400 mb-2 leading-tight">
            {tour.title}
          </h2>
          <p className="text-base font-medium text-gray-400 dark:text-gray-600 mb-2">
            <span className="font-bold text-amber-500">Ideal for:</span> {tour.idealFor}
          </p>
          <p className="text-base font-medium text-gray-400 dark:text-gray-600 mb-4 line-clamp-2">
            <span className="font-bold text-amber-500">Highlights:</span> {tour.highlights.join(', ')}
          </p>
          <p className="flex items-center text-lg font-bold text-green-400 dark:text-green-600 mb-4">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
            Starting from: {tour.cost}
          </p>
        </div>

        {/* Expandable Content */}
        <div
          className={`
            overflow-hidden transition-all duration-700 ease-in-out
            ${expanded ? 'max-h-full opacity-100 pt-6' : 'max-h-0 opacity-0'}
          `}
        >
          {/* Itinerary - Timeline Style */}
          <div className="mb-6">
            <p className="font-extrabold text-amber-500 flex items-center text-xl mb-4">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Detailed Itinerary:
            </p>
            <div className="relative border-l-2 border-amber-500 pl-4 space-y-6">
              {tour.itinerary.map((day, dayIndex) => (
                <div key={dayIndex} className="relative">
                  <div className="absolute -left-5 top-0 flex items-center justify-center w-10 h-10 bg-amber-500 rounded-full text-white font-bold shadow-lg">
                    {dayIndex + 1}
                  </div>
                  <button
                    onClick={() => handleItineraryToggle(dayIndex)}
                    className="w-full text-left focus:outline-none py-2 px-3 rounded-lg flex items-center justify-between
                               bg-neutral-700 dark:bg-neutral-300 hover:bg-neutral-600 dark:hover:bg-neutral-400 transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-white dark:text-gray-800">{day.dayTitle}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${openItineraryDay === dayIndex ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openItineraryDay === dayIndex ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                  >
                    <ul className="list-disc pl-5 text-sm text-gray-300 dark:text-gray-700 space-y-1 bg-neutral-700/50 dark:bg-neutral-300/50 p-3 rounded-md mt-1">
                      {day.activities.map((activity, activityIdx) => (
                        <li key={activityIdx}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost and Includes */}
          <div className="mt-6 text-base text-gray-300 dark:text-gray-700 space-y-3">
            <p className="flex items-center">
              <span className="font-bold text-amber-500 mr-2">💰 Cost:</span> {tour.cost}
            </p>
            <p className="flex items-center">
              <span className="font-bold text-amber-500 mr-2">📦 Includes:</span> {tour.includes}
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-green-700/50 transform active:scale-95"
              onClick={e => e.stopPropagation()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.6-3.807-1.6-5.918 0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12c-1.996 0-3.956-.508-5.694-1.393l-6.185 1.637zm7.135-4.9c1.455.772 3.092 1.218 4.779 1.218 5.602 0 10.165-4.563 10.165-10.165s-4.563-10.165-10.165-10.165-10.165 4.563-10.165 10.165c0 1.542.368 3.05.992 4.402l-1.42 5.187 5.385-1.422zm8.487-3.949c-.27-.135-.164-.202-.379-.318-.21-.115-1.344-.66-1.554-.73-.21-.07-.363-.105-.515.105-.15.21-.598.73-.733.874-.135.15-.27.165-.494.053-.225-.105-.956-.35-1.828-1.12-.676-.583-1.129-1.26-1.258-1.47-.13-.21-.015-.27-.135-.375-.105-.09-.24-.15-.36-.2-.12-.045-.255-.075-.38-.075-.105 0-.285.045-.435.21-.15.165-.57.59-.69.71-.12.12-.24.135-.45.03-.21-.105-.88-.32-1.67-.92-.62-.47-1.03-1.03-1.15-1.23-.12-.21-.015-.195.105-.3l.36-.36c.09-.09.15-.21.225-.3.075-.09.03-.165-.015-.3l-.36-.884c-.06-.15-.12-.12-.18-.12-.06 0-.15-.015-.225-.015-.075 0-.195.03-.315.15-.12.12-.45.435-.45 1.05 0 .615.465 1.215.535 1.305.07.09.915 1.485 2.215 2.58.33.27.594.48.808.623.364.24.717.41 1.054.512.448.136.857.108 1.217.06.32-.046.993-.404 1.14-.649.147-.245.147-.45.105-.536z"/></svg>
              <span>WhatsApp Us</span>
            </a>

            <a
              href={mailtoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] flex items-center justify-center space-x-3 bg-amber-600 hover:bg-amber-700 text-white font-bold px-5 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-amber-700/50 transform active:scale-95"
              onClick={e => e.stopPropagation()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v11z"></path></svg>
              <span>Email Us</span>
            </a>
          </div>
        </div>

        {/* Read More/Show Less Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
            setOpenItineraryDay(null); // Close any open itinerary day when collapsing the card
          }}
          className="mt-8 flex items-center justify-center space-x-2 text-amber-500 hover:text-amber-600 transition-colors duration-300 font-semibold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-70 text-lg"
        >
          <span>{expanded ? "Show Less Details" : "View Full Details"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TourCard;