import React from 'react';

const Loader = ({ type = 'spinner' }) => (
  <div className="flex items-center justify-center h-20">
    {type === 'spinner' ? (
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    ) : (
      <div className="w-full h-10 bg-gray-200 animate-pulse rounded-lg"></div>
    )}
  </div>
);

export default Loader;
