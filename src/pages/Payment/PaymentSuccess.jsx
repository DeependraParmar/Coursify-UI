import { Button, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import success from '../../assets/images/paymentsuccess.avif'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'

const NotFound = () => {
    const reference = useSearchParams()[0].get('reference');
    
    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={12}>
                <VStack width={['95%', '95%', '30%', '30%']} margin={'auto'} gap={4}>
                    <Image src={success} />
                    <Heading fontSize={['2xl','2xl','4xl','4xl']}>Payment Successfull</Heading>
                    <Text>Your purchase's reference id is: <b>{reference}</b></Text>
                    <Button size={['sm', 'sm', 'md','md']}><Link to={'/'}>Back to Home</Link></Button>
                </VStack>
            </MainWrapper>

        </TransitionWrapper>
    )
}

export default NotFound
