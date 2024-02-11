import React, { useState } from 'react';

function VideoPlayer() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleContainerClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div className='w-full h-screen'>
      <div onClick={handleContainerClick} style={{ cursor: 'pointer' }}>
        Click to play video
      </div>
      {isVideoVisible && (
        <div>
          <video loop muted controls>
            <source src="https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
