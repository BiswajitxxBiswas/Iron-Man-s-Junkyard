import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Shimmer from '../utils/Shimmer';

const ProductCard = ({ product, isNightMode }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div
      onClick={handleClick}
      className={`${isNightMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} 
                  shadow-lg rounded-lg p-6 cursor-pointer transition-transform 
                  duration-300 ease-in-out hover:shadow-2xl hover:scale-105`}
    >
      <img src={product.imageUrl} alt={product.name} className="h-64 w-full object-cover rounded-md mb-4" />
      <div>
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <h1 className="text-lg font-semibold">Dealer ID: {product.scrapDealerId}</h1>
        <p className="text-blue-500 font-bold mt-2">Rs. {product.price}</p>
        <p className="mt-2">Quantity: {product.quantity}</p>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [isNightMode, setIsNightMode] = useState(
    JSON.parse(localStorage.getItem('nightMode')) || false
  );
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('nightMode', JSON.stringify(isNightMode));
  }, [isNightMode]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/product');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setListOfProducts(json.data);  // Access 'data' property from response
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  const filteredProducts = listOfProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`${isNightMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen`}>
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Product Showcase</h1>
          <div className="flex items-center space-x-4">
            <div className="relative w-full max-w-md">
              <FaSearch className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search products"
                className={`pl-10 pr-4 py-2 rounded-lg outline-none transition-all duration-300 w-full shadow-md focus:shadow-lg ${
                  isNightMode
                    ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                    : 'bg-white text-gray-800 placeholder-gray-500 border-gray-300'
                } focus:border-blue-500`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button onClick={toggleNightMode} className="text-2xl transition-transform transform hover:scale-105">
              {isNightMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
            </button>
          </div>
        </div>
        {listOfProducts.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} isNightMode={isNightMode} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
