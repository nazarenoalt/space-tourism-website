import React from 'react'
// styles
import { Wrapper } from './CrewList.css'
// assets
import anoushehImage from '../../assets/crew/image-anousheh-ansari.webp';
import douglasImage from '../../assets/crew/image-douglas-hurley.webp';
import markImage from '../../assets/crew/image-mark-shuttleworth.webp';
import victorImage from '../../assets/crew/image-victor-glover.webp';


const CrewList = () => {
  return (
    <Wrapper>
      <img className="crewmate-image" src={anoushehImage} />
    </Wrapper>
  )
}

export default CrewList