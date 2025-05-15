import React from 'react';

const Wind = () => {
  return (
    <div style={{ width: '24px', height: '24px' }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="#979797" strokeWidth="2">
          <g transform="translate(3,3)">
            <g transform="translate(2,0)">
              <g transform="translate(5,0)">
                <path d="M5,10 C7.76,10 10,7.76 10,5 C10,2.24 7.76,0 5,0 C2.24,0 0,2.24 0,5" />
              </g>
              <path d="M0,10 L10,10" />
            </g>
            <g transform="translate(3,17)">
              <path d="M0,1 L14,1" />
              <path d="M11,4 C11,5.66 12.34,7 14,7 C15.66,7 17,5.66 17,4 C17,2.34 15.66,1 14,1" />
            </g>
            <g transform="translate(0,4)">
              <path d="M21,10 C23.76,10 26,7.76 26,5 C26,2.24 23.76,0 21,0 C20.7,0 20.41,0.03 20.13,0.08" />
              <path d="M0,10 L21,10" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Wind;
