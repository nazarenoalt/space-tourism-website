import React from 'react'
// styles
import { Wrapper } from './CrewSlider.css'
// organisms
import CrewList from '../../organisms/CrewList'
import CrewInfo from '../../organisms/CrewInfo'
// hooks
import useFetchData from '../../hooks/useFetchData'

const CrewSlider = () => {
  const { data } = useFetchData();
  const crewData = data.crew
  
  console.log(crewData)
  return (
    <Wrapper>
      <CrewList />
      <CrewInfo />
    </Wrapper>
  )
}

export default CrewSlider