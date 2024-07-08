import { Box, Heading } from '@chakra-ui/react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { useState } from 'react';
import Product from './pages/Product';
import About from './pages/About';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [activeButton, setActiveButton] = useState(() => {
    const savedButton = localStorage.getItem('activeButton');
    return savedButton ? parseInt(savedButton, 10) : 1;
  });

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    localStorage.setItem('activeButton', buttonId);
  };

  return (
    <>
      <HashRouter>
        <Navbar activeButton={activeButton} handleButtonClick={handleButtonClick} />
        <ScrollToTop />
        <Routes>
          <Route index element={<Home setActiveButton={handleButtonClick} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer setActiveButton={handleButtonClick} />
      </HashRouter>
    </>
  );
}

export default App;
