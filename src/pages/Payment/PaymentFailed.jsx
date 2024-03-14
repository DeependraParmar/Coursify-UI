import { Button, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Failed from '../../assets/images/paymentfailed.jpg'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'

const PaymentFailed = () => {

    const reference = useSearchParams()[0].get('reference');

    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={12}>
                <VStack width={['95%', '95%', '30%', '30%']} margin={'auto'}>
                    <Image src={Failed} />
                    <Heading py={4} fontSize={['2xl', '2xl', '4xl', '4xl']}>Payment Failed</Heading>
                    <Text fontSize={'sm'}>Something went wrong while purchage. Try again.</Text>
                    <Text fontSize={'sm'}>Your purchase's reference id: <b>{reference}</b></Text>
                    <Button mt={4} size={['sm', 'sm', 'md', 'md']}><Link to={'/'}>Back to Home</Link></Button>
                </VStack>
            </MainWrapper>

        </TransitionWrapper>
    )
}

export default PaymentFailed
