import { Box,Center,Image,Heading ,Text,Tooltip,Button} from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { NavLink,Link } from "react-router-dom";
import { GoRead } from "react-icons/go";
import { FaHome } from "react-icons/fa";
export default function PageError({setActiveButton}) {
    useEffect(() => {
        document.title = '404 Page Not Found - MuthuMani Home Made Pickles and Turmeric Powder';
      }, []);
  return (
    <Box>



<Box mt="100px">
      <Center> <Image  src='images/oops.jpg' alt='404 Page Error' height={["400","500"]} width={["500"]} /></Center>
      <Center><Heading color="black" as='h2' size={['lg','2xl','2xl','2xl']} mt="15px" fontFamily="Merienda">This page doesn’t exist</Heading></Center>
      <Center><Text mt="15px" fontSize={["lg","xl"]} color="#B31312" as="b" fontFamily="Roboto Condensed">Please check your URL or return to home.</Text></Center>
      <Center><Link to="/"><Button bg='#B31312' mt="15%" fontFamily="Merienda" _hover={{ bg: 'black', color:'#ffff' }} ml={["","","5%","5%"]} color='#ffffff' leftIcon={<FaHome size={20} />}  onClick={() => setActiveButton(1)}>Back to Home</Button></Link></Center>
    </Box>
      
    </Box>
  )
}
