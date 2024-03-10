import { Box, Button, HStack, Heading, Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BsGlobe2 } from 'react-icons/bs';
import { FaSave } from 'react-icons/fa';
import { MdCancel, MdOutlinePhone } from 'react-icons/md';
import BioEditor from '../../components/BioEditor';
import MainWrapper from '../../components/MainWrapper';
import TransitionWrapper from '../../components/Transition.jsx';
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile } from '../../redux/actions/user.js';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../redux/actions/profile.js';
import LoadingComponent from '../../components/Loading.jsx';
import { toast } from 'react-toastify';

const EditProfile = ({user}) => {
      const [name, setName] = React.useState(user.name);
      const [email, setEmail] = React.useState(user.email);
      const [phoneNumber, setPhoneNumber] = React.useState(user.phoneNumber);
      const [about, setAbout] = React.useState(user.about);
      const [linkedin, setLinkedin] = React.useState(user.linkedin);
      const [twitter, setTwitter] = React.useState(user.twitter);
      const [github, setGithub] = React.useState(user.github);
      const [facebook, setFacebook] = React.useState(user.facebook);
      const [website, setWebsite] = React.useState(user.website);
      const [youtube, setYoutube] = React.useState(user.youtube);

      const navigate = useNavigate();
      const dispatch = useDispatch();

      const {loading, message, error} = useSelector(state => state.profile);

      const modules = {
            toolbar: [
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
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

                                    <Box width={'full'}>
                                          <ReactQuill
                                                value={about}
                                                onChange={handleQuillChange}
                                                modules={modules}
                                                formats={formats}
                                                bounds={'#root'}
                                                theme="snow"
                                                className='quill'
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
