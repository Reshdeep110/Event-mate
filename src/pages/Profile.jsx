import React from 'react';
import { useAuth } from '../services/AuthContext';
import Auth from '../components/Auth';

const Profile = () => {
  const { user, logout } = useAuth();

  console.log('Current user:', user); // Debug log

  // If user is not logged in, show auth component
  if (!user) {
    return <Auth />;
  }

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Profile Page</h1>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
        <h2>User Information</h2>
        <p><strong>Name:</strong> {user.name || 'Not set'}</p>
        <p><strong>Email:</strong> {user.email || 'Not set'}</p>
        <p><strong>Role:</strong> {user.role || 'user'}</p>
        <button 
          onClick={handleLogout}
          style={{
            background: '#ff4757',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;