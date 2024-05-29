import React from 'react';
import LazyLoad from 'react-lazyload';

const LazyLoadWithBlur = ({ src, alt, ...rest }) => (
  <LazyLoad height={200} offset={100}>
    <div
      style={{
        filter: 'blur(5px)', // Apply a blur effect while loading
        backgroundColor: '#f0f0f0', // Set a background color for the placeholder
        transition: 'filter 0.3s ease-in-out', // Add a smooth transition when removing the blur effect
      }}
    >
      <img
        src={src}
        alt={alt}
        {...rest}
        onLoad={(e) => {
          e.target.style.filter = 'none'; // Remove the blur effect once the image is loaded
        }}
      />
    </div>
  </LazyLoad>
);

export default LazyLoadWithBlur;
