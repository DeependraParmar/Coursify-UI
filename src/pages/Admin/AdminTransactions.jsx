import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import Table from '../../components/Table'

const AdminApproval = () => {

    useEffect(() => {
        window.scrollTo(0, 0, 'smooth');
    }, []);

    const columnoptions = [
        {
            Header: 'T/c ID',
            accessor: 'id',
        },
        {
            Header: 'Dated',
            accessor: 'transaction_date'
        },
        {
            Header: 'Course',
            accessor: 'course',
            Cell: ({ row }) => <Image src={row.original.profilePicture} alt="thumbnail" />,
        },
        {
            Header: 'Billed To',
            accessor: 'billed to',
            Cell: ({ row }) => <span className='usersName' onClick={() => navigate(`/profile/public/${row.original.id}`)}>{row.original.name}</span>
        },
        {
            Header: 'Creator',
            accessor: 'course_creator',
            Cell: ({ row }) => <span className='usersName' onClick={() => navigate(`/profile/public/${row.original.id}`)}>{row.original.name}</span>,
        }
    ];

    


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
                                <BreadcrumbLink color={'purple'} href='#'>Transactions</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </HStack>

                    <VStack gap={0} width={'full'}>
                        <Heading mt={2} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>All Transactions</Heading>
                        <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Boss👋, here lists all the transactions happened on Coursify.</Text>
                    </VStack>

                    <Box py={4} className='tableContainerBox' overflowX={['auto', 'auto', 'none', 'none']} width={['95%', '95%', '70%', '70%']} margin={'auto'}>
                        {/* <Table data={users} columnOptions={columnoptions} /> */}
                    </Box>
                </VStack>
            </MainWrapper>

        </TransitionWrapper>
    )
}

export default AdminApproval
