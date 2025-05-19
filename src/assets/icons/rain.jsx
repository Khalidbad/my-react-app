import React from 'react';

const Rain = () => (
  <div style={{ width: '24px', height: '24px' }}>
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g>
        <ellipse cx="32" cy="24" rx="16" ry="10" fill="#b3e0fc" />
        <ellipse cx="44" cy="28" rx="12" ry="8" fill="#90caf9" />
        <ellipse cx="24" cy="28" rx="12" ry="8" fill="#e3f2fd" />
        <ellipse cx="32" cy="28" rx="16" ry="10" fill="#b3e0fc" />
        <line x1="22" y1="40" x2="22" y2="54" stroke="#2196f3" strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="42" x2="32" y2="58" stroke="#2196f3" strokeWidth="3" strokeLinecap="round" />
        <line x1="42" y1="40" x2="42" y2="54" stroke="#2196f3" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  </div>
);

export default Rain;
