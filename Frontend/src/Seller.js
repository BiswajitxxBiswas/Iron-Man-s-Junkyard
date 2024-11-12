import React, { useEffect, useState } from 'react';
import './dashboard_style.css';

const Dashboard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetchOrders(); // Initial fetch when the component mounts
        const interval = setInterval(fetchOrders, 10000); // Polling every 10 seconds
        return () => clearInterval(interval);
    }, []);

    const slideToSection = (direction) => {
        const totalSections = 5; // Adjust if the number of sections changes
        let newIndex = currentIndex + direction;
        newIndex = Math.max(0, Math.min(newIndex, totalSections - 1)); // Bound the index
        setCurrentIndex(newIndex);
    };

    const fetchOrders = async () => {
        try {
            const response = await fetch('https://your-backend-api.com/getOrders'); // Replace with actual endpoint
            const data = await response.json();
            updateOrdersTable(data.orders);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const updateOrdersTable = (orders) => {
        // Code to update the table dynamically
    };

    const cancelOrder = (orderId) => {
        alert(`Cancel request for order ${orderId} has been sent.`);
    };

    const logout = () => {
        alert('Logging out...');
        window.location.href = 'index.html'; // Adjust as needed for your React routing
    };

    return (
        <div>
            <header>
                <h2 className="logo">Seller Dashboard</h2>
                <nav className="navigation">
                    <a href="#" data-target="upload" onClick={() => slideToSection(0)}>Upload Files</a>
                    <a href="#" data-target="orders" onClick={() => slideToSection(1)}>Track Orders</a>
                    <a href="#" data-target="manage-items" onClick={() => slideToSection(2)}>Manage Items</a>
                    <a href="#" data-target="analytics" onClick={() => slideToSection(3)}>Analytics</a>
                    <a href="#" data-target="settings" onClick={() => slideToSection(4)}>Settings</a>
                    <button className="btnLogout" onClick={logout}>Logout</button>
                </nav>
            </header>

            <section className="dashboard-container">
                <div className="content-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    <div id="upload" className="dashboard-section">
                        <h3>Upload Scrap</h3>
                        <form className="upload-form">
                            <label htmlFor="itemImage">Upload Image:</label>
                            <input type="file" id="itemImage" name="itemImage" accept="image/*" required />
                            
                            <label htmlFor="itemQuantity">Quantity:</label>
                            <input type="number" id="itemQuantity" name="itemQuantity" placeholder="Enter quantity" min="1" required />
                            
                            <label htmlFor="itemName">Item Name:</label>
                            <input type="text" id="itemName" name="itemName" placeholder="Enter item name" required />
                            
                            <label htmlFor="itemDescription">Description:</label>
                            <textarea id="itemDescription" name="itemDescription" placeholder="Enter item description" rows="4" required></textarea>
                            
                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>

                    <div id="orders" className="dashboard-section">
                        <h3>Track Orders</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Customer Name</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="ordersTableBody">
                                {/* Rows will be populated dynamically */}
                            </tbody>
                        </table>
                    </div>

                    <div id="manage-items" className="dashboard-section">
                        <h3>Manage Items</h3>
                        <button onClick={() => alert('Functionality to add new items will be implemented.')}>Add New Item</button>
                        <ul className="item-list">
                            <li>Item 1 <button>Edit</button> <button>Delete</button></li>
                            <li>Item 2 <button>Edit</button> <button>Delete</button></li>
                        </ul>
                    </div>

                    <div id="analytics" className="dashboard-section">
                        <h3>Analytics</h3>
                        <p>Graphs and data visualization can be embedded here.</p>
                    </div>

                    <div id="settings" className="dashboard-section">
                        <h3>Settings</h3>
                        <p>Seller profile and account settings can be modified here.</p>

                        <h4>Change Password</h4>
                        <form id="passwordChangeForm" className="password-change-form" onSubmit={(e) => {
                            e.preventDefault();
                            alert('Password change functionality is not yet implemented.');
                        }}>
                            <label htmlFor="currentPassword">Current Password:</label>
                            <input type="password" id="currentPassword" name="currentPassword" placeholder="Enter current password" required />
                            
                            <label htmlFor="newPassword">New Password:</label>
                            <input type="password" id="newPassword" name="newPassword" placeholder="Enter new password" required />
                            
                            <label htmlFor="confirmPassword">Confirm New Password:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm new password" required />
                            
                            <button type="submit" className="btn">Update Password</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
