import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { AiFillPlaySquare } from 'react-icons/ai'
import { FaAngleRight } from 'react-icons/fa'
import { MdAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { InstructorCard } from '../Instructor/InstructorHome'

const AdminYoutube = () => {
    useEffect(() => {
        window.scrollTo(0, 0, 'smooth');
    }, []);

    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={24} pb={12}>
                    <VStack gap={4}>
                        <HStack justifyContent={'flex-start'}>
                            <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                                <BreadcrumbItem>
                                    <Link className='hover-underline' to='/admin/dashboard'>Home</Link>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink color={'purple'} href='#'>Youtube</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </HStack>

                        <VStack gap={0} width={'full'}>
                            <Heading mt={2} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Youtube Console</Heading>
                            <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Boss👋, manage all youtube courses, their lectures and more.</Text>
                        </VStack>

                        <Stack width={'full'} mt={'2rem'} flexWrap={'wrap'} gap={'8'} direction={['column', 'column', 'row', 'row']} alignItems={['center', 'center', 'center', 'center']} justifyContent={['flex-start', 'flex-start', 'center', 'center']}>
                            
                            <InstructorCard title={"My Youtube Course"} description={"See all your youtube courses and manage them."} icon={<AiFillPlaySquare />} buttonText={`See all`} route={"/admin/youtube/courses"} image_url={"https://res.cloudinary.com/dmmrtqe8q/image/upload/v1714298065/camhm1ryaxq0dcnizhfz.png"} />
                            
                            <InstructorCard title={"New Youtube Course"} description={"Create new youtube course and manage them."} icon={<MdAdd />} buttonText={`Create`} route={"/admin/youtube/new"} image_url={"https://res.cloudinary.com/dmmrtqe8q/image/upload/v1714298036/pusgg3oxgmgeqmtv8tsu.png"} />


                        </Stack>


                    </VStack>

                </MainWrapper>

            </TransitionWrapper>
        </>
    )
}

export default AdminYoutube
