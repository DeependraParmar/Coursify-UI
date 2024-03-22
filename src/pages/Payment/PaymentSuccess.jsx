import { Button, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'

const PaymentSuccess = () => {
    const reference = useSearchParams()[0].get('reference');
    
    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={12}>
                <VStack width={['95%', '95%', '30%', '30%']} margin={'auto'} textAlign={'center'}>
                    <Image width={['60%', '60%', '60%', '60%']} position={'relative'} left={12} src={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1710931760/confetti_cnpgkf.gif'} />
                    <Heading pb={2} fontSize={['2xl','2xl','4xl','4xl']}>Payment Successfull</Heading>
                    <Text fontSize={'sm'}>Your purchase's reference id is: <b>{reference}</b></Text>
                    <Button size={['sm', 'sm', 'md','md']}><Link to={'/'}>Back to Home</Link></Button>
                </VStack>
            </MainWrapper>

        </TransitionWrapper>
    )
}

export default PaymentSuccess
