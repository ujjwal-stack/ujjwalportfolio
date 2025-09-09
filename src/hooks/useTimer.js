import { useState, useEffect, useCallback } from 'react';

export const useTimer = () => {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  const formatTime = useCallback((seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }, []);

  const startTimer = useCallback(() => {
    setIsActive(true);
  }, []);

  const stopTimer = useCallback(() => {
    setIsActive(false);
  }, []);

  useEffect(() => {
    let interval = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      alert('Demo: Time\'s up! In a real exam application, this would auto-submit.');
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  // Start timer automatically after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.confirm('Would you like to see a demo timer? (This simulates the exam timer functionality)')) {
        startTimer();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [startTimer]);

  return {
    isActive,
    timeLeft,
    formatTime,
    startTimer,
    stopTimer
  }
};
export default useTimer;
