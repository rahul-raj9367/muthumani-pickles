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

import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';

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

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [message,setMessage]=useState('');

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const serviceId ="service_u8fladj";
    const templateId="template_1hffrab";
    const publicKey="0u9fWxcpIV7YXmBrR";

    const templateParams ={
      name: name,
      email: email,
      phone: phone,
      to_name: 'Rahul Raj',
      message :message,
    };
  
    emailjs.send(serviceId,templateId,templateParams,publicKey)
    .then((response)=>{
        console.log('Email send Successfully',response);
        setName('');
        setEmail('');
        setPhone('');
        setMessage(''); 
        
        setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
    })
    .catch((error)=>{
      console.log('Error sending email:',error);
    });
  }

   //AOS
   useEffect(()=>{
    Aos.init()
  },[])

  return (
    <Box className='NAV' >

      <Helmet>
          <title>Contact Us - MuthuMani Home Made Pickles and Turmeric Powder</title>
          <meta name="description" content="Get in touch with MuthuMani Home Made Pickles and Turmeric Powder for feedback, suggestions, and inquiries about our products." />
          <meta name="keywords" content="MuthuMani Pickles, Turmeric Powder, Contact Us, Feedback, Suggestions, Mukkudal, Tirunelveli, Tamilnadu" />
          <meta name="author" content="MuthuMani Home Made Pickles" />
      </Helmet>
      <Center><Heading pt={["0px"]}   as='h2' size={['xl','2xl','2xl','2xl']} fontFamily="Merienda">Contact Us</Heading></Center>
      {/* <Center><Heading  as='h2' mt="50px" width={["90%","90%","90%","70%"]} size={['lg','lg','lg','lg','lg']} color="#B31312" mb="4%" textAlign="center">We would love to hear from you - your feedback, suggestions, and anything you want to share.</Heading></Center> */}

      <Center>
      <Box boxShadow='2xl' overflow="hidden" data-aos="fade-up"
     data-aos-duration="3000"   rounded='md' bg='#ffff' width={["90%","90%","80%","90%","90%","70%"]} p={["30px","40px","50px"]}  mt="20px">
      <Text fontFamily="Miniver" color="#002D7F" fontSize={["20px","20px","24px"]} fontWeight="400">Dear Customers ,</Text>
          
          <Text fontFamily="Miniver" color="#002D7F"  fontSize={["20px","20px","24px"]}fontWeight="400">We would love to hear from your - your feedback, suggestions and anything you want to know about our products, we are ready to give our best products.</Text>
          <Text fontFamily="Miniver" color="#002D7F"  fontSize={["20px","20px","24px"]} fontWeight="400">Happy shopping! </Text>
          <Text fontFamily="Miniver" color="#002D7F"  fontSize={["20px","20px","24px"]} fontWeight="400" mb="0px">  Regards,</Text>
          <Text fontFamily="Miniver" color="#002D7F"  fontSize={["20px","20px","24px"]}  fontWeight="400">Muthumani Pickles, Mukkudal. </Text>
          <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} gap={6} overflow="hidden" mt="10px" pb="30px">
            <GridItem w='100%' h='100%' mt="50px" >
                  <Grid templateRows={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']} gap={[10]} >
                  <GridItem w='100%' h='100%' >
                    <Flex alignItems="center" gap={4} flexDirection={["column","column","row"]}>
                        <Image   loading="lazy"  src={logo} overflow="hidden" boxSize={["30%", "30%", "15%", "18%", "18%"]}  />
                        <Text width={["90%","90%","70%"]} fontFamily="Roboto Condensed" fontSize={["md","md","lg","lg"]} pt="10px" textAlign={["center","center","justify"]} >Muthumani Pickles 12/2 Thiyagarajar Street Mukkudal Pin-code: 627601 Tirunelveli District Tamilnadu, India</Text>
                    </Flex>
                    </GridItem> 
                    <GridItem w='100%' h='100%'>
                    <Flex alignItems="center" gap={4} flexDirection={["column","column","row"]}>
                        <Image   loading="lazy"  src={logo2} overflow="hidden" boxSize={["30%", "30%", "15%", "18%", "18%"]}  />
                        <Text  width={["100%","90%","70%"]} fontFamily="Roboto Condensed" fontSize={["md","md","lg","lg"]} pt="10px" textAlign={["center","center","justify"]}> <a href="tel:+919442256790" cursor="pointer" >+91 9442256790 </a> <a href="tel:+919025957223" cursor="pointer" >+91 9025957223 </a></Text>
                    </Flex>
                    </GridItem> 
                    <GridItem w='100%' h='100%'>
                        <Flex alignItems="center" gap={[2,2,10]} flexDirection={["column","column","row"]}>
                            <Image loading="lazy"  src={logo3} overflow="hidden" boxSize={["30%", "30%", "15%", "18%", "18%"]}  />
                            <Text  width={["100%","90%","70%"]} fontFamily="Roboto Condensed" textAlign={["center","center","left","left"]} fontSize={["md","md","lg","lg"]} pt="10px"><a href="mailto: muthumanipickles@gmail.com" target="_blank">muthumanipickles@gmail.com</a></Text>
                        </Flex>
                    </GridItem> 
                  </Grid>

                 
              </GridItem> 
              

            {/* Form */}
            <GridItem w='100%' h='100%' > 
              <form onSubmit={handleSubmit}>

            {showSuccessAlert && (
            <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            >
            <AlertIcon boxSize='60px' mr={0} />
              <AlertTitle mt={4} mb={1} fontSize='lg'>
                Successfully submitted!
              </AlertTitle>
              <AlertDescription maxWidth='sm'>
                Thanks for submitting your submission.
              </AlertDescription>
            </Alert>
            )}

              <FormControl isRequired mt="20px">  
                    <FormLabel htmlFor='name' fontWeight={400}>Name</FormLabel>
                    <Input
                        size='lg' 
                        type="text"
                        name="name"
                        placeholder='Please enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
              </FormControl>

              <FormControl isRequired mt="20px">
                <FormLabel fontWeight={400}>Phone Number</FormLabel>
                <Input
                  type="tel"  
                  placeholder='Please enter phone number'
                  name="mobileNumber"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="off"
                />
              </FormControl>

              <FormControl isRequired mt="20px">  
                <FormLabel htmlFor='Message' fontWeight={400}>Message</FormLabel>
                <Textarea 
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                placeholder='Please enter your message'
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
  );
}