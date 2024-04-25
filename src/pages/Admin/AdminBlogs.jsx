import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaEdit } from 'react-icons/fa'
import { MdPreview } from 'react-icons/md'
import ReactQuill from 'react-quill'
import { Link } from 'react-router-dom'
import { sanitizedHTML } from '../../../controllers'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'

const AdminBlogs = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    

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

                    <Tabs className='dropboxTabBorders grayScrollbar' mt={6} isFitted width={'95%'} variant='enclosed-colored' colorScheme='purple'>
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
                                <Box py={4} px={8} fontSize={'sm'} dangerouslySetInnerHTML={{ __html: sanitizedHTML(description)}} ></Box>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                <Button onClick={() => console.log(description)}>Print Description</Button>
                </VStack>
            </MainWrapper>

        </TransitionWrapper>
    )
}

export default AdminBlogs
