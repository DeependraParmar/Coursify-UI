import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Heading, Image, Input, InputGroup, InputLeftElement, InputRightElement, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaAngleRight, FaEdit, FaRegImage } from 'react-icons/fa'
import { MdOutlineCurrencyRupee, MdOutlineSubtitles, MdPreview, MdSave } from 'react-icons/md'
import ReactQuill from 'react-quill'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import LoadingComponent from '../../components/Loading'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { getSpecificInstructorCourse, updateCourseDetails } from '../../redux/actions/instructor'
import { ChangeProfilePhoto } from '../Profile/Profile'
import { sanitizedHTML } from '../../../controllers'

const InstructorCourseDetailsEdit = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { loading, error, course, message } = useSelector(state => state.instructor);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    // Fetch course data and set initial state values
    useEffect(() => {
        dispatch(getSpecificInstructorCourse(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (course) {
            setTitle(course.title || '');
            setDescription(course.description || '');
            setCategory(course.category || '');
            setPrice(course.price || '');
            convertPosterToBase64(course?.poster?.url);
        }
    }, [course]);

    const convertPosterToBase64 = async (secureUrl) => {
        try {
            const response = await fetch(secureUrl);
            const blob = await response.blob();

            const reader = new FileReader();
            reader.readAsDataURL(blob);

            reader.onloadend = () => {
                setImagePrev(reader.result);
                setImage(blob);
            }
        } catch (error) {
            console.error('Error fetching the image:', error);
            return null;
        }
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError ' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, error, message]);


    const changeImageSubmitHandler = (e, image) => {
        e.preventDefault();
        if (image && imagePrev)
            onClose();
    }



    const updateDetailsHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('file', image);

        await dispatch(updateCourseDetails(formData, id));
    }

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['link'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'direction': 'rtl' }],
            [{ 'align': [] }],
        ],
    };
    const formats = [
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'link',
        'direction',
        'align',
    ];

    const { isOpen, onClose, onOpen } = useDisclosure();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <TransitionWrapper>
                {
                    loading && <LoadingComponent message='Updating...' />
                }
                <MainWrapper pt={24} pb={12}>
                    <VStack gap={4}>
                        <HStack justifyContent={'flex-start'}>
                            <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                                <BreadcrumbItem>
                                    <Link className='hover-underline' to='/instructor/dashboard'>Home</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Link className='hover-underline' to='/instructor/courses'>Courses</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Link className='hover-underline' to={`/instructor/courses/${useParams().id}`}>Course</Link>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink color={'purple'} href='#'>Edit Details</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </HStack>

                        <VStack>
                            <Heading mt={['4', '4', '4', '2']} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Edit Course Details</Heading>
                            <Text fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Deependra👋, change the text, description, thumbnail and more from here.</Text>
                        </VStack>

                        {
                            loading && !course ? <LoadingComponent /> :
                                course && <VStack width={['95%', '95%', '40%', '40%']} margin={'auto'} display={'flex'} marginTop={6} gap={'2'}>

                                    <InputGroup spacing='4' >
                                        <InputLeftElement pointerEvents={'none'}>
                                            <MdOutlineSubtitles size='18' />
                                        </InputLeftElement>
                                        <Input type='text' placeholder='Course Title' focusBorderColor='#8141bb' defaultValue={title} fontSize={'sm'} contentEditable='true' onChange={(e) => setTitle(e.target.value)} />
                                    </InputGroup>

                                    <Tabs className='dropboxTab dropboxTab-height grayScrollbar' isFitted width={'full'} variant='enclosed-colored' colorScheme='purple'>
                                        <TabList width={'full'}>
                                            <Tab fontSize={'sm'} gap={2}>Editor <FaEdit /> </Tab>
                                            <Tab fontSize={'sm'} gap={2}>Preview <MdPreview /> </Tab>
                                        </TabList>
                                        <TabPanels>
                                            <TabPanel>
                                                <Box border={'1px solid #e2e8f0'} borderRadius={'8px'} width={'full'} height={'200px'}>
                                                    <ReactQuill
                                                        placeholder='Your detailed course description here (include link to resources, etc.)'
                                                        value={description}
                                                        onChange={setDescription}
                                                        modules={modules}
                                                        formats={formats}
                                                        bounds={'#root'}
                                                        theme='snow'
                                                        className='quill'
                                                    />
                                                </Box>
                                            </TabPanel>
                                            <TabPanel>
                                                <Text py={2} px={6} fontSize={'sm'} dangerouslySetInnerHTML={{ __html: sanitizedHTML(description) }} ></Text>
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>

                                    <Select placeholder={`Select Category`} focusBorderColor='#8141bb' onChange={(e) => setCategory(e.target.value)} value={category} size={'md'} fontSize={'0.82rem'}>
                                        <option value="web development">Web Development</option>
                                        <option value="app development">App Development</option>
                                        <option value="data science">Data Science</option>
                                        <option value="artificial intelligence">Artificial Intelligence</option>
                                        <option value="machine learning">Machine Learning</option>
                                        <option value="blockchain">Blockchain</option>
                                        <option value="cyber security">Cyber Security</option>
                                        <option value="cloud computing">Cloud Computing</option>
                                        <option value="other">Other</option>
                                    </Select>

                                    <InputGroup _focus={'none'} spacing='4' >
                                        <InputLeftElement pointerEvents={'none'}>
                                            <MdOutlineCurrencyRupee size='18' />
                                        </InputLeftElement>
                                        <Input value={price} type='number' placeholder='Enter Price of the Course' focusBorderColor='#8141bb' fontSize={'sm'} onChange={(e) => setPrice(e.target.value)} />
                                        <InputRightElement>
                                            <Text fontSize={'sm'}>/-</Text>
                                        </InputRightElement>
                                    </InputGroup>

                                    <Button variant={'outline'} width={'full'} onClick={onOpen} gap={2} colorScheme={'purple'} ><FaRegImage /> Change Course Thumbnail</Button>
                                    {
                                        imagePrev && <Box position={'relative'} width={'full'}>
                                            <Image src={imagePrev} alt='course poster' width={'full'} objectFit={'contain'} />
                                            <Button size={'sm'} rounded={'full'} colorScheme='blackAlpha' position={'absolute'} zIndex={10} top={2} right={2} onClick={() => { setImage(''); setImagePrev('') }}><AiOutlineClose /></Button>
                                        </Box>
                                    }
                                    <ChangeProfilePhoto isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} AvatarType='square' ModalTitle='Change Course Thumbnail' image={image} setImage={setImage} imagePrev={imagePrev} setImagePrev={setImagePrev} />



                                    <Button isLoading={loading} onClick={e => updateDetailsHandler(e)} isDisabled={!title || !description || !category || !price || !image || !imagePrev} mt={4} fontSize={'sm'} size={['sm', 'sm', 'md', 'md']} gap={'2'} colorScheme='purple' width={'full'}>Save Changes <MdSave /></Button>
                                </VStack>
                        }

                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default InstructorCourseDetailsEdit
