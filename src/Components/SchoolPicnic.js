// pages/school-picnic.js

import React, { useState } from 'react';
import VideoModal from '../components/VideoModal';
import { FaPlay } from 'react-icons/fa'; // Import play icon
import video1 from '../assets/videos/balaji_upavan_video1.mp4';
import video2 from '../assets/videos/balaji_upavan_video2.mp4';
import { FaCirclePlay } from "react-icons/fa6";

const events = [
  {
    video: video1,  
  },
  {
    video: video2,  
  }
];

const SchoolPicnic = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">School Picnic</h1>
        </div>

        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <h5 className="mb-2">ગૌરીવ્રત ની ઉજવણીમાં પીકનીકનું આયોજન</h5>
          <p>
            <strong>Location:</strong> Balaji Upavan, Bagodara, Ahmedabad, Gujarat
          </p>
        </div>

        <div className="row g-4">
          {events.map((event, index) => (
            <div className="col-lg-4 col-md-6" style={{ animationDelay: `${index * 0.2}s` }} key={index}>
              <div className='eventCard' onClick={() => handleVideoClick(event.video)}>
                {event.video && (
                  <div className='videoContainer'>
                    <video className="img-fluid img-fluid-style">
                      <source src={event.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="playIcon">
                      <FaCirclePlay  size={48} color='rgba(0, 0, 0, 0.4)'/>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <VideoModal show={showModal} onClose={handleCloseModal} videoSrc={selectedVideo} />
    </div>
  );
};

export default SchoolPicnic;
