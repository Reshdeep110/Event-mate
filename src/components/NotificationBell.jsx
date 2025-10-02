import React, { useState, useEffect } from 'react';
import { notificationService } from '../services/NotificationService';

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadNotifications = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await notificationService.getNotifications();
      setNotifications(data);
      
      const unread = data.filter(notification => !notification.read).length;
      setUnreadCount(unread);
    } catch (error) {
      console.error('Error loading notifications:', error);
      setError('Failed to load notifications');
      setNotifications([]);
      setUnreadCount(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  const markAsRead = async (notificationId) => {
    try {
      await notificationService.markAsRead(notificationId);
      setNotifications(prev => prev.map(notif => 
        notif.id === notificationId ? { ...notif, read: true } : notif
      ));
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const markAllAsRead = async () => {
    try {
      await notificationService.markAllAsRead();
      setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
      setUnreadCount(0);
    } catch (error) {
      console.error('Error marking all as read:', error);
    }
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      case 'info': return 'ℹ️';
      case 'reminder': return '⏰';
      case 'update': return '🔄';
      default: return '📢';
    }
  };

  return (
    <div className="notification-bell">
      <button 
        className="bell-icon" 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          position: 'relative',
          padding: '0.5rem'
        }}
      >
        🔔
        {unreadCount > 0 && (
          <span 
            className="badge"
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              background: '#ff4757',
              color: 'white',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              fontSize: '0.7rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {unreadCount}
          </span>
        )}
      </button>
      
      {isOpen && (
        <div 
          className="notification-dropdown"
          style={{
            position: 'absolute',
            top: '100%',
            right: '0',
            background: 'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            width: '350px',
            maxHeight: '400px',
            zIndex: 1000
          }}
        >
          <div 
            className="dropdown-header"
            style={{
              padding: '1rem',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Notifications</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {unreadCount > 0 && (
                <button 
                  className="mark-all-read"
                  onClick={markAllAsRead}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#007bff',
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                >
                  Mark all read
                </button>
              )}
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  padding: '0'
                }}
              >
                ×
              </button>
            </div>
          </div>
          
          <div 
            className="notification-list"
            style={{
              maxHeight: '300px',
              overflowY: 'auto'
            }}
          >
            {error ? (
              <div 
                className="error-state"
                style={{
                  padding: '2rem',
                  textAlign: 'center',
                  color: '#666'
                }}
              >
                <p>{error}</p>
                <button 
                  onClick={loadNotifications}
                  style={{
                    background: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Retry
                </button>
              </div>
            ) : loading ? (
              <div 
                className="loading"
                style={{
                  padding: '2rem',
                  textAlign: 'center',
                  color: '#666'
                }}
              >
                Loading notifications...
              </div>
            ) : notifications.length === 0 ? (
              <div 
                className="empty-state"
                style={{
                  padding: '2rem',
                  textAlign: 'center',
                  color: '#666'
                }}
              >
                No notifications
              </div>
            ) : (
              notifications.map(notification => (
                <div 
                  key={notification.id} 
                  className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                  onClick={() => !notification.read && markAsRead(notification.id)}
                  style={{
                    padding: '1rem',
                    borderBottom: '1px solid #f0f0f0',
                    cursor: notification.read ? 'default' : 'pointer',
                    background: notification.read ? 'white' : '#f8f9fa',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>
                    {getNotificationIcon(notification.type)}
                  </span>
                  <div 
                    className="notification-content"
                    style={{ flex: 1 }}
                  >
                    <p style={{ margin: '0 0 0.25rem 0', fontWeight: notification.read ? 'normal' : '600' }}>
                      {notification.title}
                    </p>
                    <p style={{ margin: '0 0 0.25rem 0', color: '#666', fontSize: '0.9rem' }}>
                      {notification.message}
                    </p>
                    <span 
                      className="notification-time"
                      style={{ color: '#999', fontSize: '0.8rem' }}
                    >
                      {notification.time}
                    </span>
                  </div>
                  {!notification.read && (
                    <div 
                      className="unread-dot"
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#007bff'
                      }}
                    ></div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;