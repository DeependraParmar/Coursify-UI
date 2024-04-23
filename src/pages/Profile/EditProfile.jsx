import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import React-Quill styles
import { Box, Button, HStack, Heading, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BsGlobe2 } from 'react-icons/bs';
import { FaEdit, FaSave } from 'react-icons/fa';
import { MdCancel, MdOutlinePhone, MdPreview } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingComponent from '../../components/Loading.jsx';
import MainWrapper from '../../components/MainWrapper';
import TransitionWrapper from '../../components/Transition.jsx';
import { updateProfile } from '../../redux/actions/profile.js';
import { getMyProfile } from '../../redux/actions/user.js';
import { sanitizedHTML } from "../../../controllers.js";

const EditProfile = () => {
      const { user } = useSelector(state => state.user);

      const [name, setName] = useState(user ? user.name : '');
      const [email, setEmail] = useState(user ? user.email : '');
      const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : '');
      const [about, setAbout] = useState(user ? user.about : '');
      const [linkedin, setLinkedin] = useState(user ? user.linkedin : '');
      const [twitter, setTwitter] = useState(user ? user.twitter : '');
      const [github, setGithub] = useState(user ? user.github : '');
      const [facebook, setFacebook] = useState(user ? user.facebook : '');
      const [website, setWebsite] = useState(user ? user.website : '');
      const [youtube, setYoutube] = useState(user ? user.youtube : '');

      const navigate = useNavigate();
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(getMyProfile());
      }, [dispatch]);

      const { loading, message, error } = useSelector(state => state.profile);

      const modules = {
            toolbar: [
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                  [{ 'indent': '-1' }, { 'indent': '+1' }],
                  [{ 'direction': 'rtl' }],
            ]
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
            window.scrollTo(0, 0, 'smooth');
      }, []);

      const submitHandler = async (e) => {
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
                                          <Input type='text' placeholder='John Doe' focusBorderColor='#8141bb' value={name} fontSize={'sm'} onChange={(e) => setName(e.target.value)} />
                                    </InputGroup>

                                    <InputGroup _focus={'none'} spacing='4' >
                                          <InputLeftElement pointerEvents={'none'}>
                                                <AiOutlineMail size='18' />
                                          </InputLeftElement>
                                          <Input type='text' placeholder='johndoe@gmail.com' focusBorderColor='#8141bb' value={email} fontSize={'sm'} onChange={(e) => setEmail(e.target.value)} />
                                    </InputGroup>

                                    <InputGroup _focus={'none'} spacing='4' >
                                          <InputLeftElement pointerEvents={'none'}>
                                                <MdOutlinePhone size='18' />
                                          </InputLeftElement>
                                          <Input type='text' placeholder='9876543210' focusBorderColor='#8141bb' value={phoneNumber} fontSize={'sm'} onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </InputGroup>

                                    <Tabs className='dropboxTab dropboxTab-height grayScrollbar' isFitted width={'full'} variant='enclosed-colored' colorScheme='purple'>
                                          <TabList width={'full'}>
                                                <Tab fontSize={'sm'} gap={2}>Editor <FaEdit /> </Tab>
                                                <Tab fontSize={'sm'} gap={2}>Preview <MdPreview /> </Tab>
                                          </TabList>
                                          <TabPanels>
                                                <TabPanel>
                                                      <Box width={'full'} height={'full'} borderRadius={'8px'}>
                                                            <ReactQuill
                                                                  value={about}
                                                                  onChange={handleQuillChange}
                                                                  placeholder='Tell us about yourself (include your skills, experience, etc.)'
                                                                  modules={modules}
                                                                  formats={formats}
                                                                  bounds={'#root'}
                                                                  theme="snow"
                                                                  className='quill'
                                                            />
                                                      </Box>
                                                </TabPanel>
                                                <TabPanel>
                                                      <Text py={4} px={8} fontSize={'sm'} dangerouslySetInnerHTML={{ __html: sanitizedHTML(about) }} ></Text>
                                                </TabPanel>
                                          </TabPanels>
                                    </Tabs>

                                    <InputGroup _focus={'none'} spacing='4' >
                                          <InputLeftElement pointerEvents={'none'}>
                                                <AiFillLinkedin size='18' />
                                          </InputLeftElement>
                                          <Input type='text' placeholder='https://linkedin.com/in/johndoe' focusBorderColor='#8141bb' value={linkedin} fontSize={'sm'} onChange={(e) => setLinkedin(e.target.value)} />
                                    </InputGroup>
                                    <InputGroup _focus={'none'} spacing='4' >
                                          <InputLeftElement pointerEvents={'none'}>
                                                <AiFillTwitterCircle size='18' />
                                          </InputLeftElement>
                                          <Input type='text' placeholder='https://twitter.com/johndoe' focusBorderColor='#8141bb' value={twitter} fontSize={'sm'} onChange={(e) => setTwitter(e.target.value)} />
                                    </InputGroup>
                                    <InputGroup _focus={'none'} spacing='4' >
                                          <InputLeftElement pointerEvents={'none'}>
                                                <AiFillGithub size='18' />
                                          </InputLeftElement>
                                          <Input type='text' placeholder='https://gitub.com/in/johndoe' focusBorderColor='#8141bb' value={github} fontSize={'sm'} onChange={(e) => setGithub(e.target.value)} />
                                    </InputGroup>
                                    <InputGroup _focus={'none'} spacing='4' >
                                          <InputLeftElement pointerEvents={'none'}>
                                                <AiFillFacebook size='18' />
                                          </InputLeftElement>
                                          <Input type='text' placeholder='https://facebook.com/johndoe' focusBorderColor='#8141bb' value={facebook} fontSize={'sm'} onChange={(e) => setFacebook(e.target.value)} />
                                    </InputGroup>
                                    <InputGroup _focus={'none'} spacing='4' >
                                          <InputLeftElement pointerEvents={'none'}>
                                                <BsGlobe2 size='18' />
                                          </InputLeftElement>
                                          <Input type='text' placeholder='https://johndoe.com' focusBorderColor='#8141bb' value={website} fontSize={'sm'} onChange={(e) => setWebsite(e.target.value)} />
                                    </InputGroup>
                                    <InputGroup _focus={'none'} spacing='4' >
                                          <InputLeftElement pointerEvents={'none'}>
                                                <AiFillYoutube size='18' />
                                          </InputLeftElement>
                                          <Input type='text' placeholder='https://youtube.com/@johndoe' focusBorderColor='#8141bb' value={youtube} fontSize={'sm'} onChange={(e) => setYoutube(e.target.value)} />
                                    </InputGroup>


                                    <HStack width={'full'} justifyContent={'flex-end'}>
                                          <Button isLoading={loading} onClick={submitHandler} fontSize={'sm'} size={['md', 'md', 'md', 'md']} gap={'2'} colorScheme='purple'>Save <FaSave /></Button>
                                          <Button onClick={cancelHandler} fontSize={'sm'} size={['md', 'md', 'md', 'md']} gap={'2'}>Cancel <MdCancel /></Button>
                                    </HStack>
                              </VStack>
                        </MainWrapper>
                  </TransitionWrapper>
            </>
      );
}

export default EditProfile;
