import Heading1 from'./molecules/Heading1'
import Heading2 from'./molecules/Heading2'
import Heading3 from'./molecules/Heading3'
import Heading4 from'./molecules/Heading4'
import Heading5 from'./molecules/Heading5'
import { GlobalStyle } from './Global.css';
import React from 'react'
import SubHeading1 from './molecules/SubHeading1'
import SubHeading2 from './molecules/SubHeading2'
import NavText from './molecules/NavText'
import Text from './molecules/Text';
function App() {
  return (
    <React.Fragment>
     <GlobalStyle />
     <Heading1>EARTH</Heading1>
     <Heading2>VENUS</Heading2>
     <Heading3>EARTH</Heading3>
     <Heading4>EARTH</Heading4>
     <Heading5>EARTH</Heading5>
     <SubHeading1>384,000KM</SubHeading1>
     <SubHeading2>AVG.DISTANCE</SubHeading2>
     <NavText>EUROPA</NavText>
     <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </Text>
   </React.Fragment>
  );
}

export default App;
