import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, Button, HStack, Heading, Image, Stack, Text, VStack
} from '@chakra-ui/react'
import React from 'react'
import { FaAngleRight, FaEdit } from 'react-icons/fa'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { Link, useParams } from 'react-router-dom'
import dummy from "../../assets/images/dummy.png"

const InstructorCoursePage = () => {
    const id = useParams().id;
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

                        <Stack gap={['4', '4', '4', '6']} mt={'6'}>
                            <VStack alignItems={'flex-start'} gap={0} width={['90%', '90%', '40%', '40%']}>
                                <Image src={dummy} />
                                <Text pt={'4'} fontFamily={'Young Serif'} fontSize={['xl', 'xl', 'xl', '2xl']}>ReactJS: Beginner to Advanced</Text>

                                {/* set the dangerouslyInnerHTML here in the description */}
                                <Text fontSize={['sm', 'sm', 'sm', 'sm']} py={'1'}>ReactJS is a very powerful frontend library for beautiful interface designing.</Text>

                                <Button width={'fit-content'} size={['sm']} fontSize={'xs'} colorScheme='purple' fontWeight={'semibold'}>
                                    <Link to={`/instructor/courses/${id}/edit`} >
                                        <HStack>
                                            <FaEdit />
                                            <Text>Edit</Text>
                                        </HStack>
                                    </Link>
                                </Button>
                            </VStack>
                        </Stack>


                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default InstructorCoursePage;