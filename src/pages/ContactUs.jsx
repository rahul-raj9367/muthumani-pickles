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
      <Center>
      <Box boxShadow='xl'  rounded='md' bg='white' width={["90%","90%","70%","60%","40%"]} p={["40px","50px"]} >
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
     
      </Box>
      </Center>
     
    </Box>
  )
}
