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
                <source src="/music.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <div className={styles.controls}>
                <button className={styles.playButton} onClick={playAudio}>Play</button>
                <button className={styles.pauseButton} onClick={pauseAudio}>Pause</button>
                <button className={styles.stopButton} onClick={stopAudio}>Stop</button>
            </div>
        </div>
    );
};

export default MusicPlayer;
