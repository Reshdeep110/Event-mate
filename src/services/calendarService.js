export const calendarService = {
  // Generate Google Calendar URL with proper formatting
  generateGoogleCalendarUrl(event) {
    const startDate = this.parseEventDateTime(event.date, event.time);
    const endDate = event.endTime 
      ? this.parseEventDateTime(event.date, event.endTime)
      : new Date(startDate.getTime() + (2 * 60 * 60 * 1000));

    const formatGoogleDate = (date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 15) + 'Z';
    };

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: event.title,
      dates: `${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}`,
      details: event.description || event.title,
      location: event.location,
      ctz: 'Asia/Kolkata'
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  },

  // Generate Outlook Calendar URL
  generateOutlookCalendarUrl(event) {
    const startDate = this.parseEventDateTime(event.date, event.time);
    const endDate = event.endTime 
      ? this.parseEventDateTime(event.date, event.endTime)
      : new Date(startDate.getTime() + (2 * 60 * 60 * 1000));

    const params = new URLSearchParams({
      path: '/calendar/action/compose',
      rru: 'addevent',
      subject: event.title,
      startdt: startDate.toISOString(),
      enddt: endDate.toISOString(),
      body: event.description || event.title,
      location: event.location
    });

    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
  },

  // Download ICS file for all calendar apps
  downloadICSFile(event) {
    const startDate = this.parseEventDateTime(event.date, event.time);
    const endDate = event.endTime 
      ? this.parseEventDateTime(event.date, event.endTime)
      : new Date(startDate.getTime() + (2 * 60 * 60 * 1000));

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//EventHub//EN',
      'BEGIN:VEVENT',
      `UID:${event.id}@eventhub.com`,
      `DTSTAMP:${this.formatDateForICS(new Date())}`,
      `DTSTART:${this.formatDateForICS(startDate)}`,
      `DTEND:${this.formatDateForICS(endDate)}`,
      `SUMMARY:${this.escapeICSText(event.title)}`,
      `DESCRIPTION:${this.escapeICSText(event.description || event.title)}`,
      `LOCATION:${this.escapeICSText(event.location)}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    this.downloadFile(icsContent, 'text/calendar', `${event.title.replace(/[^a-z0-9]/gi, '_')}.ics`);
  },

  // Add to Apple Calendar (macOS/iOS)
  addToAppleCalendar(event) {
    this.downloadICSFile(event);
  },

  // Share event via email with calendar attachment
  generateEmailLink(event) {
    const subject = encodeURIComponent(`Event: ${event.title}`);
    const body = encodeURIComponent(
      `You're invited to ${event.title}\n\n` +
      `Date: ${event.date}\n` +
      `Time: ${event.time}${event.endTime ? ` to ${event.endTime}` : ''}\n` +
      `Location: ${event.location}\n\n` +
      `Description: ${event.description}\n\n` +
      `Add to your calendar using the attached file.`
    );
    
    return `mailto:?subject=${subject}&body=${body}`;
  },

  // Mobile-friendly calendar addition
  addToMobileCalendar(event) {
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      this.downloadICSFile(event);
    } else {
      // Open calendar choice modal
      this.showCalendarOptions(event);
    }
  },

  // Show calendar options modal
  showCalendarOptions(event) {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
    `;

    modal.innerHTML = `
      <div style="background: white; padding: 20px; border-radius: 10px; max-width: 400px; width: 90%;">
        <h3>Add to Calendar</h3>
        <p>Choose your calendar application:</p>
        <div style="display: flex; flex-direction: column; gap: 10px; margin: 20px 0;">
          <button onclick="window.calendarService.addToGoogleCalendar(event)" style="padding: 10px; background: #4285f4; color: white; border: none; border-radius: 5px;">Google Calendar</button>
          <button onclick="window.calendarService.addToOutlookCalendar(event)" style="padding: 10px; background: #0078d4; color: white; border: none; border-radius: 5px;">Outlook Calendar</button>
          <button onclick="window.calendarService.downloadICSFile(event)" style="padding: 10px; background: #666; color: white; border: none; border-radius: 5px;">Download ICS File</button>
        </div>
        <button onclick="this.closest('div').parentElement.remove()" style="padding: 10px; background: #ccc; border: none; border-radius: 5px; width: 100%;">Cancel</button>
      </div>
    `;

    document.body.appendChild(modal);
  },

  // Helper methods
  parseEventDateTime(dateStr, timeStr) {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes = '00'] = time.split(':');
    
    if (modifier === 'PM' && hours !== '12') {
      hours = String(parseInt(hours, 10) + 12);
    }
    if (modifier === 'AM' && hours === '12') {
      hours = '00';
    }
    
    const date = new Date(dateStr);
    date.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
    return date;
  },

  formatDateForICS(date) {
    return date.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 15) + 'Z';
  },

  escapeICSText(text) {
    if (!text) return '';
    return text.replace(/([;\\,])/g, '\\$1').replace(/\n/g, '\\n');
  },

  downloadFile(content, mimeType, filename) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};

// Make available globally for modal buttons
window.calendarService = calendarService;