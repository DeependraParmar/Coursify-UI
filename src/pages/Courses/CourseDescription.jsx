import { AspectRatio, Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BiSolidVideos } from 'react-icons/bi'
import { BsCart } from 'react-icons/bs'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import nocourses from "../../assets/images/nocourses.jpg"
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { getCourse } from '../../redux/actions/course'
import { getPublicProfile } from '../../redux/actions/user'

const CourseDescription = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { loading: courseloading, error, course } = useSelector(state => state.course);
    const { publicProfile, loading: userloading } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getCourse(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (course) {
            dispatch(getPublicProfile(course.createdBy));
        }
    }, [dispatch, course]);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" });
        }
    }, [dispatch, error]);


    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={'24'} pb={'12'}>
                    {
                        courseloading && userloading ? (
                            <Box w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}><ClipLoader color={'#8141bb'} loading={userloading} size={60} /></Box>
                        ): course && publicProfile && (
                            <Stack flexDir={['column-reverse', 'column-reverse', 'row', 'row']} justifyContent={['flex-start', 'flex-start', 'center', 'center']} gap={['4', '4', '4', '8']} alignItems={['center', 'center', 'flex-start', 'flex-start']} >
                                <VStack width={['90%', '90%', '60%', '60%']} alignItems={'flex-start'} gap={'3'}>
                                    <Text fontFamily={'Young Serif'} fontSize={['xl', 'xl', '2xl', '4xl']}>{course.title}</Text>
                                    <Text fontSize={'sm'}>{course.description}</Text>
                                    <HStack gap={'1'}><BiSolidVideos color='#8141bb' /><Text fontSize={'sm'}>Total Lectures: </Text><Text fontWeight={'semibold'} fontSize={'sm'}>78</Text></HStack>
                                    <HStack gap={'1'}><FaChalkboardTeacher color='#8141bb' /><Text fontSize={'sm'}>Course by: </Text><Text color={'#8141bb'} _hover={{ textDecoration: 'underline' }} fontSize={'sm'} fontWeight={'semibold'}><Link to={`/profile/public/${publicProfile.id}`}>{publicProfile.name}</Link></Text></HStack>
                                    <HStack gap={'1'}><Text fontSize={'md'}>Price: </Text><Text fontSize={'sm'} fontWeight={'bold'}>₹ {course.price}</Text></HStack>
                                    <HStack><Button fontSize={'sm'} gap={'2'} colorScheme='purple'>Buy Now<BsCart /></Button></HStack>
                                </VStack>
                                <Box width={['90%', '90%', '35%', '35%']}>
                                    <AspectRatio ratio={16 / 9}>
                                        <Image src={course.poster.url} />
                                    </AspectRatio>
                                </Box>
                            </Stack>
                        )
                    }
                    {
                        !course && !publicProfile && !userloading && !courseloading && (
                            <VStack margin={'auto'} gap={4} alignItems={'center'} justifyContent={'center'} width={['80%', '80%', '20%', '20%']} >
                                <Image src={nocourses} />
                                <Heading textAlign={'center'} size='md' color='gray.500'>Invalid Course ID</Heading>

                                <Button size={'sm'} variant={'outline'} colorScheme='purple'><Link to={'/courses'}>Go to Courses</Link></Button>
                            </VStack>
                        )
                    }
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default CourseDescription
