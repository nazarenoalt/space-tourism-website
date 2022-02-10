import { useState, useLayoutEffect } from 'react';

export default function useFetchData() {
  let jsonData;

  useLayoutEffect(() => {
      async function fetchData() {
        const response = await fetch('../../data.json')
        const json = await response.json();
        jsonData = json;
      }
      fetchData();

  }, []);

  return { jsonData }
}