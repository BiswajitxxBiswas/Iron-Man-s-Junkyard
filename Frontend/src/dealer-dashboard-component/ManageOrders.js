import React, { useState } from 'react';

const ManageOrders = () => {
  // Sample data for orders. Replace with API data if available.
  const [orders, setOrders] = useState([
    {
      id: 1,
      userName: 'John Doe',
      itemName: 'Iron Scrap',
      itemImage: 'https://via.placeholder.com/150',
      quantity: 10,
      price: 150,
    },
    {
      id: 2,
      userName: 'Jane Smith',
      itemName: 'Steel Plates',
      itemImage: 'https://via.placeholder.com/150',
      quantity: 5,
      price: 200,
    },
    {
      id: 3,
      userName: 'Jane Smith',
      itemName: 'Steel Plates',
      itemImage: 'https://via.placeholder.com/150',
      quantity: 5,
      price: 200,
    },
    {
      id: 4,
      userName: 'Jane Smith',
      itemName: 'Steel Plates',
      itemImage: 'https://via.placeholder.com/150',
      quantity: 5,
      price: 200,
    },
    {
      id: 5,
      userName: 'Jane Smith',
      itemName: 'Steel Plates',
      itemImage: 'https://via.placeholder.com/150',
      quantity: 5,
      price: 200,
    }
    // Add more orders as needed
  ]);

  // Function to handle accepting an order
  const handleAccept = (id) => {
    console.log(`Accepted order ID: ${id}`);
    // Update order status in backend if applicable
  };

  // Function to handle canceling an order
  const handleCancel = (id) => {
    console.log(`Canceled order ID: ${id}`);
    // Remove order from list (or update status) for frontend simulation
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-gray-800 my-6">Manage Orders</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {orders.map((order) => (
          <div key={order.id} className="p-4 bg-white rounded-lg shadow-md">
            <img
              src={order.itemImage}
              alt={order.itemName}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700">{order.itemName}</h3>
            <p className="text-gray-600">Requested by: {order.userName}</p>
            <p className="text-gray-600">Quantity: {order.quantity}</p>
            <p className="text-gray-600">Price: ${order.price}</p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => handleAccept(order.id)}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
              >
                Accept
              </button>
              <button
                onClick={() => handleCancel(order.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
