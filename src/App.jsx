import { Box, Heading } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    // Retrieve initial state from local storage if available
    const savedButton = localStorage.getItem('activeButton');
    return savedButton ? parseInt(savedButton, 10) : 1;
  });

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    localStorage.setItem('activeButton', buttonId); // Save state to local storage
  };
  return (
    <>
      <BrowserRouter basename="/muthumani-pickles/">
      <Navbar activeButton={activeButton} handleButtonClick={handleButtonClick} />
      <ScrollToTop/>
        <Routes>
        <Route index element={<Home setActiveButton={handleButtonClick} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer  setActiveButton={handleButtonClick}/>
      </BrowserRouter>
    </>
  )
}

export default App
