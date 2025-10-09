import React from 'react';
import ARScene from './components/ARScene';
import Puzzle from './components/Puzzle';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
    return (
        <div className="app">
            <h1>Puzzle AR: Chemistry Learning Experience</h1>
            <ARScene />
            <Puzzle />
            <VideoPlayer />
        </div>
    );
};

export default App;