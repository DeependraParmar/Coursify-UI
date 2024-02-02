import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, Button, HStack, Heading, Image, Stack, Text, VStack
} from '@chakra-ui/react'
import React from 'react'
import { FaAngleRight, FaEdit } from 'react-icons/fa'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { Link } from 'react-router-dom'
import dummy from "../../assets/images/dummy.png"

const InstructorCoursePage = () => {
    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={20} pb={12}>
                    <VStack gap={0}>
                        <HStack justifyContent={'flex-start'}>
                            <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                                <BreadcrumbItem>
                                    <Link className='hover-underline' to='/instructor/dashboard'>Home</Link>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <Link className='hover-underline' to='/instructor/courses'>Courses</Link>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink color={'purple'} href='#'>Edit</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </HStack>

                        <Heading mt={['6', '6', '6', '6']} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Edit Your Course</Heading>
                        <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Deependra👋, be more specific, add and delete lectures or edit them.</Text>
                        


                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default InstructorCoursePage;