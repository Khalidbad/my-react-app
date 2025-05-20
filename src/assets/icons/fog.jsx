import React from 'react';

// Make Fog accept props for size and style, and remove the wrapping <div> to allow flexible sizing
const Fog = ({ width = 48, height = 48, ...props }) => (
  <svg
    data-name="Layer 1"
    id="Layer_1"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    {...props}
  >
    <defs>
      <linearGradient gradientTransform="matrix(-1, 0, 0, 1, -970.2, 0)" gradientUnits="userSpaceOnUse" id="linear-gradient" x1="-989.28" x2="-1010.37" y1="52.39" y2="25.08">
        <stop offset="0" stopColor="#f2f2f2"/>
        <stop offset="1" stopColor="#cfcfcf"/>
      </linearGradient>
      <linearGradient gradientTransform="matrix(0, -1, -1, 0, -44.28, -1021.58)" gradientUnits="userSpaceOnUse" id="linear-gradient-2" x1="-1062.77" x2="-1051.15" y1="-96.39" y2="-78.75">
        <stop offset="0.02" stopColor="#fff"/>
        <stop offset="1" stopColor="#fff" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <circle fill="#efcc00" cx="39.8" cy="22" r="12.59"/>
    <line stroke="#efcc00" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="39.8" x2="39.8" y1="2" y2="6.44"/>
    <line stroke="#efcc00" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="39.8" x2="39.8" y1="37.56" y2="42"/>
    <line stroke="#efcc00" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="19.8" x2="24.25" y1="22" y2="22"/>
    <line stroke="#efcc00" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="55.36" x2="59.8" y1="22" y2="22"/>
    <line stroke="#efcc00" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="25.66" x2="28.8" y1="7.86" y2="11"/>
    <line stroke="#efcc00" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="50.8" x2="53.94" y1="33" y2="36.14"/>
    <line stroke="#efcc00" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="25.66" x2="28.8" y1="36.14" y2="33"/>
    <line stroke="#efcc00" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="50.8" x2="53.94" y1="11" y2="7.86"/>
    <path fill="url(#linear-gradient)" d="M23.5,15.9A17.49,17.49,0,0,1,39,25.22a13.75,13.75,0,1,1,6.92,25.62L23.5,50.9a17.5,17.5,0,0,1,0-35Z"/>
    <circle fill="url(#linear-gradient-2)" cx="45.89" cy="37.09" r="13.75" transform="translate(-2.18 71.3) rotate(-74.39)"/>
    <line stroke="#a5a9aa" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="37.84" x2="48.06" y1="54.5" y2="54.5"/>
    <line stroke="#b9c1c6" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="15.94" x2="32.74" y1="54.5" y2="54.5"/>
    <line stroke="#a5a9aa" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="33.23" x2="44.55" y1="59.5" y2="59.5"/>
    <line stroke="#a5a9aa" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" x1="19.96" x2="27.65" y1="59.5" y2="59.5"/>
  </svg>
);

export default Fog;
