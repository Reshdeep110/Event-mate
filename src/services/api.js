import { mockEvents, userProfile } from '../data/mockData';

class EventAPI {
  constructor() {
    // Clear existing data and use fresh mock data
    localStorage.removeItem('events');
    localStorage.removeItem('tickets');
    localStorage.removeItem('userProfile');
    
    this.events = this.cleanEventData([...mockEvents]);
    this.tickets = [];
    this.userProfile = { ...userProfile };
    this.saveData();
  }

  // Clean event data to ensure organizers are strings
  cleanEventData(events) {
    return events.map(event => ({
      ...event,
      organizer: this.ensureStringOrganizer(event.organizer)
    }));
  }

  ensureStringOrganizer(organizer) {
    if (typeof organizer === 'string') {
      return organizer;
    }
    if (typeof organizer === 'object' && organizer !== null) {
      return organizer.name || 'Unknown Organizer';
    }
    return 'Unknown Organizer';
  }

  saveData() {
    localStorage.setItem('events', JSON.stringify(this.events));
    localStorage.setItem('tickets', JSON.stringify(this.tickets));
    localStorage.setItem('userProfile', JSON.stringify(this.userProfile));
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getEvents(filters = {}) {
    await this.delay(300);
    
    let filteredEvents = this.events;
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredEvents = filteredEvents.filter(event =>
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm) ||
        event.category.toLowerCase().includes(searchTerm)
      );
    }
    
    if (filters.city) {
      filteredEvents = filteredEvents.filter(event => 
        event.city.toLowerCase().includes(filters.city.toLowerCase())
      );
    }
    
    return filteredEvents;
  }

  async getEventById(id) {
    await this.delay(200);
    const event = this.events.find(e => e.id === parseInt(id));
    if (!event) throw new Error('Event not found');
    return event;
  }

  async bookTicket(eventId, quantity = 1) {
    await this.delay(500);
    
    const event = await this.getEventById(eventId);
    
    if (event.booked + quantity > event.capacity) {
      throw new Error('Not enough tickets available');
    }
    
    const ticket = {
      id: Date.now(),
      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.date,
      eventTime: event.time,
      eventLocation: event.location,
      bookingDate: new Date().toISOString().split('T')[0],
      quantity,
      totalPrice: event.price * quantity,
      status: 'confirmed',
      qrData: `event-${event.id}-${Date.now()}`
    };
    
    this.tickets.push(ticket);
    event.booked += quantity;
    this.saveData();
    
    return ticket;
  }

  async getMyTickets() {
    await this.delay(300);
    return this.tickets;
  }

  async getUserProfile() {
    await this.delay(200);
    return this.userProfile;
  }
}

export const api = new EventAPI();