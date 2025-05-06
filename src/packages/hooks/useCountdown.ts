import { useEffect, useState } from 'react';

function useCountdown(initial: number, delayInMs = 1000) {
  const [countdown, setCountdown] = useState(initial);

  const resetCountdown = (count: number = initial) => setCountdown(count);

  useEffect(() => {
    if (!countdown) return;
    const interval = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, delayInMs);
    return () => {
      clearInterval(interval);
    };
  }, [countdown, delayInMs]);

  return [countdown, resetCountdown] as const;
}

export default useCountdown;
