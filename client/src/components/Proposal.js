import React, { useState, useEffect, useRef } from 'react';

const Proposal = () => {
  const [showPrompt, setShowPrompt] = useState(true);
  const [response, setResponse] = useState(null);
  const [nicknames, setNicknames] = useState([]);
  const [selectedNickname, setSelectedNickname] = useState('Darling');
  const timerRef = useRef(null);

  useEffect(() => {
    fetch('/api/nicknames')
      .then(res => res.json())
      .then(data => {
        setNicknames(data || []);
        if (data && data.length > 0) {
          const pick = data[Math.floor(Math.random() * data.length)];
          setSelectedNickname(pick);
        }
      })
      .catch(() => {});
  }, []);

  // Show proposal card after 8 seconds on initial load
  useEffect(() => {
    // Already visible on mount, no need for timer on initial load
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Listen for reset event
  useEffect(() => {
    const handleReset = () => {
      console.log('resetProposal event received in Proposal component');
      // Clear existing timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      
      // Show the proposal immediately on retry (no 8 second wait)
      setShowPrompt(true);
      setResponse(null);
    };

    window.addEventListener('resetProposal', handleReset);
    console.log('Event listener added for resetProposal');
    return () => {
      console.log('Event listener removed for resetProposal');
      window.removeEventListener('resetProposal', handleReset);
    };
  }, []);

  const handleYes = () => {
    setResponse('yes');
    setShowPrompt(false);
    // Play fireworks sound (try file first, fallback to WebAudio)
    try {
      const audio = new Audio('/sounds/fireworks.mp3');
      audio.volume = 0.9;
      audio.play().catch(() => {
        // Fallback to WebAudio
        try {
          const ctx = new (window.AudioContext || window.webkitAudioContext)();
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = 'sawtooth';
          o.frequency.setValueAtTime(200, ctx.currentTime);
          g.gain.setValueAtTime(0.0001, ctx.currentTime);
          g.gain.exponentialRampToValueAtTime(0.6, ctx.currentTime + 0.02);
          g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
          o.connect(g); g.connect(ctx.destination);
          o.start(); o.stop(ctx.currentTime + 1.2);
        } catch (e) { console.log('audio fallback failed', e); }
      });
    } catch (e) {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(200, ctx.currentTime);
        g.gain.setValueAtTime(0.0001, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.6, ctx.currentTime + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
        o.connect(g); g.connect(ctx.destination);
        o.start(); o.stop(ctx.currentTime + 1.2);
      } catch (err) { console.log('audio play failed', err); }
    }

    window.dispatchEvent(new CustomEvent('proposalResponse', { detail: { response: 'yes' } }));
  };

  const handleNo = () => {
    setResponse('no');
    setShowPrompt(false);
    window.dispatchEvent(new CustomEvent('proposalResponse', { detail: { response: 'no', nickname: selectedNickname } }));
  };

  if (!showPrompt) return null;

  return (
    <div className="proposal-container">
      <div className="proposal-box">
        <p className="proposal-text">Will you be my Valentine?</p>
        <div className="proposal-buttons">
          <button className="btn-yes" onClick={handleYes}>Yes 💕</button>
          <button className="btn-no" onClick={handleNo}>No 😅</button>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
