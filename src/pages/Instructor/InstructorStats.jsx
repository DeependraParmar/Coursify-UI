import React from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import LineChart from '../../components/Charts/LineChart'

const InstructorStats = () => {
    const earningsData = {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        instructors: [1500, 1800, 2200, 1900, 2500, 2100, 2400], // Earnings for instructors per month
        admins: [500, 600, 700, 800, 900, 1000, 1100], // Earnings for admins per month
    };
 
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

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink color={'purple'} href='#'>My Stats</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </HStack>

                        <Heading mt={['6', '6', '6', '6']} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>My Stats</Heading>
                        <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Deependra👋, look into the insights, new learners and course reach.</Text>
                        <Stack mt={'2rem'} flexWrap={'wrap'} gap={'8'} direction={['column', 'column', 'row', 'row']} alignItems={['center', 'center', 'center', 'center']} justifyContent={['flex-start', 'flex-start', 'center', 'center']}>

                        <Box width={['80','80','full','full']}>
                            <LineChart earningsData={earningsData} />
                        </Box>

                        </Stack>
                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default InstructorStats
