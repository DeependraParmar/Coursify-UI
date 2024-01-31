import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { MdBook } from 'react-icons/md'
import { RiBookOpenFill, RiVideoAddFill } from 'react-icons/ri'
import { BiStats } from 'react-icons/bi'
import { FaMoneyBill } from 'react-icons/fa'
import mycourses from "../../assets/images/1_mycourses.png"
import newcourse from "../../assets/images/2_newcourse.png"
import stats from "../../assets/images/3_stats.png"
import earnings from "../../assets/images/4_earning.png"

const InstructorHome = () => {
    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={20} pb={12}>
                    <VStack gap={0}>
                        <Heading mt={['6', '6', '8', '8']} textAlign={'center'} fontFamily={'Young Serif'}>Instructor's Dashboard</Heading>
                        <Text mt={['1', '1', '2', '2']} width={['80%', '', '', '']} textAlign={'center'} >Hey Deependra👋, manage your courses, statistics, earnings and more.</Text>
                        <Stack mt={'2rem'} flexWrap={'wrap'} gap={'8'} direction={['column', 'column', 'row', 'row']} alignItems={['center', 'center', 'center', 'center']} justifyContent={['flex-start', 'flex-start', 'center', 'center']}>

                            <InstructorCard title={"My Courses"} description={"Have a look at all the courses you have created in this menu."} icon={<RiBookOpenFill />} buttonText={`See Courses`} route={"/instructor/courses"} image_url={mycourses} />

                            <InstructorCard title={"Create a Course"} description={"Create a new course and start teaching students."} icon={<RiVideoAddFill />} buttonText={`Create Course`} route={"/instructor/courses/new"} image_url={newcourse} />

                            <InstructorCard title={"My Stats"} description={"Create a new course and start teaching students."} icon={<BiStats />} buttonText={`My Stats`} route={"/instructor/stats"} image_url={stats} />

                            <InstructorCard title={"My Earning"} description={"Create a new course and start teaching students."} icon={<FaMoneyBill />} buttonText={`My Earning`} route={"/instructor/earning"} image_url={earnings} />


                        </Stack>
                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export const InstructorCard = ({ title, description, buttonText, route, image_url, icon }) => {
    return (
        <>
            <VStack width={['85%', '', '30%', '20%']} alignItems={'flex-start'} boxShadow={'lg'} borderRadius={'lg'}>
                <Link to={route} >
                    <Image src={image_url} />
                    <VStack p={4} gap={2} alignItems={'inherit'}>
                        <Text fontFamily={'Young Serif'} fontSize={['lg', 'lg', 'xl', 'xl']} fontWeight={'semibold'} >{title}</Text>
                        <Text fontSize={'xs'} noOfLines={2}>{description}</Text>
                        <Button width={'fit-content'} size={['sm']} fontSize={'xs'} colorScheme='purple' fontWeight={'semibold'}>
                            <Link to={route} >
                                <HStack>
                                    {icon}
                                    <Text>{buttonText}</Text>
                                </HStack>
                            </Link>
                        </Button>
                    </VStack>
                </Link>
            </VStack>
        </>
    )
}

export default InstructorHome
