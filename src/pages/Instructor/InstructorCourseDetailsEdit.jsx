import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Heading, Input, InputGroup, InputLeftElement, Select, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaRegImage } from 'react-icons/fa'
import { MdOutlineSubtitles, MdSave } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import DescriptionEditor from '../../components/DescriptionEditor'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { ChangeProfilePhoto } from '../Profile/Profile'

const InstructorCourseDetailsEdit = () => {
    const [title, setTitle] = useState('ReactJS: Beginner to Advanced');
    const [description, setDescription] = useState('ReactJS is a very powerful frontend library for beautiful interface designing.');
    const [category, setCategory] = useState('Web Development');

    const changeImageSubmitHandler = (e, image) => {
        e.preventDefault();
        console.log(image);
    }

    const { isOpen, onClose, onOpen } = useDisclosure();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                                <BreadcrumbItem>
                                    <Link className='hover-underline' to={`/instructor/courses/${useParams().id}`}>Course</Link>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink color={'purple'} href='#'>Edit Details</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </HStack>

                        <VStack>
                            <Heading mt={['6', '6', '6', '6']} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Edit Course Details</Heading>
                            <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Deependra👋, change the text, description, thumbnail and more from here.</Text>
                        </VStack>

                        <VStack width={['95%', '95%', '40%', '40%']} margin={'auto'} display={'flex'} marginTop={6} gap={'4'}>

                            <InputGroup spacing='4' >
                                <InputLeftElement pointerEvents={'none'}>
                                    <MdOutlineSubtitles size='18' />
                                </InputLeftElement>
                                <Input type='text' placeholder='Course Title' focusBorderColor='#8141bb' defaultValue={title} fontSize={'sm'} contentEditable='true' onChange={(e) => setTitle(e.target.value)} />
                            </InputGroup>

                            <InputGroup width={'full'} spacing='4' >
                                <DescriptionEditor value={description} readOnly={false} />
                            </InputGroup>

                            <Select placeholder={`Select Category`} focusBorderColor='#8141bb' onChange={(e) => setCategory(e.target.value)} size={'sm'} fontSize={'xs'}>
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
                            
                            <Button variant={'outline'} size={'sm'} width={'full'} onClick={onOpen} gap={2} colorScheme={'purple'} ><FaRegImage /> Change Poster</Button>
                            <ChangeProfilePhoto isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} AvatarType='square' ModalTitle='Change Course Thumbnail' />


                            <Button fontSize={'sm'} size={['sm', 'sm', 'md', 'md']} gap={'2'} colorScheme='purple' width={'full'}>Save <MdSave /></Button>
                        </VStack>

                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default InstructorCourseDetailsEdit
