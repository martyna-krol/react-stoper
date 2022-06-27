import styles from './Timer.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from './../Button/Button';

const Timer = () => {

    useEffect(() => {
        return () => {
           if(currentId) clearInterval(currentId);
        };
      }, []);

    const [time, setTime] = useState(0);

    const [currentId, setCurrentId] = useState(null);

    const handleStart = () => {

        clearInterval(currentId);

        const id = setInterval(
            () => {
                setTime(
                    (prevTime) => {
                        return prevTime+1;
                    }
                )
            },
            1
        );

        setCurrentId(id);
        
    };

    const handleStop = () => {
        clearInterval(currentId);
    }

    const handleReset = () => {
        clearInterval(currentId);
        setTime(0);
    }

    const padTo2Digits = (num) => {
        return num.toString().padStart(2, '0');
      }

    const formatTime = (milliseconds) => {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
      
        seconds = seconds % 60;
        minutes = minutes % 60;
      
        // 👇️ If you don't want to roll hours over, e.g. 24 to 00
        // 👇️ comment (or remove) the line below
        // commenting next line gets you `24:00:00` instead of `00:00:00`
        // or `36:15:31` instead of `12:15:31`, etc.
        hours = hours % 24;
      
        return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
          seconds)}.${padTo2Digits(milliseconds)}`;
    }

    return (
        <div>
            <p className={styles.timer}>{formatTime(time)}</p>
            <Button onClick={handleStart}>Start</Button>
            <Button onClick={handleStop}>Stop</Button>
            <Button onClick={handleReset}>Reset</Button>
        </div>
    );
};

export default Timer;