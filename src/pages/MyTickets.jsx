import React, { useState, useEffect } from 'react';
import TicketCard from '../components/TicketCard';
import { eventService } from '../services/eventService';

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const ticketsData = await eventService.getMyTickets();
      setTickets(ticketsData);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="my-tickets-page">
        <div className="page-header">
          <h1>🎟️ My Tickets</h1>
        </div>
        <div className="loading">Loading your tickets...</div>
      </div>
    );
  }

  return (
    <div className="my-tickets-page">
      <div className="page-header">
        <h1>🎟️ My Tickets</h1>
        <p>Manage your event tickets and access them anytime</p>
      </div>

      {tickets.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🎭</div>
          <h3>No tickets yet</h3>
          <p>Book your first event to see tickets here</p>
          <button 
            className="btn btn-primary"
            onClick={() => window.location.href = '/events'}
          >
            Browse Events
          </button>
        </div>
      ) : (
        <div className="tickets-container">
          <div className="tickets-stats">
            <div className="stat">
              <span className="stat-number">{tickets.length}</span>
              <span className="stat-label">Total Tickets</span>
            </div>
            <div className="stat">
              <span className="stat-number">
                {tickets.filter(t => new Date(t.eventDate) >= new Date()).length}
              </span>
              <span className="stat-label">Upcoming Events</span>
            </div>
          </div>

          <div className="tickets-list">
            {tickets.map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTickets;