import React, { useEffect } from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { FaAngleRight, FaExternalLinkAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Table from "../../components/Table";

const AdminApproval = () => {

    useEffect(() => {
        window.scrollTo(0, 0, 'smooth');
    }, []);

    const navigate = useNavigate();

    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 4,
            name: 'Bob Brown',
            email: 'bob@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 5,
            name: 'Emily Davis',
            email: 'emily@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 6,
            name: 'Michael Wilson',
            email: 'michael@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 7,
            name: 'Sophia Martinez',
            email: 'sophia@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 8,
            name: 'Daniel Anderson',
            email: 'daniel@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 9,
            name: 'Olivia Taylor',
            email: 'olivia@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 10,
            name: 'David Thomas',
            email: 'david@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 11,
            name: 'Isabella Jones',
            email: 'isabella@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 12,
            name: 'Liam Garcia',
            email: 'liam@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 13,
            name: 'Charlotte Brown',
            email: 'charlotte@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 14,
            name: 'Ethan Rodriguez',
            email: 'ethan@example.com',
            phoneNumber: 8907654356
        },
        {
            id: 15,
            name: 'Amelia Martinez',
            email: 'amelia@example.com',
            phoneNumber: 8907654356
        },
    ];

    const columnoptions = [
        {
            Header: 'ID',
            accessor: 'id',
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
        {
            Header: 'Phone Number',
            accessor: 'phoneNumber'
        },
        {
            Header: 'View',
            accessor: 'view',
            Cell: ({row}) => <Button onClick={() => navigate(`/admin/approval-requests/${row.original.id}`)} colorScheme='purple' size={'xs'}><FaExternalLinkAlt /> </Button>
        }
    ]

    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={12}>
                <VStack gap={4}>
                    <HStack justifyContent={'flex-start'}>
                        <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                            <BreadcrumbItem>
                                <Link className='hover-underline' to='/admin/dashboard'>Home</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink color={'purple'} href='#'>Requests</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </HStack>

                    <VStack gap={0} width={'full'}>
                        <Heading mt={2} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Instructor's Requests</Heading>
                        <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Boss👋, approve/disapprove the instructor's request to teach on Coursify.</Text>
                    </VStack>

                    <Box py={4} className='tableContainerBox' overflowX={['auto', 'auto', 'none', 'none']} width={['95%', '95%', '70%', '70%']} margin={'auto'}>
                        <Table data={users} columnOptions={columnoptions} />
                    </Box>

                </VStack>
            </MainWrapper>

        </TransitionWrapper>
    )
}

export default AdminApproval
