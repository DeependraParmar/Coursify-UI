import React from 'react'
import { AspectRatio, Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'

const HorizontalCard = () => {
  return (
    <>
          <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              boxShadow={'0px 0px 15px #85858580'}
              bg={'white'}
          >
              <AspectRatio ratio={16/9} width={'40%'} >
                  <Image
                      src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                      alt='Caffe Latte'
                  />
              </AspectRatio>

              <Stack width={'60%'}>
                  <CardBody>
                      <VStack p={'3'} spacing={'4'} alignItems={'flex-start'}>
                          <Text fontWeight={'bold'} fontSize={'xl'} noOfLines={'2'}>Basics of Web Development with Full Stack Project</Text>
                          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ullam quae culpa qui asperiores earum natus quo sunt temporibus? Necessitatibus corrupti, soluta quidem hic perferendis minima! Fuga, nisi dolorum consequatur minima ipsam officiis architecto adipisci quod distinctio molestiae laudantium impedit qui tempora unde, accusamus vel laboriosam hic magnam maiores earum.</Text>
                          <Text fontSize={'sm'} fontWeight={'normal'}>Deependra Parmar | Full Stack Web Developer</Text>
                          <Text fontWeight={'bold'}>₹ 3499</Text>
                          
                      </VStack>
                  </CardBody>

                  <CardFooter>
                      <ButtonGroup my={'2'}>
                          <Button size={'sm'} colorScheme='purple' fontSize={'xs'}>Buy Now</Button>
                          <Button size={'sm'} variant={'outline'} colorScheme="purple" fontSize={'xs'}>Add to Cart</Button>
                      </ButtonGroup>
                  </CardFooter>
              </Stack>
          </Card>
    </>
  )
}

export default HorizontalCard
