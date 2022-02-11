import { useState } from 'react';

export default function useSelectOption() {
  const [option, setOption] = useState(0);

  const handleOption = (event) => {
    const number = parseInt(event.currentTarget.getAttribute("value"));
    setOption(number)
  }

  return {
    option,
    handleOption
  }
}