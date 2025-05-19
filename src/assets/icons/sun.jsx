import React from 'react';

const Sun = (props) => (
  <svg
    data-name="Layer 1"
    id="Layer_1"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 48}
    height={props.size || 48}
    {...props}
  >
    <circle className="sun-main" cx="32" cy="32" r="17" fill="#efcc00" />
    <line x1="32" x2="32" y1="5" y2="11" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" />
    <line x1="32" x2="32" y1="53" y2="59" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" />
    <line x1="59" x2="53" y1="32" y2="32" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" />
    <line x1="11" x2="5" y1="32" y2="32" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" />
    <line x1="51.09" x2="46.85" y1="12.91" y2="17.15" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" />
    <line x1="17.15" x2="12.91" y1="46.85" y2="51.09" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" />
    <line x1="51.09" x2="46.85" y1="51.09" y2="46.85" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" />
    <line x1="17.15" x2="12.91" y1="17.15" y2="12.91" stroke="#efcc00" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export default Sun;
