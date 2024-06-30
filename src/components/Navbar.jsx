import React from 'react'
import { Box, Flex, Heading,List,ListItem,Text,Button,Center,Image, Divider,IconButton,Spinner,theme} from "@chakra-ui/react"
import { NavLink,Link } from "react-router-dom";
import { ArrowForwardIcon} from '@chakra-ui/icons'
import { HamburgerIcon,CloseIcon } from '@chakra-ui/icons';
import { useState ,useEffect} from "react";
import { FaSearch } from "react-icons/fa";
import logo from '../assets/logo.svg'
import '../style.css';

export default function Navbar({ activeButton, handleButtonClick }) {
    const [displayy,ChangeDisplayy]=useState('none')

  //   const [activeButton, setActiveButton] = useState(1);

  // const handleButtonClick = (buttonId) => {
  //   setActiveButton(buttonId);
  // };
  return (
    <Box className='NAV'  position="relative" pt={["55px","55px","0px"]} mb={["80px","80px","80px","50px"]}>
        
  
    <Flex  pt="20px" className='NAVV' as="nav" >
            {/* Desktop View */}
            <Flex  
              as="nav"
              alignItems="center"
              justifyContent={["space-evenly","space-evenly","space-evenly","space-between","space-between","space-between"]}
              color="white"
              width="100%"
              zIndex="1"
              pl={["0px","0px","0px","40px","40px"]}
              pr={["0px","0px","0px","40px","40px"]}
              display={["none","none","flex","flex","flex"]}
            gap={[2,10]}>
              {/* <Heading fontSize={['xl','xl','xl','xl','3xl']} color="black" className='rahul'>RAHUL RAJ</Heading> */}
              <NavLink>
              <Link to="/"><Image  loading="lazy" mt={[]} src={logo}   bg=''  alt='rahul' w={['100px']} h={['100px']} onClick={() => handleButtonClick(1)} /> </Link>
              </NavLink> 
                {/* <NavLink>
                <Link to="/">
                  <Image 
                    loading="lazy" 
                    mt={[]} 
                    src={logo} 
                    bg='' 
                    alt='rahul' 
                    w={['100px']} 
                    h={['100px']} 
                    onClick={() => handleButtonClick(1)} // Set HOME button active on logo click
                  />
                </Link>
              </NavLink> */}
  


              <Flex align="center" justifyContent="center">
              <List display="flex" alignItems="center" justifyContent="center">
        <ListItem mr={["30px", "30px", "0px", "10px"]} ml={["0px","10px"]} mt="3px">
        <NavLink>
          <Link to="/">
            <Button
               size={['sm', 'sm', 'sm', 'md', 'md']}
               fontSize={["24px", "24px", "18px", "20px", "20px"]}
              as='b'
              onClick={() => handleButtonClick(1)}
              bg={activeButton === 1 ? '#B31312' : '#ffffff'}
              color={activeButton === 1 ? '#ffffff' : 'black'}
              _hover={{ bg: activeButton === 1 ? '#B31312' : '#f0f0f0', color: activeButton === 1 ? '#ffffff' : 'black' }}
            >
              HOME
            </Button>
          </Link>
          </NavLink>
        </ListItem>
        <ListItem  mr={["30px", "30px", "0px", "10px"]} ml={["0px","10px"]} mt="3px">
          <Link to="/about">
            <Button
              size={['sm', 'sm', 'sm', 'md', 'md']}
              fontSize={["24px", "24px", "18px", "20px", "20px"]}
              as='b'
              onClick={() => handleButtonClick(2)}
              bg={activeButton === 2 ? '#B31312' : '#ffffff'}
              color={activeButton === 2 ? '#ffffff' : 'black'}
              _hover={{ bg: activeButton === 2 ? '#B31312' : '#f0f0f0', color: activeButton === 2 ? '#ffffff' : 'black' }}
            >
              ABOUT
            </Button>
          </Link>
        </ListItem>
        <ListItem  mr={["30px", "30px", "0px", "10px"]} ml={["0px","10px"]} mt="3px">
          <Link to="/product">
            <Button
             size={['sm', 'sm', 'sm', 'md', 'md']}
             fontSize={["24px", "24px", "18px", "20px", "20px"]}
              as='b'
              onClick={() => handleButtonClick(3)}
              bg={activeButton === 3 ? '#B31312' : '#ffffff'}
              color={activeButton === 3 ? '#ffffff' : 'black'}
              _hover={{ bg: activeButton === 3 ? '#B31312' : '#f0f0f0', color: activeButton === 3 ? '#ffffff' : 'black' }}
            >
              PRODUCT
            </Button>
          </Link>
        </ListItem>
        <ListItem  mr={["30px", "30px", "0px", "10px"]} ml={["0px","10px"]} mt="3px">
          <Link to="/gallery">
            <Button
              size={['sm', 'sm', 'sm', 'md', 'md']}
              fontSize={["24px", "24px", "18px", "20px", "20px"]}
              as='b'
              onClick={() => handleButtonClick(4)}
              bg={activeButton === 4 ? '#B31312' : '#ffffff'}
              color={activeButton === 4 ? '#ffffff' : 'black'}
              _hover={{ bg: activeButton === 4 ? '#B31312' : '#f0f0f0', color: activeButton === 4 ? '#ffffff' : 'black' }}
            >
              GALLERY
            </Button>
          </Link>
        </ListItem>
        <ListItem  mr={["30px", "30px", "0px", "10px"]} ml={["0px","10px"]} mt="3px">
          <Link to="/contact">
            <Button
               size={['sm', 'sm', 'sm', 'md', 'md']}
               fontSize={["24px", "24px", "18px", "20px", "20px"]}
              as='b'
              onClick={() => handleButtonClick(5)}
              bg={activeButton === 5 ? '#B31312' : '#ffffff'}
              color={activeButton === 5 ? '#ffffff' : 'black'}
              _hover={{ bg: activeButton === 5 ? '#B31312' : '#f0f0f0', color: activeButton === 5 ? '#ffffff' : 'black' }}
            >
              CONTACT
            </Button>
          </Link>
        </ListItem>
              </List>

              
              </Flex>

              {/* <Flex >
              <NavLink>
                <Link to="/Search">
                <IconButton
                     
                      aria-label="Close Menu"
                      fontSize='23px'
                      icon={<FaSearch  color='red'/>}
                      color="black" bg="transparent" _hover={{ bg: 'transparent' }}
                      ></IconButton>
                
                </Link>
              </NavLink>
              </Flex> */}
              
            </Flex>
          

          {/* Mobile View */}
          <Flex display={['flex','flex','none','none']} pt="10px" pb="10px" position="fixed" width="100vw" bg="white"
            top="0"
            left="0" zIndex={100} alignItems="center" justifyContent="space-between">
              <Box>
              <NavLink>
              <Link to="/">
                  <Image  loading="lazy" mt={[]} src={logo}  pl="5px"   alt='muthumani_pickles' w={['80px']} h={['80px']} />
                  </Link>
                </NavLink>
              </Box>
              <Box>
              <IconButton  
            aria-label="Open Menu"
            fontSize='30px'
            pr="20px"
            align="right"
            icon={<HamburgerIcon  color="#B31312"/>}
            
            color="black"  bg="transparent" _hover={{ bg: 'transparent' }}
            onClick={()=>ChangeDisplayy('flex')}/>

              </Box>

      
              <Flex
                   w="100vw"
                   h="100vh"
                  bg="white"
                  position="fixed"
                  top="0"
                  right="0"
                  zIndex={20}
                  overflowY="auto"
                  flexDir="column"
                  display={displayy}
              >
                  <Flex justifyContent="flex-end">
                      <IconButton
                      mt="40px"
                      mr="15px"
                      aria-label="Close Menu"
                      fontSize='23px'
                      icon={<CloseIcon color="#B31312"/>}
                      color="black" bg="transparent" _hover={{ bg: 'transparent' }}
                      onClick={()=>ChangeDisplayy('none')}></IconButton>
                  </Flex>
                      <Flex 
                      flexDir="column"
                      justifyContent="center"
                      pl="0px"
                      >
                      <List pl="0px" mt="15px">
                              <Center>
                              <ListItem   mb="30px">
                              <NavLink>
                                  <Link to="/">
                              <Text onClick={()=>ChangeDisplayy('none')} fontFamily="Montserrat" fontSize='xl' as='b'  _hover={{ color:'#1da1f2' }} color="#B31312">Home</Text>
                              </Link>
                              </NavLink>
                              </ListItem>
                              </Center>
                              
                              <Center>
                              <ListItem   mb="30px">
                              <NavLink>
                              <Link to="/about">
                              <Text onClick={()=>ChangeDisplayy('none')} fontFamily="Montserrat" fontSize='xl' as='b' _hover={{ color:'#1da1f2' }} color="#B31312">About</Text>
                              </Link>
                              </NavLink>

                              </ListItem>
                              </Center>

                              <Center>
                              <ListItem  mb="30px" >
                              <NavLink>
                              <Link to="/product">
                                  <Text onClick={()=>ChangeDisplayy('none')} fontFamily="Montserrat" fontSize='xl' as='b' _hover={{ color:'#1da1f2' }} color="#B31312">Product</Text>
                              </Link>
                              </NavLink>
                                  </ListItem>
                              </Center>


                              <Center>
                              <ListItem  mb="30px" >
                              <NavLink>
                                  <Link to="/gallery">
                                      <Text onClick={()=>ChangeDisplayy('none')} fontFamily="Montserrat" fontSize='xl' as='b'   _hover={{ color:'#1da1f2' }}  color="#B31312">Gallery</Text>
                                    </Link>
                              </NavLink>
                                  </ListItem>
                              </Center>
                                                          
                              <Center>
                              <ListItem  mb="30px">
                              <NavLink>
                                <Link to="/contact">
                                <Text onClick={()=>ChangeDisplayy('none')} fontFamily="Montserrat" fontSize='xl' as='b'   color="#B31312" _hover={{ color:'#1da1f2' }}>Contact</Text>
                                </Link>
                                </NavLink>
                              </ListItem>
                              </Center>
                              
                      </List>

                      </Flex>
              </Flex>
          </Flex>        
        </Flex>
    </Box>
  )
}
