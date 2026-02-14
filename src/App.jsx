import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroPage from './HeroPage';
import AuthPage from './AuthPage';
import VibeCheckPage from './VibeCheckPage';
import HubPage from './HubPage';
import ItineraryPage from './ItineraryPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/vibe-check" element={<VibeCheckPage />} />
          <Route path="/hub" element={<HubPage />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
