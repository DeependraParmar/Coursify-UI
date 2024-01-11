import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import contact_image from "../../assets/images/contact.jpg"
import MainWrapper from '../../components/MainWrapper'
import { AiOutlineMail } from 'react-icons/ai'
import { CiGlobe } from 'react-icons/ci'

const Contact = () => {
  return (
    <>
        <ContactFormComponent contact_image={contact_image} />
        <MapComponent />
    </>
  )
}

const ContactFormComponent = React.memo(({contact_image}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendMessageHandler = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    }

    return <MainWrapper pt={'16'} >
        <Stack direction={['column', 'column', 'column', 'row']} alignItems={'center'} justifyContent={'center'} gap={[8, 4, 2, 2]}>
            <ContactImageComponent contact_image={contact_image} />
            <Box width={['100%', '100%', '100%', '50%']} mt={'4'} textAlign={'center'} >
                <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.5rem', '2rem', '2.5rem', '2.5rem']} mb={'2rem'} >Post us a Direct Message</Heading>
                <form action="" className='contact_form'>
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <textarea name="" id="" cols="30" rows="5" placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button onClick={(e) => sendMessageHandler(e)}>Send Message</button>
                </form>
            </Box>
        </Stack>
    </MainWrapper>
});

const ContactImageComponent = React.memo(({contact_image}) => {
    return <Box width={['100%', '100%', '100%', '50%']} >
        <Image src={contact_image} alt="Contact Image" />
    </Box>
});

const MapComponent = React.memo(() => {
    return <MainWrapper pt={'16'} pb={'16'}>
        <Box width={['100%', '100%', '100%', '100%']} >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14692.949681595132!2d76.02629029499634!3d22.978295372478573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963170a2bcedd7d%3A0x1de0ccec757dfb65!2sTrilok%20Nagar%2C%20Dewas%2C%20Madhya%20Pradesh%20455001!5e0!3m2!1sen!2sin!4v1704938514614!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
    </MainWrapper>
});
export default Contact
