import React, { useEffect, useRef,useState } from 'react';

import '../App.css'
import { Grid, GridItem,Flex } from '@chakra-ui/react'
import { Box,Stack, Center,Button, Heading, Image ,Text} from '@chakra-ui/react';

import { NavLink,Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { GoRead } from "react-icons/go";

import { Helmet } from 'react-helmet';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

import Aos from 'aos';
import 'aos/dist/aos.css'

import logo from '../assets/s11.svg'
import logo2 from '../assets/s22.svg'
import logo3 from '../assets/s33.svg'

export default function Home({setActiveButton }) {
    
  

    //Loading 
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timeout);
    }, []);


    //carousal
    const carouselItems = [
      {
        src: 'images/b1.jpg',
        alt: 'Slide 1'
      },
      {
        src: 'images/b2.jpg',
        alt: 'Slide 1'
      },
      {
        src: 'images/b3.jpg',
        alt: 'Slide 1'
      }
    ];


    const placeholderImage = 'images/banner1.jpg';

    //AOS
    useEffect(()=>{
      Aos.init()
    },[])

    
  return (
    // <>
    // {loading ? (
    //     <Loading />
    // ) : (
    //   <>
    //   <Box>Hello</Box>
    //   </>
    //   )}
    // </>
    <Box>
       <Helmet>
        <meta name="description" content="MuthuMani Home Made Pickles and Turmeric Powder offers traditional Indian pickles made with the finest natural ingredients. Explore our variety of flavors and add a spicy or tangy twist to your meals." />
        <meta name="keywords" content="MuthuMani Pickles,Pickles, Turmeric Powder,MuthuMani Pickles Mukkudal,Tirunelveli Pickles,Tamil Nadu  Pickles,Indian Pickles, Home Made, Natural Ingredients" />
        <meta name="author" content="MuthuMani Home Made Pickles" />
        <link rel="canonical" href="https://www.muthumanipickles.com" />
        <title>MuthuMani Home Made Pickles and Turmeric Powder</title>
      </Helmet>
            <Box >
      {/* Carousel */}
        <Box width={["100%"]}  className='Caro'>
        <a href="https://wa.me/9367747439"  target="_blank"><Carousel interval={6000} controls={false} indicators={false} pause={true} >
          {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                  <Image
                   loading="lazy" 
                    src={item.src}
                    alt={item.alt}
                    width="100%"
                    height="90%"
                    fallbackSrc={placeholderImage} 
                  />
                </Carousel.Item>
              ))}
        </Carousel></a>
        </Box>
        
        {/* Welcome To Muthumani Pickles */}
        <Box className='Caro' pt={["60px","60px","90px","150px"]}  pb={["60px","80px"]}>
            {/* <Center><Heading pt={["50px"]}  pb={["50px"]} as='h2' size='2xl'>Welcome To Muthumani Pickles</Heading></Center> */}
            <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}  overflow="hidden" gap={6}>
              <GridItem w='100%' h='100%' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="500">
                <Center>
                <Image src="images/tra.png"  loading="lazy" mt={["","","","0px",""]}   alt="Traditional Pickles" borderRadius="20px" width={["90%","90%","50%","90%","90%","85%"]} height={["100%","100%","100%","100%"]} ml={["0px","0px","0px"]}/>
                </Center>
                
              </GridItem>

              <GridItem w='100%' h='100%'  mt={["","","","","0px","0%"]}   data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="500">
                <Box w={['100%']} pl={["20px","20px","40px","20px"]} pr={["20px","20px","40px","20px"]} >
                <Center><Heading fontFamily="Merienda"  as='h2' size={['lg','lg','lg','lg','xl']} color="#B31312" mb="4%" textAlign="center">Welcome To Muthumani Pickles</Heading></Center>
                <Center>
                <Text   fontFamily="Roboto Condensed"
                    fontWeight="500"
                    fontSize={["18px","18px","19px","19px","23px"]}
                    lineHeight={["40x","40x","38px","30px","43px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%"]}>
                    Muthumani Pickles, established on May 28, 2019, in Mukkudal, Tamil Nadu, embodies the essence of traditional Indian pickle-making. Founded by Packia Selvan and Muthumani, this family-run business is committed to preserving India's culinary heritage.
                  </Text>
                </Center>
                <Center>
                <Text    fontFamily="Roboto Condensed"
                    fontWeight="500"
                    fontSize={["18px","18px","19px","19px","23px"]}
                    lineHeight={["40x","40x","38px","30px","43px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%"]}>
                    Using only the finest natural ingredients and time-honored techniques, We offer a variety of pickles crafted to enhance natural flavors. Customer satisfaction is paramount, with continual improvement based on feedback, ensuring each product meets the highest standards. Muthumani Pickles invites you to explore their diverse flavors, adding a spicy or tangy twist to your meals and snacks.
                  </Text>
                </Center>
                  

                  <Link to="/about"><Button bg='#B31312' fontFamily="Merienda" _hover={{ bg: 'black', color:'#ffff' }} ml={["","","5%","5%"]} color='#ffffff' leftIcon={<GoRead size={20} />}  onClick={() => setActiveButton(2)}>Read More</Button></Link>
                </Box>
              </GridItem>
            </Grid>
        </Box>


        {/* Our Products */}
        <Box mb="50px" className='Caro'>
        <Center><Heading pt={["","","20px","50px"]}  pb={["25px","50px"]} as='h2' size={['xl','2xl','2xl','2xl']} fontFamily="Merienda">Our Products</Heading></Center>
        <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={6} overflow="hidden">
        <Link to="/products" onClick={() => setActiveButton(3)}><GridItem w='100%' h='100%' data-aos="fade-up"
     data-aos-duration="3000">
            <Center>
              <Image borderRadius="full"  loading="lazy"  overflow="hidden" boxSize={["100%","80%"]} src='images/p11.png' />
            </Center>
          </GridItem></Link>
          <Link to="/products" onClick={() => setActiveButton(3)}><GridItem w='100%' h='100%' data-aos="fade-up"
     data-aos-duration="3000">
            <Center>
            <Image borderRadius="full"  loading="lazy"  overflow="hidden" boxSize={["100%","80%"]} src='images/p22.png' />
            </Center>
          </GridItem></Link>
        </Grid>
        </Box>

            {/* Our Services */}
        <Box bg="#B31312" mt="100px" >
        <Center><Heading mt={["40px","80px"]}  pb={["50px"]} as='h2' size={['xl','2xl','2xl','2xl']} color='#ffffff' fontFamily="Merienda">Our Services</Heading></Center>
        <Box className='Caro' pb="100px">
        <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)']} gap={[10,2,10]} mt={["20px","40px"]} overflow="hidden">
          <GridItem w='100%' h='100%' >
              <Center>
                <Flex flexDir="column" alignItems="center" d>
                <Image 
  borderRadius="full" 
  loading="lazy" 
  border="7px solid #000000"  // Correct color code for black
  overflow="hidden" 
  boxSize={["60%", "60%", "35%", "70%", "65%"]} 
  bg="#fff" 
  p="5px" 
  src={logo2} 
  data-aos="flip-left" 
  data-aos-delay="500" 
