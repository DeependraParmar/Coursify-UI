import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, Button, Divider, HStack, Heading, Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack, Text, VStack, useDisclosure
} from '@chakra-ui/react'
import React, { useEffect, useMemo } from 'react'
import { FaAngleRight, FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { sanitizedHTML } from '../../../controllers'
import MainLoader from '../../components/MainLoader'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { TiWarning } from 'react-icons/ti'
import { deleteLecture, getSpecificInstructorCourse } from '../../redux/actions/instructor'

const InstructorCoursePage = () => {
    const { id } = useParams();
    const { course, loading, error, message } = useSelector(state => state.instructor);
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
        if(message){
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, error, message]);


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

                                    <VStack alignItems={'flex-start'} gap={2} width={['90%', '90%', '40%', '40%']}>
                                        <Image src={course?.poster?.url} borderRadius={'md'} />
                                        <Text pt={'4'} fontFamily={'Young Serif'} fontSize={['xl', 'xl', 'xl', '2xl']}>{course?.title}</Text>

                                        {/* set the dangerouslyInnerHTML here in the description */}
                                        <Text fontSize={['sm', 'sm', 'sm', 'sm']} py={'1'} dangerouslySetInnerHTML={{ __html: description }} />

                                        <Button width={'fit-content'} size={['sm']} fontSize={'xs'} colorScheme='purple' fontWeight={'semibold'}>
                                            <Link to={`/instructor/courses/edit/${id}`} >
                                                <HStack>
                                                    <FaEdit />
                                                    <Text>Edit</Text>
                                                </HStack>
                                            </Link>
                                        </Button>

                                    </VStack>
                                    <VStack width={['95%', '95%', '60%', '60%']} alignItems={'flex-start'} >
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
    const { isOpen, onOpen, onClose } = useDisclosure();
    const sanitizedDescription = useMemo(() => sanitizedHTML(description), [description]);

    const handleOpen = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onOpen();
    }

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.instructor);

    const handleDelete = async(e, courseid, lectureid) => {
        e.preventDefault(); 
        await dispatch(deleteLecture(courseid, lectureid));
        await dispatch(getSpecificInstructorCourse(courseid));
        onClose();
    }

    return (
        <>
            <Link to={`/instructor/courses/${courseid}/${lectureid}`}>
                <HStack width={'100%'} borderRadius={'md'} _hover={{ bg: "#e2f2ff" }} px={2} py={3}>
                    <Text fontSize={'xs'} fontWeight={'semibold'} color={'gray'}>{index + 1}.</Text>
                    <Image src={image} borderRadius={'md'} width={['28', '28', '32', '32']} />
                    <VStack alignItems={'flex-start'} spacing={'2px'}>
                        <Text fontSize={'sm'} noOfLines={1} fontWeight={'semibold'}>{title}</Text>
                        <Text fontSize={'xs'} noOfLines={2} dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></Text>
                    </VStack>
                    <Button onClick={handleOpen} size={'sm'} rounded={'full'} width={'fit-content'} background={'red.100'}><MdDelete color='red' size={16} /></Button>
                </HStack>
            </Link>
            <Divider />

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                            <Text>Delete Lecture</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <Divider />
                    <ModalBody>
                        <Text fontSize={'sm'}>Are you sure you want to delete this lecture?</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button size={'sm'} isLoading={loading} onClick={(e) => handleDelete(e, courseid, lectureid)} colorScheme='red'>Delete</Button>
                        <Button size={'sm'} ml={3} onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default InstructorCoursePage;