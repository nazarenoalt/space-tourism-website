import React from 'react'
// styles
import { GlobalStyle } from './Global.css';

// pages
import Home from './pages/Home'


function App() {
  return (
  <React.Fragment>
    <GlobalStyle />
    <Home />
   </React.Fragment>
  );
}

export default App;
