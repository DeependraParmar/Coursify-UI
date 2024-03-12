import React, { useEffect, useState } from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { AspectRatio, Box, Button, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
import { BiSolidVideos } from 'react-icons/bi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getCourse } from '../../redux/actions/course'
import { toast } from 'react-toastify'
import { ClipLoader } from 'react-spinners'
import { getPublicProfile } from '../../redux/actions/user'

const CourseDescription = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { loading, error, course } = useSelector(state => state.course);
    const { user } = useSelector(state => state.user);

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
                        course && user ? (
                            <Stack flexDir={['column-reverse', 'column-reverse', 'row', 'row']} justifyContent={['flex-start', 'flex-start', 'center', 'center']} gap={['4', '4', '4', '8']} alignItems={['center', 'center', 'flex-start', 'flex-start']} >
                                <VStack width={['90%', '90%', '60%', '60%']} alignItems={'flex-start'} gap={'3'}>
                                    <Text fontFamily={'Young Serif'} fontSize={['xl', 'xl', '2xl', '4xl']}>{course.title}</Text>
                                    <Text fontSize={'sm'}>{course.description}</Text>
                                    <HStack gap={'1'}><BiSolidVideos color='#8141bb' /><Text fontSize={'sm'}>Total Lectures: </Text><Text fontWeight={'semibold'} fontSize={'sm'}>78</Text></HStack>
                                    <HStack gap={'1'}><FaChalkboardTeacher color='#8141bb' /><Text fontSize={'sm'}>Course by: </Text><Text color={'#8141bb'} _hover={{textDecoration: 'underline'}} fontSize={'sm'} fontWeight={'semibold'}><Link to={`/profile/public/${user.id}`}>{user.name}</Link></Text></HStack>
                                    <HStack gap={'1'}><Text fontSize={'md'}>Price: </Text><Text fontSize={'sm'} fontWeight={'bold'}>₹ {course.price}</Text></HStack>
                                    <HStack><Button fontSize={'sm'} gap={'2'} colorScheme='purple'>Buy Now<BsCart /></Button></HStack>
                                </VStack>
                                <Box width={['90%', '90%', '35%', '35%']}>
                                    <AspectRatio ratio={16 / 9}>
                                        <Image src={course.poster.url} />
                                    </AspectRatio>
                                </Box>
                            </Stack>
                        ) : <Box w={'full'} h={'60vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}><ClipLoader color={'#8141bb'} loading={loading} size={60} /></Box>
                    }
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default CourseDescription