/>
                  <Heading size={['md','md','lg','lg']} mt={["18px","20px"]} color="white" data-aos="fade-up"
     data-aos-duration="3000 " fontFamily="Merienda">Quality</Heading>
                  <Text mt={["10px","20px"]} width={["80%","80%","50%","80%"]} textAlign="center" color="white" data-aos="fade-up"
     data-aos-duration="3000" fontSize={["17px","17px","20px","18px","19px"]}  fontFamily="Roboto Condensed">Creating the perfect pickle is an art. We select the finest vegetables, balance ingredients precisely, and use traditional methods to preserve quality and taste, delivering authentic and delicious pickles every time.</Text>
                </Flex>
              </Center>
          </GridItem>
          <GridItem w='100%' h='100%' >
            <Center>
                <Flex flexDir="column" alignItems="center">
                <Image 
  borderRadius="full" 
  loading="lazy" 
  border="7px solid #000000"  // Correct color code for black
  overflow="hidden" 
  boxSize={["60%", "60%", "35%", "70%", "65%"]} 
  bg="#fff" 
  p="5px" 
  src={logo3} 
  data-aos="flip-left" 
  data-aos-delay="500" 
/>
                  <Heading size={['md','md','lg','lg']} mt={["10px","20px"]} color="white" data-aos="fade-up"
     data-aos-duration="3000 " fontFamily="Merienda">Tasty</Heading>
                  <Text mt={["10px","20px"]}  width={["80%","80%","50%","80%"]} textAlign="center" data-aos="fade-up"
     data-aos-duration="3000"  color="white" fontSize={["17px","17px","20px","18px","19px"]}  fontFamily="Roboto Condensed">Our pickles are crafted with 100% natural ingredients, ensuring no artificial additives or preservatives for a wholesome and healthy experience.</Text>
                </Flex>
              </Center>
          </GridItem>
          <GridItem w='100%' h='100%'  >
            <Center>
                <Flex flexDir="column" alignItems="center">
                <Image 
  borderRadius="full" 
  loading="lazy" 
  border="7px solid #000000"  // Correct color code for black
  overflow="hidden" 
  boxSize={["60%", "60%", "35%", "70%", "65%"]} 
  bg="#fff" 
  p="5px" 
  src={logo} 
  data-aos="flip-left" 
  data-aos-delay="500" 
