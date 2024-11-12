import React, { useState } from 'react';

const ManageProducts = () => {
  // Sample data for products. Replace with your API data if available.
  const [products, setProducts] = useState([
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/150',
      productName: 'Iron Scrap',
      quantity: 10,
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      productName: 'Steel Plates',
      quantity: 5,
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/150',
      productName: 'Copper Wire',
      quantity: 15,
    },
    // Add more products as needed
  ]);

  // Function to handle adding a product
  const handleAdd = (id) => {
    console.log(`Added product ID: ${id}`);
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  // Function to handle removing a product
  const handleRemove = (id) => {
    console.log(`Removed product ID: ${id}`);
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-gray-800 my-6">Manage Products</h2>
      <div className="w-full max-w-4xl flex flex-col space-y-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-700">{product.productName}</h3>
              <p className="text-gray-600">Quantity: {product.quantity}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleAdd(product.id)}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
              >
                Add
              </button>
              <button
                onClick={() => handleRemove(product.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
