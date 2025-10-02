class NotificationService {
  constructor() {
    this.mockNotifications = [
      {
        id: '1',
        title: 'Welcome to Eventbrite!',
        message: 'Start exploring events near you.',
        type: 'info',
        read: false,
        time: '2 hours ago',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
      },
      {
        id: '2',
        title: 'New Events in Your Area',
        message: 'Check out the latest events in New Delhi.',
        type: 'update',
        read: false,
        time: '1 day ago',
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: '3',
        title: 'Ticket Confirmed',
        message: 'Your ticket for AI Summit 2025 has been confirmed.',
        type: 'success',
        read: true,
        time: '2 days ago',
        createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString()
      },
      {
        id: '4',
        title: 'Event Reminder',
        message: 'Web3 & Blockchain Expo is coming up in 2 weeks.',
        type: 'reminder',
        read: false,
        time: '3 days ago',
        createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString()
      }
    ];
  }

  async getNotifications() {
    return this.mockNotifications;
  }

  async markAsRead(notificationId) {
    const notification = this.mockNotifications.find(n => n.id === notificationId);
    if (notification) notification.read = true;
    return { success: true, notificationId };
  }

  async markAllAsRead() {
    this.mockNotifications.forEach(n => n.read = true);
    return { success: true };
  }

  async createNotification(notification) {
    const newNotification = {
      ...notification,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      read: false
    };
    this.mockNotifications.unshift(newNotification);
    return newNotification;
  }
}

export const notificationService = new NotificationService();
