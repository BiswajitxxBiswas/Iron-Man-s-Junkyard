import React from 'react';

const ItemShowcase = () => (
  <div className="relative h-screen bg-items-pattern bg-cover bg-center flex flex-col items-center justify-center text-center text-white">
    {/* Overlay to darken background slightly */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Content */}
    <div className="relative z-10 px-4">
      <h2 className="text-5xl font-extrabold mb-12 text-yellow-300 drop-shadow-lg">
        Available Parts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        
        {/* Iron Man Helmet Card */}
        <div className="relative bg-gradient-to-r from-brown-600 to-green-700 text-white p-8 rounded-lg shadow-2xl transition-all transform hover:scale-110 hover:shadow-2xl border-4 border-yellow-400">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
          <h3 className="relative text-2xl font-semibold mb-4 text-yellow-300 font-serif drop-shadow-xl">
            Iron Man Helmet
          </h3>
          <p className="relative text-gray-200">
            Suggested Use: Recreate the legendary helmet or build an artistic lamp.
          </p>
        </div>

        {/* Arc Reactor Card */}
        <div className="relative bg-gradient-to-r from-brown-600 to-green-700 text-white p-8 rounded-lg shadow-2xl transition-all transform hover:scale-110 hover:shadow-2xl border-4 border-yellow-400">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
          <h3 className="relative text-2xl font-semibold mb-4 text-yellow-300 font-serif drop-shadow-xl">
            Arc Reactor
          </h3>
          <p className="relative text-gray-200">
            Suggested Use: Use as a unique power source for small gadgets.
          </p>
        </div>

        {/* Repulsor Gauntlet Card */}
        <div className="relative bg-gradient-to-r from-brown-600 to-green-700 text-white p-8 rounded-lg shadow-2xl transition-all transform hover:scale-110 hover:shadow-2xl border-4 border-yellow-400">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
          <h3 className="relative text-2xl font-semibold mb-4 text-yellow-300 font-serif drop-shadow-xl">
            Repulsor Gauntlet
          </h3>
          <p className="relative text-gray-200">
            Suggested Use: Upcycle into a futuristic handpiece or display item.
          </p>
        </div>
        
      </div>
    </div>
  </div>
);

export default ItemShowcase;
