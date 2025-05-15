import React from 'react';

const Humidity = () => {
  return (
    <div style={{ width: '24px', height: '24px' }}>
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          fill="#0baeff"
          d="M50,38.36a18.5,18.5,0,0,1-37,0C13,22.17,28,7.14,31.5,7.14S50,22.17,50,38.36Z"
        />
        <path
          fill="#e0e0e0"
          d="M29.3,34.07c0,3.32-2.1,5.05-4.4,5.05s-4.32-1.81-4.32-4.79,1.73-5,4.44-5S29.3,31.36,29.3,34.07Zm-6,.17c0,1.66.56,2.86,1.64,2.86s1.56-1.07,1.56-2.86c0-1.61-.44-2.86-1.59-2.86S23.34,32.66,23.34,34.24ZM43,40.67c0,3.32-2.1,5.05-4.4,5.05s-4.3-1.81-4.32-4.79,1.73-5,4.44-5S43,38,43,40.67Zm-5.93.17c0,1.66.54,2.86,1.61,2.86s1.56-1.07,1.56-2.86c0-1.61-.42-2.86-1.56-2.86S37.11,39.25,37.11,40.84Z"
        />
        <line
          x1="36.7"
          y1="29.69"
          x2="27.45"
          y2="44.72"
          stroke="#e0e0e0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Humidity;
