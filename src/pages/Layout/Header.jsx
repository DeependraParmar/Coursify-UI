import { Box, Button, Image, Text, calc } from '@chakra-ui/react';
import React from 'react'
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import "../../styles/App.scss";
import { Avatar, AvatarGroup } from '@chakra-ui/react'
import {Menu,MenuButton,MenuList,MenuItem,MenuGroup,MenuDivider} from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineUser, AiOutlineEdit } from 'react-icons/ai';
import {BsBook} from 'react-icons/bs';
import { FaChalkboardTeacher, FaQuestionCircle } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { PiUsersThree } from 'react-icons/pi';

const Header = () => {
  const isAuthenticated = true;
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
          <Button variant={'ghost'} fontWeight={'normal'} fontSize={'sm'} ><Link to={'/'}>Home</Link></Button>
          <Button variant={'ghost'} fontWeight={'normal'} fontSize={'sm'} ><Link to={'/courses'}>Courses</Link></Button>
          <Button variant={'ghost'} fontWeight={'normal'} fontSize={'sm'} ><Link to={'/blogs'}>Blogs</Link></Button>
          <Button variant={'ghost'} fontWeight={'normal'} fontSize={'sm'} ><Link to={'/about'}>About</Link></Button>
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
                <Button variant={'outline'} fontSize={'sm'} ><Link to={'/login'}>Login</Link></Button>
                <Button variant={'solid'} bg={'#5000bb'} color={'white'} _hover={{ bg: '#240055' }} fontSize={'sm'} ><Link to={'/register'}>Register</Link></Button>
                <Button spacing='4'><AiOutlineSearch />Search</Button>
                
              </>
          }
        </Box>
      </Box>
    </>
  )
}

export default Header;