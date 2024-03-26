import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack, Heading, Select, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import Table from "../../components/Table"
import TransitionWrapper from '../../components/Transition'

const AdminUsers = () => {
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg',
        },
        {
            id: 4,
            name: 'Bob Brown',
            email: 'bob@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
        {
            id: 5,
            name: 'Emily Davis',
            email: 'emily@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/women/5.jpg',
        },
        {
            id: 6,
            name: 'Michael Wilson',
            email: 'michael@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/men/6.jpg',
        },
        {
            id: 7,
            name: 'Sophia Martinez',
            email: 'sophia@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/women/7.jpg',
        },
        {
            id: 8,
            name: 'Daniel Anderson',
            email: 'daniel@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/men/8.jpg',
        },
        {
            id: 9,
            name: 'Olivia Taylor',
            email: 'olivia@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/women/9.jpg',
        },
        {
            id: 10,
            name: 'David Thomas',
            email: 'david@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/men/10.jpg',
        },
        {
            id: 11,
            name: 'Isabella Jones',
            email: 'isabella@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/women/11.jpg',
        },
        {
            id: 12,
            name: 'Liam Garcia',
            email: 'liam@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/men/12.jpg',
        },
        {
            id: 13,
            name: 'Charlotte Brown',
            email: 'charlotte@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/women/13.jpg',
        },
        {
            id: 14,
            name: 'Ethan Rodriguez',
            email: 'ethan@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/men/14.jpg',
        },
        {
            id: 15,
            name: 'Amelia Martinez',
            email: 'amelia@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/women/15.jpg',
        },
    ];

    const columnoptions = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: 'Profile Picture',
            accessor: 'profilePicture',
            Cell: ({ row }) => <img src={row.original.profilePicture} alt="Profile" />,
        },
        {
            Header: 'Name',
            accessor: 'name',
            Cell: ({ row }) => <span className='usersName' onClick={() => navigate(`/profile/public/${row.original.id}`)}>{row.original.name}</span>,
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
    ]


  return (
    <TransitionWrapper>
        <MainWrapper pt={20} pb={12}>
              <VStack gap={4}>
                  <HStack justifyContent={'flex-start'}>
                      <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                          <BreadcrumbItem>
                              <Link className='hover-underline' to='/admin/dashboard'>Home</Link>
                          </BreadcrumbItem>

                          <BreadcrumbItem isCurrentPage>
                              <BreadcrumbLink color={'purple'} href='#'>Users</BreadcrumbLink>
                          </BreadcrumbItem>
                      </Breadcrumb>
                  </HStack>

                  <VStack gap={0} width={'full'}>
                      <Heading mt={2} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>All Users</Heading>
                      <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '','','']} textAlign={'center'} >Hey Boss👋, listing all the leaners, instructors and admins on Coursify.</Text>
                  </VStack>
                
                  <Stack mt={4} w={'full'} alignItems={'center'} justifyContent={'center'}>
                      <Select w={['95%', '95%', '40%', '40%']} placeholder={`Select the type of user here.....`} focusBorderColor='#8141bb' onChange={(e) => setUserType(e.target.value)} size={'sm'} fontSize={'xs'}>
                          <option value="user">Learner</option>
                          <option value="instructor">Instructor</option>
                          <option value="admin">Admin</option>
                      </Select>
                  </Stack>

                  <Box py={4} className='tableContainerBox' overflowX={['auto','auto','none','none']} width={['95%','95%','70%','70%']} margin={'auto'}>
                      <Table data={users} columnOptions={columnoptions} />
                  </Box>
            </VStack>

        </MainWrapper>
      
    </TransitionWrapper>
  )
}

export default AdminUsers
