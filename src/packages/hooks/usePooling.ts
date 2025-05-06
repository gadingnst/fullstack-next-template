/* eslint-disable no-unused-vars */
import { DependencyList, useCallback, useEffect, useRef } from 'react';

function usePooling(callback: (stop: () => void) => void, deps: DependencyList, interval = 5000) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      callback(stop);
    }, interval);

    return () => {
      stop();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, interval, stop, ...deps]);
}

export default usePooling;
