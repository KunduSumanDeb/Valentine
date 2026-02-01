import React from 'react';

const Ground = ({ isNight }) => {
  return (
    <div className={`ground ${isNight ? 'night' : ''}`} />
  );
};

export default Ground;
