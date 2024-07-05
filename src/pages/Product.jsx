import { Box, Center, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import '../style.css';
import Aos from 'aos';
import 'aos/dist/aos.css'



export default function Product() {
  return (
    <Box className='NAV'>
      {/* Product */}
      <Box mt={["50px"]}>
      <Center><Heading as='h2' size={['xl','2xl','2xl','2xl']}>Pickles</Heading></Center>
      <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(4, 1fr)']} gap={2} overflow="hidden" mt={["60px"]}>
          <GridItem  w='100%' h='100%'>
              
          </GridItem>
      </Grid>
      </Box>
    </Box>
  )
}

