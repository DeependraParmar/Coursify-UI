import { Box, Button, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, TabIndicator, Text, calc, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import "../../styles/App.scss";
import { Avatar, AvatarGroup } from '@chakra-ui/react'
import {Menu,MenuButton,MenuList,MenuItem,MenuGroup,MenuDivider} from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineUser, AiOutlineEdit, AiOutlineMail, AiOutlineIdcard, AiFillGithub } from 'react-icons/ai';
import { BsBook, BsDoorOpen } from 'react-icons/bs';
import { FaChalkboardTeacher, FaFacebook, FaQuestionCircle } from 'react-icons/fa';
import { BiLogOut,BiLogIn, BiShowAlt, BiHide } from 'react-icons/bi';
import { PiUsersThree } from 'react-icons/pi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';

const Header = () => {
  const isAuthenticated = true;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box boxShadow={'xs'} py={'2'} px={'6'} display={['flex']} alignItems={['center']} justifyContent={['space-between']}>
        {/* box for logo  */}
        <Link to={'/'}>
          <Box display={['flex']} alignItems={'center'} justifyContent={'center'} >
            <Image width={'12'} src={logo} dropShadow={'0px 0px 10px #f9c307'} />
            <Text fontWeight={'bold'} fontFamily={"Young Serif"} color={'#5000bb'} >Coursify</Text>
          </Box>
        </Link>

        {/* box for navigation links  */}
        {/* accessing color from colors.scss */}
        <Box display={'flex'} gap={'4'} >
          <Link className='width-full' to={'/'}><Button variant={'ghost'} fontWeight={'normal'} fontSize={'sm'} >Home</Button></Link>
          <Link className='width-full' to={'/courses'}><Button variant={'ghost'} fontWeight={'normal'} fontSize={'sm'} >Courses</Button></Link>
          <Link className='width-full' to={'/blogs'}><Button variant={'ghost'} fontWeight={'normal'} fontSize={'sm'} >Blogs</Button></Link>
          <Link className='width-full' to={'/about'}><Button variant={'ghost'} fontWeight={'normal'} fontSize={'sm'} >About</Button></Link>
        </Box>


        {/* box for navigation buttons and profile avatar  */}
        <Box display={'flex'} gap={'4'}>
          {
            isAuthenticated ?
              <>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'4'}>
                  <Button gap={'2'}><AiOutlineSearch /><Text fontSize={'sm'} fontWeight={'medium'}>Search Anything</Text></Button>

                  <Menu>
                    <MenuButton>
                      <AvatarGroup spacing='1rem'>
                        <Avatar bg='#5000bb' color={'white'} name='Deependra Parmar' />
                      </AvatarGroup>
                    </MenuButton>
                    <MenuList>
                      <MenuGroup>
                        <Box display={'flex'} gap={'4'} p={'2'}>
                            <Avatar bg='#5000bb' color={'white'} name='Deependra Parmar' />
                            <Box>
                                <Text fontWeight={'bold'}>Deependra Parmar</Text>
                                <Text fontSize={'xs'} >deependraparmar1@gmail.com</Text>
                            </Box>
                            </Box>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup>
                        <MenuItem fontSize={'sm'} gap={'2'}><AiOutlineUser /><Link className='width-full' to={'/profile'}> Profile</Link></MenuItem>
                        <MenuItem fontSize={'sm'} gap={'2'}><AiOutlineEdit /><Link className='width-full' to={'/profile/edit'}> Edit Profile</Link></MenuItem>
                        <MenuItem fontSize={'sm'} gap={'2'}><BsBook /><Link className='width-full' to={'/mycourses'}>My Courses</Link></MenuItem>
                        <MenuItem fontSize={'sm'} gap={'2'}><PiUsersThree /><Link className='width-full' to={'/profile/public'}>Public Profile</Link></MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup>
                        <MenuItem fontSize={'sm'} gap={'2'}><FaChalkboardTeacher /><Link className='width-full' to={'/instructor/register'}>Teach on Coursify</Link></MenuItem>
                        <MenuItem fontSize={'sm'} gap={'2'}><FaQuestionCircle /><Link className='width-full' to={'/faq'}>FAQ</Link></MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup>
                        <MenuItem fontSize={'sm'} gap={'2'}><BiLogOut /><Link className='width-full' to={'/logout'}>Logout</Link></MenuItem>
                      </MenuGroup>
                    </MenuList>
                  </Menu>
                </Box>

              </>
              :
              <>
                <Button onClick={onOpen} variant={'solid'} bg={'#5000bb'} color={'white'} _hover={{ bg: '#240055' }} fontSize={'sm'} gap={'2'}><BiLogIn /><Text>Login</Text></Button>
                <Button gap='2' fontSize={'sm'}><AiOutlineSearch />Search</Button>
                
              </>
          }
        </Box>
      </Box>

      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text color={'purple.600'}>Join <span style={{fontFamily: "Young Serif", color: "goldenrod"}}>Coursify</span> to Explore</Text>
            <Text fontSize={'xs'} fontWeight={'normal'}>Learn What Matters with rich collection of courses.</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted colorScheme='purple' size='md' variant='enclosed'>
              <TabList>
                <Tab gap={'1'}><BiLogIn /><Text>Login</Text></Tab>
                <Tab gap={'1'}><BsDoorOpen /><Text>Register</Text></Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="0.1rem"
                bg="#5000bb"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel>
                  <form action="">
                    <Stack spacing={3}>
                      <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                          <AiOutlineMail />
                        </InputLeftElement>
                        <Input type='email' placeholder='Email' focusBorderColor='#5000bb'
                        fontSize={'sm'} />
                      </InputGroup>

                      <InputGroup size='md'>
                        <InputLeftElement>
                          <RiLockPasswordLine />
                        </InputLeftElement>
                        <Input
                          pr='4.5rem'
                          type={show ? 'text' : 'password'}
                          placeholder='Password'
                          focusBorderColor='#5000bb'
                          fontSize={'sm'}
                        />
                        <InputRightElement width='4.5rem'>
                          <Button variant={'unstyled'} size='sm' onClick={handleClick}>
                            {show ? <BiHide /> : <BiShowAlt />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>

                        <Button width={'full'} type='submit' colorScheme='purple' variant='solid' size='md' fontSize={'sm'}>Login</Button>
                        <Text textAlign={'center'} fontSize={'xs'} fontWeight={'medium'} color='#5000bb' ><Link to={'/forgotpassword'}>Forgot Password?</Link></Text>
                        <Text textAlign={'center'} fontSize={'xs'} fontWeight={'medium'} >New User? Register </Text>

                    </Stack>
                  </form>
                </TabPanel>
                <TabPanel>
                  <form action="">
                    <Stack spacing={3}>
                      <InputGroup size={'md'}>
                        <InputLeftElement pointerEvents='none'>
                          <AiOutlineIdcard color='gray.300' />
                        </InputLeftElement>
                        <Input type='text' placeholder='Name' focusBorderColor='#5000bb'
                          fontSize={'sm'} />
                      </InputGroup>

                      <InputGroup size={'md'}>
                        <InputLeftElement pointerEvents='none'>
                          <AiOutlineMail color='gray.300' />
                        </InputLeftElement>
                        <Input type='email' placeholder='Email' focusBorderColor='#5000bb'
                          fontSize={'sm'} />
                      </InputGroup>

                      <InputGroup size='md'>
                        <InputLeftElement>
                          <RiLockPasswordLine />
                        </InputLeftElement>
                        <Input
                          pr='4.5rem'
                          type={show ? 'text' : 'password'}
                          placeholder='Password'
                          focusBorderColor='#5000bb'
                          fontSize={'sm'}
                        />
                        <InputRightElement width='4.5rem'>
                          <Button variant={'unstyled'} size='sm' onClick={handleClick}>
                            {show ? <BiHide /> : <BiShowAlt />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>

                      <Button width={'full'} type='submit' colorScheme='purple' variant='solid' size='md' fontSize={'sm'}>Register</Button>
                      <Text fontSize={'xs'} fontWeight={'normal'} textAlign={'center'} lineHeight={'0'}>or</Text>
                      <Link><Button width={'full'} type='submit' variant='solid' size='md' gap={'2'} fontSize={'sm'}><FcGoogle size={'20'} /><Text fontWeight={'medium'}>Continue with Google</Text></Button></Link>
                      <Link><Button width={'full'} type='submit' variant='solid' size='md' gap={'2'} fontSize={'sm'}><FaFacebook color={'#046ee4'} size={'20'} /><Text fontWeight={'medium'}>Continue with Facebook</Text></Button></Link>
                      <Link><Button width={'full'} type='submit' variant='solid' size='md' gap={'2'} fontSize={'sm'}><AiFillGithub color={'#282828'} size={'20'} /><Text fontWeight={'medium'}>Continue with Github</Text></Button></Link>
                      <Text textAlign={'center'} fontSize={'xs'} fontWeight={'medium'} >Already a User? Login Now</Text>

                    </Stack>
                  </form>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Header;