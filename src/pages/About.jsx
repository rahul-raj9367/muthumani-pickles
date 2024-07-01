import { Box, Center, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function About() {
  return (
    <Box>

        {/* About us */}
        <Box mt={["50px"]}>
            <Center><Heading as='h2' size={['xl','2xl','2xl','2xl']}>About Us</Heading></Center>

            <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={2} overflow="hidden" mt={["50px"]}>
              <GridItem  w='100%' h='100%'>
              <Center>
                <Image src="images/tra.jpg"  loading="lazy" mt={["","","","0px",""]}   alt="Traditional Pickles" borderRadius="20px" width={["90%","90%","50%","90%","90%","85%"]} height={["100%","100%","100%","100%"]} ml={["0px","0px","0px"]}/>
                </Center>
              </GridItem>
              <GridItem w='100%' h='100%'>
              <Box w={['100%']} pl={["20px","20px","40px","20px"]} pr={["20px","20px","40px","20px"]} >
                <Center>
                <Text   fontFamily="Ubuntu"
                    fontWeight="400"
                    fontSize={["17px","17px","18px","18px","22px"]}
                    lineHeight={["40x","40x","38px","30px","43px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%"]}>
                      At Muthumani Pickles, we bring you the rich and authentic flavors of traditional Indian pickles, crafted with care and passion. Founded by Packia Selvan and Muthumani on May 28, 2019, our company is dedicated to preserving the age-old art of pickle making, using only the finest natural ingredients and time-honored techniques.
                  </Text>
                </Center>
                <Center>
                <Text   fontFamily="Ubuntu"
                    fontWeight="400"
                    fontSize={["17px","17px","18px","18px","22px"]}
                    lineHeight={["40x","40x","38px","30px","43px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%"]}>
                      Join us in savoring the delightful and diverse flavors of Muthumani Pickles. Whether you're looking to add a spicy kick to your meals or a tangy twist to your snacks, our pickles are the perfect choice to elevate your dining experience. Welcome to a world of tradition and taste with Muthumani Pickles!
                  </Text>
                </Center>
                  

                </Box>
              </GridItem>


            </Grid>



            <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={2} overflow="hidden" mt={["50px"]}>
              <GridItem w='100%' h='100%'>
              <Box w={['100%']} pl={["20px","20px","40px","20px"]} pr={["20px","20px","40px","20px"]} >
                <Center>
                <Text   fontFamily="Ubuntu"
                    fontWeight="400"
                    fontSize={["17px","17px","18px","18px","22px"]}
                    lineHeight={["40x","40x","38px","30px","43px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%"]}>
                  Our main focus is customer satisfaction, and we always prioritize feedback to improve the taste and quality of our products. This commitment to quality has earned us a reputation for excellence. As a Micro enterprise, we ensure that every product we offer meets your expectations through the highest standards in our manufacturing processes.</Text>
                </Center>
                <Center>
                <Text   fontFamily="Ubuntu"
                    fontWeight="400"
                    fontSize={["17px","17px","18px","18px","22px"]}
                    lineHeight={["40x","40x","38px","30px","43px"]}
                    textAlign="justify"
                    marginBottom="20px" width={["100%","100%","90%"]}>
                      Located in Mukkudal, Tamil Nadu, Muthumani Pickles is a family-run business that prides itself on delivering quality and taste in every jar. Our pickles are more than just condiments; they are a celebration of India's culinary heritage. Each pickle is a blend of seasonal vegetables, carefully selected and preserved to enhance their natural flavors.
                  </Text>
                </Center>
                  

                </Box>
              </GridItem>


              <GridItem  w='100%' h='100%'>
              <Center>
                <Image src="images/tra.jpg"  loading="lazy" mt={["","","","0px",""]}   alt="Traditional Pickles" borderRadius="20px" width={["90%","90%","50%","90%","90%","85%"]} height={["100%","100%","100%","100%"]} ml={["0px","0px","0px"]}/>
                </Center>
              </GridItem>


            </Grid>
    
        </Box>



        {/* Vission And Mission */}
        <Box>

        <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={2} overflow="hidden" mt={["50px"]}>
          <GridItem  w='100%' h='100%'>
              <Center><Heading as='h2' size={['xl','2xl','2xl','2xl']}>Vission</Heading></Center>
            
          </GridItem>
          <GridItem  w='100%' h='100%'>
              <Center><Heading as='h2' size={['xl','2xl','2xl','2xl']}>Mission</Heading></Center>

          </GridItem>
        </Grid>
        </Box>


    </Box>
  )
}

