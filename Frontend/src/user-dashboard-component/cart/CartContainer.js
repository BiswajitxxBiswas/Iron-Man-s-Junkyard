// CartContainer.js
import React, { useState } from 'react';
import CartDisplay from './CartDisplay';

const CartContainer = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 15, quantity: 2 },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddItem = () => {
    setCartItems([
      ...cartItems,
      {
        id: cartItems.length + 1,
        name: `Product ${cartItems.length + 1}`,
        price: Math.floor(Math.random() * 20) + 5, // Random price
        quantity: 1,
      },
    ]);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex justify-items-center">
      
      <div className="w-64 text-white">
        {/* Sidebar content */}
      </div>

      {/* Cart Content on the Right */}
      <div className="flex-grow p-6">
        <div className="max-w-4xl mx-auto mt-8 mb-8">
          <CartDisplay
            cartItems={cartItems}
            onQuantityChange={handleQuantityChange}
            onRemoveItem={handleRemoveItem}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
