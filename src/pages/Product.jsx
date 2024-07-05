import { Box, Card, CardBody, CardFooter, Center, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import '../style.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';



export default function Product() {
  useEffect(() => {
    document.title = 'Product - MuthuMani Home Made Pickles and Turmeric Powder';
  }, []);
  return (
    <Box className='NAV'>
      {/* Product */}
      <Box mt={["50px"]}>
      <Center><Heading as='h2' size={['xl','2xl','2xl','2xl']}>Pickles</Heading></Center>
      <Grid className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} gap={6}>
          <GridItem  mt="50px" >
              <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
               <Image src="images/tra.jpg" alt="wolf_Tattoo" borderRadius="20px" height="400px" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Citron Pickle   ₹7</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
           
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
                <Image src="images/tra.jpg" alt="Pheonix_Tattoo" borderRadius="20px" height="400px" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Lemon Pickle   ₹7</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
              <Image src="images/tra.jpg" alt="HonyBee_Tattoo" borderRadius="20px" height="400px" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Kathambam Pickle   ₹7</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
              <Image src="images/tra.jpg" alt="Lord_Shiva_Tattoo" borderRadius="20px" height="400px" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
                <Center>
                <CardFooter>
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Garlic Pickle   ₹7</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
        </Grid>
      <Grid className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} gap={6}>
          <GridItem  mt="50px" >
              <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
               <Image src="images/tra.jpg" alt="wolf_Tattoo" borderRadius="20px" height="400px" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Citron Pickle   ₹50</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
           
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
                <Image src="images/tra.jpg" alt="Pheonix_Tattoo" borderRadius="20px" height="400px" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Lemon Pickle   ₹50</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
              <Image src="images/tra.jpg" alt="HonyBee_Tattoo" borderRadius="20px" height="400px" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Kathambam Pickle   ₹50</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt="50px">
          <Center>
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
              <Image src="images/tra.jpg" alt="Lord_Shiva_Tattoo" borderRadius="20px" height="400px" width="100%" transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
                <Center>
                <CardFooter>
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Garlic Pickle   ₹50</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
          </GridItem>
        </Grid>
      </Box>
      <Box mt={["100px"]}>
      <Center><Heading as='h2' size={['xl','2xl','2xl','2xl']}>Kasthuri Manjal Powder</Heading></Center>
      <Center mt="50px">
              <Card borderRadius="20px" data-aos="fade-down" data-aos-delay="100">
              <CardBody>
               <Image src="images/tra.jpg" alt="wolf_Tattoo" borderRadius="20px" height="400px" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
                <Center>
                <CardFooter >
                  <Center>
                      <Heading fontSize="lg" fontFamily="Montserrat">Kasthuri Manjal Powder   ₹20</Heading>
                  </Center>
                </CardFooter>
                </Center>
              </Card>
              </Center>
      </Box>
    </Box>
  )
}

