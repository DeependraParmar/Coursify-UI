import { AspectRatio, Button, ButtonGroup, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BsCartCheck, BsPlayBtnFill } from "react-icons/bs";
import { MdReadMore } from "react-icons/md";


const CourseCard = ({ image_url, course_title, price, course_description, isBought=false }) => {
  return (
    <>
      <VStack borderRadius={'lg'} height={'full'} bg={'white'} boxShadow={'2px 2px 10px #85858580'} gap={'1'} alignItems={'flex-start'} >
        <AspectRatio ratio={16 / 9} width={'full'} >
          <Image src={image_url} objectFit={'cover'} />
        </AspectRatio>
        <VStack p={'3'} alignItems={'flex-start'} justifyContent={'space-between'}>
          <VStack gap={0} alignItems={'flex-start'}>
            <Text fontWeight={'semibold'} fontSize={'16'} noOfLines={isBought ? null : 2}>{course_title}</Text>
            <Text fontSize={'xs'} noOfLines={2}>{course_description}</Text>
          </VStack>
          <VStack gap={0} alignItems={'flex-start'}>
            <Text display={isBought ? 'none' : 'block'} fontWeight={'bold'}>₹{price}</Text>
            <ButtonGroup my={'2'}>
              {
                isBought ? 
                <>
                  <Button size={'sm'} fontSize={'sm'} gap={'2'} colorScheme='purple'>Watch <BsPlayBtnFill /></Button>
                  <Button size={'sm'} variant={'outline'} colorScheme="purple" fontSize={'xs'} gap={1}>More<MdReadMore size={'16'} /></Button>
                </>
                :
                <>
                    <Button size={'sm'} colorScheme='purple' fontSize={'xs'} gap={1}> Buy Now<BsCartCheck size={16} /></Button>
                    <Button size={'sm'} variant={'outline'} colorScheme="purple" fontSize={'xs'} gap={1}>More<MdReadMore size={'16'} /></Button>
                </>
                
              }
            </ButtonGroup>
          </VStack>
        </VStack>
      </VStack>
    </>
  )
}

export default CourseCard;
