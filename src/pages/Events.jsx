import React, { useState, useEffect } from 'react';
import EventList from '../components/EventList';
import { eventService } from '../services/eventService';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    city: '',
    category: '',
    price: ''
  });

  useEffect(() => {
    fetchEvents();
  }, [filters]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const eventsData = await eventService.getEvents(filters);
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      city: '',
      category: '',
      price: ''
    });
  };

  const categories = eventService.getCategories();
  const cities = eventService.getCities();

  return (
    <div className="events-page">
      <div className="page-header">
        <h1>All Events</h1>
        <p>Discover events that match your interests</p>
      </div>

      <div className="filters-section">
        <div className="filters-container">
          <input
            type="text"
            placeholder="Search events..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="filter-input"
          />

          <select 
            value={filters.city}
            onChange={(e) => handleFilterChange('city', e.target.value)}
            className="filter-select"
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <select 
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="filter-select"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select 
            value={filters.price}
            onChange={(e) => handleFilterChange('price', e.target.value)}
            className="filter-select"
          >
            <option value="">All Prices</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>

          <button onClick={clearFilters} className="btn btn-outline">
            Clear Filters
          </button>
        </div>
      </div>

      <div className="events-container">
        <EventList events={events} loading={loading} />
      </div>
    </div>
  );
};

export default Events;