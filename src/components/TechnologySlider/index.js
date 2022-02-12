import React, { useEffect, useState } from 'react'
// styles
import { Wrapper } from './TechnologySlider.css';
// organisms
import TechnologyList from '../../organisms/TechnologyList';
import TechnologyInfo from '../../organisms/TechnologyInfo';
// hooks
import useFetchData from '../../hooks/useFetchData';
import useSelectOption from '../../hooks/useSelectOption';
import useScreenWidth from '../../hooks/useScreenWidth';

const TechnologySlider = () => {
  const { techData } = useFetchData();
  const { option, handleOption } = useSelectOption();
  const { width } = useScreenWidth();
  let name, description;

  if(techData) {
    name = techData[option].name;
    description = techData[option].description;
  }

  return (
    <Wrapper>
      {/* render <TechnologyList> on top if width is less than 1440px */}
      {width < 1440 && (
        <TechnologyList
        name={name}
        />
      )}
      <TechnologyInfo
        onClick={handleOption}
        name={name}
        description={description}
      />

      {/* render <TechnologyList> on right if width is more than 1440px */}
      {width >= 1440 && (
        <TechnologyList
        name={name}
        />
      )}
    </Wrapper>
  )
}

export default TechnologySlider