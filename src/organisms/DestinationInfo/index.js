import React from 'react';
import { Wrapper } from './DestinationInfo.css';
import H3 from '../../molecules/H3';
import Text from '../../molecules/Text';
import Subtitle1 from '../../molecules/Subtitle1';
import Subtitle2 from '../../molecules/Subtitle2';


const DestinationInfo = ({
  name,
  description,
  distance,
  travel
}) => {
  return (
    <Wrapper>
      <div className="container container-1">
        <H3 className="title">{name}</H3>
        <Text className="description">{description}</Text>
      </div>
      <div className="container container-2">
        <div className="data-section">
          <Subtitle2 className="subtitle">AVG. DISTANCE</Subtitle2>
          <Subtitle1 className="subtitle__description">{distance}</Subtitle1>
        </div>
        <div className="data-section">
          <Subtitle2 className="subtitle">EST. TRAVEL TIME</Subtitle2>
          <Subtitle1 className="subtitle__description"  id="id">{travel}</Subtitle1>
        </div>
      </div>
    </Wrapper>
  );
};

export default DestinationInfo;
