// components/VideoModal.js

import React, { useRef } from 'react';

const VideoModal = ({ show, onClose, videoSrc }) => {
  const modalRef = useRef();

  if (!show) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div className='modalOverlay' onClick={handleOverlayClick}>
      <div className='modalContent' ref={modalRef}>
        <button className='closeButton' onClick={onClose}>x</button>
        <video controls autoPlay className='video'>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoModal;
