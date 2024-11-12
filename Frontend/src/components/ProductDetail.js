import React, { useState } from 'react';
import axios from 'axios';
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
  const [userId, setUserId] = useState('');
  const [scrapDealerId, setScrapDealerId] = useState(product?.scrapDealerId || '');
  const [scrapItemId, setScrapItemId] = useState(product?.id || '');
  const [quantity, setQuantity] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Modal state

  const handleRequestPickup = () => setShowPickupForm(true);

  const handleConfirmPickup = async () => {
    try {
      const pickupDateTime = `${pickupDate}T${pickupTime}:00Z`;

      const requestData = {
        userId: userId,
        scrapDealerId: scrapDealerId,
        scrapItemId: scrapItemId,
        quantity: parseInt(quantity, 10),
        pickupDateTime: pickupDateTime,
      };

      console.log('Sending Pickup Request:', requestData);

      const response = await axios.post('http://localhost:5000/request/create', requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Scrap request created successfully:', response.data);

      // Show the success modal instead of navigating away immediately
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error creating scrap request:', error);
      // Handle error here, e.g., show an error message to the user
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    navigate('/user');
  };

  return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <button onClick={() => navigate(-1)} className="text-blue-500 underline mb-4">
            Back to Previous Page
          </button>
          <div className="flex">
            <img
                src={product?.imageUrl}
                alt={product?.name}
                className="h-64 w-64 object-cover rounded-md"
            />
            <div className="ml-6">
              <p className="text-gray-700 mt-2">Price: Rs. {product?.price}</p>
              <p className="text-gray-700">Dealer: {product?.scrapDealerId}</p>
              <button
                  onClick={handleRequestPickup}
                  className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Request Pickup
              </button>

              {showPickupForm && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block">
                        Preferred Date:
                        <input
                            type="date"
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block">
                        Preferred Time:
                        <input
                            type="time"
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                        />
                      </label>
                    </div>
                    <div>
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
                    </div>
                    <div>
                      <label className="block">
                        City:
                        <input
                            type="text"
                            value={address.city}
                            onChange={(e) => setAddress({ ...address, city: e.target.value })}
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                            placeholder="Enter city"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block">
                        Pincode:
                        <input
                            type="text"
                            value={address.pincode}
                            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                            placeholder="Enter pincode"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block">
                        State:
                        <input
                            type="text"
                            value={address.state}
                            onChange={(e) => setAddress({ ...address, state: e.target.value })}
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                            placeholder="Enter state"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block">
                        Country:
                        <input
                            type="text"
                            value={address.country}
                            onChange={(e) => setAddress({ ...address, country: e.target.value })}
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                            placeholder="Enter country"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block">
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
                    <div>
                      <label className="block">
                        User ID:
                        <input
                            type="text"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                            placeholder="Enter User ID"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block">
                        Scrap Dealer ID:
                        <input
                            type="text"
                            value={scrapDealerId}
                            onChange={(e) => setScrapDealerId(e.target.value)}
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                            placeholder="Enter Scrap Dealer ID"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block">
                        Scrap Item ID:
                        <input
                            type="text"
                            value={scrapItemId}
                            onChange={(e) => setScrapItemId(e.target.value)}
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                            placeholder="Enter Scrap Item ID"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block">
                        Quantity:
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="block w-full mt-2 p-2 border border-gray-300 rounded"
                            placeholder="Enter Quantity"
                        />
                      </label>
                    </div>
                    <div className="col-span-2">
                      <button
                          onClick={handleConfirmPickup}
                          className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccessModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl mb-4">Request Created</h2>
                <button
                    onClick={handleModalClose}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  OK
                </button>
              </div>
            </div>
        )}
      </div>
  );
};

export default ProductDetail;
