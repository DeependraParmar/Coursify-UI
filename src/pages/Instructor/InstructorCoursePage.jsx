import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, Button, Divider, HStack, Heading, Image,
    Stack, Text, VStack
} from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import { FaAngleRight, FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import { courses } from '../../../data'
import dummy from "../../assets/images/dummy.png"
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { useDispatch, useSelector } from 'react-redux'
import { getSpecificInstructorCourse } from '../../redux/actions/instructor'
import { toast } from 'react-toastify'
import { sanitizedHTML } from '../../../controllers'
import MainLoader from '../../components/MainLoader'

const InstructorCoursePage = () => {
    const { id } = useParams();
    const { course, loading, error } = useSelector(state => state.instructor);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(getSpecificInstructorCourse(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" });
        }
    }, [dispatch, error]);

    const description = useMemo(() => sanitizedHTML(course?.description), [course?.description]);

    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={20} pb={12}>
                    <VStack gap={4}>
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

                        <VStack gap={0} width={'full'}>
                            <Heading mt={['6', '6', '6', '6']} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Edit Your Course</Heading>
                            <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Deependra👋, be more specific, add and delete lectures or edit them.</Text>
                        </VStack>

                        {
                            loading ? <MainLoader /> :
                                <Stack gap={'8'} mt={'6'} flexDirection={['column', 'column', 'row', 'row']} justifyContent={['flex-start', 'flex-start', 'center', 'center']} alignItems={['center', 'center', 'flex-start', 'flex-start']}>

                                    <VStack alignItems={'flex-start'} gap={0} width={['90%', '90%', '40%', '40%']}>
                                        <Image src={course?.poster?.url} borderRadius={'md'} />
                                        <Text pt={'4'} fontFamily={'Young Serif'} fontSize={['xl', 'xl', 'xl', '2xl']}>{course?.title}</Text>

                                        {/* set the dangerouslyInnerHTML here in the description */}
                                        <Text fontSize={['sm', 'sm', 'sm', 'sm']} py={'1'} dangerouslySetInnerHTML={{ __html: description }} />

                                        <Button width={'fit-content'} size={['sm']} fontSize={'xs'} colorScheme='purple' fontWeight={'semibold'}>
                                            <Link to={`/instructor/courses/${id}/edit`} >
                                                <HStack>
                                                    <FaEdit />
                                                    <Text>Edit</Text>
                                                </HStack>
                                            </Link>
                                        </Button>

                                    </VStack>
                                    <VStack width={['95%', '95%', '60%', '60%']} alignItems={'flex-start'} gap={4} >
                                        {
                                            course?.lectures.map((lecture, index) => {
                                                return (
                                                    <Lecture index={index} title={lecture.title} description={lecture.description} image={course.poster.url} lectureid={lecture._id} courseid={course._id} />
                                                )
                                            })
                                        }
                                    </VStack>
                                </Stack>
                        }


                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}


const Lecture = ({ index, image, title, description, lectureid, courseid }) => {
    const sanitizedDescription = useMemo(() => sanitizedHTML(description), [description]);
    return (
        <>
            <Link to={`/instructor/courses/watch/${courseid}`}>
                <HStack width={'100%'} borderRadius={'md'}>
                    <Text fontSize={'xs'} fontWeight={'semibold'} color={'gray'}>{index + 1}.</Text>
                    <Image src={image} borderRadius={'md'} width={['32', '32', '36', '32']} />
                    <VStack alignItems={'flex-start'} spacing={'2px'}>
                        <Text fontSize={'sm'} fontWeight={'semibold'}>{title}</Text>
                        <Text fontSize={'xs'} noOfLines={2} dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></Text>
                    </VStack>
                    <Button size={'sm'} width={'fit-content'}><MdDelete size={16} /></Button>
                </HStack>
            </Link>
            <Divider />
        </>
    )
}
export default InstructorCoursePage;