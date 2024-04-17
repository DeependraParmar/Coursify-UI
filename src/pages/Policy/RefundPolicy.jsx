import React from 'react'
import TransitionWrapper from "../../components/Transition"
import MainWrapper from "../../components/MainWrapper"
import { Box, Heading, Text, VStack } from '@chakra-ui/react'

const TermsAndConditions = () => {
    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={12}>
                <VStack alignItems={'flex-start'} width={['90%', '90%', '80%', '80%']} margin={'auto'} gap={'4'}>
                    <Heading fontFamily={'Young Serif'} textAlign={'left'} fontSize={['1.3rem', '2rem', '2rem', '2rem']} mb={'2'} >Cancellation & Refund Policy</Heading>

                    <Text fontSize={['xs','xs','sm','sm']}>
                        We regret to inform you that <b><u>Coursify does not entertain any requests for cancellation or refunds</u></b>. Once a purchase is made on our platform, it is considered final and non-refundable. We encourage users to carefully review their course selections before completing the transaction to ensure satisfaction. <br /><br />

                        Coursify is committed to providing high-quality educational content and services, and we strive to meet the expectations of our users. However, due to the digital nature of our products, we are unable to offer refunds or cancellations once a purchase is made. <br /><br />

                        We appreciate your understanding and cooperation regarding this policy. If you have any questions or concerns, please feel free to contact our support team for assistance. <br /><br />

                        Thank you for choosing Coursify. <br /> <br />

                        Happy Learning🎉<br />
                        <b>Coursify</b>
                    </Text>
                </VStack>
            </MainWrapper>
        </TransitionWrapper>
    )
}

export default TermsAndConditions
