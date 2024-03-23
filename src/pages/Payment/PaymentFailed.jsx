import { Button, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Failed from '../../assets/images/paymentfailed.jpg'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { IoMdHome } from 'react-icons/io'

const PaymentFailed = () => {

    const reference = useSearchParams()[0].get('reference');

    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={12}>
                <VStack width={['95%', '95%', '30%', '30%']} textAlign={'center'} margin={'auto'} gap={1}>
                    <Image width={['60%', '60%', '60%', '60%']} src={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1711125075/file_zbfxsf.gif'} />
                    <Heading fontSize={['3xl', '3xl', '5xl', '5xl']} pb={2} color={'red.500'} fontFamily={'Young Serif'}>Payment Failed</Heading>
                    <Text fontSize={['sm','sm','md','md']}>Something went wrong while making the payment at our end. Please try again later.</Text>
                    <Text fontSize={'sm'}>Your purchase's reference id: <b>{reference}</b></Text>
                    <Button mt={4} size={['sm', 'sm', 'md', 'md']} gap={2}><Link to={'/'}>Home</Link><IoMdHome /></Button>
                </VStack>
            </MainWrapper>

        </TransitionWrapper>
    )
}

export default PaymentFailed
