import { Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BiStats } from 'react-icons/bi'
import { FaMoneyBill } from 'react-icons/fa'
import { RiBookOpenFill, RiVideoAddFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import notification from "../../assets/audio/notification.mp3"
import { toast } from 'react-toastify'

const InstructorHome = () => {

    useEffect(() => {
        const hasPlayed = sessionStorage.getItem("instructorToken");
        window.scrollTo(0, 0, 'smooth');

        if (!hasPlayed) {
            const audio = new Audio(notification);
            audio.volume = 0.2;
            audio.play();
            toast.info("Welcome Boss 😎", {
                position: 'top-center'
            })
        }
        sessionStorage.setItem("instructorToken", true);
    }, []);

    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={20} pb={12}>
                    <VStack gap={0}>
                        <Heading mt={['6', '6', '8', '8']} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl','2xl','3xl','4xl']}>Instructor's Dashboard</Heading>
                        <Text mt={['1', '1', '2', '2']} fontSize={['sm','sm','md','md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Deependra👋, manage your courses, statistics, earnings and more.</Text>
                        <Stack mt={'2rem'} flexWrap={'wrap'} gap={'8'} direction={['column', 'column', 'row', 'row']} alignItems={['center', 'center', 'center', 'center']} justifyContent={['flex-start', 'flex-start', 'center', 'center']}>

                            <InstructorCard title={"My Courses"} description={"Have a look at all the courses you have created in this menu."} icon={<RiBookOpenFill />} buttonText={`See Courses`} route={"/instructor/courses"} image_url={"https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713603346/r8s5yrb0nekfo3nimjsg.png"} />

                            <InstructorCard title={"My Stats"} description={"Look into the insights, views, new learners and more."} icon={<BiStats />} buttonText={`My Stats`} route={"/instructor/stats"} image_url={"https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713603371/tfx0l5iy4deb0l1aazyy.png"} />

                            <InstructorCard title={"New Course"} description={"Create a new course and start teaching students."} icon={<RiVideoAddFill />} buttonText={`Create Course`} route={"/instructor/courses/new"} image_url={"https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713603381/x1vsqmnwdqwttavgptlk.png"} />

                            <InstructorCard title={"My Earning"} description={"Introspect your earning curve in my earning section."} icon={<FaMoneyBill />} buttonText={`My Earning`} route={"/instructor/earning"} image_url={"https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713603392/mfjohqptxvsvfibimsd5.png"} />

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
            <VStack _hover={{boxShadow: '0px 5px 10px rgba(0,0,0,0.3)'}} transition={'all 0.2s ease-in-out'} width={['85%', '', '30%', '20%']} alignItems={'flex-start'} boxShadow={'lg'} borderRadius={'lg'}>
                <Link to={route} >
                    <Image src={image_url} />
                    <VStack p={4} gap={2} alignItems={'inherit'}>
                        <Text fontFamily={'Young Serif'} fontSize={['lg', 'lg', 'xl', 'xl']} fontWeight={'semibold'} noOfLines={1} >{title}</Text>
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

export default InstructorHome;
