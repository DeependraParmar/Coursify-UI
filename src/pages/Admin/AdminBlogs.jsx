import { AspectRatio, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Heading, Image, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Tooltip, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaEdit } from 'react-icons/fa'
import { FiUpload } from 'react-icons/fi'
import { MdPreview, MdSubtitles } from 'react-icons/md'
import ReactQuill from 'react-quill'
import { Link } from 'react-router-dom'
import { sanitizedHTML } from '../../../controllers'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { ChangeProfilePhoto } from '../Profile/Profile'
import { useDispatch } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'


const AdminBlogs = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    const { isOpen, onOpen, onClose } = useDisclosure();
    const changeImageSubmitHandler = (e, image, onClose) => {
        e.preventDefault();
        if (image && imagePrev)
            onClose();
    }

    useEffect(() => {
        window.scrollTo(0, 0, 'smooth');
    }, []);

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

    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={12}>
                <VStack gap={4}>
                    <HStack justifyContent={'flex-start'}>
                        <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                            <BreadcrumbItem>
                                <Link className='hover-underline' to='/admin/dashboard'>Home</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink color={'purple'} href='#'>Blogs</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </HStack>

                    <VStack gap={0} width={'full'}>
                        <Heading mt={2} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Blog Panel</Heading>
                        <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Boss👋, manage all the blogs on the platform from this panel.</Text>
                    </VStack>

                    <VStack gap={2} mt={4} width={['95%', '95%', '60%', '70%']}>
                        {
                            imagePrev && <Box position={'relative'} width={'full'}>
                                <AspectRatio ratio={16/9}>
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
                                <Input fontSize={'sm'} focusBorderColor='#8141bb' type='text' placeholder='Enter the title of the blog' value={title} onChange={(e) => setTitle(e.target.value)} />
                            </InputGroup>
                            <Tooltip hasArrow label='Upload Cover Image' p={2} bg='black' color={'white'} borderRadius={'5px'} fontSize={'xs'}>
                                <Button size={['sm','sm','md','md']} onClick={onOpen} colorScheme='purple'><FiUpload /> </Button>
                            </Tooltip>
                            <ChangeProfilePhoto isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} AvatarType='square' ModalTitle="Upload Blog's Cover Image" image={image} imagePrev={imagePrev} setImage={setImage} setImagePrev={setImagePrev} />
                        </HStack>

                        <Tabs width={'full'} className='dropboxTabBorders grayScrollbar' isFitted variant='enclosed-colored' colorScheme='purple'>
                            <TabList width={'full'}>
                                <Tab fontSize={'sm'} gap={2}>Editor <FaEdit /> </Tab>
                                <Tab fontSize={'sm'} gap={2}>Preview <MdPreview /> </Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Box borderRadius={'8px'} width={'full'}>
                                        <ReactQuill
                                            placeholder='Write your blog here'
                                            value={description}
                                            onChange={setDescription}
                                            modules={modules}
                                            formats={formats}
                                            bounds={'#root'}
                                            theme='snow'
                                            className='quill-blog'
                                        />
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box py={4} fontSize={'sm'} px={8} dangerouslySetInnerHTML={{ __html: sanitizedHTML(description) }} ></Box>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </VStack>
                </VStack>
            </MainWrapper>

        </TransitionWrapper>
    )
}

export default AdminBlogs
