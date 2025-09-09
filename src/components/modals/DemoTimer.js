import React from 'react';
import { useTimer } from '../../hooks/useTimer';

const DemoTimer = () => {
  const { isActive, timeLeft, formatTime } = useTimer();

  if (!isActive) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
      <div className="flex items-center space-x-2">
        <span className="timer-pulse">⏱️</span>
        <span>{formatTime(timeLeft)}</span>
      </div>
    </div>
  );
};

export default DemoTimer;