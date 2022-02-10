import React, { useEffect, useState } from 'react';
// styles
import { Wrapper } from './CrewSlider.css';
// organisms
import CrewList from '../../organisms/CrewList';
import CrewInfo from '../../organisms/CrewInfo';
// hooks
import useSelectOption from '../../hooks/useSelectOption';

const CrewSlider = () => {
  const { option, handleOption } = useSelectOption();

  const [data, setData] = useState([{
    name:"",
    bio:"",
    rol:"",
  }])

  useEffect(() => {
    const fetchJSON = async () => {
      const response = await fetch('../../data.json')
      const json = await response.json();
      setData(json.crew)
    }
    fetchJSON()
  }, []);

  return (
    <Wrapper>
      <CrewList onClick={handleOption} crew={data[option].name} />
      <CrewInfo 
        onClick={handleOption} 
        name={data[option].name}
        role={data[option].role}
        bio={data[option].bio}
      />
    </Wrapper>
  )
}

export default CrewSlider