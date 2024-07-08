import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './pages/Product';
import About from './pages/About';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';
import PageError from './pages/PageError';

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
    <ChakraProvider>
      <BrowserRouter basename="/">
        <Navbar activeButton={activeButton} handleButtonClick={handleButtonClick} />
        <ScrollToTop />
        <Routes>
          <Route index element={<Home setActiveButton={handleButtonClick} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<PageError setActiveButton={handleButtonClick}/>} />
        </Routes>
        <Footer setActiveButton={handleButtonClick} />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
