// PurchaseHistoryContainer.js
import React, { useState, useEffect } from 'react';
import PurchaseHistoryDisplay from './PurchaseHistoryDisplay';

const PurchaseHistoryContainer = () => {
  // Mock data for purchase history
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  // Fetch or add to the purchase history list dynamically (for illustration)
  useEffect(() => {
    const fetchPurchaseHistory = () => {
      // Mock fetch or replace with actual API call
      const data = [
        { id: 1, item: "Iron Man Suit Component", price: "$200", date: "2024-11-08" },
        { id: 2, item: "Repulsor Glove", price: "$150", date: "2024-11-09" },
        // Additional items can be added dynamically here
      ];
      setPurchaseHistory(data);
    };

    fetchPurchaseHistory();
  }, []);

  return <PurchaseHistoryDisplay purchaseHistory={purchaseHistory} />;
};

export default PurchaseHistoryContainer;
