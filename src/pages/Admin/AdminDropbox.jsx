import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, HStack, Heading, Image, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Tooltip, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineCheckCircle, AiOutlineCopy, AiOutlineDelete, AiOutlineExpand } from 'react-icons/ai'
import { FaAngleRight } from 'react-icons/fa'
import { MdCloudUpload, MdSubtitles } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify"
import LoadingComponent from "../../components/Loading"
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { addNote, deleteImage, deleteNote, getAllImages, getNotes, uploadImage } from '../../redux/actions/admin'
import ReactQuill from 'react-quill'
import { sanitizedHTML } from "../../../controllers"

const AdminDropbox = () => {
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const changeImageSubmitHandler = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImage(file);
            setImagePrev(reader.result);
        }
    }

    const dispatch = useDispatch();
    const { loading, error, images, notes, message } = useSelector(state => state.admin);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, error, message]);

    const uploadImageHandler = async (e, image) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', image);

        await dispatch(uploadImage(formData));
        await dispatch(getAllImages());
        setImage('');
        setImagePrev('');
    }

    useEffect(() => {
        dispatch(getAllImages());
        dispatch(getNotes());
    }, []);


    const deleteImageHandler = async (e, id) => {
        e.preventDefault();
        await dispatch(deleteImage(id));
        await dispatch(getAllImages());
    }

    const addNoteHandler = async (e, title, description) => {
        e.preventDefault();
        await dispatch(addNote(title, description));
        await dispatch(getNotes());
        setTitle('');
        setDescription('');
    }

    const deleteNoteHandler = async (e, id) => {
        e.preventDefault();
        await dispatch(deleteNote(id));
        await dispatch(getNotes());
    }

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['link'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'direction': 'rtl' }],
            [{ 'align': [] }],
            [{'color': []}, {'background': []}, 'clean'],
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
        'direction',
        'align',
        'color',
        'background',
    ];

    return (
        <>
            <TransitionWrapper>
                {loading && <LoadingComponent />}
                <MainWrapper pt={24} pb={12}>
                    <VStack gap={2}>
                        <HStack justifyContent={'flex-start'}>
                            <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                                <BreadcrumbItem>
                                    <Link className='hover-underline' to='/admin/dashboard'>Home</Link>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink color={'purple'} href='#'>Dropbox</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </HStack>

                        <VStack gap={0} width={'full'}>
                            <Heading mt={2} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Personal Dropbox</Heading>
                            <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Boss👋, this is you personal dropbox and notepad to enhance productivity.</Text>
                        </VStack>

                        <Tabs className='dropboxTab grayScrollbar' mt={6} isFitted width={['95%', '95%', '70%', '70%']} variant='enclosed-colored' colorScheme='purple'>
                            <TabList width={'full'}>
                                <Tab>Dropbox</Tab>
                                <Tab>Notepad</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <VStack gap={6}>
                                        <label for="images" class="drop-container" id="dropcontainer">
                                            <span class="drop-title">Drag & Drop files here</span>
                                            or
                                            <input onChange={changeImageSubmitHandler} type="file" id="images" accept="image/*" required />
                                        </label>
                                        {
                                            imagePrev && <Box width={['full', 'full', '20%', '15%']} height={['full', 'full', '20%', '20%']} >
                                                <Image src={imagePrev} alt="image here" />
                                            </Box>
                                        }

                                        <Button isDisabled={!image || !imagePrev} onClick={(e) => uploadImageHandler(e, image)} size={['sm', 'sm', 'md', 'md']} colorScheme='purple' variant='solid' width={['full', 'full', '20%', '20%']} gap={2}>Upload <MdCloudUpload /></Button>

                                        <Divider />
                                        <Heading fontSize={['lg', 'lg', 'lg', '2xl']} fontFamily={'Young Serif'}>Image Gallery</Heading>
                                        <HStack width={'full'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'flex-start'}>
                                            {images && images.length > 0 ?
                                                images.map((image, index) => (
                                                    <Box key={index} position={'relative'} borderRadius={'md'} display={'flex'} width={['45%','45%','180px','180px']} height={'140px'} background={'gray.100'}>
                                                        <Image width={'full'} borderRadius={'md'} src={image?.image?.url} objectFit={'contain'} alt='image here' />
                                                        <Tooltip hasArrow label='Expand' p={2} bg='black' color={'white'} borderRadius={'5px'} fontSize={'xs'}>
                                                            <Button size={'xs'} _hover={{ background: 'blackAlpha.500' }} rounded={'full'} background={'blackAlpha.700'} position={'absolute'} zIndex={10} top={2} right={2} onClick={() => { }}><a href={image.image.url} target='_blank' download={'image.png'}><AiOutlineExpand color='white' /></a></Button>
                                                        </Tooltip>
                                                        <Tooltip hasArrow label='Delete' p={2} bg='black' color={'white'} borderRadius={'5px'} fontSize={'xs'}>
                                                            <Button size={'xs'} rounded={'full'} colorScheme='red' position={'absolute'} zIndex={10} top={2} right={10} onClick={(e) => deleteImageHandler(e, image._id)}><a href={image.image.url} target='_blank' download={'image.png'}><AiOutlineDelete color='white' /></a></Button>
                                                        </Tooltip>
                                                    </Box>
                                                )) :
                                                <Text w={'full'} textAlign={'center'} fontSize={'sm'} color={'gray.500'}>No images found</Text>
                                            }
                                        </HStack>
                                    </VStack>
                                </TabPanel>
                                <TabPanel>
                                    <VStack gap={2}>
                                        <InputGroup>
                                            <InputLeftElement>
                                                <MdSubtitles />
                                            </InputLeftElement>
                                            <Input fontSize={'sm'} focusBorderColor='#8141bb' type='text' placeholder='Enter the title of your note' value={title} onChange={(e) => setTitle(e.target.value)} />
                                        </InputGroup>

                                        <Box border={'1px solid #e2e8f0'} borderRadius={'8px'} width={'full'} height={'200px'}>
                                            <ReactQuill
                                                placeholder='Enter the detailed description of your note.'
                                                value={description}
                                                onChange={setDescription}
                                                modules={modules}
                                                formats={formats}
                                                bounds={'#root'}
                                                theme='snow'
                                                className='quill'
                                                style={{ height: '70%' }}
                                            />
                                        </Box>

                                        <Button isDisabled={!title || !description} onClick={(e) => addNoteHandler(e, title, description)} mt={4} colorScheme='purple' variant='solid' width={['full', 'full', '20%', '20%']} size={['sm', 'sm', 'md', 'md']} gap={2}>Add Note <AiOutlineCheckCircle /></Button>

                                        <Heading mt={4} fontSize={['md', 'md', 'lg', 'xl']} fontFamily={'Young Serif'}>All Notes</Heading>

                                        <VStack width={'full'} spacing={1} alignItems={'flex-start'} justifyContent={'flex-start'}>
                                            {
                                                notes && notes.length > 0 ? (
                                                    notes.map((note, index) => {
                                                        return <Box w={'full'} key={index} position={'relative'}>
                                                            <Text fontWeight={600} fontSize={'sm'} position={'relative'} top={3} w={'fit-content'} px={2} left={3} background={'white'} >{note.title}</Text>
                                                            <Text w={'full'} border={'1px solid #e2e8f0'} p={4} px={3} pl={8} borderRadius={'md'} _focusVisible={{ outline: "none" }} dangerouslySetInnerHTML={{ __html: sanitizedHTML(note.description) }} fontSize={'sm'} />

                                                            <HStack position={'absolute'} zIndex={10} right={4} top={9}>
                                                                <Tooltip hasArrow label='Copy to Clipboard' p={2} bg='black' color={'white'} borderRadius={'5px'} fontSize={'xs'}><Button size={'xs'} _hover={{ background: 'blackAlpha.500' }} rounded={'full'} background={'blackAlpha.700'} variant='solid' onClick={() => {
                                                                    navigator.clipboard.writeText(note.description);
                                                                }}><AiOutlineCopy color='white' /></Button></Tooltip>
                                                                <Tooltip hasArrow label='Delete' p={2} bg='black' color={'white'} borderRadius={'5px'} fontSize={'xs'}><Button rounded={'full'} size={'xs'} colorScheme='red' variant='solid' onClick={(e) => deleteNoteHandler(e, note._id)}><AiOutlineDelete /></Button></Tooltip>
                                                            </HStack>
                                                        </Box>
                                                    })
                                                ) : 
                                                    <Text w={'full'} textAlign={'center'} fontSize={'sm'} color={'gray.500'}>No notes found</Text>
                                            }
                                        </VStack>
                                    </VStack>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default AdminDropbox
