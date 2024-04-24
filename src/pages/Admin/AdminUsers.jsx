import { Avatar, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack, Heading, Image, Select, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import shrug from "../../assets/images/shrug.png"
import MainLoader from "../../components/MainLoader"
import MainWrapper from '../../components/MainWrapper'
import Table from "../../components/Table"
import TransitionWrapper from '../../components/Transition'
import { getAdminUsers } from '../../redux/actions/admin'

const AdminUsers = () => {
    const [userType, setUserType] = useState('users');
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispatch = useDispatch();
    const { loading, error, users } = useSelector(state => state.admin);

    useEffect(() => {
        const interval = setTimeout(() => {
            dispatch(getAdminUsers(userType));
        }, 500);

        return () => clearTimeout(interval);
    }, [dispatch, userType]);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
    }, [dispatch, error]);

    const columnoptions = [
        {
            Header: 'ID',
            accessor: '_id',
        },
        {
            Header: 'Profile Picture',
            accessor: 'avatar',
            Cell: ({ row }) => (
                <Avatar src={row.original.avatar && row.original.avatar.url} />
            ),
        },
        {
            Header: 'Name',
            accessor: 'name',
            Cell: ({ row }) => <span className='usersName' onClick={() => navigate(`/profile/public/${row.original._id}`)}>{row.original.name}</span>,
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
    ];

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
                        <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Boss👋, listing all the leaners, instructors and admins on Coursify.</Text>
                    </VStack>

                    <Stack mt={4} w={'full'} alignItems={'center'} justifyContent={'center'}>
                        <Select w={['95%', '95%', '40%', '40%']} placeholder={`Select the type of user here.....`} focusBorderColor='#8141bb' onChange={(e) => setUserType(e.target.value)} size={'sm'} fontSize={'xs'}>
                            <option value="users">Learners</option>
                            <option value="instructors">Instructors</option>
                            <option value="admins">Admins</option>
                        </Select>
                    </Stack>

                    <Box py={4} className='tableContainerBox' overflowX={['auto', 'auto', 'none', 'none']} width={['95%', '95%', '70%', '70%']} margin={'auto'}>
                        {
                            loading ? <MainLoader /> : users && users.length > 0 ? (
                            <Table data={users} options={columnoptions} />
                        ) : (
                                <>
                                    <Image width={['60%', '70%', '20%', '20%']} opacity={0.6} margin={'auto'} src={shrug} />
                                    <Text textAlign={'center'}>No users with role: <b>{userType}</b></Text>
                                </>
                        )}
                    </Box>
                </VStack>
            </MainWrapper>
        </TransitionWrapper>
    );
};

export default AdminUsers;

