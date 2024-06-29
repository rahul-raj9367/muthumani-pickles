import { Box,Heading,Center } from '@chakra-ui/react'
import React from 'react'
import '../style.css'


export default function Loading() {
  return (
    <Box bg="black" w="100vw" h="100vh">
      <span class="loader" id="ll" ></span>      
    </Box>
  )
}