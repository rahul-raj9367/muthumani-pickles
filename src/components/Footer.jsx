import { Box,Center,Divider, List, ListItem ,Heading,Text, Flex,Icon,IconButton} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt  } from "react-icons/fa";
import { Grid, GridItem,Image,AspectRatio} from '@chakra-ui/react'
import { FiInstagram} from 'react-icons/fi';
import { FaYoutube } from "react-icons/fa";
import {  BsWhatsapp} from 'react-icons/bs';
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook} from 'react-icons/fa';
import { LuPhoneCall } from "react-icons/lu";
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import logo from '../assets/logo.svg'
import '../style.css'
import {  ArrowUpIcon } from '@chakra-ui/icons'
import { Link, NavLink } from 'react-router-dom';

export default function Footer({setActiveButton}) {

  const [display, setDisplay] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setDisplay('block');
      } else {
        setDisplay('none');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <Box bg="#B31312" as="footer" mt="100px" pb="30px">

    <Box position="fixed" right={["15px","30px"]} bottom={["15px","30px"]} cursor="pointer" zIndex={99}>
      <a href="https://wa.me/9367747439"  target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
        <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
      </svg>
      </a>
    </Box>

    <Box  display={display} position="fixed" left={["15px","25px"]} bottom={["15px","30px"]} cursor="pointer" >
      <IconButton 
      onClick={scrollToTop}
      boxSize={10}
      p="25px"
      borderRadius="50%"
      bg="white"
      display={["none","none","flex","flex"]}
      icon={<ArrowUpIcon  boxSize={10}  color="#B31312" />}
      ></IconButton>
    </Box>



    <Box className='Footer'>
      <Box pt="50px" pb={["5px","50px"]}>
        <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={['8','10','10','10']}>

            

            <GridItem w='100%' h='100%' mt={["","","0px","40px","40px"]}>
              <Center>
              <NavLink>
              <Link to="/">
                  <Image 
                      loading="lazy" 
                      mt={[]} 
                      src={logo} 
                      bg='' 
                      alt='rahul' 
                      w={['200px','200px','120px','200px']} 
                      h={['200px','200px','120px','200px']} 
                      onClick={() => setActiveButton(1)} // Set HOME button active on logo click
                    />
                  </Link>
                </NavLink>
                 
              </Center>

              {/* <Center>
              <Flex flexDirection={["column","column","column","row"]} gap={4}>
                      <Icon as={LuPhoneCall} boxSize={8} color="#D27C2C"/> 
                      <Icon as={SiGmail} boxSize={8} color="#D27C2C"/> 
                      <Icon as={GrInstagram } boxSize={8} color="#D27C2C"/> 
                      <Icon as={FaYoutube}  boxSize={8} color="#D27C2C"/> 
                      <Icon as={BsWhatsapp} boxSize={8} color="#D27C2C"/> 
                  </Flex>
              </Center> */}
            <Center>
            <Flex flexDirection={["column"]}>
                    <Heading  size={['xl','xl','lg','xl','xl']} color="#FFFD00">Contact Us</Heading>
                  </Flex>
            </Center>
            <Center>    

                 
                <Flex flexDirection={["column","column","column","column","row"]} >
                  
                  
                  <Center>
                 
                      <Flex  mt="20px" gap={2}>
                        <Icon as={LuPhoneCall}  boxSize={[6,6,5,6]}   color="#FFFD00"/> 
                        <a href="tel:+919442256790" cursor="pointer" ><Text color="#ffffff"  fontSize={["16px","16px","15px","16px"]}>+91 9442256790 </Text></a>
                        <a href="tel:+9025957223" cursor="pointer" ><Text color="#ffffff"  fontSize={["16px","16px","15px","16px"]} >+91 9025957223 </Text></a>

                      </Flex>
                    
                  </Center>
                    
                      <a href="mailto: muthumanipickles@gmail.com" target="_blank">
                        <Flex gap={2} mt={["0px","0px","0px","0px","20px"]} ml={["5px","30px"]}>
                          <Icon as={SiGmail} boxSize={[6,6,5,6]}  color="#FFFD00"/> 
                          <Text color="#fbfbfb" fontSize={["16px","16px","15px","16px"]} >muthumanipickles@gmail.com</Text>
                        </Flex>
                      </a>
                </Flex>
            </Center>


            <Center>
            <Flex flexDirection={["column","column","column","row"]} mt={["4px","4px","4px","0px"]} gap={[2,2,0,6]}>
                

            <a href="https://wa.me/9367747439"  target="_blank"><Flex gap={2}>
            <Icon as={BsWhatsapp}  boxSize={[6,6,5,6]}   color="#FFFD00"/> 
            <Text color="#fbfbfb"  fontSize={["16px","16px","15px","16px"]}>Whatsapp</Text>
          </Flex></a>


              <a href="https://www.instagram.com/muthumani_pickles/" target='_blank'><Flex gap={2}>
                <Icon as={GrInstagram }  boxSize={[6,6,5,6]}   color="#FFFD00"/> 
                <Text color="#fbfbfb" fontSize={["16px","16px","15px","16px"]}>Instagram</Text>
              </Flex></a>
              

              <a href="https://www.youtube.com/@muthumanipickles" target='_blank'><Flex  gap={2}>
                <Icon as={FaYoutube}  boxSize={[6,6,5,6]}  color="#FFFD00"/> 
                <Text color="#fbfbfb" fontSize={["16px","16px","15px","16px"]} >Youtube</Text>
              </Flex></a>


              



              </Flex>
            </Center>
              
            
                
            </GridItem>




            <GridItem w='100%' h='100%'>
            <Center>
                <AspectRatio height={["100%","100%"]} ml={["","","0px","0px","0px"]} mt={["","","55px","70px","0px"]} width={["90%","90%","90%","90%","550px"]} border="4px" borderColor="#f5f4f0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.8589814472184!2d77.52304497517464!3d8.744989298055476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b043d0064efc6cd%3A0xb2acc3e564c1977a!2sMuthumani%20Pickles!5e0!3m2!1sen!2sin!4v1719586174963!5m2!1sen!2sin" ></iframe>
              </AspectRatio>
            </Center>
            </GridItem>

        </Grid>
      </Box>   
    </Box>
    
    </Box>

    <Box bg="black" pt="20px" pb={["40px","20px"]}>
          <Center>

            <Text color="#ffff" fontSize={["18px","18px","18px","18px","22px"]} w={["80%",]} fontWeight="400" textAlign="center">© 2024, Muthumani Pickles. All Rights Reserved.  Website  developed by <span id="span"><a href="https://rahul-raj9367.github.io/portfolio/" target='_blank'>Rahul Raj</a></span> </Text>

             
             </Center>
    </Box>
    </>
    
  )
}
