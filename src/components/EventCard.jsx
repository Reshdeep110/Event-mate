import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { eventService } from '../services/eventService';

const EventCard = ({ event }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Safe default values
  const safeEvent = event || {};
  const {
    id = '1',
    title = 'Event Title',
    date = '2025-01-01',
    time = '10:00 AM',
    location = 'Location',
    city = 'City',
    description = 'Event description',
    price = 0,
    capacity = 100,
    booked = 0,
    organizer = 'Organizer',
    category = 'General'
  } = safeEvent;

  const formatDate = (dateString) => {
    try {
      return eventService.formatDate(dateString);
    } catch (error) {
      return 'Date TBA';
    }
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // Safe organizer name extraction
  const getOrganizerName = () => {
    try {
      if (!organizer) return 'Unknown Organizer';
      
      if (typeof organizer === 'string') {
        return organizer;
      }
      
      if (typeof organizer === 'object' && organizer !== null) {
        return organizer.name || 'Unknown Organizer';
      }
      
      return String(organizer); // Fallback: convert to string
    } catch (error) {
      return 'Unknown Organizer';
    }
  };

  // Safe image URL
  const getImageUrl = () => {
    if (imageError) {
      return `https://picsum.photos/600/400?random=${id}`;
    }
    return safeEvent.image || `https://picsum.photos/600/400?random=${id}`;
  };

  // Safe capacity calculation
  const getAvailableSpots = () => {
    try {
      return Math.max(0, capacity - booked);
    } catch (error) {
      return capacity;
    }
  };

  const getBookedPercentage = () => {
    try {
      return capacity > 0 ? Math.round((booked / capacity) * 100) : 0;
    } catch (error) {
      return 0;
    }
  };

  // Don't render if no event
  if (!event) {
    return null;
  }

  return (
    <div className="event-card">
      <div className="event-image">
        {imageLoading && (
          <div className="image-placeholder">
            <div className="loading-spinner"></div>
          </div>
        )}
        <img 
          src={getImageUrl()}
          alt={title}
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{ display: imageLoading ? 'none' : 'block' }}
        />
        {price === 0 && <span className="price-badge free">Free</span>}
        <div className="event-overlay">
          <span className="event-city">{city}</span>
          <span className="event-category">{category}</span>
        </div>
      </div>
      
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
        
        <div className="event-meta">
          <span className="meta-item">
            <span className="meta-icon">📅</span>
            {formatDate(date)} | {time}
          </span>
          <span className="meta-item">
            <span className="meta-icon">📍</span>
            {location}, {city}
          </span>
        </div>
        
        <p className="event-description">{description}</p>
        
        <div className="event-footer">
          <div className="event-price">
            {price === 0 ? (
              <span className="free">Free</span>
            ) : (
              <span className="paid">₹{price}</span>
            )}
          </div>
          
          <div className="event-actions">
            <Link to={`/event/${id}`} className="btn btn-outline">
              Details
            </Link>
            <Link to={`/event/${id}`} className="btn btn-primary">
              {price === 0 ? 'Register' : 'Book Now'}
            </Link>
          </div>
        </div>
        
        <div className="event-capacity">
          <div className="capacity-info">
            <span className="capacity-text">
              {getAvailableSpots()} spots left
            </span>
            <span className="capacity-percent">
              {getBookedPercentage()}% booked
            </span>
          </div>
          <div className="capacity-bar">
            <div 
              className="capacity-fill" 
              style={{ width: `${getBookedPercentage()}%` }}
            ></div>
          </div>
        </div>

        <div className="event-organizer">
          <span>By {getOrganizerName()}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;