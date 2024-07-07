import { Box, Card, CardBody, CardFooter, Center, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import '../style.css';
import Aos from 'aos';
import 'aos/dist/aos.css'



export default function Product() {
  useEffect(() => {
    document.title = 'Product - MuthuMani Home Made Pickles and Turmeric Powder';
  }, []);
  return (
    <Box className='NAV'>
      {/* Product */}
      <Box mt={["50px"]}>
      <Center><Heading as='h2' size={['xl','2xl','2xl','2xl']}>Pickles</Heading></Center>
      <Grid pl={["5%","5%","2%"]} pr={["5%","5%","2%"]} data-aos="fade-up"
     data-aos-duration="3000" className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} gap={6}>
          <GridItem  mt="50px" >
              <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2"  >
              <CardBody>
               <Image src="images/lemon7.jpg"   loading="lazy"  alt="lemon7" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
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
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
                <Image src="images/citron7.jpg"   loading="lazy"  alt="citron7" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
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
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
              <Image src="images/kath7.jpg"   loading="lazy"  alt="Kathambam" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
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
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
              <Image src="images/citron7.jpg"   loading="lazy"  alt="citron7" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
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
      <Grid pl={["5%","5%","2%"]} data-aos="fade-up"
     data-aos-duration="3000" pr={["5%","5%","2%"]} className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} gap={6}>
          <GridItem  mt="50px" >
              <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
               <Image src="images/lemon50.jpg"   loading="lazy"  alt="lemon50" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
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
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
                <Image src="images/citron50.jpg"   loading="lazy"  alt="citron50" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
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
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
              <Image src="images/kathambam50.jpg"  loading="lazy" alt="Kathambam" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
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
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
              <Image src="images/garlic50.jpg" loading="lazy" alt="garlic50" borderRadius="20px" height="100%" width="100%" transition="transform 0.3s"
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
      <Center data-aos="fade-up"
     data-aos-duration="3000" mt="50px" pl={["5%","5%","2%"]} pr={["5%","5%","2%"]}>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2"  >
              <CardBody>
               <Image src="images/turmeric.jpg" loading="lazy" alt="turmeric" borderRadius="20px" height={["100%","100%","400px"]} width="100%"  transition="transform 0.3s"
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