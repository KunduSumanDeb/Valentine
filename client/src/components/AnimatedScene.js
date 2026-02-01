import React, { useState, useEffect } from 'react';
import '../App.css';
import Sky from './Sky';
import Ground from './Ground';
import Characters from './Characters';
import PhotoFrame from './PhotoFrame';
import Proposal from './Proposal';

const AnimatedScene = () => {
  const [isNight, setIsNight] = useState(false);
  const [dayProgress, setDayProgress] = useState(0);

  // Simulate day/night cycle (60 seconds = 1 full cycle)
  useEffect(() => {
    const interval = setInterval(() => {
      setDayProgress(prev => (prev + 1) % 60);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Day is 0-30s, Night is 30-60s
  useEffect(() => {
    setIsNight(dayProgress >= 30);
  }, [dayProgress]);

  return (
    <div className={`app-container ${isNight ? 'night' : ''}`}>
      <div className="time-indicator">
        {isNight ? '🌙' : '☀️'}
      </div>

      {/* Title removed from top - displayed in the central proposal card instead */}

      <Sky isNight={isNight} />
      <Ground isNight={isNight} />
      <Characters />

      {/* Proposal buttons and modal handling */}
      <Proposal />

      <PhotoFrame />
    </div>
  );
};

export default AnimatedScene;
