import { BrowserRouter,HashRouter , Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';
import PageError from './pages/PageError';
import Products from './pages/Products';

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
      <HashRouter basename="/">
        <Navbar activeButton={activeButton} handleButtonClick={handleButtonClick} />
        <ScrollToTop />
        <Routes>
          <Route index element={<Home setActiveButton={handleButtonClick} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<PageError setActiveButton={handleButtonClick}/>} />
        </Routes>
        <Footer setActiveButton={handleButtonClick} />
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
