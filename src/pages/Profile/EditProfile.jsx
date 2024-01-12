import React from 'react'
import MainWrapper from '../../components/MainWrapper';
import { Button, HStack, Heading, Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { MdCancel, MdOutlinePhone } from 'react-icons/md';
import DescriptionEditor from '../../components/DescriptionEditor';
import BioEditor from '../../components/BioEditor';
import { BsGlobe2 } from 'react-icons/bs';
import {user} from "../../../data.js"
import { FaSave } from 'react-icons/fa';

const EditProfile = () => {
  return (
    <>
        <MainWrapper pt={'24'} pb={'16'}>
            <VStack width={['95%','95%','50%','50%']} margin={'auto'} display={'flex'} spacing={'4'}>
                  <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >Edit Your Profile</Heading>
                <InputGroup spacing='4' >
                    <InputLeftElement pointerEvents={'none'}>
                          <AiOutlineUser size='18' />
                    </InputLeftElement>
                      <Input type='text' placeholder='John Doe' focusBorderColor='#8141bb' value={user.name} fontSize={'sm'} contentEditable='true' />
                </InputGroup>
                
                <InputGroup _focus={'none'} spacing='4' >
                    <InputLeftElement pointerEvents={'none'}>
                          <AiOutlineMail size='18' />
                    </InputLeftElement>
                      <Input type='text' placeholder='johndoe@gmail.com' focusBorderColor='#8141bb' value={user.email} fontSize={'sm'} contentEditable='true' />
                </InputGroup>
                
                <InputGroup _focus={'none'} spacing='4' >
                    <InputLeftElement pointerEvents={'none'}>
                          <MdOutlinePhone size='18' />
                    </InputLeftElement>
                      <Input type='text' placeholder='9876543210' focusBorderColor='#8141bb' value={user.phoneNumber} fontSize={'sm'} contentEditable='true' />
                </InputGroup>
                
                <BioEditor value={user.about} />
                
                <InputGroup _focus={'none'} spacing='4' >
                    <InputLeftElement pointerEvents={'none'}>
                          <AiFillLinkedin size='18' />
                    </InputLeftElement>
                      <Input type='text' placeholder='https://linkedin.com/in/johndoe' focusBorderColor='#8141bb' value={user.social_media_urls[0].linkedin} fontSize={'sm'} contentEditable='true' />
                </InputGroup>
                <InputGroup _focus={'none'} spacing='4' >
                    <InputLeftElement pointerEvents={'none'}>
                          <AiFillTwitterCircle size='18' />
                    </InputLeftElement>
                      <Input type='text' placeholder='https://twitter.com/johndoe' focusBorderColor='#8141bb' value={user.social_media_urls[0].twitter} fontSize={'sm'} contentEditable='true' />
                </InputGroup>
                <InputGroup _focus={'none'} spacing='4' >
                    <InputLeftElement pointerEvents={'none'}>
                          <AiFillGithub size='18' />
                    </InputLeftElement>
                      <Input type='text' placeholder='https://gitub.com/in/johndoe' focusBorderColor='#8141bb' value={user.social_media_urls[0].github} fontSize={'sm'} contentEditable='true' />
                </InputGroup>
                <InputGroup _focus={'none'} spacing='4' >
                    <InputLeftElement pointerEvents={'none'}>
                          <AiFillFacebook size='18' />
                    </InputLeftElement>
                      <Input type='text' placeholder='https://facebook.com/johndoe' focusBorderColor='#8141bb' value={user.social_media_urls[0].facebook} fontSize={'sm'} contentEditable='true' />
                </InputGroup>
                <InputGroup _focus={'none'} spacing='4' >
                    <InputLeftElement pointerEvents={'none'}>
                          <BsGlobe2 size='18' />
                    </InputLeftElement>
                      <Input type='text' placeholder='https://johndoe.com' focusBorderColor='#8141bb' value={user.social_media_urls[0].website} fontSize={'sm'} contentEditable='true' />
                </InputGroup>
                <InputGroup _focus={'none'} spacing='4' >
                    <InputLeftElement pointerEvents={'none'}>
                          <AiFillYoutube size='18' />
                    </InputLeftElement>
                      <Input type='text' placeholder='https://youtube.com/@johndoe' focusBorderColor='#8141bb' value={user.social_media_urls[0].youtube} fontSize={'sm'} contentEditable />
                </InputGroup>
                
                
                <HStack width={'full'} justifyContent={'flex-end'}>
                    <Button fontSize={'sm'} size={['sm','sm','md','md']} gap={'2'} colorScheme='purple'>Save <FaSave /></Button>
                    <Button fontSize={'sm'} size={['sm','sm','md','md']} gap={'2'}>Cancel <MdCancel /></Button>
                </HStack>
            </VStack>
        </MainWrapper> 
    </>
  )
}

export default EditProfile;
