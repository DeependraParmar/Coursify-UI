import { AspectRatio, Button, ButtonGroup, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const CourseCard = ({image_url,course_title,created_by,price}) => {
  return (
    <>
      <VStack borderRadius={'md'} bg={'white'} boxShadow={'0px 0px 5px #85858580'} gap={'1'} alignItems={'flex-start'}>
              <AspectRatio ratio={16/9} width={'full'} >
                  <Image src={image_url} objectFit={'cover'} />
              </AspectRatio>
              <VStack p={'3'} spacing={'0'} alignItems={'flex-start'}>
                  <Text fontWeight={'medium'} fontSize={'16'} noOfLines={'2'}>Basics of Web Development</Text>
                  <Text fontSize={'xs'}>{created_by}</Text>
                  <Text fontWeight={'bold'}>₹{price}</Text>
                  <ButtonGroup my={'2'}>
                      <Button size={'sm'} colorScheme='purple' fontSize={'xs'}>Buy Now</Button>
                      <Button size={'sm'} variant={'outline'} colorScheme="purple" fontSize={'xs'}>Add to Playlist</Button>
                  </ButtonGroup>
              </VStack>
          </VStack> 
    </>
  )
}

export default CourseCard;
