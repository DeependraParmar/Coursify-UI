import { Box, Button, HStack, Heading, Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BsGlobe2 } from 'react-icons/bs';
import { FaSave } from 'react-icons/fa';
import { MdCancel, MdOutlinePhone } from 'react-icons/md';
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingComponent from '../../components/Loading.jsx';
import MainWrapper from '../../components/MainWrapper';
import TransitionWrapper from '../../components/Transition.jsx';
import { updateProfile } from '../../redux/actions/profile.js';
import { getMyProfile } from '../../redux/actions/user.js';

const EditProfile = () => {
      const { user } = useSelector(state => state.user);

      const [name, setName] = useState(user && user.name);
      const [email, setEmail] = useState(user && user.email);
      const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
      const [about, setAbout] = useState(user && user.about);
      const [linkedin, setLinkedin] = useState(user && user.linkedin);
      const [twitter, setTwitter] = useState(user && user.twitter);
      const [github, setGithub] = useState(user && user.github);
      const [facebook, setFacebook] = useState(user && user.facebook);
      const [website, setWebsite] = useState(user && user.website);
      const [youtube, setYoutube] = useState(user && user.youtube);

      const navigate = useNavigate();
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(getMyProfile());
      }, [dispatch]);

      const {loading, message, error} = useSelector(state => state.profile);

      const modules = {
            toolbar: [
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                  [{ 'indent': '-1' }, { 'indent': '+1' }],
                  [{ 'direction': 'rtl' }],   
            ],


      };
      const formats = [
            'bold',
            'italic',
            'underline',
            'strike',
            'list',
            'bullet',
            'indent',
      ];

      const handleQuillChange = (value) => {
            setAbout(value);
      }

      const cancelHandler = () => {
            navigate('/profile');
      }

      useEffect(() => {
            if (error) {
                  toast.error(error);
                  dispatch({ type: "clearError" });
            }
            if (message) {
                  toast.success(message);
                  dispatch({ type: "clearMessage" });
            }
      }, [dispatch, error, message]);

      useEffect(() => {
            window.scrollTo(0,0,'smooth');
      }, []);

      const submitHandler = async(e) => {
            e.preventDefault();
            await dispatch(updateProfile(name, email, phoneNumber, about, linkedin, twitter, github, facebook, website, youtube));
            dispatch(getMyProfile());
      }

      return (
            <>
                  <TransitionWrapper>
                        {
                              loading && <LoadingComponent />
                        }
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

                                    <Box width={'full'} borderRadius={'8px'} height={'150px'} border={'1px solid #e2e8f0'}>
                                          <ReactQuill
                                                value={about}
                                                onChange={handleQuillChange}
                                                placeholder='Tell us about yourself (include your skills, experience, etc.)'
                                                modules={modules}
                                                formats={formats}
                                                bounds={'#root'}
                                                theme="snow"
                                                className='quill'
                                                style={{ height: '70%' }}
                                          />
                                    </Box>

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
                                          <Button isLoading={loading} onClick={e => submitHandler(e)} fontSize={'sm'} size={['md', 'md', 'md', 'md']} gap={'2'} colorScheme='purple'>Save <FaSave /></Button>
                                          <Button onClick={cancelHandler} fontSize={'sm'} size={['md', 'md', 'md', 'md']} gap={'2'}>Cancel <MdCancel /></Button>
                                    </HStack>
                              </VStack>
                        </MainWrapper>
                  </TransitionWrapper>
            </>
      )
}

export default EditProfile;