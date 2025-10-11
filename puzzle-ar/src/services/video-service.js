export const fetchVideo = async (videoId) => {
    try {
        const response = await fetch(`https://api.example.com/videos/${videoId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const videoData = await response.json();
        return videoData;
    } catch (error) {
        console.error('Error fetching video:', error);
        throw error;
    }
};

export const playVideo = (videoElement) => {
    if (videoElement) {
        videoElement.play();
    }
};

export const pauseVideo = (videoElement) => {
    if (videoElement) {
        videoElement.pause();
    }
};

export const stopVideo = (videoElement) => {
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
    }
};