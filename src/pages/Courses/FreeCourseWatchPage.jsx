import { AspectRatio, Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Image, Menu, MenuDivider, MenuGroup, MenuItem, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, Tooltip, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { IoSend } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { sanitizedHTML } from '../../../controllers'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { getMyProfile } from '../../redux/actions/user'
import { getSpecificYoutubeCourse } from '../../redux/actions/youtube'
import { FaAngleDoubleLeft } from 'react-icons/fa'

const CourseWatchPage = () => {
    const { id, lectureid } = useParams();
    const { course, loading, error } = useSelector(state => state.youtube);
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMyProfile());
    }, []);

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
                                <Stack position={'relative'} flexDir={['column', 'column', 'row', 'row']} justifyContent={['flex-start', 'flex-start', 'center', 'center']} gap={['4', '4', '4', '8']} alignItems={['center', 'center', 'flex-start', 'flex-start']} >

                                    <Button colorScheme='blackAlpha' px={'0'} variant={'solid'} textAlign={'center'} size={'sm'} display={['block', 'block', 'none', 'none']} top={'45%'} position={'fixed'} right={0} zIndex={'10'} onClick={onOpen}>
                                        <HStack justifyContent={'center'}>
                                            {/* <Text>Lectures Menu</Text> */}
                                            <FaAngleDoubleLeft />
                                        </HStack>
                                    </Button>
                                    {/* Drawer for mobile view lectures */}
                                    <Drawer placement='right' isOpen={isOpen} onClose={onClose} size={'full'}>
                                        <DrawerOverlay />
                                        <DrawerContent className='grayScrollbar' >
                                            <DrawerHeader fontSize={'sm'} fontWeight={'semibold'}>
                                                <Text width={'95%'}>{course && course.title}</Text>
                                                <DrawerCloseButton />
                                            </DrawerHeader>

                                            <Divider />
                                            <DrawerBody style={{ padding: '0px' }}>
                                                <Menu>
                                                    <MenuGroup>
                                                        {
                                                            course && course.lectures && course.lectures.map((item, index) => {
                                                                return (
                                                                    <Link onClick={onClose} to={`/free-courses/${id}/${item._id}`} key={index}>
                                                                        <MenuItem _hover={{ bg: '#e2f2ff' }}>
                                                                            <HStack>
                                                                                <Text fontSize={'xs'} fontWeight={'semibold'}>
                                                                                    {
                                                                                        index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`
                                                                                    }
                                                                                </Text>
                                                                                <Image width={'28'} src={item.thumbnail.url} />
                                                                                <VStack border={'1px solid black'} gap={'0'} alignItems={'flex-start'}>
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
                                                ) : <Image borderRadius={'10px'} src={course?.poster?.url} />
                                            }
                                        </AspectRatio>
                                        <Text pt={'4'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '2xl', '4xl']} lineHeight={'shorter'}>{lecture?.title || course?.title}</Text>
                                        <Tabs mt={'4'} colorScheme='purple'>
                                            <TabList>
                                                <Tab fontSize={['x-small', 'xs', 'sm', 'sm']}>Content</Tab>
                                                <Tab fontSize={['x-small', 'xs', 'sm', 'sm']}>Comments</Tab>
                                                <Tab fontSize={['x-small', 'xs', 'sm', 'sm']}>Doubts</Tab>
                                                <Tab fontSize={['x-small', 'xs', 'sm', 'sm']}>Downloads</Tab>
                                            </TabList>
                                            <TabPanels>
                                                <TabPanel>
                                                    <Text py={'1'} fontSize={'sm'} dangerouslySetInnerHTML={{ __html: sanitizedHTML(lecture?.description || course?.description) }} ></Text>
                                                </TabPanel>
                                                <TabPanel>
                                                    <VStack gap={2} justifyContent={'flex-start'} alignItems={'flex-start'}>
                                                        <Text fontFamily={'Young Serif'} py={'1'} fontSize={['xl', 'xl', '2xl', '2xl']}>Comments</Text>
                                                        {
                                                            user ? <>
                                                                <Textarea resize={'none'} fontSize={'sm'} focusBorderColor='#8141bb' placeholder='Write your comment here'></Textarea>
                                                                <Button size={['sm', 'sm', 'md', 'md']} colorScheme='purple' gap={2}>Post <IoSend /> </Button>
                                                            </>
                                                                : <Button fontSize={'sm'} variant={'link'} size={'sm'} colorScheme='purple' gap={2}><Link to={'/login'}>Login to Post Doubts</Link></Button>
                                                        }

                                                        <Box width={'full'}>
                                                            <Text fontSize={'sm'} textAlign={'center'} color={'gray.500'}>No Comments yet</Text>
                                                        </Box>
                                                    </VStack>
                                                </TabPanel>
                                                <TabPanel>
                                                    <VStack gap={2} justifyContent={'flex-start'} alignItems={'flex-start'}>
                                                        <Text fontFamily={'Young Serif'} py={'1'} fontSize={['xl', 'xl', '2xl', '2xl']}>Doubts</Text>
                                                        {
                                                            user ? <>
                                                                <Textarea resize={'none'} fontSize={'sm'} focusBorderColor='#8141bb' placeholder='Write your doubts here'></Textarea>
                                                                <Button size={['sm', 'sm', 'md', 'md']} colorScheme='purple' gap={2}>Post <IoSend /> </Button>
                                                            </>
                                                                : <Button fontSize={'sm'} variant={'link'} size={'sm'} colorScheme='purple' gap={2}><Link to={'/login'}>Login to Post Doubts</Link></Button>
                                                        }

                                                        <Box width={'full'}>
                                                            <Text fontSize={'sm'} textAlign={'center'} color={'gray.500'}>No Doubts yet</Text>
                                                        </Box>
                                                    </VStack>

                                                </TabPanel>
                                                <TabPanel>
                                                    <Text fontSize={'sm'} mt={4} textAlign={'center'} color={'gray.500'}>No Downloadables Yet</Text>
                                                </TabPanel>
                                            </TabPanels>
                                        </Tabs>
                                    </Box>

                                    <VStack h={['', '', '400px', '530px']} className='grayScrollbar' display={['none', 'none', 'block', 'block']} p={'2'} width={['90%', '90%', '30%', '30%']} overflowY={'auto'} border={'1px solid rgb(0,0,0,0.1)'}  >
                                        <Menu>
                                            <MenuGroup>
                                                <Text px={'2'} py={1} textAlign={'center'} noOfLines={'1'} fontWeight={'semibold'}>{course && course.title}</Text>
                                                <MenuDivider />
                                            </MenuGroup>
                                            <MenuGroup>
                                                {
                                                    course?.lectures?.map((item, index) => {
                                                        return (
                                                            <>
                                                                <Link to={`/free-courses/${id}/${item._id}`} key={index}>
                                                                    <MenuItem borderRadius={'md'}  my={1} _hover={{ bg: '#e2f2ff' }}>
                                                                        <HStack gap={2}>
                                                                            <Text fontSize={'xx-small'} fontWeight={'semibold'}>
                                                                                {
                                                                                    index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`
                                                                                }
                                                                            </Text>
                                                                            <Image width={'24'} borderRadius={'md'} src={item.thumbnail.url} />
                                                                            <Tooltip hasArrow label={item.title} p={2} bg='black' color={'white'} borderRadius={'5px'} fontSize={'xs'}>
                                                                                <VStack width={[, , '48', '56']} gap={'0'} alignItems={'flex-start'}>
                                                                                    <Text width={'full'} noOfLines={1} fontSize={'sm'} fontWeight={'semibold'}>{item.title}</Text>
                                                                                    <Text width={'full'} fontWeight={'normal !important'} fontSize={'0.7rem'} noOfLines={2} dangerouslySetInnerHTML={{ __html: sanitizedHTML(item.description) }}></Text>
                                                                                </VStack>
                                                                            </Tooltip>
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
