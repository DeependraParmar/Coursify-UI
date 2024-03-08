import { Avatar, AvatarGroup, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiOutlineEdit, AiOutlineIdcard, AiOutlineLock, AiOutlineMail, AiOutlineQuestionCircle, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { BiHide, BiLogIn, BiLogOut, BiPlus, BiShowAlt } from 'react-icons/bi';
import { BsBodyText, BsBook, BsDoorOpen, BsPhone } from 'react-icons/bs';
import { CiPhone } from 'react-icons/ci';
import { FaChalkboardTeacher, FaFacebook, FaQuestionCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrClose } from "react-icons/gr";
import { IoIosInformationCircleOutline, } from 'react-icons/io';
import { IoBookOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineLockReset, MdOutlinePassword } from 'react-icons/md';
import { PiUsersThree } from 'react-icons/pi';
import { RiLockPasswordLine, RiMenuFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { headerLinks } from '../../../data';
import logo from "../../assets/images/logo.png";
import { login, logout } from '../../redux/actions/user';
import "../../styles/App.scss";

const Header = ({ isAuthenticated = false, user }) => {

  const isVerifiedInstructor = false;


  return (
    <>
      <Box boxShadow={'sm'} py={'2'} px={'6'} display={['flex']} alignItems={['center']} justifyContent={['space-between']} zIndex={1000} position={'fixed'} width={'full'} bg={'white'} top={0} >


        <NavLogo logo={logo} />
        <NavLinks />

        <NavProfile isAuthenticated={isAuthenticated} isVerifiedInstructor={isVerifiedInstructor} user={user} />
      </Box>
    </>
  )
}


function NavButtonComponent({ name, route, className }) {
  return <Link className='navLinks width-full' to={route}>{name}</Link>
}

const NavLogo = React.memo(({ logo }) => {
  return <Link to={'/'}>
    <Box display={['flex']} alignItems={'center'} justifyContent={'center'} >
      <Image width={'12'} src={logo} dropShadow={'0px 0px 10px #f9c307'} />
      <Text fontWeight={'bold'} fontFamily={"Young Serif"} color={'#5000bb'} >Coursify</Text>
    </Box>
  </Link>
});


const NavLinks = React.memo(() => {
  return <Box display={['none', 'none', 'flex', 'flex']} gap={['1', '2', '3', '4']} >
    {
      headerLinks.map((link, index) => {
        return <NavButtonComponent key={index} name={link.name} route={link.route} />
      })
    }
  </Box>
});

const NavProfile = React.memo(({ isAuthenticated, isVerifiedInstructor, user }) => {
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
  const { isOpen: isForgotOpen, onOpen: onForgotOpen, onClose: onForgotClose } = useDisclosure();
  const { isOpen: isOtpOpen, onOpen: onOtpOpen, onClose: onOtpClose } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();

  useEffect(() => {
    if (isAuthenticated) {
      onLoginClose();
    }
  }, [isAuthenticated]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false)

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    onDrawerClose();
  }


  return <Box display={'flex'} gap={'4'}>
    {
      isAuthenticated ?
        <>
          <Box display={['none', 'none', 'flex', 'flex']} alignItems={'center'} justifyContent={'center'} gap={'4'}>
            <Button gap={'2'}><AiOutlineSearch /><Text fontSize={'sm'} fontWeight={'medium'}>Search</Text></Button>

            <Menu>
              <MenuButton>
                <AvatarGroup spacing='1rem'>
                  <Avatar src={user.avatar.url} bg='#5000bb' color={'white'} name='Deependra Parmar' />
                </AvatarGroup>
              </MenuButton>
              <MenuList>
                <MenuGroup>
                  <MenuItem>
                    <Link to={'/profile'} onClick={onDrawerClose}>
                      <Box display={'flex'} gap={'4'} p={'2'}>
                        <Avatar src={user.avatar.url} bg='#5000bb' color={'white'} name='Deependra Parmar' />
                        <Box>
                          <Text fontWeight={'bold'}>Deependra Parmar</Text>
                          <Text fontSize={'xs'} >deependraparmar1@gmail.com</Text>
                        </Box>
                      </Box>
                    </Link>
                  </MenuItem>
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
                  <MenuItem fontSize={'sm'} gap={'2'}><MdOutlinePassword /><Link className='width-full' to={'/forgot-password'}>Forgot Password</Link></MenuItem>
                  <MenuItem fontSize={'sm'} gap={'2'}><MdOutlineLockReset /><Link className='width-full' to={'/reset-password'}>Reset Password</Link></MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                  {
                    isVerifiedInstructor ?
                      <MenuItem fontSize={'sm'} gap={'2'}><FaChalkboardTeacher /><Link className='width-full' to={'/instructor/dashboard'}>Instructor View</Link></MenuItem> :
                      <MenuItem fontSize={'sm'} gap={'2'}><FaChalkboardTeacher /><Link className='width-full' to={'/instructor/register'}>Teach on Coursify</Link></MenuItem>
                  }
                  <MenuItem fontSize={'sm'} gap={'2'}><FaQuestionCircle /><Link className='width-full' to={'/faq'}>FAQ</Link></MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                  <MenuItem onClick={logoutHandler} fontSize={'sm'} gap={'2'}><BiLogOut />Logout</MenuItem>
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
          <Button display={['none', 'none', 'block', 'block']} onClick={onLoginOpen} variant={'solid'} colorScheme={'purple'} color={'white'} _hover={{ bg: '#240055' }} fontSize={['xs', 'xs', 'sm', 'sm']} size={['sm', 'sm', 'md', 'md']} gap={'2'}><BiLogIn /><Text>Login</Text></Button>
          <Button display={['none', 'none', 'block', 'block']} gap='2' fontSize={['xs', 'xs', 'sm', 'sm']} size={['sm', 'sm', 'md', 'md']}><AiOutlineSearch />Search</Button>
          <Box display={['block', 'block', 'none', 'none']}>
            <Button onClick={onDrawerOpen} colorScheme='purple' variant={'solid'}><RiMenuFill /></Button>
          </Box>
        </>
    }


    {/* Drawer for the small screen  */}
    <Drawer placement="left" isOpen={isDrawerOpen} onClose={onDrawerClose}>
      <DrawerOverlay backdropFilter={'blur(3px)'} />
      <DrawerContent>
        <DrawerHeader borderBottomWidth={'2px'}>
          <Link to={'/'} onClick={onDrawerClose}>
            <Box display={['flex']} alignItems={'center'} justifyContent={'flex-start'} >
              <Image width={'10'} src={logo} dropShadow={'0px 0px 10px #f9c307'} />
              <Text fontWeight={'bold'} fontFamily={"Young Serif"} color={'#5000bb'} fontSize={'md'} display={'relative'} bottom={'-4'}>Coursify</Text>
            </Box>
          </Link>
          <Button colorScheme='gray' size={'sm'} position={'absolute'} right={'5'} top={'4'} onClick={onDrawerClose} >
            <GrClose />
          </Button>
        </DrawerHeader>

        <DrawerBody >
          <Menu >
            <MenuGroup>
              {
                isAuthenticated ? (
                  <Link to={'/profile'} onClick={onDrawerClose}>
                    <Box display={'flex'} gap={'4'} p={'2'}>
                      <Avatar src='https://avatars.githubusercontent.com/u/104254575?v=4' bg='#5000bb' color={'white'} name='Deependra Parmar' />
                      <Box>
                        <Text fontWeight={'bold'}>Deependra Parmar</Text>
                        <Text fontSize={'xs'} >deependraparmar1@gmail.com</Text>
                      </Box>
                    </Box>
                  </Link>
                ): (
                    null
                )
              }
            </MenuGroup>
            <MenuGroup>
              <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><IoHomeOutline /><Link className='width-full' to={'/'}> Home</Link></MenuItem>
              <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><IoBookOutline /><Link className='width-full' to={'/courses'}>Courses</Link></MenuItem>
              <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><BsBodyText /><Link className='width-full' to={'/blogs'}>Blogs</Link></MenuItem>
              <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><IoIosInformationCircleOutline /><Link className='width-full' to={'/about'}>About</Link></MenuItem>
              <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><CiPhone /><Link className='width-full' to={'/contact'}>Contact</Link></MenuItem>
            </MenuGroup>
            {
              isAuthenticated ? (
                <MenuGroup>
                  <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><AiOutlineUser /><Link className='width-full' to={'/profile'}> Profile</Link></MenuItem>
                  <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><AiOutlineEdit /><Link className='width-full' to={'/profile/edit'}> Edit Profile</Link></MenuItem>
                  <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><BsBook /><Link className='width-full' to={'/mycourses'}>My Courses</Link></MenuItem>
                  <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><PiUsersThree /><Link className='width-full' to={'/profile/public'}>Public Profile</Link></MenuItem>
                  <MenuDivider />
                  <MenuItem fontSize={'sm'} gap={'2'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }}><MdOutlinePassword /><Link className='width-full' to={'/forgot-password'}>Forgot Password</Link></MenuItem>
                  <MenuItem fontSize={'sm'} gap={'2'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }}><MdOutlineLockReset /><Link className='width-full' to={'/reset-password'}>Reset Password</Link></MenuItem>
                  <MenuDivider />
                </MenuGroup>
              ) : (
                <MenuDivider />
              )
            }
            <MenuGroup>
              {
                isVerifiedInstructor ?
                  <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><FaChalkboardTeacher /><Link className='width-full' to={'/instructor/dashboard'}>Instructor View</Link></MenuItem>
                  :
                  <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><FaChalkboardTeacher /><Link className='width-full' to={'/instructor/register'}>Teach on Coursify</Link></MenuItem>
              }
              <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><AiOutlineQuestionCircle /><Link className='width-full' to={'/faq'}>FAQ</Link></MenuItem>
            </MenuGroup>
            <MenuDivider />
            {
              isAuthenticated ? (
                <MenuGroup>
                  <MenuItem fontSize={'sm'} onClick={logoutHandler} _hover={{ bg: "#e2f2ff" }} gap={'2'}><BiLogOut />Logout</MenuItem>
                </MenuGroup>
              ) : (
                <>
                  <Button onClick={onDrawerClose} variant={'solid'} colorScheme={'purple'} color={'white'} _hover={{ bg: '#240055' }} fontSize={['xs', 'xs', 'sm', 'sm']} mr={2} size={['sm', 'sm', 'md', 'md']} gap={'2'}><BiLogIn /><Link to={'/login'} >Login</Link></Button>
                  <Button onClick={onDrawerClose} variant={'solid'} fontSize={['xs', 'xs', 'sm', 'sm']} size={['sm', 'sm', 'md', 'md']} gap={'2'}><BiPlus /><Link to={'/signup'} >SignUp</Link></Button>
                </>
              )
            }
          </Menu>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </Box>
});


export default Header;