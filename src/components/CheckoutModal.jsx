import React, { useState } from 'react';
import { eventService } from '../services/eventService';
import { calendarService } from '../services/calendarService';
import PaymentModal from './PaymentModal';

const CheckoutModal = ({ event, onClose, onBookingSuccess }) => {
  const [quantity, setQuantity] = useState(1);
  const [ticketType, setTicketType] = useState('General Admission');
  const [showPayment, setShowPayment] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const selectedTicketType = event.ticketTypes?.find(t => t.name === ticketType) || {
    name: 'General Admission',
    price: event.price,
    quantity: event.capacity - event.booked
  };

  const totalPrice = selectedTicketType.price * quantity;

  const handleProceedToPayment = () => {
    setBookingData({
      eventId: event.id,
      ticketType,
      quantity,
      totalPrice
    });
    setShowPayment(true);
  };

  const handlePaymentSuccess = async (paymentResult) => {
    try {
      const bookedTicket = await eventService.bookTicket(
        bookingData.eventId, 
        bookingData.ticketType, 
        bookingData.quantity
      );
      
      // Add payment details to ticket
      bookedTicket.payment = paymentResult;
      bookedTicket.paymentStatus = 'completed';
      
      if (onBookingSuccess) {
        onBookingSuccess(bookedTicket);
      }
      
      setShowPayment(false);
      onClose();
      
    } catch (error) {
      console.error('Booking failed after payment:', error);
      alert('Booking failed after payment. Please contact support.');
    }
  };

  if (showPayment) {
    return (
      <PaymentModal
        amount={totalPrice}
        eventTitle={event.title}
        onSuccess={handlePaymentSuccess}
        onClose={() => setShowPayment(false)}
        ticketDetails={bookingData}
      />
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Book Tickets for: {event.title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="booking-form">
          {event.ticketTypes && event.ticketTypes.length > 1 && (
            <div className="form-group">
              <label>Ticket Type:</label>
              <select 
                value={ticketType}
                onChange={(e) => setTicketType(e.target.value)}
                className="form-select"
              >
                {event.ticketTypes.map(type => (
                  <option key={type.name} value={type.name}>
                    {type.name} - {type.price === 0 ? 'Free' : `₹${type.price}`}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="form-group">
            <label>Quantity:</label>
            <div className="quantity-controls">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity >= selectedTicketType.quantity}
              >
                +
              </button>
            </div>
          </div>

          <div className="price-summary">
            <div className="price-item">
              <span>{ticketType} × {quantity}:</span>
              <span>{selectedTicketType.price === 0 ? 'Free' : `₹${selectedTicketType.price * quantity}`}</span>
            </div>
            <div className="price-total">
              <strong>Total Amount:</strong>
              <strong>{totalPrice === 0 ? 'Free' : `₹${totalPrice}`}</strong>
            </div>
          </div>

          <div className="modal-actions">
            <button 
              className="btn btn-primary btn-large"
              onClick={totalPrice === 0 ? handleProceedToPayment : handleProceedToPayment}
              disabled={selectedTicketType.quantity === 0}
            >
              {selectedTicketType.quantity === 0 ? 'Sold Out' : 
               totalPrice === 0 ? 'Register Now' : `Pay ₹${totalPrice}`}
            </button>
            <button className="btn btn-outline" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;