import React from 'react';

const Sky = ({ isNight }) => {
  // Generate random stars for night sky
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      stars.push({
        id: i,
        left: Math.random() * 100 + '%',
        top: Math.random() * 50 + '%',
        delay: Math.random() * 3 + 's'
      });
    }
    return stars;
  };

  const stars = generateStars();

  return (
    <>
      <div className={`sky ${isNight ? 'night' : 'day'}`} />
      
      {/* Sun */}
      <div className={`sun ${isNight ? 'night' : ''}`} />

      {/* Moon */}
      <div className={`moon ${isNight ? 'night' : ''}`} />

      {/* Stars */}
      <div className={`stars-container ${isNight ? 'night' : ''}`}>
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay
            }}
          />
        ))}
      </div>

      {/* Clouds */}
      <div className="clouds-container">
        <div className={`cloud cloud1 ${isNight ? 'night' : ''}`} />
        <div className={`cloud cloud2 ${isNight ? 'night' : ''}`} />
        <div className={`cloud cloud3 ${isNight ? 'night' : ''}`} />
      </div>

      {/* Birds (only during day) */}
      <div className={`birds-container ${isNight ? 'night' : ''}`}>
        <div className="bird bird1">🐦</div>
        <div className="bird bird2">🐦</div>
        <div className="bird bird3">🐦</div>
      </div>

      {/* Mountains */}
      <div className="mountains">
        <div className="mountain s1" />
        <div className="mountain s2" />
        <div className="mountain s3" />
        <div className="mountain s4" />
        <div className="haze" />
      </div>
    </>
  );
};

export default Sky;
