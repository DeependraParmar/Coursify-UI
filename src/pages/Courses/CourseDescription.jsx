import { AspectRatio, Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiSolidVideos } from 'react-icons/bi'
import { BsCart, BsPlayBtnFill } from 'react-icons/bs'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { sanitizedHTML } from '../../../controllers'
import logo from "../../assets/images/favicon.png"
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { getCourse } from '../../redux/actions/course'
import { buyCourse, getPublicProfile, getUserCourseStatus } from '../../redux/actions/user'
import { server } from '../../redux/store'

const CourseDescription = ({ user }) => {
    const { id } = useParams();
    const [key, setKey] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { loading: courseloading, error: courseError, course } = useSelector(state => state.course);
    const { user: instructor, loading: instructorLoading } = useSelector(state => state.instructor);
    const { loading: paymentLoading, error: paymentError, order, message: paymentMessage } = useSelector(state => state.payment);
    const { error: verifiedUserError, isVerifiedCourseUser } = useSelector(state => state.user);

    const buyCourseHandler = async () => {
        const { data } = await axios.get(`${server}/getrazorpaykey`);
        setKey(data.key);

        await dispatch(buyCourse(course.price));
    }


    useEffect(() => {
        if (paymentError) {
            toast.error(paymentError);
            dispatch({ type: "clearError" })
        }
        if (paymentMessage) {
            toast.success(paymentMessage);
            dispatch({ type: "clearMessage" })
        }
        if (order) {
            const options = {
                key: key,
                amount: order.amount,
                name: "Coursify",
                description: "Course Purchase Payment",
                image: logo,
                order_id: order.id,
                method: 'card',
                callback_url: `${server}/paymentverification/${id}`,
                prefill: {
                    name: user.name,
                    email: user.email,
                    contact: ""
                },
                theme: {
                    color: "#5000bb"
                }
            }

            const razorpay = new window.Razorpay(options);
            if(razorpay)
                razorpay.open();
        }
    }, [dispatch, paymentError, key, order, paymentMessage, course]);

    useEffect(() => {
        dispatch(getCourse(id));
        dispatch(getUserCourseStatus(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (course) {
            dispatch(getPublicProfile(course.createdBy));
        }
    }, [dispatch, course]);

    useEffect(() => {
        if (courseError) {
            toast.error(courseError);
            dispatch({ type: "clearError" });
        }
        if (verifiedUserError) {
            toast.error(verifiedUserError);
            dispatch({ type: "clearError" });
        }
    }, [dispatch, courseError, verifiedUserError]);

    const navigateToWatch = () => {
        navigate(`/courses/${id}/home`);
    }


    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={'24'} pb={'12'}>
                    {
                        courseloading || instructorLoading ? (
                            <Box w={'full'} height={'60vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}><ClipLoader color={'#8141bb'} loading={instructorLoading} size={60} /></Box>
                        ) :
                            course && instructor && (
                                <Stack flexDir={['column-reverse', 'column-reverse', 'row', 'row']} justifyContent={['flex-start', 'flex-start', 'center', 'center']} gap={['4', '4', '4', '8']} alignItems={['center', 'center', 'flex-start', 'flex-start']} >
                                    <VStack width={['90%', '90%', '60%', '60%']} alignItems={'flex-start'} gap={'3'}>
                                        <Text fontFamily={'Young Serif'} fontSize={['xl', 'xl', '2xl', '4xl']}>{course.title}</Text>

                                        <Text fontSize={'sm'} dangerouslySetInnerHTML={{__html: sanitizedHTML(course.description)}}></Text>
                                        <HStack gap={'1'}><BiSolidVideos color='#8141bb' /><Text fontSize={'sm'}>Total Lectures: </Text><Text fontWeight={'semibold'} fontSize={'sm'}>{course.numOfVideos}</Text></HStack>

                                        <HStack gap={'1'}><FaChalkboardTeacher color='#8141bb' /><Text fontSize={'sm'}>Course by: </Text><Text color={'#8141bb'} _hover={{ textDecoration: 'underline' }} fontSize={'sm'} fontWeight={'semibold'}><Link to={`/profile/public/${instructor.id}`}>{instructor.name}</Link></Text></HStack>
                                        {
                                            !isVerifiedCourseUser && <HStack gap={'1'}><Text fontSize={'md'}>Price: </Text><Text fontSize={'sm'} fontWeight={'bold'}>₹ {course.price}</Text></HStack>
                                        }
                                        <HStack>
                                            {
                                                isVerifiedCourseUser ? <Button onClick={navigateToWatch} size={['sm', 'sm', 'md', 'md']} fontSize={'small'} gap={'2'} colorScheme='purple'>Watch <BsPlayBtnFill /></Button>
                                                    :
                                                    <Button size={['sm', 'sm', 'md', 'md']} onClick={buyCourseHandler} isLoading={paymentLoading} fontSize={'small'} gap={'2'} colorScheme='purple'>Buy Now<BsCart /></Button>
                                            }
                                        </HStack>
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
                        !course && !instructor && !instructorLoading && !courseloading && (
                            <VStack margin={'auto'} gap={4} alignItems={'center'} justifyContent={'center'} width={['80%', '80%', '20%', '20%']} >
                                <Image src={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713617996/b9oyjhzrjdf9yeinucmp.avif'} />
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
