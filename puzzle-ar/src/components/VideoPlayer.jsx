import React from 'react';

const VideoPlayer = ({ videoSrc, onVideoEnd }) => {
    return (
        <div className="video-player">
            <video 
                width="600" 
                controls 
                onEnded={onVideoEnd}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;