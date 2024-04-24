import { Box, Button, HStack, Heading, Image, Stack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { useDispatch, useSelector } from 'react-redux';
import { contact } from '../../redux/actions/other'
import { toast } from 'react-toastify';
import LoadingComponent from '../../components/Loading';
import { Turnstile } from '@marsidev/react-turnstile';

const Contact = () => {
  return (
    <>
          <ContactFormComponent contact_image={'https://res.cloudinary.com/dmmrtqe8q/image/upload/v1713617589/zjwsqg20j8rtihjkbphe.jpg'} />
        <MapComponent />
    </>
  )
}

const ContactFormComponent = React.memo(({contact_image}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState('');
    const dispatch = useDispatch();
    const { loading, error, message: stateMessage } = useSelector(state => state.other);

    const sendMessageHandler = async(e, name, email, message) => {
        e.preventDefault();
        await dispatch(contact(name, email, message, token));
    }

    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch({ type: 'clearError'});
        }
        if(stateMessage){
            toast.success(stateMessage);
            setName('');
            setEmail('');
            setMessage('');
            dispatch({ type: 'clearMessage'});
        }
    }, [dispatch, error, stateMessage]);

    return <TransitionWrapper>
        {
            loading && <LoadingComponent />
        }
        <MainWrapper pt={'16'} >
            <Stack direction={['column', 'column', 'column', 'row']} alignItems={'center'} justifyContent={'center'} gap={[4, 4, 2, 2]}>
                <ContactImageComponent contact_image={contact_image} />
                <Box width={['100%', '100%', '100%', '50%']} mt={'4'} textAlign={'center'} >
                    <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.5rem', '2rem', '2.5rem', '2.5rem']} mb={'2rem'} >Post us a Direct Message</Heading>
                    <form action="" className='contact_form'>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <textarea name="" id="" cols="30" rows="5" value={message} placeholder="Message (min. of 50 characters)" onChange={(e) => setMessage(e.target.value)}></textarea>
                        
                        <Box width={'full'} mb={4}>
                            <Turnstile onSuccess={token => setToken(token)} options={{
                                theme: 'light',
                                size: 'normal'
                            }} siteKey='0x4AAAAAAAXvblUvcTtdmfaI' />
                        </Box>

                        <Button className='button' colorScheme='purple' isLoading={loading} isDisabled={!name || !email || !message || message.length <= 50 } onClick={(e) => sendMessageHandler(e, name, email, message)}>Send Message</Button>
                    </form>
                    <HStack justifyContent={'center'} mt={'4'} spacing={4}>
                        <Link className='contactLinks' to={'/terms-and-conditions'}>Terms & Conditions</Link>
                        <Link className='contactLinks' to={'/privacy-policy'}>Privacy Policy</Link>
                        <Link className='contactLinks' to={'/cancellation-and-refund-policy'}>Refund Policy</Link>
                        <a className='contactLinks' href={'mailto:coursify05@gmail.com'}>Email</a>
                        <a className='contactLinks' href={'#address'}>Office Address</a>
                    </HStack>
                </Box>
            </Stack>
        </MainWrapper>
    </TransitionWrapper>
});

const ContactImageComponent = React.memo(({contact_image}) => {
    return <Box width={['100%', '100%', '100%', '50%']} >
        <Image src={contact_image} alt="Contact Image" />
    </Box>
});

const MapComponent = React.memo(() => {
    return <MainWrapper pt={'16'} pb={'16'}>
        <Box id='address' width={['90%', '100%', '100%', '100%']} margin={'auto'} >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14692.949681595132!2d76.02629029499634!3d22.978295372478573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963170a2bcedd7d%3A0x1de0ccec757dfb65!2sTrilok%20Nagar%2C%20Dewas%2C%20Madhya%20Pradesh%20455001!5e0!3m2!1sen!2sin!4v1704938514614!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
    </MainWrapper>
});
export default Contact
