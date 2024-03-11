import { useState, useEffect } from 'react';
import moment from 'moment';

/**
 * A hook for getting and formatting the current timestamp.
 * @param {string} format The format for the timestamp.
 */
export const useTimestamp = (format = "YYYY-MM-DD HH:mm:ss") => {
  const [timestamp, setTimestamp] = useState(() => moment().format(format));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(moment().format(format));
    }, 1000);

    return () => clearInterval(interval);
  }, [format]);

  return timestamp;
};
