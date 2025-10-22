import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing user on app start
    const savedUser = localStorage.getItem('user');
    console.log('Saved user from localStorage:', savedUser); // Debug log
    
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      console.log('Login attempt:', email); // Debug log
      
      if (!email || !password) {
        return { success: false, error: 'Email and password are required' };
      }

      // Create user data
      const userData = {
        id: Date.now(),
        name: email.split('@')[0] || 'User',
        email: email,
        role: 'user',
        joinedDate: new Date().toISOString()
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      console.log('Login successful:', userData); // Debug log
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Login failed' };
    }
  };

  const signup = async (name, email, password) => {
    try {
      console.log('Signup attempt:', name, email); // Debug log
      
      if (!name || !email || !password) {
        return { success: false, error: 'All fields are required' };
      }

      const userData = {
        id: Date.now(),
        name: name,
        email: email,
        role: 'user',
        joinedDate: new Date().toISOString()
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      console.log('Signup successful:', userData); // Debug log
      return { success: true };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: 'Signup failed' };
    }
  };

  const logout = () => {
    console.log('Logging out'); // Debug log
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  };

  return React.createElement(
    AuthContext.Provider,
    { value: value },
    children
  );
};