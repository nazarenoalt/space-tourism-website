import React from 'react'
// styles
import { GlobalStyle } from './Global.css';

// pages
import Home from './pages/Home'

// molecules
import Heading1 from'./molecules/Heading1'
import Heading2 from'./molecules/Heading2'
import Heading3 from'./molecules/Heading3'
import Heading4 from'./molecules/Heading4'
import Heading5 from'./molecules/Heading5'
import SubHeading1 from './molecules/SubHeading1'
import SubHeading2 from './molecules/SubHeading2'
import NavText from './molecules/NavText'
import Text from './molecules/Text';

function App() {
  return (
  <React.Fragment>
    <GlobalStyle />
    <Home />
   </React.Fragment>
  );
}

export default App;
