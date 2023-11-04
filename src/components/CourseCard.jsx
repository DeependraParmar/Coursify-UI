import { AspectRatio, Button, ButtonGroup, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const CourseCard = ({image_url,course_title,created_by,price}) => {
  return (
    <>
          <VStack borderRadius={'md'} border={'1px solid #28282840'} gap={'1'} alignItems={'flex-start'}>
              <AspectRatio ratio={16/9} width={'full'} >
                  <Image src={image_url} objectFit={'cover'} />
              </AspectRatio>
              <VStack p={'3'} spacing={'0'} alignItems={'flex-start'}>
                  <Text fontWeight={'medium'} fontSize={'16'} noOfLines={'2'}>Basics of Web Development</Text>
                  <Text fontSize={'xs'}>{created_by}</Text>
                  <Text fontWeight={'bold'}>₹ {price}</Text>
                  <ButtonGroup my={'2'}>
                      <Button size={'sm'} colorScheme='gray' fontSize={'xs'}>Buy Now</Button>
                      <Button size={'sm'} variant={'outline'} colorScheme="gray" fontSize={'xs'}>Add to Cart</Button>
                  </ButtonGroup>
              </VStack>
          </VStack> 
    </>
  )
}

export default CourseCard;
