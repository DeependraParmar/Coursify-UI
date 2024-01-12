import { Avatar, Button, Container, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { AiOutlineUser, AiOutlineMail, AiFillEdit, AiOutlineSwap, AiFillSave, AiFillLinkedin, AiFillTwitterCircle, AiFillGithub, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { CgCalendarDates } from "react-icons/cg";
import { MdOutlineInfo, MdOutlinePhone } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { RiAdminLine, } from 'react-icons/ri';
import { fileUploadCSS } from '../../../controllers.js';
import { useState } from 'react';
import MainWrapper from '../../components/MainWrapper.jsx';
import { FaChalkboard, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import {user} from "../../../data.js"



const Profile = () => {
  

  const removeFromPlaylistHandler = (courseid) => {
    console.log(courseid);
  }
  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  }

  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


  return (

    <>
      <MainWrapper pt={['10','10','20','20']}>
        <Stack paddingY={'3rem'} justifyContent={['flex-start','flex-start','center','center']} direction={['column', 'column', 'row', 'row']} alignItems={['center','center','flex-start','flex-start']} gap={['6','6','10','12']} px={'2'} >

          <VStack spacing={'4'} width={['95%', '95%', '40%', '40%']} >
            <Avatar src='https://avatars.githubusercontent.com/u/104254575?v=4' boxSize={'40'} />
            <Button onClick={onOpen} colorScheme={'purple'} variant={'ghost'}>Change Profile</Button>
            <Text gap={'2'}>
              <Button size={'xs'} variant={'ghost'} ><a href={user.social_media_urls[0].linkedin} target="_blank" rel="noopener noreferrer"><AiFillLinkedin  size={'20'}/></a></Button>
              <Button size={'xs'} variant={'ghost'} ><a href={user.social_media_urls[0].twitter} target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle  size={'20'}/></a></Button>
              <Button size={'xs'} variant={'ghost'} ><a href={user.social_media_urls[0].github} target="_blank" rel="noopener noreferrer"><AiFillGithub  size={'20'}/></a></Button>
              <Button size={'xs'} variant={'ghost'} ><a href={user.social_media_urls[0].facebook} target="_blank" rel="noopener noreferrer"><AiFillFacebook  size={'20'}/></a></Button>
              <Button size={'xs'} variant={'ghost'} ><a href={user.social_media_urls[0].website} target="_blank" rel="noopener noreferrer"><BsGlobe2 size={'20'}/></a></Button>
              <Button size={'xs'} variant={'ghost'} ><a href={user.social_media_urls[0].youtube} target="_blank" rel="noopener noreferrer"><AiFillYoutube size={'20'}/></a></Button>
            </Text>
          </VStack>
          

            <VStack spacing={['4','4','6','6']} justifyContent={'flex-start'} alignItems={['flex-start', 'flex-start']} width={['95%', '95%', '60%', '60%']} >
              <HStack >
                <AiOutlineUser size='18' />
                <Text fontSize={'sm'} > Name: </Text>
                <Text fontWeight={'semibold'} fontSize={['sm','md','md','md']}>{user.name}</Text>
              </HStack>
              <HStack >
                <AiOutlineMail size='18' />
                <Text fontSize={'sm'} >Email: </Text>
                <Text fontWeight={'semibold'} fontSize={['sm','md','md','md']}>{user.email}</Text>
              </HStack>
              <HStack >
                <MdOutlinePhone size='18' />
                <Text fontSize={'sm'} >Phone Number:  </Text>
                <Text fontWeight={'semibold'} fontSize={['sm','md','md','md']}>{user.phoneNumber}</Text>
              </HStack>
              <HStack >
                <FaChalkboard size='18' />
                <Text fontSize={'sm'} >Verified Instructor:  </Text>
                <Text fontWeight={'semibold'} fontSize={['sm','md','md','md']}>
                  {
                    user.isVerifiedInstructor ? <FaRegThumbsUp color={'green'} /> : <FaRegThumbsDown color={'red'} />
                  }
                </Text>
              </HStack>
              <HStack >
                <RiAdminLine size='18' />
                <Text fontSize={'sm'} >Verified Admin:  </Text>
                <Text fontWeight={'semibold'} fontSize={['sm','md','md','md']}>
                  {
                    user.isVerifiedAdmin ? <FaRegThumbsUp color={'green'} /> : <FaRegThumbsDown color={'red'} />
                  }
                </Text>
              </HStack>
              <HStack >
                <CgCalendarDates size='18' />
                <Text fontSize={'sm'} >Created At: </Text>
                <Text fontWeight={'semibold'} fontSize={['sm','md','md','md']}>{user.createdAt}</Text>
              </HStack>
              <VStack alignItems={'flex-start'}>
                <HStack>
                  <MdOutlineInfo size='18' />
                  <Text fontSize={'sm'} >About: </Text>
                </HStack>
                <Text fontWeight={'normal'} fontSize={['sm','md','md','md']}>{user.about}</Text>
              </VStack>

              <Stack direction={['column', 'column', 'row', 'row']} alignItems={'flex-start'} >
                <Link to='/profile/edit'>
                  <Button colorScheme={'purple'} variant={'solid'} gap={'2'} size={'sm'} fontWeight={'medium'} ><AiFillEdit />Edit Profile</Button>
                </Link>
                <Link to='/reset-password'>
                  <Button colorScheme={'purple'} variant={'solid'} gap={'2'} size={'sm'} fontWeight={'medium'} ><AiOutlineSwap />Change Password</Button>
                </Link>
              </Stack>
            </VStack>
        </Stack>


        <ChangeProfilePhoto isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} />

      </MainWrapper>

    </>
  )
}

export default Profile;

function ChangeProfilePhoto({ isOpen, onClose, changeImageSubmitHandler }) {
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    }
  }
  const closeHandler = () => {
    onClose();
    setImagePrev('');
    setImage('');
  }
  return (
    <Modal isOpen={isOpen} onClose={closeHandler} >
      <ModalOverlay backdropFilter={'blur(5px)'} />
      <ModalContent width={['300px','500px','500px','500px']}>
        <ModalHeader ><Text textAlign={'center'} fontSize={'md'}>Change Profile Picture</Text></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container maxWidth={'container.sm'} >
            <form onSubmit={(e) => changeImageSubmitHandler(e, image)} >
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'40'} />}
                <Input onChange={changeImageHandler} type={'file'} css={{ "&::file-selector-button": fileUploadCSS }} />

                <Button type='submit' colorScheme={'purple'} variant={'solid'} width={'full'} gap={'2'} ><AiFillSave size={'20'} /> Save Changes</Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeHandler} colorScheme={'purple'} variant={'ghost'} >Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}