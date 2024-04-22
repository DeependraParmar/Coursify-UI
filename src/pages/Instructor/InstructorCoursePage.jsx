import {
    Box,
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
import React, { memo, useEffect, useMemo } from 'react'
import { FaAngleRight, FaEdit, FaPlusCircle } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { sanitizedHTML } from '../../../controllers'
import LoadingComponent from '../../components/Loading'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { deleteCourse, deleteLecture, getSpecificInstructorCourse } from '../../redux/actions/instructor'

const InstructorCoursePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { course, loading, error, message } = useSelector(state => state.instructor);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(getSpecificInstructorCourse(id));
    }, [dispatch, id]);

    const deleteCourseHandler = async(e, courseid) => {
        e.preventDefault();
        await dispatch(deleteCourse(courseid));
        navigate('/instructor/courses');
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, error, message]);

    const { isOpen, onClose, onOpen } = useDisclosure();


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
                            loading ? <LoadingComponent message='Loading...' /> :
                                <Stack gap={'8'} mt={'6'} flexDirection={['column', 'column', 'row', 'row']} justifyContent={['flex-start', 'flex-start', 'center', 'center']} alignItems={['center', 'center', 'flex-start', 'flex-start']}>

                                    <VStack position={'relative'} alignItems={'flex-start'} gap={2} width={['90%', '90%', '40%', '40%']}>
                                        <Image src={course?.poster?.url} borderRadius={'md'} />
                                        <Text pt={'4'} fontFamily={'Young Serif'} fontSize={['xl', 'xl', 'xl', '2xl']}>{course?.title}</Text>

                                        {/* set the dangerouslyInnerHTML here in the description */}
                                        <Text fontSize={['sm', 'sm', 'sm', 'sm']} py={'1'} dangerouslySetInnerHTML={{ __html: description }} />

                                        <HStack>
                                            <Button width={'fit-content'} size={['sm']} fontSize={'xs'} colorScheme='purple' fontWeight={'semibold'}>
                                                <Link to={`/instructor/courses/edit/${id}`} >
                                                    <HStack>
                                                        <FaEdit />
                                                        <Text>Edit</Text>
                                                    </HStack>
                                                </Link>
                                            </Button>
                                            <Button width={'fit-content'} size={['sm']} fontSize={'xs'} fontWeight={'semibold'}>
                                                <Link to={`/instructor/courses/${id}/add-lecture`} >
                                                    <HStack>
                                                        <FaPlusCircle />
                                                        <Text>Add Lecture</Text>
                                                    </HStack>
                                                </Link>
                                            </Button>
                                        </HStack>

                                        <Button onClick={onOpen} colorScheme='red' position={'absolute'} top={2} right={2} width={'fit-content'} size={'sm'} fontSize={'xs'} fontWeight={'semibold'}>
                                            <HStack>
                                                <MdDelete />
                                                <Text fontSize={'xs'}>Delete Course</Text>
                                            </HStack>
                                        </Button>

                                    </VStack>
                                    <VStack width={['95%', '95%', '60%', '60%']} alignItems={'flex-start'} >
                                        {
                                            course && course?.lectures.length === 0 && 
                                            <Box margin={'auto'} width={['90%','90%','50%','50%']}>
                                                    <Image opacity={0.5} src={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713618195/x8fqgg9ae4uaojsajliy.jpg'} />
                                                <Text textAlign={'center'} fontSize={'sm'}>No lectures found. Please add some lectures.</Text>
                                            </Box>
                                        }
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

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text color={'red'}>Delete Course</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <Divider />
                    <ModalBody>
                        <Text fontSize={'sm'}>Are you sure you want to delete this course?</Text>
                        <Text fontSize={'xs'} fontWeight={'normal'}><b>Note: </b> This operation is irreversible. The course & its lectures will be deleted.</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button size={'sm'} isLoading={loading} onClick={(e) => deleteCourseHandler(e, id)} colorScheme='red'>Delete</Button>
                        <Button size={'sm'} ml={3} onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


const Lecture = memo(({ index, image, title, description, lectureid, courseid }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const sanitizedDescription = useMemo(() => sanitizedHTML(description), [description]);

    const handleOpen = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onOpen();
    }

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.instructor);

    const handleDelete = async (e, courseid, lectureid) => {
        e.preventDefault();
        await dispatch(deleteLecture(courseid, lectureid));
        await dispatch(getSpecificInstructorCourse(courseid));
        onClose();
    }

    return (
        <>
            <Link to={`/instructor/courses/${courseid}/${lectureid}`} className='width-full'>
                <HStack justifyContent={'space-between'} width={'full'} borderRadius={'md'} _hover={{ bg: "#e2f2ff" }} px={2} py={3}>
                    <HStack>
                        <Text fontSize={'xs'} fontWeight={'semibold'} color={'gray'}>{index + 1}.</Text>
                        <Image src={image} borderRadius={'md'} width={['28', '28', '32', '32']} />
                        <VStack alignItems={'flex-start'} spacing={'2px'}>
                            <Text fontSize={'sm'} noOfLines={1} fontWeight={'semibold'}>{title}</Text>
                            <Text fontSize={'xs'} noOfLines={2} dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></Text>
                        </VStack>
                    </HStack>
                    <Button onClick={handleOpen} size={'sm'} rounded={'full'} width={'fit-content'} background={'red.100'}><MdDelete color='red' size={12} /></Button>
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
});

export default InstructorCoursePage;