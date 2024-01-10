import { Box, Button, Drawer, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, TabIndicator, Text, VStack, calc, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import "../../styles/App.scss";
import { Avatar, AvatarGroup } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineUser, AiOutlineEdit, AiOutlineMail, AiOutlineIdcard, AiFillGithub, AiOutlineLock, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsBodyText, BsBook, BsDoorOpen, BsPhone } from 'react-icons/bs';
import { FaBlog, FaBookOpen, FaChalkboardTeacher, FaFacebook, FaHome, FaQuestionCircle } from 'react-icons/fa';
import { BiLogOut, BiLogIn, BiShowAlt, BiHide } from 'react-icons/bi';
import { PiUsersThree } from 'react-icons/pi';
import { RiLockPasswordLine, RiMenuFill } from 'react-icons/ri';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';
import { DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import { headerLinks } from '../../../data';
import { GrBlog, GrClose } from "react-icons/gr";
import {CiCircleQuestion, CiPhone} from 'react-icons/ci'
import { IoIosInformationCircleOutline,  } from 'react-icons/io'
import { IoBookOutline, IoHomeOutline } from "react-icons/io5"

const Header = () => {
  const isAuthenticated = true;
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
  const { isOpen: isForgotOpen, onOpen: onForgotOpen, onClose: onForgotClose } = useDisclosure();
  const { isOpen: isOtpOpen, onOpen: onOtpOpen, onClose: onOtpClose } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show);

  const handleForgotPasswordModal = () => {
    onLoginClose();
    onForgotOpen();
  }
  const handleOTPModal = () => {
    onForgotClose();
    onOtpOpen();
  }

  // automatically triggering login page after 20 seconds
  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        onLoginOpen();
      }, 20000);
    }
  }, []);

  return (
    <>
      <Box boxShadow={'sm'} py={'2'} px={'6'} display={['flex']} alignItems={['center']} justifyContent={['space-between']} zIndex={1000} position={'fixed'} width={'full'} bg={'white'} top={0} >
        {/* box for logo  */}
        <Link to={'/'}>
          <Box display={['flex']} alignItems={'center'} justifyContent={'center'} >
            <Image width={'12'} src={logo} dropShadow={'0px 0px 10px #f9c307'} />
            <Text fontWeight={'bold'} fontFamily={"Young Serif"} color={'#5000bb'} >Coursify</Text>
          </Box>
        </Link>

        {/* box for navigation links  */}
        {/* accessing color from colors.scss */}
        <Box display={['none','none','flex','flex']} gap={['1', '2', '3', '4']} >
          {
            headerLinks.map((link, index) => {
              return <NavButtonComponent key={index} name={link.name} route={link.route} />
            })
          }
        </Box>


        {/* box for navigation buttons and profile avatar  */}
        <Box display={'flex'} gap={'4'}>
          {
            isAuthenticated ?
              <>
                <Box display={['none','none','flex','flex']} alignItems={'center'} justifyContent={'center'} gap={'4'}>
                  <Button gap={'2'}><AiOutlineSearch /><Text fontSize={'sm'} fontWeight={'medium'}>Search</Text></Button>

                  <Menu>
                    <MenuButton>
                      <AvatarGroup spacing='1rem'>
                        <Avatar src='https://avatars.githubusercontent.com/u/104254575?v=4' bg='#5000bb' color={'white'} name='Deependra Parmar' />
                      </AvatarGroup>
                    </MenuButton>
                    <MenuList>
                      <MenuGroup>
                        <Box display={'flex'} gap={'4'} p={'2'}>
                          <Avatar src='https://avatars.githubusercontent.com/u/104254575?v=4' bg='#5000bb' color={'white'} name='Deependra Parmar' />
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

                <Box display={['block', 'block', 'none', 'none']}>
                  <Button onClick={onDrawerOpen} colorScheme='purple' variant={'solid'}><RiMenuFill /></Button>
                </Box>
              </>
              :
              <>
                <Button onClick={onLoginOpen} variant={'solid'} colorScheme={'purple'} color={'white'} _hover={{ bg: '#240055' }} fontSize={['xs', 'xs', 'sm', 'sm']} size={['sm', 'sm', 'md', 'md']} gap={'2'}><BiLogIn /><Text>Login</Text></Button>
                <Button gap='2' fontSize={['xs', 'xs', 'sm', 'sm']} size={['sm', 'sm', 'md', 'md']}><AiOutlineSearch />Search</Button>

              </>
          }
        </Box>
      </Box>

      <Modal blockScrollOnMount={true} isOpen={isLoginOpen} onClose={onLoginClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text color={'purple.600'}>Join <span style={{ fontFamily: "Young Serif", color: "goldenrod" }}>Coursify</span> to Explore</Text>
            <Text fontSize={'xs'} fontWeight={'normal'}>Learn What Matters with rich collection of courses.</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted colorScheme='purple' size='md' variant='enclosed'>
              <TabList>
                <Tab gap={'1'}><BsDoorOpen /><Text>Register</Text></Tab>
                <Tab gap={'1'}><BiLogIn /><Text>Login</Text></Tab>
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
                      <InputGroup size={'md'}>
                        <InputLeftElement pointerEvents='none'>
                          <AiOutlineIdcard color='gray.300' />
                        </InputLeftElement>
                        <Input required={true} type='text' placeholder='Name' focusBorderColor='#5000bb'
                          fontSize={'sm'} />
                      </InputGroup>

                      <InputGroup size={'md'}>
                        <InputLeftElement pointerEvents='none'>
                          <AiOutlineMail color='gray.300' />
                        </InputLeftElement>
                        <Input required={true} type='email' placeholder='Email' focusBorderColor='#5000bb'
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
                          required={true}
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
                    </Stack>
                  </form>
                </TabPanel>
                <TabPanel>
                  <form action="">
                    <Stack spacing={3}>
                      <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                          <AiOutlineMail />
                        </InputLeftElement>
                        <Input required={true} type='email' placeholder='Email' focusBorderColor='#5000bb'
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
                          required={true}
                        />
                        <InputRightElement width='4.5rem'>
                          <Button variant={'unstyled'} size='sm' onClick={handleClick}>
                            {show ? <BiHide /> : <BiShowAlt />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>

                      <Button width={'full'} type='submit' colorScheme='purple' variant='solid' size='md' fontSize={'sm'}>Login</Button>
                      <Text textAlign={'center'} fontSize={'xs'} cursor={'pointer'} fontWeight={'medium'} color='#5000bb' onClick={() => handleForgotPasswordModal()} >Forgot Password?</Text>
                    </Stack>
                  </form>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* modal for forgot password  */}
      <Modal blockScrollOnMount={true} isOpen={isForgotOpen} onClose={onForgotClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text color={'purple.600'}>Forgot Password</Text>
            <Text fontSize={'xs'} fontWeight={'normal'}>Provide your account's email address to get a Password Reset & Verification Link</Text>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <form action="">
              <Stack spacing={'3'}>
                <InputGroup size={'md'}>
                  <InputLeftElement pointerEvents='none'>
                    <AiOutlineMail color='gray.300' />
                  </InputLeftElement>
                  <Input required={true} type='email' placeholder='Email' focusBorderColor='#5000bb'
                    fontSize={'sm'} />
                </InputGroup>
                <Button width={'full'} type='submit' colorScheme='purple' variant='solid' size='md' fontSize={'sm'}>Get Verification Link</Button>
                <Text fontSize={'xs'} fontWeight={'normal'} textAlign={'center'} lineHeight={'0'}>or</Text>
                <Link><Button width={'full'} type='submit' variant='solid' size='md' gap={'2'} fontSize={'sm'}><Text onClick={(e) => handleOTPModal()} fontWeight={'medium'}>Verify using OTP</Text></Button></Link>
              </Stack>
            </form>
          </ModalBody>

        </ModalContent>
      </Modal>

      {/* modal for otp verification  */}
      <Modal blockScrollOnMount={true} isOpen={isOtpOpen} onClose={onOtpClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text color={'purple.600'}>OTP Verification</Text>
            <Text fontSize={'xs'} fontWeight={'normal'}>Provide the OTP sent to your phone number</Text>
            <ModalCloseButton />

          </ModalHeader>
          <ModalBody>
            <form action="">
              <Stack spacing={'3'}>
                <InputGroup size={'md'}>
                  <InputLeftElement pointerEvents='none'>
                    <BsPhone color='gray.300' />
                  </InputLeftElement>
                  <Input required={true} type='number' placeholder='Phone Number' focusBorderColor='#5000bb'

                    fontSize={'sm'} />
                </InputGroup>
                <InputGroup size={'md'}>
                  <InputLeftElement pointerEvents='none'>
                    <AiOutlineLock color='gray.300' />
                  </InputLeftElement>
                  <Input required={true} type='number' placeholder='OTP' focusBorderColor='#5000bb'

                    fontSize={'sm'} />
                </InputGroup>
                <Box display={'flex'} gap={'2'}>
                  <Button type='submit' colorScheme='purple' variant='outline' size='md' fontSize={'sm'}>Get OTP</Button>
                  <Button type='submit' colorScheme='purple' variant='solid' size='md' fontSize={'sm'}>Verify OTP</Button>
                </Box>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Drawer for the small screen  */}
      <Drawer placement="left" isOpen={isDrawerOpen} onClose={onDrawerClose}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'2px'} textTransform={'uppercase'}>
            <Link to={'/'}>
              <Box display={['flex']} alignItems={'center'} justifyContent={'flex-start'} >
                <Image width={'10'} src={logo} dropShadow={'0px 0px 10px #f9c307'} />
                <Text fontWeight={'bold'} fontFamily={"Young Serif"} color={'#5000bb'} fontSize={'md'} display={'relative'} bottom={'-4'}>Coursify</Text>
              </Box>
            </Link>
            <Button colorScheme='gray' size={'sm'} position={'absolute'} right={'5'} top={'4'} onClick={onDrawerClose} >
              <GrClose />
            </Button>
          </DrawerHeader>

          <DrawerBody>
            <Menu >
              <MenuGroup>
                <Link to={'/profile'} onClick={onDrawerClose}>
                  <Box display={'flex'} gap={'4'} p={'2'}>
                    <Avatar src='https://avatars.githubusercontent.com/u/104254575?v=4' bg='#5000bb' color={'white'} name='Deependra Parmar' />
                    <Box>
                      <Text fontWeight={'bold'}>Deependra Parmar</Text>
                      <Text fontSize={'xs'} >deependraparmar1@gmail.com</Text>
                    </Box>
                  </Box>
                </Link>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup>
                <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{bg: "#e2f2ff"}} gap={'2'}><IoHomeOutline /><Link className='width-full' to={'/'}> Home</Link></MenuItem>
                <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{bg: "#e2f2ff"}} gap={'2'}><IoBookOutline /><Link className='width-full' to={'/courses'}>Courses</Link></MenuItem>
                <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{bg: "#e2f2ff"}} gap={'2'}><BsBodyText /><Link className='width-full' to={'/blogs'}>Blogs</Link></MenuItem>
                <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{bg: "#e2f2ff"}} gap={'2'}><IoIosInformationCircleOutline /><Link className='width-full' to={'/about'}>About</Link></MenuItem>
                <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{bg: "#e2f2ff"}} gap={'2'}><CiPhone /><Link className='width-full' to={'/contact'}>Contact</Link></MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup>
                <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{bg: "#e2f2ff"}} gap={'2'}><AiOutlineUser /><Link className='width-full' to={'/profile'}> Profile</Link></MenuItem>
                <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{bg: "#e2f2ff"}} gap={'2'}><AiOutlineEdit /><Link className='width-full' to={'/profile/edit'}> Edit Profile</Link></MenuItem>
                <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{bg: "#e2f2ff"}} gap={'2'}><BsBook /><Link className='width-full' to={'/mycourses'}>My Courses</Link></MenuItem>
                <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{bg: "#e2f2ff"}} gap={'2'}><PiUsersThree /><Link className='width-full' to={'/profile/public'}>Public Profile</Link></MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup>
                <MenuItem fontSize={'sm'} onClick={onDrawerClose}  _hover={{bg:  "#e2f2ff"}} gap={'2'}><FaChalkboardTeacher /><Link className='width-full' to={'/instructor/register'}>Teach on Coursify</Link></MenuItem>
                <MenuItem fontSize={'sm'} onClick={onDrawerClose}  _hover={{bg: "#e2f2ff"}} gap={'2'}><AiOutlineQuestionCircle /><Link className='width-full' to={'/faq'}>FAQ</Link></MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup>
                <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{bg: "#e2f2ff"}} gap={'2'}><BiLogOut /><Link className='width-full' to={'/logout'}>Logout</Link></MenuItem>
              </MenuGroup>
            </Menu>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

function NavButtonComponent({ name, route, className }) {
  return <Link className='navLinks width-full' to={route}>{name}</Link>
}

export default Header;