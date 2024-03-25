import React, { useState } from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Box, Heading, Input, Select, Stack, Text, VStack } from '@chakra-ui/react'
import Table from "../../components/Table"

const AdminUsers = () => {
    const [userType, setUserType] = useState('');
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


  return (
    <TransitionWrapper>
        <MainWrapper pt={16} pb={12}>
              <VStack gap={6}>
                  <VStack width={'full'} gap={0}>
                      <Heading mt={['6', '6', '8', '8']} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Admin's User Panel</Heading>
                      <Text fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Boss👋, you can see all learners & instructors here.</Text>
                  </VStack>
                
                  <Stack w={'full'} flexDir={['column', 'column', 'row', 'row']} alignItems={'center'} justifyContent={'center'}>
                      <Select w={['95%', '95%', '40%', '40%']} placeholder={`Select the type of user here.....`} focusBorderColor='#8141bb' onChange={(e) => setUserType(e.target.value)} size={'sm'} fontSize={'xs'}>
                          <option value="user">Learner</option>
                          <option value="instructor">Instructor</option>
                          <option value="admin">Admin</option>
                      </Select>
                  </Stack>

                  <Box overflowX={['auto','auto','none','none']} width={['95%','95%','70%','70%']} margin={'auto'}>
                      <Table users={users} />
                  </Box>
            </VStack>

        </MainWrapper>
      
    </TransitionWrapper>
  )
}

export default AdminUsers
