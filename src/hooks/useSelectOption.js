import { useState } from 'react';

export default function useSelectOption(value) {
  const [option, setOption] = useState(value || 0);

  const handleOption = (event) => {
    const number = parseInt(event.currentTarget.getAttribute("value"));
    setOption(number)
  }

  return {
    option,
    handleOption
  }
}