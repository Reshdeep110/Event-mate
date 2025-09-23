import React, { useState, useEffect } from 'react';
import EventList from '../components/EventList';
import { eventService } from '../services/eventService';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    fetchEvents();
  }, [selectedCity, searchTerm]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const filters = {};
      if (selectedCity) filters.city = selectedCity;
      if (searchTerm) filters.search = searchTerm;
      
      let eventsData;
      if (searchTerm || selectedCity) {
        // If searching or filtering, get filtered events
        eventsData = await eventService.getEvents(filters);
      } else {
        // Otherwise, get upcoming events (first 20)
        const allEvents = await eventService.getEvents(filters);
        eventsData = allEvents.slice(0, 20); // Show first 20 events
      }
      
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const cities = eventService.getCities();

  const handleSearch = (e) => {
    e.preventDefault();
    fetchEvents();
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Discover Amazing Events</h1>
          <p>Find and book tickets for the best events in your city</p>
        </div>
      </div>

      <div className="search-section">
        <div className="container">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-group">
              <div className="search-icon">🔍</div>
              <input
                type="text"
                placeholder="Search events by name, category, or organizer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <select 
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="city-select"
            >
              <option value="">All Cities</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            <button type="submit" className="btn btn-primary search-btn">
              Search
            </button>
            
            {(searchTerm || selectedCity) && (
              <button type="button" onClick={clearFilters} className="btn btn-outline clear-btn">
                Clear Filters
              </button>
            )}
          </form>
        </div>
      </div>

      <div className="events-section">
        <div className="container">
          <div className="section-header">
            <h2>
              {searchTerm || selectedCity ? 'Search Results' : 'Upcoming Events'}
              <span className="events-count"> ({events.length} events)</span>
            </h2>
            {!searchTerm && !selectedCity && (
              <p>Discover the best events happening around you</p>
            )}
          </div>
          
          <EventList events={events} loading={loading} />
          
          {!loading && events.length === 0 && (
            <div className="no-events">
              <div className="no-events-icon">🎭</div>
              <h3>No events found</h3>
              <p>Try adjusting your search criteria or browse all events</p>
              <button onClick={clearFilters} className="btn btn-primary">
                Browse All Events
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;