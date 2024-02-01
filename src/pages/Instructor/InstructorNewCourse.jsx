import React from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const InstructorNewCourse = () => {
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
                                  <BreadcrumbLink color={'purple'} href='#'>New Course</BreadcrumbLink>
                              </BreadcrumbItem>
                          </Breadcrumb>
                      </HStack>

                      <Heading mt={['6', '6', '6', '6']} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Create New Course</Heading>
                      <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Deependra👋, create a new course and reach new learners.</Text>
                      <Stack mt={'2rem'} flexWrap={'wrap'} gap={'8'} direction={['column', 'column', 'row', 'row']} alignItems={['center', 'center', 'center', 'center']} justifyContent={['flex-start', 'flex-start', 'center', 'center']}>



                      </Stack>
                  </VStack>
              </MainWrapper>
          </TransitionWrapper> 
    </>
  )
}

export default InstructorNewCourse
