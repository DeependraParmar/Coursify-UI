import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Heading, Image, Input, InputGroup, InputLeftElement, Select, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaRegImage } from 'react-icons/fa'
import { MdOutlineSubtitles, MdSave } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { ChangeProfilePhoto } from '../Profile/Profile'
import ReactQuill from 'react-quill'
import { AiOutlineClose } from 'react-icons/ai'

const InstructorCourseDetailsEdit = () => {
    const [title, setTitle] = useState('ReactJS: Beginner to Advanced');
    const [description, setDescription] = useState('ReactJS is a very powerful frontend library for beautiful interface designing.');
    const [category, setCategory] = useState('Web Development');
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    const changeImageSubmitHandler = (e, image) => {
        e.preventDefault();
        if(image && imagePrev)
            onClose();
    }

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
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
        'header',
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

                        <VStack width={['95%', '95%', '40%', '40%']} margin={'auto'} display={'flex'} marginTop={6} gap={'2'}>

                            <InputGroup spacing='4' >
                                <InputLeftElement pointerEvents={'none'}>
                                    <MdOutlineSubtitles size='18' />
                                </InputLeftElement>
                                <Input type='text' placeholder='Course Title' focusBorderColor='#8141bb' defaultValue={title} fontSize={'sm'} contentEditable='true' onChange={(e) => setTitle(e.target.value)} />
                            </InputGroup>

                            <Box border={'1px solid #e2e8f0'} borderRadius={'8px'} width={'full'} height={'150px'}>
                                <ReactQuill
                                    placeholder='Your detailed course description here (include link to resources, etc.)'
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

                            <Select placeholder={`Select Category`} focusBorderColor='#8141bb' onChange={(e) => setCategory(e.target.value)} size={'md'} fontSize={'0.82rem'}>
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
                            
                            <Button variant={'outline'} width={'full'} onClick={onOpen} gap={2} colorScheme={'purple'} ><FaRegImage /> Change Course Thumbnail</Button>
                            {
                                imagePrev && <Box position={'relative'} width={'full'}>
                                    <Image src={imagePrev} alt='course poster' width={'full'} objectFit={'contain'} />
                                    <Button size={'sm'} rounded={'full'} colorScheme='blackAlpha' position={'absolute'} zIndex={10} top={2} right={2} onClick={() => { setImage(''); setImagePrev('') }}><AiOutlineClose /></Button>
                                </Box>
                            }
                            <ChangeProfilePhoto isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} AvatarType='square' ModalTitle='Change Course Thumbnail' image={image} setImage={setImage} imagePrev={imagePrev} setImagePrev={setImagePrev}  />



                            <Button isDisabled={!title || !description || !category || !image || !imagePrev} mt={4} fontSize={'sm'} size={['sm', 'sm', 'md', 'md']} gap={'2'} colorScheme='purple' width={'full'}>Save <MdSave /></Button>
                        </VStack>

                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default InstructorCourseDetailsEdit
