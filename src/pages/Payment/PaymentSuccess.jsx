import { Box, Button, ButtonGroup, Divider, HStack, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, SkeletonCircle, SkeletonText, Text, Tooltip, VStack, useDisclosure } from '@chakra-ui/react'
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

const PaymentSuccess = () => {
    const reference = useSearchParams()[0].get('reference');
    const [pdfSrc, setPdfSrc] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(false);

    const getReceipt = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${server}/receipt/${reference}`);
            setPdfSrc(`${server}/receipt/${reference}`);
            onOpen();
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    const copyReference = () => {
        navigator.clipboard.writeText(reference);
        toast.info("Reference ID Copied to Clipboard")
    }

    return (
        <>
            <TransitionWrapper>
                {loading && <LoadingComponent message='Fetching' />}
                <MainWrapper pt={24} pb={12}>
                    <VStack width={['95%', '95%', '35%', '35%']} margin={'auto'} textAlign={'center'} gap={0}>
                        <Image width={['60%', '60%', '60%', '60%']} position={'relative'} left={[8, 8, 12, 12]} src={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1710931760/confetti_cnpgkf.gif'} />
                        <Heading pb={2} fontSize={['2xl', '2xl', '4xl', '4xl']}>Payment Successfull</Heading>

                        <HStack>
                            <Text fontSize={'sm'}>Your purchase's reference id is: <b>{reference}</b>  </Text>
                            <Tooltip hasArrow label="Copy Ref. ID to Clipboard" fontSize={'xs'}>
                                <span>
                                    <BiCopy cursor={'pointer'} onClick={copyReference} color='#8141bb' size={18} />
                                </span>
                            </Tooltip>
                        </HStack>
                        <ButtonGroup mt={4} gap={2}>
                            <Button size={['sm', 'sm', 'md', 'md']} onClick={getReceipt} gap={2} colorScheme='purple'>Receipt <IoMdDownload /> </Button>
                            <Button size={['sm', 'sm', 'md', 'md']} gap={2}><Link to={'/'}>Home</Link><IoMdHome /></Button>
                        </ButtonGroup>
                    </VStack>
                </MainWrapper>

            </TransitionWrapper>

            <Modal isOpen={isOpen} onClose={onClose} size={'6xl'}>
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
        </>
    )
}

export default PaymentSuccess;
