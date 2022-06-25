import styles from './Timer.module.scss';
import Button from './../Button/Button';

const Timer = () => {
    return (
        <div>
            <p className={styles.timer}>00:00:00.0</p>
            <Button>Start</Button>
            <Button>Stop</Button>
            <Button>Reset</Button>
        </div>
    );
};

export default Timer;