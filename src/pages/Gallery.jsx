import { Box, Card, CardBody, CardFooter, Center, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import '../style.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet';

export default function Gallery() {

   //AOS
   useEffect(()=>{
    Aos.init()
  },[])

  
  return (
    <Box className='NAV'>
      <Helmet>
        <title>Gallery - MuthuMani Home Made Pickles and Turmeric Powder</title>
        <meta name="description" content="Discover the wide range of MuthuMani Home Made Pickles and Turmeric Powder. Our products include Lemon Pickle, Citron Pickle, Kathambam Pickle, and Garlic Pickle, all made with traditional recipes and the finest ingredients." />
        <meta name="keywords" content="MuthuMani Pickles, Turmeric Powder, Lemon Pickle, Citron Pickle, Kathambam Pickle, Garlic Pickle, Kasthuri Manjal Powder, Home Made Pickles, Traditional Indian Pickles, Mukkudal, Tirunelveli, Tamilnadu" />
        <meta name="author" content="MuthuMani Home Made Pickles" />
      </Helmet>
      <Box mt={["50px"]}>
      <Center><Heading as='h2' size={['xl','2xl','2xl','2xl']} fontFamily="Merienda">Gallery</Heading></Center>
      <Grid pl={["5%","5%","2%"]} pr={["5%","5%","2%"]} data-aos="fade-up"
     data-aos-duration="3000" className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']} gap={[6,6,6,10]}>
          <GridItem  mt={["50px"]} >
              <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2"  >
              <CardBody>
               <Image src="images/all2.jpg"   loading="lazy"  alt="lemon7" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
           
          </GridItem>
          <GridItem mt={["25px","25px","50px"]}>
          <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
                <Image src="images/kathh.jpg"   loading="lazy"  alt="citron7" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt={["25px","25px","50px"]}>
          <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
              <Image src="images/c222.jpg"   loading="lazy"  alt="Kathambam" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
          </GridItem>
        </Grid>


        <Grid pl={["5%","5%","2%"]} pr={["5%","5%","2%"]} data-aos="fade-up"
     data-aos-duration="3000" className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']} gap={[6,6,6,10]}>
          <GridItem  mt="50px" >
              <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2"  >
              <CardBody>
               <Image src="images/lem.jpg"   loading="lazy"  alt="lemon7" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
           
          </GridItem>
          <GridItem mt={["25px","25px","50px"]}>
          <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
                <Image src="images/lm.jpg"   loading="lazy"  alt="citron7" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt={["25px","25px","50px"]}>
          <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
              <Image src="images/l1.jpg"   loading="lazy"  alt="Kathambam" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
          </GridItem>
        </Grid>



        <Grid pl={["5%","5%","2%"]} pr={["5%","5%","2%"]} data-aos="fade-up"
     data-aos-duration="3000" className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']} gap={[6,6,6,10]}>
          <GridItem  mt="50px" >
              <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2"  >
              <CardBody>
               <Image src="images/c1.jpg"   loading="lazy"  alt="lemon7" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
           
          </GridItem>
          <GridItem mt={["25px","25px","50px"]}>
          <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
                <Image src="images/k1.jpg"   loading="lazy"  alt="citron7" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt={["25px","25px","50px"]}>
          <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
              <Image src="images/g1.jpg"   loading="lazy"  alt="Kathambam" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
          </GridItem>
        </Grid>


        <Grid pl={["5%","5%","2%"]} pr={["5%","5%","2%"]} data-aos="fade-up"
     data-aos-duration="3000" className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']}gap={[6,6,6,10]}>
          <GridItem  mt="50px" >
              <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2"  >
              <CardBody>
               <Image src="images/all.jpg"   loading="lazy"  alt="lemon7" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
           
          </GridItem>
          <GridItem mt={["25px","25px","50px"]}>
          <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
                <Image src="images/t1.jpg"   loading="lazy"  alt="citron7" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt={["25px","25px","50px"]}>
          <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
              <Image src="images/kath50.jpg"   loading="lazy"  alt="Kathambam" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
          </GridItem>
        </Grid>




       

        <Grid pl={["5%","5%","2%"]} pr={["5%","5%","2%"]} data-aos="fade-up"
     data-aos-duration="3000" className='welcome' templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']} gap={[6,6,6,10]}>
          <GridItem  mt="50px" >
              <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2"  >
              <CardBody>
               <Image src="images/c22.jpg"   loading="lazy"  alt="lemon7" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
           
          </GridItem>
          <GridItem mt={["25px","25px","50px"]}>
          <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
                <Image src="images/l22.jpg"   loading="lazy"  alt="citron7" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
          </GridItem>
          <GridItem mt={["25px","25px","50px"]}>
          <Center>
              <Card boxShadow='2xl' borderRadius="20px"  border="3px solid" borderColor="#f2f2f2" >
              <CardBody>
              <Image src="images/a.jpg"   loading="lazy"  alt="Kathambam" borderRadius="20px" height="100%" width="100%"  transition="transform 0.3s"
        _hover={{ transform: 'scale(1.1)' }}/>
                </CardBody>
              </Card>
              </Center>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}
