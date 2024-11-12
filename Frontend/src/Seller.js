import React, { useEffect, useState } from 'react';
import './dashboard_style.css';

function SellerDashboard() {
    const [currentSection, setCurrentSection] = useState('upload');

    useEffect(() => {
        fetchOrders();
        const interval = setInterval(fetchOrders, 10000);
        return () => clearInterval(interval);
    }, []);

    const fetchOrders = () => {
        fetch('https://your-backend-api.com/getOrders') // Replace with actual API endpoint
            .then(response => response.json())
            .then(data => {
                const ordersTableBody = document.getElementById('ordersTableBody');
                ordersTableBody.innerHTML = ''; // Clear current table rows

                data.orders.forEach(order => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${order.id}</td>
                        <td>${order.customerName}</td>
                        <td id="status-${order.id}">Loading...</td>
                        <td>${order.date}</td>
                        <td><button onClick={() => cancelOrder('${order.id}')}">Cancel</button></td>
                    `;
                    ordersTableBody.appendChild(row);

                    fetch(`https://your-backend-api.com/getOrderStatus?id=${order.id}`)
                        .then(response => response.json())
                        .then(statusData => {
                            document.getElementById(`status-${order.id}`).textContent = statusData.status;
                        })
                        .catch(() => {
                            document.getElementById(`status-${order.id}`).textContent = 'Error';
                        });
                });
            })
            .catch(error => console.error('Error fetching orders:', error));
    };

    const cancelOrder = (orderId) => {
        alert(`Cancel request for order ${orderId} has been sent.`);
        // Implement order cancellation logic here
    };

    const handleSectionChange = (section) => {
        setCurrentSection(section);
    };

    const logout = () => {
        alert('Logging out...');
        window.location.href = 'index.html'; // Adjust to use React Router's navigate if needed
    };

    const handlePasswordChange = (event) => {
        event.preventDefault();
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword !== confirmPassword) {
            alert('New password and confirmation do not match. Please try again.');
            return;
        }

        fetch('https://your-backend-api.com/updatePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                currentPassword,
                newPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Password updated successfully.');
                event.target.reset();
            } else {
                alert(`Error: ${data.message}`);
            }
        })
        .catch(error => {
            console.error('Error updating password:', error);
            alert('There was an error updating your password. Please try again later.');
        });
    };

    return (
        <div className="dashboard-container">
            <header>
                <h2 className="logo">Seller Dashboard</h2>
                <nav className="navigation">
                    <a href="#" onClick={() => handleSectionChange('upload')}>Upload Files</a>
                    <a href="#" onClick={() => handleSectionChange('orders')}>Track Orders</a>
                    <a href="#" onClick={() => handleSectionChange('manage-items')}>Manage Items</a>
                    <a href="#" onClick={() => handleSectionChange('analytics')}>Analytics</a>
                    <a href="#" onClick={() => handleSectionChange('settings')}>Settings</a>
                    <button className="btnLogout" onClick={logout}>Logout</button>
                </nav>
            </header>

            <section className="content-wrapper">
                {currentSection === 'upload' && (
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
                )}

                {currentSection === 'orders' && (
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
                                {/* Orders will be dynamically populated */}
                            </tbody>
                        </table>
                    </div>
                )}

                {currentSection === 'manage-items' && (
                    <div id="manage-items" className="dashboard-section">
                        <h3>Manage Items</h3>
                        <button onClick={() => alert('Functionality to add new items will be implemented.')}>Add New Item</button>
                        <ul className="item-list">
                            <li>Item 1 <button>Edit</button> <button>Delete</button></li>
                            <li>Item 2 <button>Edit</button> <button>Delete</button></li>
                        </ul>
                    </div>
                )}

                {currentSection === 'analytics' && (
                    <div id="analytics" className="dashboard-section">
                        <h3>Analytics</h3>
                        <p>Graphs and data visualization can be embedded here.</p>
                    </div>
                )}

                {currentSection === 'settings' && (
                    <div id="settings" className="dashboard-section">
                        <h3>Settings</h3>
                        <p>Seller profile and account settings can be modified here.</p>
                        <h4>Change Password</h4>
                        <form id="passwordChangeForm" className="password-change-form" onSubmit={handlePasswordChange}>
                            <label htmlFor="currentPassword">Current Password:</label>
                            <input type="password" id="currentPassword" name="currentPassword" placeholder="Enter current password" required />
                            <label htmlFor="newPassword">New Password:</label>
                            <input type="password" id="newPassword" name="newPassword" placeholder="Enter new password" required />
                            <label htmlFor="confirmPassword">Confirm New Password:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm new password" required />
                            <button type="submit" className="btn">Update Password</button>
                        </form>
                    </div>
                )}
            </section>
        </div>
    );
}

export default SellerDashboard;
