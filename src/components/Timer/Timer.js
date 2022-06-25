import styles from './Timer.module.scss';
import { useState } from 'react';

const Timer = () => {
    return (
        <div>
            <p className={styles.timer}>00:00:00.0</p>
        </div>
    );
};

export default Timer;