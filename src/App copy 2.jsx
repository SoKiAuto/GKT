// src/App.jsx
import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white text-gray-900 px-6">
      <div className="text-center">
        {/* Company Name */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 tracking-wide mb-6">
          Gurukrupa Tours & Travels
        </h1>

        {/* Coming Soon */}
        <h2 className="text-2xl md:text-4xl font-light text-gray-600 mb-4 tracking-widest uppercase">
          Coming Soon
        </h2>

        {/* Divider line */}
        <div className="w-20 h-[2px] bg-gray-300 mx-auto mb-8"></div>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-500 italic">
          Crafting journeys, not just trips. <br />
          Launching soon.
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return <ComingSoon />;
};

export default App;
