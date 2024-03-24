import { Avatar, AvatarGroup, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Image, Input, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalOverlay, Text, VStack, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiOutlineEdit, AiOutlineQuestionCircle, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { BiLogIn, BiLogOut, BiPlus } from 'react-icons/bi';
import { BsBodyText, BsBook } from 'react-icons/bs';
import { CiPhone } from 'react-icons/ci';
import { FaChalkboardTeacher, FaQuestionCircle } from 'react-icons/fa';
import { GrClose } from "react-icons/gr";
import { IoIosInformationCircleOutline, } from 'react-icons/io';
import { IoBookOutline, IoHomeOutline } from "react-icons/io5";
import { MdAdminPanelSettings, MdOutlineLockReset, MdOutlinePassword } from 'react-icons/md';
import { PiUsersThree } from 'react-icons/pi';
import { RiMenuFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { headerLinks } from '../../../data';
import logo from "../../assets/images/logo.png";
import CourseCard from '../../components/CourseCard';
import { getAllCourses } from '../../redux/actions/course';
import { logout } from '../../redux/actions/user';
import "../../styles/App.scss";

const Header = ({ isAuthenticated = false, user }) => {

  const isVerifiedInstructor = user && user.isVerifiedInstructor;
  const isVerifiedAdmin = user && user.isVerifiedAdmin;

  return (
    <>
      <Box boxShadow={'sm'} py={'2'} px={'6'} display={['flex']} alignItems={['center']} justifyContent={['space-between']} zIndex={1000} position={'fixed'} width={'full'} bg={'white'} top={0} >


        <NavLogo logo={logo} />
        <NavLinks />

        <NavProfile isAuthenticated={isAuthenticated} isVerifiedInstructor={isVerifiedInstructor} user={user} isVerifiedAdmin={isVerifiedAdmin}  />
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

const NavProfile = React.memo(({ isAuthenticated, isVerifiedInstructor, user, isVerifiedAdmin }) => {
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keyword, setKeyword] = useState("");

  const [show, setShow] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, courses } = useSelector(state => state.course);

  const navigateToLogin = () => {
    navigate("/login");
  }

  const logoutHandler = () => {
    dispatch(logout());
    onDrawerClose();
    navigate('/');
  }

  const handleKeyDown = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault(); // Prevent the default browser behavior for Ctrl + K
      onModalOpen();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  useEffect(() => {
    dispatch(getAllCourses("", keyword));
  }, [dispatch, keyword]);


  return <Box display={'flex'} gap={'4'}>
    {
      isAuthenticated ?
        <>
          <Box display={['none', 'none', 'flex', 'flex']} alignItems={'center'} justifyContent={'center'} gap={'4'}>
            <Button onClick={onModalOpen} gap={'2'}><AiOutlineSearch /><Text fontSize={'sm'} fontWeight={'medium'}>Search</Text></Button>

            <Menu>
              <MenuButton>
                <AvatarGroup spacing='1rem'>
                  <Avatar src={user.avatar.url} bg='#5000bb' color={'white'} name={user.name} />
                </AvatarGroup>
              </MenuButton>
              <MenuList>
                <MenuGroup>
                  <MenuItem>
                    <Link to={'/profile'} onClick={onDrawerClose}>
                      <Box display={'flex'} gap={'4'} p={'2'}>
                        <Avatar src={user.avatar.url} bg='#5000bb' color={'white'} name={user.name} />
                        <Box>
                          <Text fontWeight={'bold'}>{user.name}</Text>
                          <Text fontSize={'xs'} >{user.email}</Text>
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
                      <MenuItem fontSize={'sm'} gap={'2'}><FaChalkboardTeacher /><Link className='width-full' to={'/instructor/dashboard'}>Instructor Dashboard</Link></MenuItem> :
                      <MenuItem fontSize={'sm'} gap={'2'}><FaChalkboardTeacher /><Link className='width-full' to={'/register-as-instructor'}>Teach on Coursify</Link></MenuItem>
                  }
                  {
                    isVerifiedAdmin &&
                    <MenuItem fontSize={'sm'} gap={'2'}><MdAdminPanelSettings /><Link className='width-full' to={'/admin/dashboard'}>Admin Dashboard</Link></MenuItem>
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

          <HStack gap={0}>
            <Box display={['block', 'block', 'none', 'none']}>
              <Button onClick={onModalOpen} variant={'unstyled'}><AiOutlineSearch /></Button>
            </Box>
            <Box display={['block', 'block', 'none', 'none']}>
              <Button onClick={onDrawerOpen} colorScheme='purple' variant={'solid'}><RiMenuFill /></Button>
            </Box>
          </HStack>
        </>
        :
        <>
          <Button onClick={navigateToLogin} display={['none', 'none', 'block', 'block']} variant={'solid'} colorScheme={'purple'} color={'white'} _hover={{ bg: '#240055' }} fontSize={['xs', 'xs', 'sm', 'sm']} size={['sm', 'sm', 'md', 'md']} gap={'2'}><HStack><BiLogIn size={16} /><Text>Login</Text></HStack></Button>
          <Button onClick={onModalOpen} display={['none', 'none', 'block', 'block']} gap='2' fontSize={['xs', 'xs', 'sm', 'sm']} size={['sm', 'sm', 'md', 'md']}><HStack><AiOutlineSearch /><Text>Search</Text></HStack></Button>
          
          <HStack gap={0}>
            <Box display={['block', 'block', 'none', 'none']}>
              <Button onClick={onModalOpen} variant={'unstyled'}><AiOutlineSearch /></Button>
            </Box>
            <Box display={['block', 'block', 'none', 'none']}>
              <Button onClick={onDrawerOpen} colorScheme='purple' variant={'solid'}><RiMenuFill /></Button>
            </Box>
          </HStack>
        </>
    }

    {/* Modal for search  */}
    <Modal isOpen={isModalOpen} onClose={onModalClose} isCentered={false}>
      <ModalOverlay />
      <ModalContent>
        <Box p={'4'}>
          <Input onChange={(e) => setKeyword(e.target.value)} type={'text'} placeholder={'Search for courses, keywords and categories....'} focusBorderColor='#5000bb'
            fontSize={'sm'} />
        </Box>
        <ModalBody>
          {
            courses && (
              <VStack>
                {
                  courses.map((course, index) => {
                    return <CourseCard course_title={course.title} course_description={course.description} image_url={course.poster.url} price={course.price}>
                    </CourseCard>
                  }
                  )
                }
              </VStack>
            )
          }
        </ModalBody>
      </ModalContent>
    </Modal>


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
                      <Avatar src={user.avatar.url} bg='#5000bb' color={'white'} name={user.name} />
                      <Box>
                        <Text fontWeight={'bold'}>{user.name}</Text>
                        <Text fontSize={'xs'} >{user.email}</Text>
                      </Box>
                    </Box>
                  </Link>
                ) : (
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
            <MenuDivider />
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
                  {
                    isVerifiedInstructor ?
                      <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><FaChalkboardTeacher /><Link className='width-full' to={'/instructor/dashboard'}>Instructor Dashboard</Link></MenuItem>
                      :
                      <MenuItem fontSize={'sm'} onClick={onDrawerClose} _hover={{ bg: "#e2f2ff" }} gap={'2'}><FaChalkboardTeacher /><Link className='width-full' to={'/register-as-instructor'}>Teach on Coursify</Link></MenuItem>
                  }
                  {
                    isVerifiedAdmin &&
                    <MenuItem fontSize={'sm'} gap={'2'}><MdAdminPanelSettings /><Link className='width-full' to={'/admin/dashboard'}>Admin Dashboard</Link></MenuItem>
                  }
                </MenuGroup>
              ) : (
                <MenuDivider />
              )
            }
            <MenuGroup>
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
                  <Button onClick={onDrawerClose} variant={'solid'} fontSize={['xs', 'xs', 'sm', 'sm']} size={['sm', 'sm', 'md', 'md']} gap={'2'}><BiPlus /><Link to={'/register'} >SignUp</Link></Button>
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