import { Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import MainWrapper from "../../components/MainWrapper"
import TransitionWrapper from "../../components/Transition"

const TermsAndConditions = () => {
    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={12}>
                <VStack alignItems={'flex-start'} width={['90%', '90%', '80%', '80%']} margin={'auto'} gap={'4'}>
                    <Heading fontFamily={'Young Serif'} textAlign={'left'} fontSize={['1.3rem', '2rem', '2rem', '2rem']} mb={'2'} >Terms & Conditions</Heading>

                    <VStack font alignItems={'flex-start'} fontSize={'sm'}>
                        <Text>
                            These Terms and Conditions ("Terms") govern your use of the <b>Coursify</b> website and services ("Services") provided by Coursify ("Coursify", "we", "us", or "our"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
                        </Text>

                        <Text mt="4">
                            <strong>1. Account Registration</strong><br />
                            You need to create an account to use certain features of our Services. When you register for an account, you agree to provide accurate and complete information. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </Text>

                        <Text mt="4">
                            <strong>2. Use of Services</strong><br />
                            You agree to use our Services only for lawful purposes and in accordance with these Terms. You may not use our Services in any manner that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use and enjoyment of our Services.
                        </Text>

                        <Text mt="4">
                            <strong>3. Intellectual Property Rights</strong><br />
                            Our Services and all content included therein, including but not limited to text, graphics, logos, images, and software, are the property of Coursify or its licensors and are protected by copyright and other laws that protect intellectual property and proprietary rights.
                        </Text>

                        <Text mt="4">
                            <strong>4. User Content</strong><br />
                            You retain ownership of any content you post or submit to our Services ("User Content"). By posting or submitting User Content, you grant Coursify a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such User Content in connection with our Services.
                        </Text>

                        <Text mt="4">
                            <strong>5. Prohibited Activities</strong><br />
                            You agree not to engage in any of the following prohibited activities: (a) use our Services for any illegal purpose; (b) transmit or post any content that is unlawful, defamatory, obscene, or infringes upon the rights of others; (c) interfere with or disrupt the operation of our Services or servers; (d) attempt to gain unauthorized access to our Services or accounts of other users.
                        </Text>

                        <Text mt="4">
                            <strong>6. Limitation of Liability</strong><br />
                            In no event shall Coursify, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from your use of our Services.
                        </Text>

                        <Text mt="4">
                            <strong>7. Indemnification</strong><br />
                            You agree to indemnify, defend, and hold harmless Coursify and its affiliates, officers, directors, employees, and agents from any and all claims, liabilities, damages, losses, costs, expenses, or fees arising out of your violation of these Terms or your use of our Services.
                        </Text>

                        <Text mt="4">
                            <strong>8. Modifications to Terms</strong><br />
                            We reserve the right to modify or replace these Terms at any time without prior notice. It is your responsibility to review these Terms periodically for changes. Your continued use of our Services after any modifications to these Terms constitutes acceptance of those changes.
                        </Text>

                        <Text mt="4">
                            <strong>9. Governing Law</strong><br />
                            These Terms shall be governed by and construed in accordance with the laws of <b>India</b>, without regard to its conflict of law provisions.
                        </Text>

                        <Text mt="4">
                            <strong>10. Contact Us</strong><br />
                            If you have any questions about these Terms, please contact us at <a href="mailto:coursify05@gmail.com" style={{color: '#5000bb'}}>coursify05@gmail.com</a>.
                        </Text>
                    </VStack>

                </VStack >
            </MainWrapper>
        </TransitionWrapper>
    )
}

export default TermsAndConditions
