import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, ButtonGroup, HStack, Heading, Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai'
import { FaAngleRight, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import PdfViewer from '../../components/PdfViewer'
import TransitionWrapper from '../../components/Transition'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminApprovalRequests } from '../../redux/actions/admin'
import { toast } from 'react-toastify'
import { sanitizedHTML } from "../../../controllers.js"
import { ClipLoader } from 'react-spinners'

const AdminApproval = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, error, requests } = useSelector(state => state.admin);
    const [request, setRequest] = useState({});

    useEffect(() => {
        dispatch(getAdminApprovalRequests());
        const specificRequest = requests && requests.find(req => req._id === id);
        setRequest(specificRequest);
    }, [dispatch, id]);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
    }, [dispatch, error]);


    useEffect(() => {
        window.scrollTo(0, 0, 'smooth');
    }, []);

    const workExperience = sanitizedHTML(request && request.workExperience);
    const educationalBackground = sanitizedHTML(request && request.educationalBackground);
    const skills = sanitizedHTML(request && request.skills);

    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={12}>
                <VStack gap={4}>
                    <HStack justifyContent={'flex-start'}>
                        <Breadcrumb spacing='8px' fontWeight={'normal'} fontSize={'xs'} separator={<FaAngleRight color='gray.500' />}>
                            <BreadcrumbItem>
                                <Link className='hover-underline' to='/admin/dashboard'>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link className='hover-underline' to='/admin/approval-requests'>Requests</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink color={'purple'} href='#'>Request</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </HStack>

                    <VStack gap={0} width={'full'}>
                        <Heading mt={2} textAlign={'center'} fontFamily={'Young Serif'} fontSize={['2xl', '2xl', '3xl', '4xl']}>Request Page</Heading>
                        <Text mt={['1', '1', '2', '2']} fontSize={['sm', 'sm', 'md', 'md']} width={['80%', '', '', '']} textAlign={'center'} >Hey Boss👋, review the request with the data present below.</Text>
                    </VStack>

                    {
                        loading && !request ? <Box display={'flex'} alignItems={'center'} height={'60vh'} justifyContent={'center'}><ClipLoader size={60} color='#805AD5' /></Box> :
                            request && <>
                                <VStack spacing={['4', '4', '4', '4']} justifyContent={'flex-start'} alignItems={['flex-start', 'flex-start']} width={['95%', '95%', '40%', '40%']} mt={4}>
                                    <InputGroup spacing='4' >
                                        <InputLeftElement pointerEvents={'none'}>
                                            <AiOutlineUser size='18' />
                                        </InputLeftElement>
                                        <Input isReadOnly type='text' _focusVisible={{ outline: "none" }} value={request.name} fontSize={'sm'} />
                                    </InputGroup>

                                    <InputGroup _focus={'none'} spacing='4' >
                                        <InputLeftElement pointerEvents={'none'}>
                                            <AiOutlineMail size='18' />
                                        </InputLeftElement>
                                        <Input isReadOnly type='email' placeholder='johndoe@gmail.com' _focusVisible={{ outline: "none" }} value={request.email} fontSize={'sm'} />
                                    </InputGroup>

                                    <InputGroup _focus={'none'} spacing='4' >
                                        <InputLeftElement pointerEvents={'none'}>
                                            <AiOutlinePhone size='18' />
                                        </InputLeftElement>
                                        <Input isReadOnly type='number' placeholder='8965231475' _focusVisible={{ outline: "none" }} value={request.phoneNumber} fontSize={'sm'} />
                                    </InputGroup>

                                    <Text w={'full'} border={'1px solid #e2e8f0'} p={4} px={3} pl={8} borderRadius={'md'} _focusVisible={{ outline: "none" }} dangerouslySetInnerHTML={{ __html: educationalBackground }} fontSize={'sm'} />

                                    <Text w={'full'} border={'1px solid #e2e8f0'} p={4} px={3} pl={8} borderRadius={'md'} _focusVisible={{ outline: "none" }} dangerouslySetInnerHTML={{ __html: workExperience }} fontSize={'sm'} />

                                    <Text w={'full'} border={'1px solid #e2e8f0'} p={4} px={3} pl={8} borderRadius={'md'} _focusVisible={{ outline: "none" }} dangerouslySetInnerHTML={{ __html: skills }} fontSize={'sm'} />

                                    <PdfViewer pdfUrl={request?.resume?.url} />
                                </VStack>


                                <ButtonGroup size={'sm'} mt={6}>
                                    <Button gap={2} colorScheme='green'>Approve <FaThumbsUp /> </Button>
                                    <Button gap={2} colorScheme='red'>Discard <FaThumbsDown /> </Button>
                                </ButtonGroup>
                            </>
                    }
                </VStack>
            </MainWrapper>

        </TransitionWrapper>
    )
}

export default AdminApproval
