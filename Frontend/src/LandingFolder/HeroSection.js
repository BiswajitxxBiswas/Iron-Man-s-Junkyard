import React from 'react';
import {Link} from 'react-router-dom';

const HeroSection = () => (
  <div className="relative h-screen flex flex-col justify-center items-center text-center text-white bg-hero-pattern bg-cover bg-center">
    {/* Overlay to darken background slightly */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
    
    {/* Content */}
    <div className="relative z-10">
      <h1 className="text-7xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg">
        Ironman Junkyard
      </h1>
      <p className="text-2xl mb-8 text-gray-200 drop-shadow-md">
        Transforming Junk into Wonders!
      </p>
      <Link to='/products'>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        Explore the Junkyard
      </button>
      </Link>
    </div>
  </div>
);

export default HeroSection;
