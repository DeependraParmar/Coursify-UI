import React, { useEffect, useState } from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { AspectRatio, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Heading, Image, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Tooltip, VStack, useDisclosure } from '@chakra-ui/react'
import { FaAngleRight, FaEdit, FaLink } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { sanitizedHTML } from '../../../controllers'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { AiOutlineClose } from 'react-icons/ai'
import { MdCheckCircle, MdPreview, MdSubtitles } from 'react-icons/md'
import { FiUpload } from 'react-icons/fi'
import { ChangeProfilePhoto } from '../Profile/Profile'
import ReactQuill from 'react-quill'
import { addLectureToYoutubeCourse } from '../../redux/actions/youtube'
import LoadingComponent from '../../components/Loading'

const AdminYoutubeAddLecture = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const { loading, error, message } = useSelector(state => state.youtube);

    useEffect(() => {
        window.scrollTo(0,0,'smooth');
    }, []);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            setTitle('');
            setDescription('');
            setUrl('');
            setImage('');
            setImagePrev('');
        }
    }, [dispatch, error, message]);

    const changeImageSubmitHandler = (e, image, onClose) => {
        e.preventDefault();
        if (image && imagePrev)
            onClose();
    }

    const modules = {
        syntax: true,
        toolbar: [
            ['bold', 'italic', 'underline', 'strike',],
            ['code-block', 'blockquote'],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['link', 'image'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'direction': 'rtl' }],
            [{ 'align': [] }],
            [{ 'color': [] }, { 'background': [] }, 'clean'],
        ],
    };
    const formats = [
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'header',
        'link',
        'image',
        'direction',
        'align',
        'color',
        'background',
        'code-block',
        'blockquote'
    ];

    const addLectureToFreeCourse = async (e,id, title, description, url, image) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('url', url);
        formData.append('file', image);

        await dispatch(addLectureToYoutubeCourse(formData, id));
    }

    return (
        <TransitionWrapper>
            {
                loading && <LoadingComponent message='Adding...' />
            }
            <MainWrapper pt={24} pb={12}>
                <VStack gap={4}>
                    <HStack justifyContent={'flex-start'}>
                        <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                            <BreadcrumbItem>
                                <Link className='hover-underline' to='/admin/dashboard'>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link className='hover-underline' to='/admin/youtube'>Youtube</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link className='hover-underline' to='/admin/youtube/courses'>Courses</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link className='hover-underline' to={`/admin/youtube/courses/${id}`}>Course</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink color={'purple'} href='#'>Add-Lecture</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </HStack>

                    <VStack gap={0} width={'full'}>
                        <Heading mt={2} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Add Lectures</Heading>
                        <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Boss👋, add & manage lectures to the free courses from here.</Text>
                    </VStack>

                    <VStack gap={2} mt={4} width={['95%', '95%', '60%', '70%']}>
                        {
                            imagePrev && <Box position={'relative'} width={'full'}>
                                <AspectRatio ratio={16 / 9}>
                                    <Image src={imagePrev} alt='course poster' width={'full'} objectFit={'contain'} />
                                </AspectRatio>
                                <Button size={'sm'} rounded={'full'} colorScheme='blackAlpha' position={'absolute'} zIndex={10} top={2} right={2} onClick={() => { setImage(''); setImagePrev('') }}><AiOutlineClose /></Button>
                            </Box>
                        }
                        <HStack width={'full'}>
                            <InputGroup>
                                <InputLeftElement>
                                    <MdSubtitles />
                                </InputLeftElement>
                                <Input fontSize={'sm'} focusBorderColor='#8141bb' type='text' placeholder='Enter the title of the lecture' value={title} onChange={(e) => setTitle(e.target.value)} />
                            </InputGroup>
                            <Tooltip hasArrow label='Upload Thumbnail' p={2} bg='black' color={'white'} borderRadius={'5px'} fontSize={'xs'}>
                                <Button size={['sm', 'sm', 'md', 'md']} onClick={onOpen} colorScheme='purple'><FiUpload /> </Button>
                            </Tooltip>
                            <ChangeProfilePhoto isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} AvatarType='square' ModalTitle="Upload Course Thumbnail" image={image} imagePrev={imagePrev} setImage={setImage} setImagePrev={setImagePrev} />
                        </HStack>

                        <InputGroup>
                            <InputLeftElement>
                                <FaLink />
                            </InputLeftElement>
                            <Input fontSize={'sm'} focusBorderColor='#8141bb' type='text' placeholder='Enter the link of the youtube video' value={url} onChange={(e) => setUrl(e.target.value)} />
                        </InputGroup>

                        <Tabs width={'full'} className='dropboxTabBorders grayScrollbar' isFitted variant='enclosed-colored' colorScheme='purple'>
                            <TabList width={'full'}>
                                <Tab fontSize={'sm'} gap={2}>Editor <FaEdit /> </Tab>
                                <Tab fontSize={'sm'} gap={2}>Preview <MdPreview /> </Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Box borderRadius={'8px'} width={'full'} height={'300px'}>
                                        <ReactQuill
                                            placeholder='Your lecture description here....'
                                            value={description}
                                            onChange={setDescription}
                                            modules={modules}
                                            formats={formats}
                                            bounds={'#root'}
                                            className='quill'
                                            theme='snow'
                                            style={{ height: '100%' }}
                                        />
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box py={4} fontSize={'sm'} px={8} dangerouslySetInnerHTML={{ __html: sanitizedHTML(description) }} ></Box>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        <Button width={'full'} onClick={e => addLectureToFreeCourse(e,id, title,description, url, image)} isDisabled={!title || !description || !image || !imagePrev} colorScheme='purple' size={['sm', 'sm', 'md', 'md']} mt={2} gap={2}>Add Lecture <MdCheckCircle /> </Button>
                    </VStack>

                </VStack>

            </MainWrapper>
        </TransitionWrapper >
    )
}

export default AdminYoutubeAddLecture
