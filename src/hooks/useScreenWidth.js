import { useState, useEffect } from 'react';

export default function useScreenWidth() {
  const [width, setWidth] = useState(window.screen.width);

  const handleSetWidth = () => {
    setWidth(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener('resize', handleSetWidth)

    return () => {
      window.removeEventListener('resize', handleSetWidth)
    }
  }, [width, handleSetWidth])

  return { width };
}