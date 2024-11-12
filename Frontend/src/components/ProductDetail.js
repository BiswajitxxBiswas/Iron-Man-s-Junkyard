import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { product } = state || {};

  const [showPickupForm, setShowPickupForm] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    pincode: '',
    state: '',
    country: '',
  });
  const [mobileNumber, setMobileNumber] = useState('');

  const handleRequestPickup = () => setShowPickupForm(true);

  const handleConfirmPickup = () => {
    // Add any additional actions here
    console.log({
      pickupDate,
      pickupTime,
      address,
      mobileNumber,
    });
    navigate('/user-dashboard'); // Navigate to the user dashboard page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <button onClick={() => navigate(-1)} className="text-blue-500 underline mb-4">
          Back to Previous Page
        </button>
        <div className="flex">
          <img src={product.image} alt={product.title} className="h-64 w-64 object-cover rounded-md" />
          <div className="ml-6">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-700 mt-2">Price: Rs. {product.price}</p>
            <p className="text-gray-700">Dealer: {product.name}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 mr-2">{'★'.repeat(Math.round(product.rating.rate))}</span>
              <span>{product.rating.count} reviews</span>
            </div>
            <button
              onClick={handleRequestPickup}
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Request Pickup
            </button>

            {showPickupForm && (
              <div className="mt-4">
                <label className="block">
                  Preferred Date:
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="block w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </label>
                <label className="block mt-4">
                  Preferred Time:
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="block w-full mt-2 p-2 border border-gray-300 rounded"
                  />
                </label>

                <div className="mt-4">
                  {/* Address Fields */}
                  <label className="block">
                    Street Address:
                    <input
                      type="text"
                      value={address.street}
                      onChange={(e) => setAddress({ ...address, street: e.target.value })}
                      className="block w-full mt-2 p-2 border border-gray-300 rounded"
                      placeholder="Enter street address"
                    />
                  </label>

                  <label className="block mt-4">
                    City:
                    <input
                      type="text"
                      value={address.city}
                      onChange={(e) => setAddress({ ...address, city: e.target.value })}
                      className="block w-full mt-2 p-2 border border-gray-300 rounded"
                      placeholder="Enter city"
                    />
                  </label>

                  <label className="block mt-4">
                    Pincode:
                    <input
                      type="text"
                      value={address.pincode}
                      onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                      className="block w-full mt-2 p-2 border border-gray-300 rounded"
                      placeholder="Enter pincode"
                    />
                  </label>

                  <label className="block mt-4">
                    State:
                    <input
                      type="text"
                      value={address.state}
                      onChange={(e) => setAddress({ ...address, state: e.target.value })}
                      className="block w-full mt-2 p-2 border border-gray-300 rounded"
                      placeholder="Enter state"
                    />
                  </label>

                  <label className="block mt-4">
                    Country:
                    <input
                      type="text"
                      value={address.country}
                      onChange={(e) => setAddress({ ...address, country: e.target.value })}
                      className="block w-full mt-2 p-2 border border-gray-300 rounded"
                      placeholder="Enter country"
                    />
                  </label>

                  <label className="block mt-4">
                    Mobile Number:
                    <input
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="block w-full mt-2 p-2 border border-gray-300 rounded"
                      placeholder="Enter your mobile number"
                    />
                  </label>
                </div>

                <button
                  onClick={handleConfirmPickup}
                  className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
