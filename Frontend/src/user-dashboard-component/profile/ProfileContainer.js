import React, { useState, useEffect } from 'react';
import ProfileDisplay from './ProfileDisplay';
import Loader from '../shared/Loader';

const ProfileContainer = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mockUserData = {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony.stark@starkindustries.com',
    phoneNumber: '123-456-7890',
    bio: 'Genius, billionaire, playboy, philanthropist.',
    profilePicture: 'https://example.com/tony-stark.jpg',
  };

  useEffect(() => {
    setTimeout(() => {
      setUser(mockUserData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleUpdate = (updatedData) => {
    setUser(updatedData);
  };

  const handleDelete = () => {
    setUser(null);
  };

  if (loading) return <Loader type="spinner" />;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  return (
    <div className="flex min-h-screen">
      <div className="w-64 text-white">
        {/* Sidebar content */}
      </div>

      <div className="flex-1 p-6">
        <div className="relative bg-gray-800 min-h-screen flex justify-center items-center bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 w-full max-w-lg p-6 bg-gray-900 text-gray-100 rounded-xl shadow-md backdrop-blur-sm">
            <ProfileDisplay 
              user={user}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;