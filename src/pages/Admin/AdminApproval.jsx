import React, { useEffect } from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { FaAngleRight, FaExternalLinkAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Table from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'
import { ClipLoader } from 'react-spinners'
import { getAdminApprovalRequests } from '../../redux/actions/admin'
import shrug from "../../assets/images/shrug.png"

const AdminApproval = () => {

    useEffect(() => {
        window.scrollTo(0, 0, 'smooth');
    }, []);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, requests } = useSelector(state => state.admin);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
    }, [dispatch, error]);

    useEffect(() => {
        dispatch(getAdminApprovalRequests());
    }, [dispatch]);

    const columnoptions = [
        {
            Header: 'Request ID',
            accessor: '_id',
        },
        {
            Header: 'Name',
            accessor: 'name',
            Cell: ({ row }) => <span className='usersName' onClick={() => navigate(`/profile/public/${row.original.requesteeId}`)}>{row.original.name}</span>,
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
            Cell: ({ row }) => <Button onClick={() => navigate(`/admin/approval-requests/${row.original._id}`)} colorScheme='purple' size={'xs'}><FaExternalLinkAlt /> </Button>
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
                        {
                            loading ? <Box display={'flex'} alignItems={'center'} height={'60vh'} justifyContent={'center'}><ClipLoader size={60} color='#805AD5' /></Box>
                                : requests && requests.length > 0 ? (
                                    <Table data={requests} options={columnoptions} />
                                ) : (
                                    <>
                                        <Image width={['60%', '60%', '20%', '20%']} opacity={0.6} margin={'auto'} src={shrug} />
                                        <Text textAlign={'center'}>No Pending Requests</Text>
                                    </>
                                )}
                    </Box>

                </VStack>
            </MainWrapper>

        </TransitionWrapper>
    )
}

export default AdminApproval
