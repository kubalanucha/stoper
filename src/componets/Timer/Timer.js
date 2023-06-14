import Button from '../Button/Button';
import FormattedTime from '../FormattedTime/FormattedTime';
import styles from './Timer.module.scss';
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running] = useState(false);
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  const handleReset = () => setTime(0);
  const handleStart = () => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1)
      );
    }
  };
  const handleStop = () => {
    clearInterval(timer);
    setTimer(null);
  };
  return (
    <div className={styles.timer}>
      <FormattedTime time={time} />
      <div>
        <Button onClick={handleStart}>START</Button>
        <Button onClick={handleStop}>STOP</Button>
        <Button onClick={handleReset}>RESET</Button>
      </div>
    </div>
  );
};

export default Timer;
