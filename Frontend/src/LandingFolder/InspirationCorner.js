import React from 'react';

const InspirationCorner = () => (
  <div className="relative h-screen bg-inspiration-pattern bg-cover bg-center flex flex-col items-center justify-center text-center text-white">
    {/* Overlay to darken background slightly */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Content */}
    <div className="relative z-10 px-4">
      <h2 className="text-6xl font-extrabold mb-12 text-yellow-300 drop-shadow-lg">
        Inspiration Corner
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        
        {/* Iron Man Suit Card */}
        <div className="relative bg-gradient-to-r from-brown-600 to-green-700 text-white p-8 rounded-3xl shadow-2xl border-4 border-yellow-400 transition-transform transform hover:scale-110 hover:shadow-2xl hover:border-yellow-500 hover:bg-gradient-to-r hover:from-green-700 hover:to-brown-600">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
          <h3 className="relative text-3xl font-semibold mb-4 text-yellow-300">Iron Man Suit</h3>
          <p className="relative text-gray-200 font-sans">
            Assemble all parts from the junkyard to create your own suit!
          </p>
        </div>

        {/* DIY Gadget Projects Card */}
        <div className="relative bg-gradient-to-r from-brown-600 to-green-700 text-white p-8 rounded-3xl shadow-2xl border-4 border-yellow-400 transition-transform transform hover:scale-110 hover:shadow-2xl hover:border-yellow-500 hover:bg-gradient-to-r hover:from-green-700 hover:to-brown-600">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
          <h3 className="relative text-3xl font-semibold mb-4 text-yellow-300">DIY Gadget Projects</h3>
          <p className="relative text-gray-200 font-sans">
            Use old tech parts to create functional gadgets with unique designs.
          </p>
        </div>
        
      </div>
    </div>
  </div>
);

export default InspirationCorner;
