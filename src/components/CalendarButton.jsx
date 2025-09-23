import React, { useState } from 'react';
import { calendarService } from '../services/calendarService';

const CalendarButton = ({ event }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleGoogleCalendar = () => {
    const url = calendarService.generateGoogleCalendarUrl(event);
    window.open(url, '_blank', 'noopener,noreferrer');
    setShowOptions(false);
  };

  const handleOutlookCalendar = () => {
    const url = calendarService.generateOutlookCalendarUrl(event);
    window.open(url, '_blank', 'noopener,noreferrer');
    setShowOptions(false);
  };

  const handleDownloadICS = () => {
    calendarService.downloadICSFile(event);
    setShowOptions(false);
  };

  const handleAppleCalendar = () => {
    calendarService.addToAppleCalendar(event);
    setShowOptions(false);
  };

  const handleEmail = () => {
    const url = calendarService.generateEmailLink(event);
    window.location.href = url;
    setShowOptions(false);
  };

  return (
    <div className="calendar-button">
      <button 
        className="btn btn-outline"
        onClick={() => setShowOptions(!showOptions)}
      >
        📅 Add to Calendar
      </button>

      {showOptions && (
        <div className="calendar-options">
          <button onClick={handleGoogleCalendar}>
            <span>📊</span> Google Calendar
          </button>
          <button onClick={handleOutlookCalendar}>
            <span>📧</span> Outlook Calendar
          </button>
          <button onClick={handleDownloadICS}>
            <span>📥</span> Download ICS File
          </button>
          <button onClick={handleAppleCalendar}>
            <span>🍎</span> Apple Calendar
          </button>
          <button onClick={handleEmail}>
            <span>✉️</span> Email Invite
          </button>
        </div>
      )}
    </div>
  );
};

export default CalendarButton;