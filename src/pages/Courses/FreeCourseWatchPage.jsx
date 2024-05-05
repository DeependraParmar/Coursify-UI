import { AspectRatio, Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Image, Menu, MenuDivider, MenuGroup, MenuItem, Stack, Text, VStack, useDisclosure, } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { AiFillLeftCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { sanitizedHTML } from '../../../controllers'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { getSpecificYoutubeCourse } from '../../redux/actions/youtube'

const CourseWatchPage = () => {
    const { id, lectureid } = useParams();
    const { course, loading, error } = useSelector(state => state.youtube);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(getSpecificYoutubeCourse(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" });
        }
    }, [dispatch, error, course]);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const lecture = course?.lectures?.find(lecture => lecture._id === lectureid);

    return (
        <>
            <TransitionWrapper>
                {
                    loading ? <Box display={'flex'} alignItems={'center'} height={'60vh'} justifyContent={'center'}><ClipLoader size={60} color='#805AD5' /></Box>
                        :
                        course && (
                            <MainWrapper pt={['20', '20', '24', '24']} pb={'12'}>
                                <Stack flexDir={['column', 'column', 'row', 'row']} justifyContent={['flex-start', 'flex-start', 'center', 'center']} gap={['4', '4', '4', '8']} alignItems={['center', 'center', 'flex-start', 'flex-start']} >

                                    <Button width={['90%', '90%', '', '']} variant={'solid'} textAlign={'center'} size={'sm'} display={['block', 'block', 'none', 'none']} onClick={onOpen}>
                                        <HStack justifyContent={'center'}>
                                            <Text>Lectures Menu</Text>
                                            <AiFillLeftCircle />
                                        </HStack>
                                    </Button>
                                    {/* Drawer for mobile view lectures */}
                                    <Drawer placement='right' isOpen={isOpen} onClose={onClose} size={'full'}>
                                        <DrawerOverlay />
                                        <DrawerContent >
                                            <DrawerHeader fontSize={'sm'} fontWeight={'semibold'}>{course && course.title}
                                            </DrawerHeader>

                                            <DrawerCloseButton />
                                            <Divider />
                                            <DrawerBody style={{ padding: '0px' }}>
                                                <Menu>
                                                    <MenuGroup>
                                                        {
                                                            course && course.lectures && course.lectures.map((item, index) => {
                                                                return (
                                                                    <Link className='width-full' onClick={onClose} to={`/free-courses/${id}/${item._id}`} key={index}>
                                                                        <MenuItem className='width-full' _hover={{ bg: '#e2f2ff' }}>
                                                                            <HStack>
                                                                                <Text fontSize={'xs'} fontWeight={'semibold'}>
                                                                                    {
                                                                                        index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`
                                                                                    }
                                                                                </Text>
                                                                                <Image width={'28'} src={item.thumbnail.url} />
                                                                                <VStack gap={'0'} alignItems={'flex-start'}>
                                                                                    <Text noOfLines={'1'} fontSize={'sm'} fontWeight={'semibold'}>{item.title}</Text>
                                                                                    <Text fontSize={'xs'} noOfLines={'2'} dangerouslySetInnerHTML={{ __html: sanitizedHTML(item.description) }}></Text>
                                                                                </VStack>
                                                                            </HStack>

                                                                        </MenuItem>
                                                                    </Link>
                                                                )
                                                            })
                                                        }
                                                    </MenuGroup>
                                                </Menu>
                                            </DrawerBody>
                                        </DrawerContent>
                                    </Drawer>



                                    <Box width={['90%', '90%', '65%', '65%']} alignItems={'flex-start'}>
                                        <AspectRatio ratio={16 / 9}>
                                            {
                                                lecture && lecture.url ? (
                                                    <iframe src={lecture.url} title={lecture.title} allowFullScreen={true} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" style={{ borderRadius: '10px' }}></iframe>
                                                ) : <Image src={course?.poster?.url} />
                                            }
                                        </AspectRatio>
                                        <Text pt={'4'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '2xl', '4xl']} lineHeight={'shorter'}>{lecture?.title || course?.title}</Text>
                                        <Text py={'1'} fontSize={'sm'} dangerouslySetInnerHTML={{ __html: sanitizedHTML(lecture?.description || course?.description) }} ></Text>
                                    </Box>

                                    <VStack h={['', '', '400px', '530px']} className='grayScrollbar' display={['none', 'none', 'block', 'block']} p={'2'} width={['90%', '90%', '30%', '30%']} overflowY={'auto'} border={'1px solid rgb(0,0,0,0.1)'}  >
                                        <Menu>
                                            <MenuGroup>
                                                <Text px={'2'} py={1} textAlign={'center'} noOfLines={'1'} fontWeight={'semibold'}>{course && course.title}</Text>
                                                <MenuDivider />
                                            </MenuGroup>
                                            <MenuGroup>
                                                {
                                                    course && course.lectures && course.lectures.map((item, index) => {
                                                        return (
                                                            <>
                                                                <Link className='width-full' to={`/free-courses/${id}/${item._id}`} key={index}>
                                                                    <MenuItem my={1} className='width-full' _hover={{ bg: '#e2f2ff' }}>
                                                                        <HStack>
                                                                            <Text fontSize={'xs'} fontWeight={'semibold'}>
                                                                                {
                                                                                    index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`
                                                                                }
                                                                            </Text>
                                                                            <Image width={'24'} borderRadius={'md'} src={item.thumbnail.url} />
                                                                            <VStack gap={'0'} alignItems={'flex-start'}>
                                                                                <Text noOfLines={'1'} fontSize={'sm'} fontWeight={'semibold'}>{item.title}</Text>
                                                                                <Text fontSize={'0.7rem'} noOfLines={'2'} dangerouslySetInnerHTML={{ __html: sanitizedHTML(item.description) }}></Text>
                                                                            </VStack>
                                                                        </HStack>

                                                                    </MenuItem>
                                                                </Link>
                                                                <Divider />
                                                            </>
                                                        )
                                                    })
                                                }
                                            </MenuGroup>
                                        </Menu>

                                    </VStack>
                                </Stack>
                            </MainWrapper>
                        )
                }
            </TransitionWrapper>
        </>
    )
}

export default CourseWatchPage;