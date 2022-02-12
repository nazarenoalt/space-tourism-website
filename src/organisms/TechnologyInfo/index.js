import React from 'react'
// styles
import { Wrapper } from './TechnologyInfo.css';
// molecules
import CircleNumberNav from '../../molecules/CircleNumberNav';
import H3 from '../../molecules/H3';
import H5 from '../../molecules/H5';
import Text from '../../molecules/Text';

const TechnologyInfo = ({ name, description, onClick }) => {
  return (
    <Wrapper>
      <CircleNumberNav onClick={onClick} />
      
      <div className="info-container">
        <H5>THE TERMINOLOGY...</H5>
        <H3>{name}</H3>
        <Text>{description}</Text>
      </div>
    </Wrapper>
  )
}

export default TechnologyInfo