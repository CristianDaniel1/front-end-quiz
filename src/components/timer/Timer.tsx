import { useEffect, useState } from 'react';

interface TimerProps {
  timeout: number;
  onTimeout: () => void;
  className?: string;
}

export const Timer = ({ timeout, onTimeout, className = '' }: TimerProps) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => clearTimeout(timer);
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(
      () => setRemainingTime(prevRemainingTime => prevRemainingTime + 100),
      100
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      className={`w-2/4 h-3 rounded-3xl ${className}`}
      max={timeout}
      value={remainingTime}
    />
  );
};
