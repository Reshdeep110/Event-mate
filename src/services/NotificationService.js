// services/NotificationService.js
const API_BASE_URL = 'http://localhost:3001/api';

// Mock data for development
const mockNotifications = [
  {
    id: 1,
    message: 'Your event "Tech Summit" has been approved!',
    time: '2 hours ago',
    read: false,
    type: 'event_approval'
  },
  {
    id: 2,
    message: 'New message from John Doe about your event',
    time: '5 hours ago',
    read: true,
    type: 'message'
  },
  {
    id: 3,
    message: 'Reminder: Tech Summit starts in 3 days',
    time: '1 day ago',
    read: false,
    type: 'reminder'
  },
  {
    id: 4,
    message: 'Your payment for EventHub Pro was processed',
    time: '2 days ago',
    read: false,
    type: 'payment'
  }
];

export const notificationService = {
  getNotifications: async () => {
    try {
      // Try to fetch from real API first
      const response = await fetch(`${API_BASE_URL}/notifications`);
      if (!response.ok) {
        throw new Error('API not available');
      }
      return await response.json();
    } catch (error) {
      console.warn('API not available, using mock data:', error.message);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockNotifications;
    }
  },

  markAsRead: async (notificationId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/notifications/${notificationId}/read`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
    } catch (error) {
      console.warn('API not available, simulating mark as read');
      await new Promise(resolve => setTimeout(resolve, 200));
      return { success: true, message: 'Mock: Notification marked as read' };
    }
  },

  getUnreadCount: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/notifications/unread/count`);
      const data = await response.json();
      return data.count || 0;
    } catch (error) {
      console.warn('API not available, using mock unread count');
      return mockNotifications.filter(notification => !notification.read).length;
    }
  }
};