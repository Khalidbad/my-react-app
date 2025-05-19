import React from 'react';

const Stat = (props) => (
  <svg
    height={props.height || 48}
    width={props.width || 48}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title/>
    <path d="M128,496H48V304h80Z"/>
    <path d="M352,496H272V208h80Z"/>
    <path d="M464,496H384V96h80Z"/>
    <path d="M240,496H160V16h80Z"/>
  </svg>
);

export default Stat;
