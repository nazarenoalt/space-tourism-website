import React, { useEffect, useState } from 'react'
// styles
import { Wrapper } from './TechnologySlider.css';
// organisms
import TechnologyList from '../../organisms/TechnologyList';
import TechnologyInfo from '../../organisms/TechnologyInfo';
import useFetchData from '../../hooks/useFetchData';
import useSelectOption from '../../hooks/useSelectOption';

const TechnologySlider = () => {
  const { techData } = useFetchData();
  const { option, handleOption } = useSelectOption();
  let name, description;

  if(techData) {
    name = techData[option].name;
    description = techData[option].description;
  }

  return (
    <Wrapper>
      <TechnologyList
        name={name}
        />
      <TechnologyInfo
        onClick={handleOption}
        name={name}
        description={description}
      />
    </Wrapper>
  )
}

export default TechnologySlider