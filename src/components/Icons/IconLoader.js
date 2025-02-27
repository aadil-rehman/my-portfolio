import React from 'react';

const IconLoader = () => (
  <svg width="70" height="70" viewBox="10 10 200 200" xmlns="http://www.w3.org/2000/svg">
    {/* Hexagon outline */}
    <polygon
      points="100,20 170,60 170,140 100,180 30,140 30,60"
      stroke="#3b82f6"
      strokeWidth="4"
      fill="none"
    />
    <polygon
      points="100,30 160,65 160,135 100,170 40,135 40,65"
      stroke="#3b82f6"
      strokeWidth="2"
      fill="none"
    />

    {/* Letter A */}
    <text
      x="50%"
      y="54%"
      fontFamily="Arial, sans-serif"
      fontSize="84"
      fill="#3b82f6"
      fontWeight="bold"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      A
    </text>
  </svg>
);

export default IconLoader;
