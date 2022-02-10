import React, { useState, useEffect } from 'react';
// styles
import { Wrapper } from './DestinationSlider.css';
// organisms
import DestinationList from '../../organisms/DestinationList';
import DestinationInfo from '../../organisms/DestinationInfo';
// assets
import moonImage from '../../assets/destination/image-moon.webp';
import marsImage from '../../assets/destination/image-mars.webp';
import europaImage from '../../assets/destination/image-europa.webp';
import titanImage from '../../assets/destination/image-titan.webp';

const DestinationSlider = () => {
  const [image, setImage] = useState(moonImage);
  const [choosedPlanet, setChoosedPlanet] = useState(0);
  const [data, setData] = useState([{name:"", description:"", distance:"", travel:"" }])

  useEffect(() => {
    const fetchJSON = async () => {
      const response = await fetch('../../data.json')
      const json = await response.json();
      setData(json.destinations)
    }

    fetchJSON()
  }, []);

  const handleListClick = (event, liNumber) => {
    //change active li state
    setChoosedPlanet(liNumber);

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
    if(choosedPlanet === 0) { setImage(moonImage) }
    if(choosedPlanet === 1) { setImage(marsImage) }
    if(choosedPlanet === 2) { setImage(europaImage) }
    if(choosedPlanet === 3) { setImage(titanImage) }
  }, [choosedPlanet, setChoosedPlanet])

  return (
    <Wrapper>
      <DestinationList 
        image={image}
        handleListClick={handleListClick}
      />
      <DestinationInfo
        name={data[choosedPlanet].name}
        description={data[choosedPlanet].description}
        distance={data[choosedPlanet].distance}
        travel={data[choosedPlanet].travel}
      />
    </Wrapper>
  );
};

export default DestinationSlider;
