import React from 'react'
import MainWrapper from '../../components/MainWrapper';
import { Button, HStack, Heading, Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { MdCancel, MdOutlinePhone } from 'react-icons/md';
import DescriptionEditor from '../../components/DescriptionEditor';
import BioEditor from '../../components/BioEditor';
import { BsGlobe2 } from 'react-icons/bs';
import { user } from "../../../data.js"
import { FaSave } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoReturnUpBack } from 'react-icons/io5';

const EditProfile = () => {
      const [name, setName] = React.useState(user.name);
      const [email, setEmail] = React.useState(user.email);
      const [phoneNumber, setPhoneNumber] = React.useState(user.phoneNumber);
      const [about, setAbout] = React.useState(user.about);
      const [linkedin, setLinkedin] = React.useState(user.social_media_urls[0].linkedin);
      const [twitter, setTwitter] = React.useState(user.social_media_urls[0].twitter);
      const [github, setGithub] = React.useState(user.social_media_urls[0].github);
      const [facebook, setFacebook] = React.useState(user.social_media_urls[0].facebook);
      const [website, setWebsite] = React.useState(user.social_media_urls[0].website);
      const [youtube, setYoutube] = React.useState(user.social_media_urls[0].youtube);

      return (
            <>
                  <MainWrapper pt={'24'} pb={'16'}>
                        <VStack width={['95%', '95%', '50%', '50%']} margin={'auto'} display={'flex'} spacing={'4'}>

                              <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >Edit Your Profile</Heading>
                              <InputGroup spacing='4' >
                                    <InputLeftElement pointerEvents={'none'}>
                                          <AiOutlineUser size='18' />
                                    </InputLeftElement>
                                    <Input type='text' placeholder='John Doe' focusBorderColor='#8141bb' defaultValue={name} fontSize={'sm'} contentEditable='true' onChange={(e) => setName(e.target.value)} />
                              </InputGroup>

                              <InputGroup _focus={'none'} spacing='4' >
                                    <InputLeftElement pointerEvents={'none'}>
                                          <AiOutlineMail size='18' />
                                    </InputLeftElement>
                                    <Input type='text' placeholder='johndoe@gmail.com' focusBorderColor='#8141bb' defaultValue={email} fontSize={'sm'} contentEditable='true' onChange={(e) => setEmail(e.target.value)} />
                              </InputGroup>

                              <InputGroup _focus={'none'} spacing='4' >
                                    <InputLeftElement pointerEvents={'none'}>
                                          <MdOutlinePhone size='18' />
                                    </InputLeftElement>
                                    <Input type='text' placeholder='9876543210' focusBorderColor='#8141bb' defaultValue={phoneNumber} fontSize={'sm'} contentEditable='true' onChange={(e) => setPhoneNumber(e.target.value)} />
                              </InputGroup>

                              <BioEditor readOnly={false} value={about} />

                              <InputGroup _focus={'none'} spacing='4' >
                                    <InputLeftElement pointerEvents={'none'}>
                                          <AiFillLinkedin size='18' />
                                    </InputLeftElement>
                                    <Input type='text' placeholder='https://linkedin.com/in/johndoe' focusBorderColor='#8141bb' defaultValue={linkedin} fontSize={'sm'} contentEditable='true' onChange={(e) => setLinkedin(e.target.value)} />
                              </InputGroup>
                              <InputGroup _focus={'none'} spacing='4' >
                                    <InputLeftElement pointerEvents={'none'}>
                                          <AiFillTwitterCircle size='18' />
                                    </InputLeftElement>
                                    <Input type='text' placeholder='https://twitter.com/johndoe' focusBorderColor='#8141bb' defaultValue={twitter} fontSize={'sm'} contentEditable='true' onChange={(e) => setTwitter(e.target.value)} />
                              </InputGroup>
                              <InputGroup _focus={'none'} spacing='4' >
                                    <InputLeftElement pointerEvents={'none'}>
                                          <AiFillGithub size='18' />
                                    </InputLeftElement>
                                    <Input type='text' placeholder='https://gitub.com/in/johndoe' focusBorderColor='#8141bb' defaultValue={github} fontSize={'sm'} contentEditable='true' onChange={(e) => setGithub(e.target.value)} />
                              </InputGroup>
                              <InputGroup _focus={'none'} spacing='4' >
                                    <InputLeftElement pointerEvents={'none'}>
                                          <AiFillFacebook size='18' />
                                    </InputLeftElement>
                                    <Input type='text' placeholder='https://facebook.com/johndoe' focusBorderColor='#8141bb' defaultValue={facebook} fontSize={'sm'} contentEditable='true' onChange={(e) => setFacebook(e.target.value)} />
                              </InputGroup>
                              <InputGroup _focus={'none'} spacing='4' >
                                    <InputLeftElement pointerEvents={'none'}>
                                          <BsGlobe2 size='18' />
                                    </InputLeftElement>
                                    <Input type='text' placeholder='https://johndoe.com' focusBorderColor='#8141bb' defaultValue={website} fontSize={'sm'} contentEditable='true' onChange={(e) => setWebsite(e.target.value)} />
                              </InputGroup>
                              <InputGroup _focus={'none'} spacing='4' >
                                    <InputLeftElement pointerEvents={'none'}>
                                          <AiFillYoutube size='18' />
                                    </InputLeftElement>
                                    <Input type='text' placeholder='https://youtube.com/@johndoe' focusBorderColor='#8141bb' defaultValue={youtube} fontSize={'sm'} contentEditable onChange={(e) => setYoutube(e.target.value)} />
                              </InputGroup>


                              <HStack width={'full'} justifyContent={'flex-end'}>
                                    <Button fontSize={'sm'} size={['md', 'md', 'md', 'md']} gap={'2'} colorScheme='purple'>Save <FaSave /></Button>
                                    <Button fontSize={'sm'} size={['md', 'md', 'md', 'md']} gap={'2'}>Cancel <MdCancel /></Button>
                              </HStack>
                        </VStack>
                  </MainWrapper>
            </>
      )
}

export default EditProfile;
