import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Heading, Input, InputGroup, InputLeftElement, Select, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaAngleRight, FaSave } from 'react-icons/fa'
import { MdOutlineCurrencyRupee, MdOutlineSubtitles, MdVideocam } from 'react-icons/md'
import { Link } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { ChangeProfilePhoto } from '../Profile/Profile'
import { BsCardImage } from 'react-icons/bs'

const InstructorNewCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    const changeImageSubmitHandler = () => {

    }

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <TransitionWrapper>
                <MainWrapper pt={20} pb={12}>
                    <VStack gap={0}>
                        <HStack justifyContent={'flex-start'}>
                            <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                                <BreadcrumbItem>
                                    <Link className='hover-underline' to='/instructor/dashboard'>Home</Link>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink color={'purple'} href='#'>New Course</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </HStack>

                        <Heading mt={['6', '6', '6', '6']} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Create New Course</Heading>
                        <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Deependra👋, create a new course and reach new learners.</Text>

                        <VStack mt={8} width={['95%', '95%', '40%', '40%']} alignItems={'flex-start'} spacing={'2'}>
                            <InputGroup spacing='4' >
                                <InputLeftElement pointerEvents={'none'}>
                                    <MdOutlineSubtitles size='18' />
                                </InputLeftElement>
                                <Input type='text' placeholder='Enter Course Title' focusBorderColor='#8141bb' fontSize={'sm'} onChange={(e) => setTitle(e.target.value)} />
                            </InputGroup>

                            <Select w={'full'} placeholder={`Select Category`} focusBorderColor='#8141bb' onChange={(e) => setCategory(e.target.value)} size={'sm'} fontSize={'xs'}>
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
                                <Input type='number' placeholder='Enter Price of the Course' focusBorderColor='#8141bb' fontSize={'sm'} onChange={(e) => setPrice(e.target.value)} />
                            </InputGroup>

                            <Button variant={'outline'} size={'sm'} width={'full'} onClick={onOpen} gap={2} colorScheme={'purple'} ><BsCardImage />Upload Course Poster</Button>
                            <ChangeProfilePhoto isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} AvatarType='square' ModalTitle='Select Lecture to Add' />

                            <Button fontSize={'sm'} size={['md', 'md', 'md', 'md']} gap={'2'} colorScheme='purple' width={'full'}>Create <FaSave /></Button>
                        </VStack>

                    </VStack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default InstructorNewCourse
