import React from 'react';
// styles
import { Wrapper } from './DestinationSlider.css';
// organisms
import DestinationList from '../../organisms/DestinationList';
// assets
import moonImage from '../../assets/destination/image-moon.webp';
import marsImage from '../../assets/destination/image-mars.webp';
import europaImage from '../../assets/destination/image-europa.webp';
import titanImage from '../../assets/destination/image-titan.webp';

const DestinationSlider = () => {
  const [image, setImage] = React.useState(moonImage);
  const [activeLi, setActiveLi] = React.useState(0);
  
  const handleListClick = (event, liNumber) => {
    //change active li state
    setActiveLi(liNumber);

    // select li elements and quite 
    const listElements = document.querySelectorAll('.li');
    listElements.forEach(element => {
      element.classList.contains('active') && element.classList.remove('active');
    })

    // active the clicked element
    const element = event.currentTarget;
    element.classList.add('active');
  }

  // set planet image according to active element
  React.useEffect(() => {
    if(activeLi === 0) { setImage(moonImage) }
    if(activeLi === 1) { setImage(marsImage) }
    if(activeLi === 2) { setImage(europaImage) }
    if(activeLi === 3) { setImage(titanImage) }
  }, [activeLi, setActiveLi])

  return (
    <Wrapper>
      <DestinationList 
        image={image}
        handleListClick={handleListClick}
      />
    </Wrapper>
  );
};

export default DestinationSlider;
