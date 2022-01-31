import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// styles
import { GlobalStyle } from './Global.css';
// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import Test from './pages/Test';


function App() {
  return (
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  exact />
      </Routes>
    </BrowserRouter>
   </React.StrictMode>
  );
}

export default App;
