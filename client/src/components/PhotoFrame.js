import React, { useState, useEffect, useRef } from 'react';

const PhotoFrame = () => {
  const [photos, setPhotos] = useState([]);
  const [nicknames, setNicknames] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [showRejection, setShowRejection] = useState(false);
  const [rejectionNickname, setRejectionNickname] = useState('Darling');

  useEffect(() => {
    // Fetch nicknames from API
    fetch('/api/nicknames')
      .then(res => res.json())
      .then(data => setNicknames(data || []))
      .catch(err => console.log('Error fetching nicknames:', err));

    // Fetch photos from API
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => setPhotos(data || []))
      .catch(err => console.log('Error fetching photos:', err));
  }, []);

  // Listen for proposal response events
  useEffect(() => {
    const handler = (e) => {
      const detail = e.detail || {};
      if (detail.response === 'yes') {
        setCelebrate(true);
        setShowRejection(false);
      } else if (detail.response === 'no') {
        setCelebrate(false);
        const nickname = detail.nickname || (nicknames[0] || 'Darling');
        setRejectionNickname(nickname);
        setShowRejection(true);
      }
    };
    window.addEventListener('proposalResponse', handler);
    return () => window.removeEventListener('proposalResponse', handler);
  }, [nicknames]);

  // Audio handled in Proposal component to ensure playback occurs during the user gesture

  // Rotate through photos
  useEffect(() => {
    if (photos.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % photos.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [photos.length]);

  if (photos.length === 0) {
    return (
      <div className="photos-section">
        <div className="photo-frame">
          <div style={{ textAlign: 'center', color: '#FF1493' }}>
            <p style={{ fontSize: '12px', marginBottom: '10px' }}>
              Add photos to<br />public/photos folder
            </p>
            <p style={{ fontSize: '24px' }}>📸</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="photos-section">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="photo-frame"
            style={{
              '--index': index,
              animation: `fadeInOut 5s ease-in-out infinite`,
              animationDelay: `${index * 5}s`
            }}
          >
            <img src={photo} alt={`Memory ${index}`} />
            <div className="nickname">
              {nicknames.length > 0 ? nicknames[index % nicknames.length] : ''}
            </div>
          </div>
        ))}
      </div>

      {/* Celebration modal when accepted */}
      {celebrate && (
        <div className="celebrate-overlay" onClick={() => setCelebrate(false)}>
          {/* fireworks background */}
          <div className="fireworks" aria-hidden>
            <div className="firework" style={{ left: '20%', top: '25%' }} />
            <div className="firework" style={{ left: '50%', top: '18%' }} />
            <div className="firework" style={{ left: '75%', top: '30%' }} />
            <div className="firework" style={{ left: '35%', top: '45%' }} />
            <div className="firework" style={{ left: '65%', top: '50%' }} />
          </div>

          <div className="celebrate-modal">
            <div className="celebrate-photo">
              <img src={photos[currentIndex]} alt={`Celebration ${currentIndex}`} />
            </div>
            <div className="celebrate-text">
              <h2>Yes! 💕</h2>
              <p className="cute-message">You said yes — let's celebrate our memories!</p>
              <p className="cute-sub">{nicknames.length > 0 ? nicknames[currentIndex % nicknames.length] : ''}</p>
              <button className="close-celebrate" onClick={(e) => { e.stopPropagation(); setCelebrate(false); }}>Close ✨</button>
            </div>
          </div>
        </div>
      )}

      {/* Rejection request card */}
      {showRejection && (
        <div className="rejection-overlay" onClick={() => setShowRejection(false)}>
          <div className="rejection-card">
            <div className="rejection-icon">😔</div>
            <h3 className="rejection-title">Aww, please?</h3>
            <p className="rejection-message">
              <span className="nickname-highlight">{rejectionNickname}</span>, 
              won't you say yes?
            </p>
            <div className="rejection-messages">
              <p className="cute-request">I promise to make you smile every day 💕</p>
              <p className="cute-request">Our memories are worth celebrating 🌟</p>
              <p className="cute-request">Let's create more beautiful moments together 🎀</p>
            </div>
            <button 
              className="btn-try-again" 
              onClick={() => {
                console.log('Let Me Try Again clicked - dispatching resetProposal event');
                setShowRejection(false);
                // Reset the proposal card to show again
                window.dispatchEvent(new CustomEvent('resetProposal'));
              }}
            >
              Let Me Try Again 💝
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoFrame;
