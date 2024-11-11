import React from 'react';
import { Link } from "react-router-dom";

const CartDisplay = ({ cartItems, onQuantityChange, onRemoveItem, total, onAddItem }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-xl shadow-xl">
      <h2 className="text-3xl font-extrabold text-white mb-6 text-center">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-300 text-center">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-6 bg-white rounded-xl shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => onQuantityChange(item.id, -1)}
                  className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-400 transition-all duration-300"
                >
                  -
                </button>
                <span className="px-4 py-2 bg-gray-100 text-lg rounded-full">{item.quantity}</span>
                <button
                  onClick={() => onQuantityChange(item.id, 1)}
                  className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-400 transition-all duration-300"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => onRemoveItem(item.id)}
                className="ml-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all duration-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-between items-center text-lg font-semibold text-gray-800">
        <span className="text-xl">Total: </span>
        <span className="text-2xl text-teal-400">${total.toFixed(2)}</span>
      </div>

      {/* Buttons Row */}
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={onAddItem}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-all duration-300"
        >
          Add Products
        </button>

        <button
          onClick={() => alert('Proceeding to payment...')}
          className="px-8 py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-500 transition-all duration-300"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CartDisplay;
