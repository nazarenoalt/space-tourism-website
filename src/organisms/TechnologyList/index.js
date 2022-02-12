import React, { useLayoutEffect, useState } from 'react'
// styles
import { Wrapper } from './TechnologyList.css';
// assets
import imageLaunchVehicleLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import imageLaunchVehiclePortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import imageSpaceCapsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg';
import imageSpaceCapsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg';
import imageSpaceportLandscape from '../../assets/technology/image-spaceport-landscape.jpg';
import imageSpaceportPortrait from '../../assets/technology/image-spaceport-portrait.jpg';
// hooks
import useScreenWidth from '../../hooks/useScreenWidth';

const TechnologyList = ({ name = "" }) => {
  const [image, setImage] = useState("")
  const { width } = useScreenWidth();

  useLayoutEffect(() => {
    if (name === "Launch vehicle" && width < 1440) setImage(imageLaunchVehicleLandscape);
    if (name === "Spaceport" && width < 1440) setImage(imageSpaceCapsuleLandscape);
    if (name === "Space capsule" && width < 1440) setImage(imageSpaceportLandscape);
    // change landscape type for portrait type if desktop
    if (name === "Launch vehicle" && width >= 1440) setImage(imageLaunchVehiclePortrait);
    if (name === "Spaceport" && width >= 1440) setImage(imageSpaceCapsulePortrait);
    if (name === "Space capsule" && width >= 1440) setImage(imageSpaceportPortrait);
  })

  return (
    <Wrapper>
      <img
        className="technology-image"
        src={image}
        alt="technology used image"
      />
    </Wrapper>
  )
}

export default TechnologyList