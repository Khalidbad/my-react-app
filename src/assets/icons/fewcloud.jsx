import React from 'react';

const FewCloud = ({ width = 48, height = 48, ...props }) => (
  <svg viewBox="0 0 64 64" width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="linear-gradient" gradientTransform="matrix(-1, 0, 0, 1, 65.8, 0)" gradientUnits="userSpaceOnUse" x1="46.72" x2="25.63" y1="58.39" y2="31.08">
        <stop offset="0" stopColor="#f2f2f2"/>
        <stop offset="1" stopColor="#cfcfcf"/>
      </linearGradient>
      <linearGradient id="linear-gradient-2" gradientTransform="matrix(0, -1, -1, 0, 109.04, 59.43)" gradientUnits="userSpaceOnUse" x1="12.25" x2="23.86" y1="56.93" y2="74.58">
        <stop offset="0.02" stopColor="#fff"/>
        <stop offset="1" stopColor="#fff" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <circle fill="#efcc00" cx="39.8" cy="28" r="12.59"/>
    <line x1="39.8" x2="39.8" y1="8" y2="12.44" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <line x1="39.8" x2="39.8" y1="43.56" y2="48" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <line x1="19.8" x2="24.25" y1="28" y2="28" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <line x1="55.36" x2="59.8" y1="28" y2="28" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <line x1="25.66" x2="28.8" y1="13.86" y2="17" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <line x1="50.8" x2="53.94" y1="39" y2="42.14" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <line x1="25.66" x2="28.8" y1="42.14" y2="39" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <line x1="50.8" x2="53.94" y1="17" y2="13.86" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path fill="url(#linear-gradient)" d="M23.5,21.9A17.49,17.49,0,0,1,39,31.22a13.75,13.75,0,1,1,6.92,25.62L23.5,56.9a17.5,17.5,0,0,1,0-35Z"/>
    <circle fill="url(#linear-gradient-2)" cx="45.89" cy="43.09" r="13.75" transform="translate(-7.96 75.69) rotate(-74.39)"/>
  </svg>
);

export default FewCloud;
