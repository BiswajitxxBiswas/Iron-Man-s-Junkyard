import React from 'react';

const Rolesection = () => (
  <div className="relative h-screen bg-roles-pattern bg-cover bg-center flex flex-col items-center justify-center text-center text-white">
    {/* Overlay to darken background slightly */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
    
    {/* Content */}
    <div className="relative z-10 px-4">
      <h2 className="text-5xl font-extrabold mb-12 text-yellow-300 drop-shadow-lg">
        Our Roles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        
        {/* Sellers Card */}
        <div className="relative bg-gradient-to-r from-brown-600 to-green-700 text-white p-8 rounded-lg shadow-2xl transition-all transform hover:scale-110 hover:shadow-2xl border-4 border-yellow-400">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
          <h3 className="relative text-4xl font-extrabold mb-4 text-yellow-300 font-serif drop-shadow-xl">
            Sellers
          </h3>
          <p className="relative text-gray-200 font-sans text-lg">
            Our sellers provide unique parts from old items, sparking endless possibilities.
          </p>
        </div>

        {/* Scrap Dealers Card */}
        <div className="relative bg-gradient-to-r from-orange-600 to-brown-500 text-white p-8 rounded-lg shadow-2xl transition-all transform hover:scale-110 hover:shadow-2xl border-4 border-yellow-400">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
          <h3 className="relative text-4xl font-extrabold mb-4 text-yellow-300 font-serif drop-shadow-xl">
            Scrap Dealers
          </h3>
          <p className="relative text-gray-200 font-sans text-lg">
            Scrap dealers showcase how to repurpose parts into amazing creations.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Rolesection;
