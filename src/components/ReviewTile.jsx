import React from 'react';
import { FiStar as StarIcon } from 'react-icons/fi';

// Helper function to render stars
const renderStars = (count) =>
  [...Array(5)].map((_, i) => (
    <StarIcon
      key={i}
      className={`w-5 h-5 ${i < count ? 'text-yellow-400' : 'text-gray-300'}`}
      style={{ marginRight: 2 }}
      aria-label={i < count ? 'Star filled' : 'Star empty'}
    />
  ));

// Helper function to get initials
const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

const ReviewTile = ({ name, review, rating, time, owner_reply }) => {
  return (
    <div
      className="inline-block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 min-w-[320px] max-w-[320px] p-8 border border-gray-100 box-border flex flex-col"
      role="article"
      aria-label={`Review by ${name}`}
    >
      {/* User avatar and name + stars */}
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center rounded-full text-white font-bold w-14 h-14 mr-4 select-none bg-gradient-to-br from-amber-500 to-orange-400 shadow-lg">
          {getInitials(name)}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <div className="flex mt-1" aria-label={`${rating} star rating`}>
            {renderStars(rating)}
          </div>
        </div>
      </div>

      {/* Review text */}
      <p
        className="text-gray-700 text-sm leading-relaxed text-wrap break-words mb-3"
        style={{ overflowWrap: 'break-word', hyphens: 'auto' }}
      >
        {review}
      </p>

      {/* Time */}
      {time && (
        <p className="text-xs text-gray-500 mb-2">
          {time}
        </p>
      )}

      {/* Owner reply */}
      {owner_reply && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mt-2">
          <p className="text-xs text-gray-500 font-semibold mb-1">Owner’s reply:</p>
          <p className="text-gray-700 text-sm leading-snug">{owner_reply}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewTile;
