import React from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import Courses from '../Courses/Courses'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AdminCourses = () => {
    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={8}>
                <VStack gap={2}>
                    <HStack justifyContent={'flex-start'}>
                        <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                            <BreadcrumbItem>
                                <Link className='hover-underline' to='/admin/dashboard'>Home</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink color={'purple'} href='#'>Courses</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </HStack>

                    <VStack gap={0} width={'full'}>
                        <Heading mt={2} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>All Courses</Heading>
                        <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Boss👋, you have access to all the courses on Coursify here.</Text>
                    </VStack>


                    <Courses isForAdmin={true} />

                </VStack>
            </MainWrapper>
        </TransitionWrapper>
    )
}

export default AdminCourses
