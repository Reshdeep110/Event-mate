import { api } from './api';

export const eventService = {
  getEvents: (filters = {}) => api.getEvents(filters),
  
  getEventById: (id) => api.getEventById(id),
  
  bookTicket: (eventId, ticketType, quantity) => api.bookTicket(eventId, ticketType, quantity),
  
  getMyTickets: () => api.getMyTickets(),
  
  getCategories: () => {
    const categories = [...new Set(api.events.map(event => event.category))];
    return categories;
  },
  
  getCities: () => {
    const cities = ['Chennai', 'Bengaluru', 'Hyderabad', 'Mumbai', 'New Delhi'];
    return cities.sort();
  },
  
  formatDate: (dateStr) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  }
};