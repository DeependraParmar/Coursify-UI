import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import { useDispatch, useSelector } from "react-redux"
import TransitionWrapper from '../../components/Transition'
import { ClipLoader } from 'react-spinners'
import { getAdminTransactions } from '../../redux/actions/admin'
import { toast } from 'react-toastify';
import Table from "../../components/Table";

const AdminTransactions = () => {

    const dispatch = useDispatch();
    const { loading, error, transactions } = useSelector(state => state.admin);
    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0, 'smooth');
    }, []);

    useEffect(() => {
        dispatch(getAdminTransactions());
    }, [dispatch]);

    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
    }, [dispatch, error]);

    const columnoptions = [
        {
            Header: 'T/c ID',
            accessor: 'razorpay_payment_id',
        },
        {
            Header: 'Dated',
            accessor: 'transaction_date',
            Cell: ({row}) => <span>{new Date(row.original.transaction_date).toDateString()}</span>
        },
        {
            Header: 'Billed To',
            accessor: 'user.name',
            Cell: ({ row }) => <span className='usersName' onClick={() => navigate(`/profile/public/${row.original.user.name}`)}>{row.original.user.name}</span>
        },
        {
            Header: 'Creator',
            accessor: 'course.creator',
            Cell: ({ row }) => <span className='usersName' onClick={() => navigate(`/profile/public/${row.original.course.creator}`)}>{row.original.course.creator}</span>,
        },
        {
            Header: 'Amount',
            accessor: 'transaction_amount',
            Cell: ({ row }) => <b><span>₹ {row.original.transaction_amount}</span></b>
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
                        {
                            loading && <Box display={'flex'} alignItems={'center'} height={'60vh'} justifyContent={'center'}><ClipLoader size={60} color='#805AD5' /></Box>
                        }
                        { transactions && transactions.length > 0 ? (
                            <Table data={transactions} options={columnoptions} />
                        ) : (
                            <Text textAlign={'center'}>No users found</Text>
                        )}
                    </Box>
                </VStack>
            </MainWrapper>

        </TransitionWrapper>
    )
}

export default AdminTransactions
