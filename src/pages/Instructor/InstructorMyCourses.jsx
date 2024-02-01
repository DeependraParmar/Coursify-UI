import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink, HStack, Heading, Stack, Text, VStack
} from '@chakra-ui/react'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { Link } from 'react-router-dom'

const InstructorMyCourses = () => {
  return (
    <>
      <TransitionWrapper>
        <MainWrapper pt={20} pb={12}>
          <VStack gap={0}>
            <HStack justifyContent={'flex-start'}>
              <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'sm'} separator={<FaAngleRight color='gray.500' />}>
                <BreadcrumbItem>
                  <Link className='hover-underline' to='/instructor/dashboard'>Home</Link>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink color={'purple'} href='#'>Courses</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </HStack>
            
            <Heading mt={['6', '6', '6', '6']} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Your Courses</Heading>
            <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Deependra👋, manage your courses, edit, add and delete lectures.</Text>
            <Stack mt={'2rem'} flexWrap={'wrap'} gap={'8'} direction={['column', 'column', 'row', 'row']} alignItems={['center', 'center', 'center', 'center']} justifyContent={['flex-start', 'flex-start', 'center', 'center']}>



            </Stack>
          </VStack>
        </MainWrapper>
      </TransitionWrapper>
    </>
  )
}

export default InstructorMyCourses
