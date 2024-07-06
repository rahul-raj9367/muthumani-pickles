import { Box, Center, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, Text ,Button, Textarea} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import '../style.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import axios from "axios";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

import logo from '../assets/map.svg'
import logo2 from '../assets/call.svg'
import logo3 from '../assets/mail.svg'

export default function ContactUs() {

  // const initialFormData = {
  //   name: "",
  //   email: "",
  //   mobileNumber: "",
  //   message: "",
  // };

  // // State for form data and success alert
  // const [formData, setFormData] = useState(initialFormData);
  // const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // // Handle form input change
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Submit form data
  //     const response = await axios.post("http://localhost:3003/submit-form", formData);
  //     console.log("Form submitted successfully:", response.data);

  //     // Show success alert
  //     setShowSuccessAlert(true);
  //     setTimeout(() => {
  //       setShowSuccessAlert(false);
  //     }, 3000);
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   } finally {
  //     // Reset form data after submission
  //     setFormData(initialFormData);
  //   }
  // };


  useEffect(() => {
    document.title = 'ContactUs - MuthuMani Home Made Pickles and Turmeric Powder';
  }, []);
  return (
    <Box className='NAV'>
      <Center><Heading pt={["50px"]}   as='h2' size={['xl','2xl','2xl','2xl']}>Contact Us</Heading></Center>
      <Center><Heading  as='h2' mt="50px" width={["90%","90%","90%","70%"]} size={['lg','lg','lg','lg','lg']} color="#B31312" mb="4%" textAlign="center">We would love to hear from you - your feedback, suggestions, and anything you want to share.</Heading></Center>

      <Center>
      <Box boxShadow='2xl'  rounded='md' bg='#ffff' width={["90%","90%","70%","90%","90%","70%"]} p={["30px","40px","50px"]} >
      <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} gap={6} overflow="hidden" mt="10px" pb="30px">
            <GridItem w='100%' h='100%' mt="50px">
                  <Grid templateRows={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']} gap={[10]} >
                  <GridItem w='100%' h='100%'>
                    <Flex alignItems="center" gap={4} flexDirection={["column","column","row"]}>
                        <Image   loading="lazy"  src={logo} overflow="hidden" boxSize={["30%", "30%", "20%", "20%", "18%"]} />
                        <Text width={["90%","90%","70%"]} fontSize={["md","md","lg","lg"]} pt="10px" textAlign={["center","center","justify"]}>Muthumani Pickles 12/2 Thiyagarajar Street Mukkudal Pin-code: 627601 Tirunelveli District Tamilnadu, India</Text>
                    </Flex>
                    </GridItem> 
                    <GridItem w='100%' h='100%'>
                    <Flex alignItems="center" gap={4} flexDirection={["column","column","row"]}>
                        <Image   loading="lazy"  src={logo2} overflow="hidden" boxSize={["30%", "30%", "20%", "20%", "18%"]} />
                        <Text width={["100%","90%","70%"]} fontSize={["md","md","lg","lg"]} pt="10px" textAlign={["center","center","justify"]}> <a href="tel:+919442256790" cursor="pointer" >+91 9442256790 </a> <a href="tel:+919025957223" cursor="pointer" >+91 9025957223 </a></Text>
                    </Flex>
                    </GridItem> 
                    <GridItem w='100%' h='100%'>
                        <Flex alignItems="center" gap={[4,4,10]} flexDirection={["column","column","row"]}>
                            <Image loading="lazy"  src={logo3} overflow="hidden" boxSize={["30%", "30%", "20%", "20%", "18%"]} />
                            <Text width={["100%","90%","70%"]} textAlign="center" fontSize={["md","md","lg","lg"]} pt="10px"><a href="mailto: muthumanipickles@gmail.com" target="_blank">muthumanipickles@gmail.com</a></Text>
                        </Flex>
                    </GridItem> 
                  </Grid>

                 
              </GridItem> 
              
            <GridItem w='100%' h='100%' > 
        <form >

          {/* {showSuccessAlert && (
          <Alert
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
          >
          <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              Successfully submitted!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              Thanks for submitting your submission.
            </AlertDescription>
          </Alert>
          )} */}

            <FormControl isRequired mt="20px">  
                  <FormLabel htmlFor='name' fontWeight={400}>Name</FormLabel>
                  <Input
                      size='lg' 
                      type="text"
                      name="name"
                      placeholder='Please enter name'
                    
                      autoComplete="off"
                  />
            </FormControl>

            <FormControl isRequired mt="20px">  
              <FormLabel htmlFor='email' fontWeight={400}>Email</FormLabel>
              <Input
                size='lg' 
                type="email"
                name="email"
                placeholder='Please enter email'
              
                autoComplete="off"
              />
            </FormControl>

            <FormControl isRequired mt="20px">
              <FormLabel fontWeight={400}>Phone Number</FormLabel>
              <Input
                type="tel"  
                placeholder='Please enter phone number'
                name="mobileNumber"
              
                autoComplete="off"
              />
            </FormControl>

            <FormControl isRequired mt="20px">  
              <FormLabel htmlFor='Message' fontWeight={400}>Message</FormLabel>
              <Textarea 
                name="message"
                
              placeholder='Plese enter your message'
              autoComplete="off"
              />
              
            </FormControl>

            <Box mt="20px">
            <Button  _hover={{ bg:'#059212', color: 'white' }}  color='white' bg='#059212' w={["100%"]}  type="submit" >Submit</Button>
            </Box>
            </form>
            </GridItem> 
      </Grid>
      </Box>
      </Center>
     
    </Box>
  )
}
