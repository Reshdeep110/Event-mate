import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { calendarService } from '../services/calendarService';
import { eventService } from '../services/eventService';

const TicketCard = ({ ticket }) => {
  const formatDate = (dateString) => {
    return eventService.formatDate(dateString);
  };

  const handleAddToCalendar = () => {
    const event = {
      title: ticket.eventTitle,
      date: ticket.eventDate,
      time: ticket.eventTime,
      location: ticket.eventLocation,
      description: `Ticket for ${ticket.eventTitle}`
    };
    calendarService.downloadICSFile(event);
  };

  const handleDownloadTicket = () => {
    const ticketContent = `
      EVENT TICKET
      ============
      Event: ${ticket.eventTitle}
      Date: ${formatDate(ticket.eventDate)} 
      Time: ${ticket.eventTime}
      Location: ${ticket.eventLocation}
      City: ${ticket.eventCity}
      Ticket Type: ${ticket.ticketType}
      Quantity: ${ticket.quantity}
      Total Paid: ${ticket.totalPrice === 0 ? 'Free' : `₹${ticket.totalPrice}`}
      Booking ID: ${ticket.id}
      Status: ${ticket.status}
      
      Please present this ticket at the venue.
      QR Code: ${ticket.qrData}
    `;
    
    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ticket-${ticket.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3>{ticket.eventTitle}</h3>
        <span className="ticket-status confirmed">Confirmed</span>
      </div>

      <div className="ticket-content">
        <div className="ticket-info">
          <div className="ticket-details">
            <div className="detail-item">
              <span className="label">📅 Date & Time:</span>
              <span className="value">{formatDate(ticket.eventDate)} | {ticket.eventTime}</span>
            </div>
            <div className="detail-item">
              <span className="label">📍 Location:</span>
              <span className="value">{ticket.eventLocation}, {ticket.eventCity}</span>
            </div>
            <div className="detail-item">
              <span className="label">🎫 Ticket Type:</span>
              <span className="value">{ticket.ticketType}</span>
            </div>
            <div className="detail-item">
              <span className="label">👥 Quantity:</span>
              <span className="value">{ticket.quantity}</span>
            </div>
            <div className="detail-item">
              <span className="label">💰 Total Paid:</span>
              <span className="value">{ticket.totalPrice === 0 ? 'Free' : `₹${ticket.totalPrice}`}</span>
            </div>
            <div className="detail-item">
              <span className="label">📋 Booking ID:</span>
              <span className="value">{ticket.id}</span>
            </div>
            <div className="detail-item">
              <span className="label">📅 Booked On:</span>
              <span className="value">{formatDate(ticket.bookingDate)}</span>
            </div>
          </div>

          <div className="ticket-actions">
            <button className="btn btn-primary" onClick={handleAddToCalendar}>
              📅 Add to Calendar
            </button>
            <button className="btn btn-secondary" onClick={handleDownloadTicket}>
              📄 Download Ticket
            </button>
          </div>
        </div>

        <div className="ticket-qr">
          <QRCodeSVG 
            value={ticket.qrData} 
            size={120}
            level="M"
            includeMargin={true}
          />
          <p className="qr-note">Scan for entry</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;