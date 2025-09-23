import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CheckoutModal from './CheckoutModal';
import CalendarButton from './CalendarButton';
import { eventService } from '../services/eventService';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    try {
      setLoading(true);
      const eventData = await eventService.getEventById(id);
      setEvent(eventData);
    } catch (error) {
      console.error('Error fetching event:', error);
      navigate('/events');
    } finally {
      setLoading(false);
    }
  };

  const handleBookingSuccess = (ticket) => {
    console.log('Booking successful:', ticket);
  };

  if (loading) {
    return <div className="loading">Loading event details...</div>;
  }

  if (!event) {
    return (
      <div className="error-page">
        <h2>Event not found</h2>
        <button onClick={() => navigate('/events')} className="btn btn-primary">
          Back to Events
        </button>
      </div>
    );
  }

  return (
    <div className="event-details">
      <div className="event-header">
        <button onClick={() => navigate(-1)} className="back-button">← Back</button>
        <div className="header-actions">
          <CalendarButton event={event} />
        </div>
      </div>

      <div className="event-hero">
        <div className="event-image">
          <img src={event.image} alt={event.title} />
        </div>
        
        <div className="event-info">
          <h1>{event.title}</h1>
          
          <div className="event-meta">
            <div className="meta-item">
              <span className="icon">📅</span>
              <div>
                <strong>Date & Time</strong>
                <p>{eventService.formatDate(event.date)}</p>
                <p>{event.time} {event.endTime && `- ${event.endTime}`}</p>
              </div>
            </div>
            
            <div className="meta-item">
              <span className="icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>{event.location}</p>
                <p>{event.city}</p>
              </div>
            </div>
            
            <div className="meta-item">
              <span className="icon">👤</span>
              <div>
                <strong>Organizer</strong>
                <p>{event.organizer}</p>
              </div>
            </div>
          </div>

          <div className="event-actions">
            <button 
              className="btn btn-primary btn-large"
              onClick={() => setShowCheckout(true)}
              disabled={event.capacity - event.booked === 0}
            >
              {event.capacity - event.booked === 0 ? 'Sold Out' : 'Book Now'}
            </button>
            <div className="availability">
              {/* {event.capacity - event.booked} spots remaining */}
            </div>
          </div>
        </div>
      </div>

      <div className="event-content">
        <div className="description-section">
          <h2>About This Event</h2>
          <p>{event.longDescription || event.description}</p>
        </div>

        <div className="event-stats">
          <div className="stat-card">
            <span className="stat-number">{event.capacity}</span>
            <span className="stat-label">Total Capacity</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{event.booked}</span>
            <span className="stat-label">Already Registered</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{event.capacity}</span>
            <span className="stat-label">Available Spots</span>
          </div>
        </div>
      </div>

      {showCheckout && (
        <CheckoutModal 
          event={event} 
          onClose={() => setShowCheckout(false)}
          onBookingSuccess={handleBookingSuccess}
        />
      )}
    </div>
  );
};

export default EventDetails;