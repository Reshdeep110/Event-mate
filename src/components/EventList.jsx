import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events, loading }) => {
  if (loading) {
    return (
      <div className="event-list loading">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="event-card skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
              <div className="skeleton-title"></div>
              <div className="skeleton-meta"></div>
              <div className="skeleton-description"></div>
              <div className="skeleton-footer"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!events || events.length === 0) {
    return (
      <div className="event-list empty">
        <div className="empty-state">
          <h3>No events found</h3>
          <p>Try adjusting your search filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;