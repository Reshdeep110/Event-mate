import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import MyTickets from './pages/MyTickets';
import Profile from './pages/Profile';
import EventDetails from './components/EventDetails';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>
        <main className="main-content">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/event/:id" element={<EventDetails />} />
              <Route path="/my-tickets" element={<MyTickets />} />
              <Route path="/profile" element={<Profile />} />

                <Route path="*" element={<Navigate to="/" replace />} />
      
            </Routes>
          </ErrorBoundary>
        </main>
      </div>
    </Router>
  );
}

export default App;