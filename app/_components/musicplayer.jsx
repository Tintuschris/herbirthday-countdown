import React, { useRef } from 'react';
import styles from './musicplayer.module.css';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current.play();
    };

    const pauseAudio = () => {
        audioRef.current.pause();
    };

    const stopAudio = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    };

    return (
        <div className={styles.player}>
            <audio ref={audioRef} controls>
                <source src="/music1.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <div className={styles.controls}>
                <button onClick={playAudio}>Play</button>
                <button onClick={pauseAudio}>Pause</button>
                <button onClick={stopAudio}>Stop</button>
            </div>
        </div>
    );
};

export default MusicPlayer;
