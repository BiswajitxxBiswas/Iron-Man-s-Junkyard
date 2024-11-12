// src/components/PaymentMethods.js

import React, { useState, useEffect } from 'react';

const PaymentMethods = () => {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});

  // Load saved cards from localStorage on component mount
  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
    setCards(savedCards);
  }, []);

  // Save cards to localStorage whenever cards state changes
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const { cardholderName, cardNumber, expiryDate, cvv } = form;

    if (!cardholderName.trim()) newErrors.cardholderName = 'Cardholder name is required.';
    if (!/^\d{16}$/.test(cardNumber)) newErrors.cardNumber = 'Card number must be 16 digits.';
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) newErrors.expiryDate = 'Expiry date must be in MM/YY format.';
    if (!/^\d{3}$/.test(cvv)) newErrors.cvv = 'CVV must be 3 digits.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const maskCardNumber = (number) => '**** **** **** ' + number.slice(-4);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newCard = {
      id: Date.now(),
      cardholderName: form.cardholderName,
      cardNumber: form.cardNumber,
      expiryDate: form.expiryDate,
      cvv: form.cvv,
    };

    setCards([...cards, newCard]);
    setForm({
      cardholderName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    });
  };

  const handleDelete = (id) => {
    const updatedCards = cards.filter(card => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Manage Your Payment Methods</h2>
      
      {/* Add New Card Form */}
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Add a New Card</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="cardholderName" className="block text-gray-700 font-medium">Cardholder Name</label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={form.cardholderName}
              onChange={handleChange}
              className={`w-full p-3 mt-1 border ${errors.cardholderName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
              placeholder="John Doe"
            />
            {errors.cardholderName && <p className="text-red-500 text-sm mt-1">{errors.cardholderName}</p>}
          </div>

          <div>
            <label htmlFor="cardNumber" className="block text-gray-700 font-medium">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
              maxLength="16"
              className={`w-full p-3 mt-1 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
              placeholder="1234567812345678"
            />
            {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="expiryDate" className="block text-gray-700 font-medium">Expiry Date (MM/YY)</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={form.expiryDate}
                onChange={handleChange}
                placeholder="08/25"
                className={`w-full p-3 mt-1 border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
              />
              {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
            </div>
            
            <div className="flex-1">
              <label htmlFor="cvv" className="block text-gray-700 font-medium">CVV</label>
              <input
                type="password"
                id="cvv"
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                maxLength="3"
                className={`w-full p-3 mt-1 border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                placeholder="123"
              />
              {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white rounded-md shadow-md font-semibold hover:bg-indigo-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save Card
          </button>
        </form>
      </div>

      {/* Saved Cards */}
      <div className="max-w-3xl mx-auto mt-8 space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Your Saved Cards</h3>
        {cards.length === 0 ? (
          <p className="text-gray-600 text-center">No saved cards. Add a new card to get started.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {cards.map(card => (
              <div key={card.id} className="bg-white p-5 rounded-lg shadow-lg flex justify-between items-center transition-transform transform hover:scale-105">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{card.cardholderName}</h4>
                  <p className="text-gray-700 font-mono">{maskCardNumber(card.cardNumber)}</p>
                  <p className="text-gray-500">Expires: {card.expiryDate}</p>
                </div>
                <button
                  onClick={() => handleDelete(card.id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                  title="Delete Card"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethods;