/>
                  <Heading size={['md','md','lg','lg']} mt={["18px","20px"]} data-aos="fade-up"
     data-aos-duration="3000 " color="white" fontFamily="Merienda">Service</Heading>
                  <Text mt={["1[]px","20px"]} width={["80%","80%","50%","80%"]} textAlign="center" data-aos="fade-up"
     data-aos-duration="3000" color="white" fontSize={["17px","17px","20px","18px","19px"]}   fontFamily="Roboto Condensed" >At Muthumani Pickles, we prioritize exceptional service alongside our high-quality products, earning consistent praise from our satisfied customers.</Text>
                </Flex>
              </Center>
          </GridItem>
        </Grid>
        </Box>
        
        </Box>


        {/* What Our Clients Say */}
        <Box mb="50px" className='Caro'>
        <Center><Heading pt={["60px"]}  pb={["50px"]} as='h2' size={['xl','2xl','2xl','2xl']} textAlign="center" fontFamily="Merienda">What Our Clients Say</Heading></Center>
              <Box data-aos="zoom-in-down"  mt="40px" overflow="hidden" data-aos-delay="300">
              <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                >
            
                  <SwiperSlide>
                  <Center mt={["40%","20%","30%","20%","18%"]}>
                      <Heading  
                      fontWeight="400"
                     fontSize={["20px","24px"]}
                    lineHeight={["30px","35px","35px","45px"]}
                    textAlign="justify"
                    width="80%" fontFamily="Merienda">
                          " Absolutely love the flavors! Authentic and delicious. Highly recommend "
                      </Heading>
                    </Center>
                    <Text fontFamily="Merienda" textAlign="right"  pt={["10px","10px","20px","50px"]} pb={["0px","0px","0px","0px","0px","40px"]}pr="10%" >-Vel Murugan</Text>

                  </SwiperSlide>

                  <SwiperSlide>
                  <Center mt={["40%","20%","20%","19%","17%"]}>
                      <Heading  
                      fontWeight="400"
                    fontSize={["20px","24px"]}
                    lineHeight={["30px","35px","35px","45px"]}
                    textAlign="justify"
                    width="80%" fontFamily="Merienda">
                        " Absolutely love the Kasturi manjal powder! Its authentic richness enhances every skincare routine. Highly recommend!"
                      </Heading>
                    </Center>
                    <Text fontFamily="Merienda" textAlign="right" pt={["10px","10px","20px","50px"]}  pb={["0px","0px","0px","0px","0px","40px"]}  pr="10%" >-Priya</Text>

                  </SwiperSlide>

                  
                  <SwiperSlide>
                  <Center mt={["40%","20%","30%","20%","18%"]}>
                      <Heading  
                      fontWeight="400"
                      fontSize={["20px","24px"]}
                      lineHeight={["30px","35px","35px","45px"]}
                    textAlign="justify"
                    width="80%"  fontFamily="Merienda">
                          " Great quality pickles with natural ingredients. Reminds me of homemade pickles "
                      </Heading>
                    </Center>
                    <Text fontFamily="Merienda" textAlign="right" pt={["10px","10px","20px","50px"]}  pb={["0px","0px","0px","0px","0px","40px"]} pr="10%" >-Vasanth </Text>

                  </SwiperSlide>

                  <SwiperSlide>
                  <Center mt={["40%","20%","29%","20%","18%"]}>
                      <Heading  
                      fontWeight="400"
                    fontSize={["20px","24px"]}
                    lineHeight={["30px","45px"]}
                    textAlign="justify"
                    width="80%" fontFamily="Merienda">
                          " Excellent taste and freshness. The packaging is also very convenient. Will definitely buy again "
                      </Heading>
                    </Center>
                    <Text fontFamily="Merienda" textAlign="right" pt={["10px","10px","20px","50px"]}  pb={["0px","0px","0px","0px","0px","40px"]}  pr="10%" >-Athinesh Lal </Text>

                  </SwiperSlide>

                  
                </Swiper>
              </Box>
        </Box>
        
            </Box>
    </Box>
    
    
  )
}
