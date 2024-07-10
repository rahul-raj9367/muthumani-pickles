import { Box, Center, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import logo from '../assets/miss.svg'
import logo2 from '../assets/vis.svg'
import '../style.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet';

export default function About() {

   //AOS
   useEffect(()=>{
    Aos.init()
  },[])

  return (
    <Box className='NAV'>
        <Helmet>
         <title>About - MuthuMani Home Made Pickles and Turmeric Powder</title>
         <meta name="description" content="Learn about MuthuMani Home Made Pickles, our rich history, and our dedication to bringing you the finest traditional Indian pickles and turmeric powder." />
         <meta name="keywords" content="MuthuMani Pickles, Turmeric Powder, About , About MuthuMani Pickles, History MuthuMani Pickles, Mukkudal, Tirunelveli, Tamilnadu" />
         <meta name="author" content="MuthuMani Home Made Pickles" />
        </Helmet>
        {/* About us */}
        <Box mt={["50px"]} >
            <Center><Heading as='h2' size={['xl','2xl','2xl','2xl']} fontFamily="Merienda">About Us</Heading></Center>

            <Grid display={["none","none","none","flex"]} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} gap={2} overflow="hidden" mt={["60px"]}>
              <GridItem  w='100%' h='100%' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="500">
              <Center>
                <Image src="images/PackiaSelvan.png"  loading="lazy" mt={["","","","0px",""]}   alt="Traditional Pickles" borderRadius="20px" width={["90%","90%","50%","60%","60%","50%"]} height={["100%","100%","100%","100%"]} ml={["0px","0px","0px"]}/>
                </Center>
              </GridItem>
              <GridItem w='100%' h='100%' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="500">
                <Box  w={['100%','100%']} pl={["20px","20px","40px","20px"]} pr={["20px","20px","40px","20px"]} >
                <>
                <Text mt={["0%","0%","0%","0%","0%","5%"]}   fontFamily="Roboto Condensed"
                    fontWeight="500"
                    fontSize={["18px","18px","19px","19px","23px"]}
                    lineHeight={["40x","40x","35px","30px","40px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%","80%"]}>
                      At Muthumani Pickles, we bring you the rich and authentic flavors of traditional Indian pickles, crafted with care and passion. Founded by <span id="packi">Packia Selvan</span> and <span id="packi">Muthumani</span> on May 28, 2019, our company is dedicated to preserving the age-old art of pickle making, using only the finest natural ingredients and time-honored techniques.
                  </Text>
                </>
                <>
                <Text    fontFamily="Roboto Condensed"
                    fontWeight="500"
                    fontSize={["18px","18px","19px","19px","23px"]}
                    lineHeight={["40x","40x","35px","30px","40px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%","80%"]}>
                      Join us in savoring the delightful and diverse flavors of Muthumani Pickles. Whether you're looking to add a spicy kick to your meals or a tangy twist to your snacks, our pickles are the perfect choice to elevate your dining experience. Welcome to a world of tradition and taste with Muthumani Pickles!
                  </Text>
                </>
                  

                </Box>

              </GridItem>


            </Grid>


            

            {/* Desktop */}
            <Grid display={["none","none","none","flex"]} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={2} overflow="hidden" mt={["50px"]}>
              <GridItem  w='100%' h='100%' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="500" textAlign="end" >
              <Box  w={['100%']} pl={["20px","20px","40px","20px"]}  pr={["20px","20px","40px","20px"]} >
                <Center ml="15%">
                <Text mt={["0%","0%","0%","0%","0%","5%"]}  fontFamily="Roboto Condensed"
                    fontWeight="500"
                    fontSize={["18px","18px","19px","19px","23px"]}
                    lineHeight={["40x","40x","35px","30px","40px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%","90%"]}>
                  Our main focus is customer satisfaction, and we always prioritize feedback to improve the taste and quality of our products. This commitment to quality has earned us a reputation for excellence. As a Micro enterprise, we ensure that every product we offer meets your expectations through the highest standards in our manufacturing processes.</Text>
                </Center>
                <Center ml="15%">
                <Text   fontFamily="Roboto Condensed"
                    fontWeight="500"
                    fontSize={["18px","18px","19px","19px","23px"]}
                    lineHeight={["40x","40x","35px","30px","40px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%","90%"]}>
                      Located in Mukkudal, Tamil Nadu, Muthumani Pickles is a family-run business that prides itself on delivering quality and taste in every jar. Our pickles are more than just condiments; they are a celebration of India's culinary heritage. Each pickle is a blend of seasonal vegetables, carefully selected and preserved to enhance their natural flavors.
                  </Text>
                </Center>
                  

                </Box>
              </GridItem>


              <GridItem  w='100%' h='100%' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="500">
              <Center>
                <Image src="images/muthumani.png"  loading="lazy" mt={["","","","0px",""]}   alt="Traditional Pickles" borderRadius="20px" width={["90%","90%","50%","60%","60%","50%"]} height={["100%","100%","100%","50%"]} ml={["0px","0px","0px"]}/>
                </Center>
              </GridItem>


            </Grid>


            {/* Mobile */}
            <Grid display={["flex","flex","flex","none"]} flexDir={["column"]} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={2} overflow="hidden" mt={["50px"]}>
              
            <GridItem  w='100%' h='100%' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="500">
              <Center>
                <Image src="images/PackiaSelvan.png"  loading="lazy" mt={["","","","0px",""]}   alt="Traditional Pickles" borderRadius="20px" width={["90%","90%","50%","70%","60%","50%"]} height={["100%","100%","100%","100%"]} ml={["0px","0px","0px"]}/>
                </Center>
              </GridItem>
              
              <GridItem w='100%' h='100%' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="500">
              <Box w={['100%']} pl={["20px","20px","40px","20px"]} pr={["20px","20px","40px","20px"]} >
                <Center>
                <Text mt={["10%","10%","5%"]}   fontFamily="Roboto Condensed"
                    fontWeight="500"
                    fontSize={["18px","18px","19px","19px","23px"]}
                    lineHeight={["40x","40x","30px","30px","43px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%"]}>
                                       At Muthumani Pickles, we bring you the rich and authentic flavors of traditional Indian pickles, crafted with care and passion. Founded by <span id="packi">Packia Selvan</span> and <span id="packi">Muthumani</span> on May 28, 2019, our company is dedicated to preserving the age-old art of pickle making, using only the finest natural ingredients and time-honored techniques.
                                       </Text>
                </Center>
                <Center>
                <Text  fontFamily="Roboto Condensed"
                    fontWeight="500"
                    fontSize={["18px","18px","19px","19px","23px"]}
                    lineHeight={["40x","40x","30px","30px","43px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%"]}>
                                           Join us in savoring the delightful and diverse flavors of Muthumani Pickles. Whether you're looking to add a spicy kick to your meals or a tangy twist to your snacks, our pickles are the perfect choice to elevate your dining experience. Welcome to a world of tradition and taste with Muthumani Pickles!
                  </Text>
                </Center>
                  

                </Box>
              </GridItem>


             


            </Grid>
            <Grid display={["flex","flex","flex","none"]} flexDir={["column"]} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={2} overflow="hidden" mt={["50px"]}>
              
            <GridItem  w='100%' h='100%' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="500">
              <Center>
                <Image src="images/muthumani.png"  loading="lazy" mt={["","","","0px",""]}   alt="Traditional Pickles" borderRadius="20px" width={["90%","90%","50%","70%","60%","50%"]} height={["100%","100%","100%","100%"]} ml={["0px","0px","0px"]}/>
                </Center>
              </GridItem>
              
              <GridItem w='100%' h='100%' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="500">
              <Box w={['100%']} pl={["20px","20px","40px","20px"]} pr={["20px","20px","40px","20px"]} >
                <Center>
                <Text mt={["10%","10%","5%"]}   fontFamily="Roboto Condensed"
                    fontWeight="500"
                    fontSize={["18px","18px","19px","19px","23px"]}
                    lineHeight={["40x","40x","30px","30px","43px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%"]}>
                  Our main focus is customer satisfaction, and we always prioritize feedback to improve the taste and quality of our products. This commitment to quality has earned us a reputation for excellence. As a Micro enterprise, we ensure that every product we offer meets your expectations through the highest standards in our manufacturing processes.</Text>
                </Center>
                <Center>
                <Text   fontFamily="Roboto Condensed"
                    fontWeight="500"
                    fontSize={["18px","18px","19px","19px","23px"]}
                    lineHeight={["40x","40x","30px","30px","43px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%"]}>
                      Located in Mukkudal, Tamil Nadu, Muthumani Pickles is a family-run business that prides itself on delivering quality and taste in every jar. Our pickles are more than just condiments; they are a celebration of India's culinary heritage. Each pickle is a blend of seasonal vegetables, carefully selected and preserved to enhance their natural flavors.
                  </Text>
                </Center>
                  

                </Box>
              </GridItem>


             


            </Grid>
    
        </Box>



        {/* Vission And Mission */}
        <Box mt={["50px","150px"]}>

        <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} gap={2} overflow="hidden" mt={["50px"]}>
          <GridItem  w='100%' h='100%'>
            <Box>
              <Center><Heading as='h2' size={['xl','2xl','2xl','2xl']} fontFamily="Merienda"  data-aos="fade-up"
     >OUR VISION</Heading></Center>
              <Center><Image 
              data-aos="fade-up"
     data-aos-duration="3000"
                    mt={["20px"]}
                    loading="lazy" 
                    overflow="hidden" 
                    boxSize={["60%", "60%", "35%", "50%", "40%"]} 
                    bg="#fff" 
                    p="5px" 
                    src={logo2} 
                /></Center>
                <Center>
                <Text data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" data-aos-delay="500"  mt={["10px"]} fontFamily="Roboto Condensed" fontSize={["17px","17px","20px","18px","19px"]} width={["80%","80%","50%","80%","70%"]}  textAlign="center">
                Our vision at Muthumani Pickles is to globally lead in high-quality, traditional Indian pickles, preserving and promoting the rich heritage of Indian cuisine. Through innovation and uncompromising quality, we aim to be a trusted name, delivering authentic flavors cherished for generations
                </Text>
                </Center>
            </Box>
             
          </GridItem>
          <GridItem  w='100%' h='100%'>
            <Box mt={["50px","50px","50px","0px"]}>
              <Center><Heading as='h2' size={['xl','2xl','2xl','2xl']} fontFamily="Merienda"  data-aos="fade-up">OUR MISSION</Heading></Center>
               
              <Center> <Image 
               data-aos="fade-up"
     data-aos-duration="3000"
                mt={["20px","20px","30px","20px"]}
                    loading="lazy" 
                    overflow="hidden" 
                    boxSize={["60%", "60%", "35%", "50%", "40%"]} 
                    bg="#fff" 
                    p="5px" 
                    src={logo} 
                /></Center>
                <Center>
                <Text data-aos="fade-left"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" data-aos-delay="500" fontFamily="Roboto Condensed"  mt={["20px","20px","20px","10px"]} fontSize={["17px","17px","20px","18px","19px"]}  width={["80%","80%","50%","80%","70%"]} textAlign="center">
                Muthumani Pickles' mission is to craft exceptional pickles embodying traditional Indian flavors. We use the finest natural ingredients and sustainable practices, valuing customer feedback to continually enhance our products. Supporting local communities and exploring new flavors, we aim to enrich meals with the unique tastes of our pickles.
                </Text>
                </Center>
               
            </Box>
              
          </GridItem>
        </Grid>
        </Box>


    </Box>
  )
}

