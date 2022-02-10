import React from 'react'
import PointNav from '../../molecules/PointNav'
// styles
import { Wrapper } from './CrewInfo'
import H3 from '../../molecules/H3';
import H4 from '../../molecules/H4';
import Text from '../../molecules/Text';

const CrewInfo = ({ name, role, bio, onClick }) => {
  return (
    <Wrapper>
      <PointNav onClick={onClick}/>
      <H4>{role}</H4>
      <H3>{name}</H3>
      <Text>{bio}</Text>
    </Wrapper>
  )
}

export default CrewInfo