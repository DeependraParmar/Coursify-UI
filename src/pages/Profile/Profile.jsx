import { Avatar, Button, Container, Heading, Image, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiFillEdit, AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillSave, AiFillTwitterCircle, AiFillYoutube, AiOutlineMail, AiOutlineSwap, AiOutlineUser } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { MdOutlinePhone } from "react-icons/md";
import { Link, redirect, useNavigate } from 'react-router-dom';
import { fileUploadCSS } from '../../../controllers.js';
import BioEditor from '../../components/BioEditor.jsx';
import MainWrapper from '../../components/MainWrapper.jsx';
import TransitionWrapper from '../../components/Transition.jsx';
import { useDispatch } from 'react-redux';
import { getMyProfile, updateProfilePicture } from '../../redux/actions/user.js';

const Profile = ({user}) => {

  const removeFromPlaylistHandler = (courseid) => {
    console.log(courseid);
  }

  const dispatch = useDispatch();

  const changeImageSubmitHandler = async(e, image, onClose) => {
    e.preventDefault();
    onClose();
    const myForm = new FormData();
    myForm.append('file', image);
    await dispatch(updateProfilePicture(myForm));
    dispatch(getMyProfile());
  }

  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);


  return (
    <>
      <TransitionWrapper>
        <MainWrapper pt={'24'}>
          <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} >Your Profile</Heading>
          <InputGroup spacing='4' ></InputGroup>
          <Stack paddingY={'3rem'} justifyContent={['flex-start', 'flex-start', 'center', 'center']} direction={['column', 'column', 'row', 'row']} alignItems={['center', 'center', 'flex-start', 'flex-start']} gap={['6', '6', '10', '12']} px={'2'} >

            <VStack spacing={'4'} width={['95%', '95%', '30%', '30%']} >
              <Avatar src={user.avatar.url} background={'#805AD5'} color={'white'} name={user.name}  boxSize={'40'} />
              <Button onClick={onOpen} colorScheme={'purple'} variant={'ghost'}>Change Profile</Button>
              {
                user.social_media_urls.length > 0 ? (
                  <Text gap={'2'}>
                    user.social_media_url[0].linkedin && <Button size={'xs'} variant={'ghost'} ><a href={user.social_media_urls[0].linkedin} target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={'20'} /></a></Button>
                    user.social_media_url[0].twitter && <Button size={'xs'} variant={'ghost'} ><a href={user.social_media_urls[0].twitter} target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle size={'20'} /></a></Button>
                    user.social_media_url[0].github && <Button size={'xs'} variant={'ghost'} ><a href={user.social_media_urls[0].github} target="_blank" rel="noopener noreferrer"><AiFillGithub size={'20'} /></a></Button>
                    user.social_media_url[0].facebook && <Button size={'xs'} variant={'ghost'} ><a href={user.social_media_urls[0].facebook} target="_blank" rel="noopener noreferrer"><AiFillFacebook size={'20'} /></a></Button>
                    user.social_media_url[0].website && <Button size={'xs'} variant={'ghost'} ><a href={user.social_media_urls[0].website} target="_blank" rel="noopener noreferrer"><BsGlobe2 size={'20'} /></a></Button>
                    user.social_media_url[0].youtube && <Button size={'xs'} variant={'ghost'} ><a href={user.social_media_urls[0].youtube} target="_blank" rel="noopener noreferrer"><AiFillYoutube size={'20'} /></a></Button>
                  </Text>
                ) : 
                (
                  ''
                )
              }
            </VStack>


            <VStack spacing={['4', '4', '4', '4']} justifyContent={'flex-start'} alignItems={['flex-start', 'flex-start']} width={['95%', '95%', '40%', '40%']} >
              <InputGroup spacing='4' >
                <InputLeftElement pointerEvents={'none'}>
                  <AiOutlineUser size='18' />
                </InputLeftElement>
                <Input isReadOnly type='text' _focusVisible={{ outline: "none" }} value={user.name} fontSize={'sm'} />
              </InputGroup>

              <InputGroup _focus={'none'} spacing='4' >
                <InputLeftElement pointerEvents={'none'}>
                  <AiOutlineMail size='18' />
                </InputLeftElement>
                <Input isReadOnly type='text' placeholder='johndoe@gmail.com' _focusVisible={{ outline: "none" }} value={user.email} fontSize={'sm'} />
              </InputGroup>

              {
                user.phoneNumber && <InputGroup _focus={'none'} spacing='4' >
                  <InputLeftElement pointerEvents={'none'}>
                    <MdOutlinePhone size='18' />
                  </InputLeftElement>
                  <Input isReadOnly type='text' placeholder='9876543210' _focusVisible={{ outline: "none" }} value={user.phoneNumber} fontSize={'sm'} />
                </InputGroup>
              }

              <InputGroup _focus={'none'} spacing='4' >
                <InputLeftElement pointerEvents={'none'}>
                  <CgCalendarDates size='18' />
                </InputLeftElement>
                <Input isReadOnly type='text' placeholder='9876543210' _focusVisible={{ outline: "none" }} value={`${new Date(user.createdAt).toISOString().split('T')[0]}`} fontSize={'sm'} />
              </InputGroup>


              {
                user.about ? <BioEditor readOnly={true} value={user.about} /> : ''
              }


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
      </TransitionWrapper>
    </>
  )
}

export default Profile;

export function ChangeProfilePhoto({ isOpen, onClose, changeImageSubmitHandler, AvatarType='round', ModalTitle='Change Profile Picture', type="image"}) {
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
      <ModalContent width={['300px', '500px', '500px', '500px']}>
        <ModalHeader ><Text textAlign={'center'} fontSize={'md'}>{ModalTitle}</Text></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container maxWidth={'container.sm'} >
            <form onSubmit={(e) => changeImageSubmitHandler(e, image, onClose)} >
              <VStack spacing={'8'}>
                {
                  AvatarType === 'round' ?
                imagePrev && <Avatar src={imagePrev} boxSize={'40'} /> :
                    imagePrev && type === 'video' ? <video src={imagePrev} controls /> : <Image src={imagePrev} />
                }
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