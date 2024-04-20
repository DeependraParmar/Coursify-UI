import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, HStack, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Tooltip, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete, AiOutlineExpand } from 'react-icons/ai'
import { FaAngleRight } from 'react-icons/fa'
import { MdCloudUpload } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify"
import LoadingComponent from "../../components/Loading"
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { deleteImage, getAllImages, uploadImage } from '../../redux/actions/admin'

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
    }, []);


    const deleteImageHandler = async (e, id) => {
        e.preventDefault();
        await dispatch(deleteImage(id));
        await dispatch(getAllImages());
    }

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

                                        <Button isDisabled={!image || !imagePrev} onClick={(e) => uploadImageHandler(e, image)} colorScheme='purple' variant='solid' width={['full', 'full', '20%', '20%']} gap={2}>Upload <MdCloudUpload /></Button>

                                        <Divider />
                                        <Heading fontSize={['md', 'md', 'lg', 'xl']} fontFamily={'Young Serif'}>Image Gallery</Heading>
                                        <HStack width={'full'} flexWrap={'wrap'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                                            {images && images.length > 0 ?
                                                images.map((image, index) => (
                                                    <Box key={index} position={'relative'} borderRadius={'md'} display={'flex'} padding={'4'} width={'150px'} height={'150px'} background={'gray.100'}>
                                                        <Image borderRadius={'md'} src={image?.image?.url} objectFit={'contain'} alt='image here' />
                                                        <Tooltip hasArrow label='Expand' p={2} bg='black' color={'white'} borderRadius={'5px'} fontSize={'xs'}>
                                                            <Button size={'xs'} _hover={{ background: 'blackAlpha.500' }} rounded={'full'} background={'blackAlpha.700'} position={'absolute'} zIndex={10} top={2} right={2} onClick={() => { }}><a href={image.image.url} download={'image.png'}><AiOutlineExpand color='white' /></a></Button>
                                                        </Tooltip>
                                                        <Tooltip hasArrow label='Delete' p={2} bg='black' color={'white'} borderRadius={'5px'} fontSize={'xs'}>
                                                            <Button size={'xs'} rounded={'full'} colorScheme='red' position={'absolute'} zIndex={10} top={2} right={10} onClick={(e) => deleteImageHandler(e, image._id)}><a href={image.image.url} download={'image.png'}><AiOutlineDelete color='white' /></a></Button>
                                                        </Tooltip>
                                                    </Box>
                                                )) :
                                                <Text w={'full'} textAlign={'center'} fontSize={'sm'} color={'gray.500'}>No images found</Text>
                                            }
                                        </HStack>
                                    </VStack>
                                </TabPanel>
                                <TabPanel>
                                    <p>two!</p>
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
