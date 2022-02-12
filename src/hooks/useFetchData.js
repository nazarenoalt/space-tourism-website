import { useState, useLayoutEffect } from 'react';

export default function useFetchData() {
  const [data, setData] = useState({})

  useLayoutEffect(() => {
      async function fetchData() {
        const response = await fetch('../../data.json')
        const json = await response.json();
        setData(json)
      }
      fetchData();

  }, []);

  return {
    techData: data.technology
   }
}