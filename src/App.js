import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// styles
import { GlobalStyle } from './Global.css';
// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import NotFound from './pages/NotFound';

function App() {
  return (
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  exact />
        <Route path="/destination" element={<Destination />}  exact />
        <Route path="/crew" element={<Crew />}  exact />
        <Route path="/technology" element={<Technology />}  exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
   </React.StrictMode>
  );
}

export default App;
