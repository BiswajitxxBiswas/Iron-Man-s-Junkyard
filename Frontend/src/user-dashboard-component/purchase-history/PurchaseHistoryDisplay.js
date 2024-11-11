// PurchaseHistoryDisplay.js
import React from 'react';

const PurchaseHistoryDisplay = ({ purchaseHistory }) => {
  return (
  <div>
    <div className="w-64 text-white">
    {/* Sidebar content */}
     </div>
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-lg mx-auto my-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Purchase History</h2>
      
      {purchaseHistory.length > 0 ? (
        <ul className="space-y-4">
          {purchaseHistory.map((purchase) => (
            <li key={purchase.id} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
              <div>
                <h3 className="text-lg font-semibold text-indigo-600">{purchase.item}</h3>
                <p className="text-sm text-gray-600">{purchase.date}</p>
              </div>
              <span className="text-lg font-medium text-green-600">{purchase.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No purchases found.</p>
      )}
    </div>
    </div>
  );
};

export default PurchaseHistoryDisplay;
