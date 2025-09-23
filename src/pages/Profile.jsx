import React, { useState, useEffect } from 'react';
import { eventService } from '../services/eventService';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const profileData = await eventService.getUserProfile();
      setProfile(profileData);
      setFormData(profileData);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleSave = async () => {
    try {
      setProfile(formData);
      setEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Error updating profile: ' + error.message);
    }
  };

  const handleCancel = () => {
    setFormData(profile);
    setEditing(false);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      alert('Logged out successfully!');
      window.location.href = '/';
    }
  };

  if (!profile) {
    return <div className="loading">Loading profile...</div>;
  }

  return (
    <div className="profile-page">
      <div className="page-header">
        <h1>👤 Profile</h1>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          {!editing ? (
            <>
              <div className="profile-info">
                <div className="info-item">
                  <strong>Name:</strong> {profile.name}
                </div>
                <div className="info-item">
                  <strong>Email:</strong> {profile.email}
                </div>
                <div className="info-item">
                  <strong>Role:</strong> {profile.role}
                </div>
                <div className="info-item">
                  <strong>Member since:</strong> {new Date(profile.joinedDate).toLocaleDateString()}
                </div>
              </div>

              <div className="profile-actions">
                <button 
                  className="btn btn-primary"
                  onClick={() => setEditing(true)}
                >
                  Edit Profile
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="profile-form">
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="profile-actions">
                <button className="btn btn-primary" onClick={handleSave}>
                  Save Changes
                </button>
                <button className="btn btn-outline" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>

        <div className="profile-stats">
          <h3>Event Statistics</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Events Attended</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">Upcoming Events</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Cities Visited</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;