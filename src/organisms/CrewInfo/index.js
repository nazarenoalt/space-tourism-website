import React from 'react'
import PointNav from '../../molecules/PointNav'
// styles
import { Wrapper } from './CrewInfo'
import H3 from '../../molecules/H3';
import H4 from '../../molecules/H4';
import Text from '../../molecules/Text';
import useScreenWidth from '../../hooks/useScreenWidth';

const CrewInfo = ({ name, role, bio, onClick }) => {
  const { width } = useScreenWidth();

  return (
    <Wrapper>
      {/* render <PointNav> on top if width is less than 768px */}
      {width < 768 && (
        <PointNav onClick={onClick}/>
      )}

      <H4>{role}</H4>
      <H3>{name}</H3>
      <Text>{bio}</Text>

      {/* render <PointNav> on bottom if width is more than 768px */}
      {width >= 768 && (
        <PointNav onClick={onClick}/>
      )}
    </Wrapper>
  )
}

export default CrewInfo