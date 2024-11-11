import React, { useState } from 'react';

const ProfileDisplay = ({ user, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    bio: user.bio,
  });

  const handleChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedData);
    setIsEditing(false);
  };

  return (
    <div className="text-center p-6 bg-gray-800 text-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="mb-4 relative">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-gray-800 shadow-md"
        />
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-left text-gray-300">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={updatedData.firstName}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-left text-gray-300">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={updatedData.lastName}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-left text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={updatedData.email}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-left text-gray-300">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={updatedData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="bio" className="block text-left text-gray-300">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={updatedData.bio}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md"
            />
          </div>
          <button type="submit" className="w-full py-2 bg-gray-600 text-gray-100 rounded-md hover:bg-gray-500">
            Update
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">{user.firstName} {user.lastName}</h1>
          <p className="text-lg italic">{user.bio}</p>
          <p className="text-sm">Email: {user.email}</p>
          <p className="text-sm">Phone: {user.phoneNumber}</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
              Edit Profile
            </button>
            <button onClick={onDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500">
              Delete Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDisplay;