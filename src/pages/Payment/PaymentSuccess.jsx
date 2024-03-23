import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, ButtonGroup, Divider, HStack, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, SkeletonCircle, SkeletonText, Text, Tooltip, VStack, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoMdDownload, IoMdHome } from 'react-icons/io'
import { Link, useSearchParams } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import LoadingComponent from '../../components/Loading'
import { server } from '../../redux/store'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { BiCopy } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { isValidPayment } from '../../redux/actions/user'

const PaymentSuccess = () => {
    const reference = useSearchParams()[0].get('reference');
    const [pdfSrc, setPdfSrc] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(false);
    const { isOpen: alertIsOpen, onOpen: alertOnOpen, onClose: alertOnClose } = useDisclosure();
    
    const { isValidPaymentId , error, message } = useSelector(state => state.payment);
    const dispatch = useDispatch();

    useEffect(() => {
        if(reference){
            dispatch(isValidPayment(reference));
        }
    }, [dispatch, reference]);

    useEffect(() => {
        if(reference){
            setTimeout(() => {
                if (isValidPaymentId) {
                    alertOnOpen();
                }
            }, 5000);
        }
    }, []);

    useEffect(() => {
        if (error) {
            toast.error(error, { toastId: 'appToastError' });
            dispatch({ type: "clearError" });
        }
        if (message) {
            toast.success(message, { toastId: 'appToastSuccess' });
            dispatch({ type: "clearMessage" });
        }
    }, [dispatch, error, message]);

    const getReceipt = async () => {
        try {
            setPdfSrc(`${server}/receipt/${reference}`);
            onOpen();
        } catch (error) {
            console.log(error);
        }
    }

    const downloadPdf = async() => {
        try {
            setLoading(true);
            const response = await axios.get(`${server}/receipt/${reference}`, {
                responseType: 'blob'
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `Invoice-${reference}.pdf`);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
            toast.success("Invoice Downloaded Successfully");
        }
    }

    const copyReference = () => {
        navigator.clipboard.writeText(reference);
        toast.info("Reference ID Copied to Clipboard")
    }

    return (
        <>
            <TransitionWrapper>
                {
                    loading && <LoadingComponent message='Downloading' />
                }
                <MainWrapper pt={24} pb={12}>
                    <VStack width={['95%', '95%', '35%', '35%']} margin={'auto'} textAlign={'center'} gap={1}>
                        <Image width={['60%', '60%', '60%', '60%']} src={isValidPaymentId ? 'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1711161341/verified-file_pteane.gif' : 'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1711125075/file_zbfxsf.gif'} />
                        <Heading pb={2} fontFamily={'Young Serif'} color={isValidPaymentId ? 'green.500' : 'red.500'} fontSize={['3xl', '3xl', '5xl', '5xl']}>{ isValidPaymentId ? "Payment Successfull" : "Invalid Payment ID"}</Heading>

                        {
                            !isValidPaymentId ? <Text fontSize={['sm', 'sm', 'md', 'md']}>The Payment ID you provided is invalid. Please check the link you used to access this page.</Text> : <>
                                <Text fontSize={['sm', 'sm', 'md', 'md']} >Do not forget to save the reference no. & download the invoice.</Text>
                            </>
                        }

                        { isValidPaymentId && <HStack justifyContent={'center'}>
                            <Text fontSize={'sm'}>Your purchase's reference id is: <b>{reference}</b>  </Text>
                            <Tooltip hasArrow label="Copy Ref. ID to Clipboard" fontSize={'xs'}>
                                <span>
                                    <BiCopy cursor={'pointer'} onClick={copyReference} color='#8141bb' size={18} />
                                </span>
                            </Tooltip>
                        </HStack> }
                        <ButtonGroup mt={4} gap={2}>
                            { isValidPaymentId && <Button display={['none','none','flex','flex']} size={['sm', 'sm', 'md', 'md']} onClick={getReceipt} gap={2} colorScheme='purple'>Receipt <IoMdDownload /> </Button>}

                            { isValidPaymentId && <Button display={['flex','flex','none','none']} size={['sm', 'sm', 'md', 'md']} onClick={downloadPdf} gap={2} colorScheme='purple'>Download <IoMdDownload /> </Button>}

                            <Button size={['sm', 'sm', 'md', 'md']} gap={2}><Link to={'/'}>Home</Link><IoMdHome /></Button>
                        </ButtonGroup>
                    </VStack>
                </MainWrapper>

            </TransitionWrapper>

            <Modal isOpen={isOpen && isValidPaymentId } onClose={onClose} size={'6xl'}>
                <ModalOverlay />
                <ModalContent width={['320px', '320px', '600px', '600px']}>
                    <ModalHeader>
                        <Text fontFamily={'Young Serif'}>Purchase Invoice</Text>
                        <Text fontSize={'xs'} fontWeight={'normal'}>Note: Your Invoice is loading. Do not close the window.</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <Divider />
                    <ModalBody p={4}>
                        <Box>
                            {pdfSrc && <iframe src={pdfSrc} width={'100%'} height={'500px'} title="Receipt PDF"></iframe>
                            }
                        </Box>
                        <Box zIndex={-1} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                            <ClipLoader size={40} color='#8141bb' />
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <AlertDialog
                motionPreset='slideInTop'
                onClose={alertOnClose}
                isOpen={alertIsOpen && isValidPaymentId }
            >
                <AlertDialogOverlay />

                <AlertDialogContent width={['320px', '320px', '600px', '600px']}>
                    <AlertDialogHeader>Quick Tip 💥🔰</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <Divider />
                    <AlertDialogBody fontSize={'sm'}>
                        Hey leaner, please make sure you have downloaded the invoice before you leave this page. <br />
                        Happy Learning 🎉
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button onClick={alertOnClose} colorScheme='purple' ml={3}>
                            OK
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default PaymentSuccess;
