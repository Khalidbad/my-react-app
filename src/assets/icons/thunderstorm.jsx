import React from 'react';

const Thunderstorm = ({ width = 48, height = 48, ...props }) => (
  <svg viewBox="0 0 2010 2010" width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="linear-gradient" gradientUnits="userSpaceOnUse" x1="94.87" x2="1984.43" y1="873.42" y2="873.42">
        <stop offset="0" stopColor="#69bbff"/>
        <stop offset="1" stopColor="#9de0f4"/>
      </linearGradient>
      <linearGradient id="linear-gradient-2" gradientUnits="userSpaceOnUse" x1="589.9" x2="1215.73" y1="1328.95" y2="1328.95">
        <stop offset="0" stopColor="#1e2121"/>
        <stop offset="1" stopColor="#1e2121" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="linear-gradient-3" gradientUnits="userSpaceOnUse" x1="590.79" x2="1233.79" y1="1862.17" y2="1219.17">
        <stop offset="0.06" stopColor="#ff6800"/>
        <stop offset="1" stopColor="#fff100"/>
      </linearGradient>
    </defs>
    <path className="cls-1" fill="url(#linear-gradient)" d="M1930.77,609.13A690.39,690.39,0,0,0,1567,242.36a678.38,678.38,0,0,0-266.88-54.83c-144.36-.31-282.58,43.72-399.7,127.35A688.2,688.2,0,0,0,679.3,578.13,496.87,496.87,0,0,0,589.53,570a494.66,494.66,0,1,0,0,989.32l773.94-3.13a76.36,76.36,0,0,0,7.67-.39c167.42-17,322.2-95.22,435.83-220.24a686,686,0,0,0,123.8-726.42Z"/>
    <polygon className="cls-2" fill="url(#linear-gradient-2)" points="589.9 1559.31 1183.89 1556.77 1215.73 1413.57 928.64 1431.31 937.37 1098.59 589.9 1559.31"/>
    <path className="cls-3" fill="url(#linear-gradient-3)" d="M937.37,1098.59l-195.17,437a20.87,20.87,0,0,0,19.06,29.39H950.74a20.88,20.88,0,0,1,20.87,20.17L980.28,1842c.75,22.12,30.86,28,39.91,7.84l195.54-436.22a20.88,20.88,0,0,0-18.65-29.41l-193.73-3.67a20.88,20.88,0,0,1-20.47-20.41l-5.58-253.44C976.81,1084.38,946.45,1078.25,937.37,1098.59Z"/>
  </svg>
);

export default Thunderstorm;
