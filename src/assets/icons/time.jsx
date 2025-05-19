import React from 'react';

const Time = ({ color = "#ffb300" }) => {
  return (
    <div style={{ width: '24px', height: '24px' }}>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
      >
        <path fill={color} d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
        <path fill={color} d="M13,11.586V6a1,1,0,0,0-2,0v6a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414Z" />
      </svg>
    </div>
  );
};

export default Time;
