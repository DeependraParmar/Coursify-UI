import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Heading, Input, InputGroup, InputLeftElement, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaSave } from 'react-icons/fa'
import { IoLinkOutline } from 'react-icons/io5'
import { MdOutlineSubtitles, MdVideocam } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { ChangeProfilePhoto } from '../Profile/Profile'

const InstructorCourseAddLecture = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  }

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <TransitionWrapper>
        <MainWrapper pt={24} pb={12}>
          <VStack gap={6}>
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
                  <BreadcrumbLink color={'purple'} href='#'>Add Lecture</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </HStack>

            <VStack width={'full'} gap={0}>
              <Heading textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Add New Lecture</Heading>
              <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Deependra👋, add lectures in the selected course.</Text>
            </VStack>

            <VStack width={['95%', '95%', '40%', '40%']} alignItems={'flex-start'} spacing={'2'}>
              <InputGroup spacing='4' >
              <InputLeftElement pointerEvents={'none'}>
                <MdOutlineSubtitles size='18' />
              </InputLeftElement>
              <Input type='text' placeholder='Enter Lecture Title' focusBorderColor='#8141bb' fontSize={'sm'} onChange={(e) => setTitle(e.target.value)} />
            </InputGroup>

            {/* <InputGroup _focus={'none'} spacing='4' >
              <DescriptionEditor readOnly={false} value={description} onChange={(e) => setDescription(e.target.value)} />
            </InputGroup> */}

            <InputGroup _focus={'none'} spacing='4' >
              <InputLeftElement pointerEvents={'none'}>
                <IoLinkOutline size='18' />
              </InputLeftElement>
              <Input type='text' placeholder='Enter Link to Notes' focusBorderColor='#8141bb' fontSize={'sm'} onChange={(e) => setNotes(e.target.value)} />
            </InputGroup>

              <Button variant={'outline'} size={'sm'} width={'full'} onClick={onOpen} gap={2} colorScheme={'purple'} ><MdVideocam /> Select Video Lecture</Button>
              <ChangeProfilePhoto type='video' isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} AvatarType='square' ModalTitle='Select Lecture to Add' />

            <Button fontSize={'sm'} size={['md', 'md', 'md', 'md']} gap={'2'} colorScheme='purple' width={'full'}>Save <FaSave /></Button>
          </VStack>

        </VStack>
      </MainWrapper>
    </TransitionWrapper >
    </>
  )
}

export default InstructorCourseAddLecture;
