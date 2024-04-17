import React from 'react'
import TransitionWrapper from "../../components/Transition"
import MainWrapper from "../../components/MainWrapper"
import { Box, Heading, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'

const TermsAndConditions = () => {
    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={12}>
                <VStack alignItems={'flex-start'} width={['90%', '90%', '80%', '80%']} margin={'auto'} gap={'4'}>
                    <Heading fontFamily={'Young Serif'} textAlign={'left'} fontSize={['1.3rem', '2rem', '2rem', '2rem']} mb={'2'} >Privacy policy</Heading>
                    
                    <VStack fontSize={['xs','xs','sm','sm']} alignItems={'flex-start'}>
                        <Text>
                            <strong>Personal Identification Information</strong>
                            <br />
                            Coursify prioritizes the protection of user privacy and does not collect any personal identification information, such as names, email addresses, or phone numbers, unless voluntarily submitted by the users themselves. Users may visit the Site anonymously and are not required to provide any personal information unless they choose to register an account or engage in specific activities on the platform.
                        </Text>

                        <Text mt="4">
                            <strong>Non-personal Identification Information</strong>
                            <br />
                            Coursify may collect non-personal identification information about Users whenever they interact with the Site. Non-personal identification information may include the browser name, the type of computer, and technical information about Users' means of connection to the Site, such as the operating system and the Internet service providers utilized.
                        </Text>

                        <Text mt="4">
                            <strong>Web Browser Cookies</strong>
                            <br />
                            The Site may use "cookies" to enhance User experience. Users' web browsers place cookies on their hard drives for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
                        </Text>

                        <Text mt="4">
                            <strong>How We Use Collected Information</strong>
                            <br />
                            Coursify may collect and use Users' personal information for the following purposes:
                            <UnorderedList>
                                <ListItem>To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.</ListItem>
                                <ListItem>To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</ListItem>
                                <ListItem>To improve our Site: We may use feedback you provide to improve our products and services.</ListItem>
                                <ListItem>To send periodic emails: We may use the email address to respond to inquiries, questions, and/or other requests.</ListItem>
                            </UnorderedList>
                        </Text>

                        <Text mt="4">
                            <strong>Protection of User Information</strong>
                            <br />
                            Coursify adopts appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of Users' personal information, login credentials, transaction information, and data stored on our Site.
                        </Text>

                        <Text mt="4">
                            <strong>Sharing your Personal Information</strong>
                            <br />
                            Coursify doesnot sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
                        </Text>

                        <Text mt="4">
                            <strong>Changes to this Privacy Policy</strong>
                            <br />
                            Coursify has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
                        </Text>

                        <Text mt="4">
                            <strong>Your Acceptance of these Terms</strong>
                            <br />
                            By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
                        </Text>

                        <Text mt="4">
                            <strong>Contact Us</strong><br />
                            If you have any questions about these Terms, please contact us at <a href="mailto:coursify05@gmail.com" style={{ color: '#5000bb' }}>coursify05@gmail.com</a>.
                        </Text>
                    </VStack>
                </VStack>
            </MainWrapper>
        </TransitionWrapper>
    )
}

export default TermsAndConditions
