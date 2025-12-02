import React from "react";

export const WhatsAppIcon = ({ size = 28, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 448 512"
    {...props}
  >
    <path d="M380.9 97.1C339-2.9 236.1-32.1 146.5 9.8c-89.6 41.9-118.8 144.8-76.9 234.4l-40.6 118.5 122.1-40.6c89.6 41.9 192.5 12.7 234.4-76.9 41.9-89.6 12.7-192.5-76.9-234.4zM224 352c-70.7 0-128-57.3-128-128S153.3 96 224 96s128 57.3 128 128-57.3 128-128 128z"/>
  </svg>
);