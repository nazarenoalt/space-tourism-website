import { useState, useEffect } from 'react';

export default function useFetchData() {
  const [data, setData] = useState({});

  useEffect(async () => {
      const response = await fetch('../../data.json')
      const json = await response.json();
      setData(json)
  }, []);

  return { data }
}