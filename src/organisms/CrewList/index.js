import React, { useEffect, useState } from 'react'
// styles
import { Wrapper } from './CrewList.css'
// assets
import douglasImage from '../../assets/crew/image-douglas-hurley.webp';
import markImage from '../../assets/crew/image-mark-shuttleworth.webp';
import victorImage from '../../assets/crew/image-victor-glover.webp';
import anoushehImage from '../../assets/crew/image-anousheh-ansari.webp';


const CrewList = ({ crew }) => {
  const [image, setImage] = useState("")
  useEffect(() => {
    if(crew === "Douglas Hurley") setImage(douglasImage);
    if(crew === "Mark Shuttleworth") setImage(markImage);
    if(crew === "Victor Glover") setImage(victorImage);
    if(crew === "Anousheh Ansari") setImage(anoushehImage);
  }, [crew])

  return (
    <Wrapper>
      <img className="crewmate-image" src={image} />
    </Wrapper>
  )
}

export default CrewList