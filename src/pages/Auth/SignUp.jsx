import {
    Box, Button, Checkbox, Divider, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightElement, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, Stack, Text, UnorderedList, VStack, useDisclosure
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BiHide, BiLogIn, BiShowAlt } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MainWrapper from '../../components/MainWrapper';
import TransitionWrapper from '../../components/Transition';
import { register, verifyRegister } from '../../redux/actions/user';
import { Turnstile } from '@marsidev/react-turnstile'

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [show, setShow] = useState(false);
    const [resend, setResend] = useState(false);
    const [timer, setTimer] = useState(59);
    const [otp, setOtp] = useState('');
    const [agree, setAgree] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    

    const handleClick = () => setShow(!show);
    const { isOpen: isModalOpen, onOpen: onModalOpen, onClose } = useDisclosure();
    const { loading, error, message } = useSelector(state => state.user);
    const dispatch = useDispatch();


    const signuphandler = async e => {
        e.preventDefault();
        setOtp('');
        await dispatch(register(name, email, confirmPassword, token));

        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            setResend(true);
            setTimer(59);
        }, 59000);
    };

    useEffect(() => {
        if (error) {
            setIsEmailSent(false);
        }
        if (error === 'Invalid OTP') {
            setIsOtpVerified(false);
            setIsEmailSent(true);
        }
        if (message) {
            setIsEmailSent(true);
            onModalOpen();
        }
    }, [dispatch, error, message, onModalOpen]);

    useEffect(() => {
        window.scrollTo(0, 0, 'smooth');
    }, []);

    const onModalClose = () => {
        if (isOtpVerified) {
            onClose();
            setTimer(59);
            setResend(false);
        }
    };

    const otpChange = value => {
        setOtp(value);
    };

    const verifyOtp = event => {
        event.preventDefault();
        dispatch(verifyRegister(name, email, confirmPassword, otp));
    };

    return (
        <TransitionWrapper>
            <Modal isOpen={isModalOpen && isEmailSent} onClose={onModalClose} isCentered={false}>
                <ModalOverlay />
                <ModalContent width={['320px', '500px', '500px', '500px']}>
                    <ModalHeader>
                        <Heading fontSize={'1.2rem'} fontFamily={'Young Serif'}>
                            Verify with OTP
                        </Heading>
                        <ModalCloseButton _focus={{ borderColor: '#5000bb' }} onClick={onModalClose} />
                    </ModalHeader>
                    <Divider />
                    <ModalBody>
                        <VStack gap={4}>
                            <Text fontSize={'xs'}>
                                We have sent a 6-digit OTP to your email address. Please enter the OTP below to verify your email address.
                            </Text>
                            <HStack>
                                <PinInput value={otp} onChange={otpChange} focusBorderColor="#5000bb">
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                </PinInput>
                            </HStack>
                            <VStack gap={1}>
                                <Text fontSize={'xs'}>
                                    Didn't receive the OTP?{' '}
                                    <Button fontSize={'xs'} variant={'link'} isDisabled={resend === false} color={'#805AD5'} onClick={e => signuphandler(e)}>
                                        Resend OTP
                                    </Button>
                                </Text>
                                <Text fontSize={'xs'}>
                                    Resend OTP in <b>00:{timer < 10 ? 0 : null}{timer}</b> seconds
                                </Text>
                            </VStack>
                            <Button isLoading={loading} width={'full'} onClick={e => verifyOtp(e)} isDisabled={otp.length < 6} colorScheme="purple" gap={2}>
                                Submit <FaCheckCircle />
                            </Button>
                        </VStack>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
            <MainWrapper pt={24} pb={16}>
                <VStack width={['95%', '95%', '30%', '30%']} margin={'auto'} display={'flex'} spacing={'5'}>
                    <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'}>
                        Sign Up
                    </Heading>
                    <form style={{ width: '100%' }} onSubmit={e => signuphandler(e)}>
                        <Stack spacing={3}>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <AiOutlineUser />
                                </InputLeftElement>
                                <Input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required={true}
                                    type="text"
                                    placeholder="Name"
                                    focusBorderColor="#5000bb"
                                    fontSize={'sm'}
                                />
                            </InputGroup>

                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <AiOutlineMail />
                                </InputLeftElement>
                                <Input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required={true}
                                    type="email"
                                    placeholder="Email"
                                    focusBorderColor="#5000bb"
                                    fontSize={'sm'}
                                />
                            </InputGroup>

                            <InputGroup size="md">
                                <InputLeftElement>
                                    <RiLockPasswordLine />
                                </InputLeftElement>
                                <Input
                                    pr="4.5rem"
                                    type={show ? 'text' : 'password'}
                                    placeholder="Password"
                                    focusBorderColor="#5000bb"
                                    fontSize={'sm'}
                                    required={true}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <InputRightElement>
                                    <Button display={'flex'} variant={'unstyled'} size="sm" onClick={handleClick}>
                                        {show ? <BiHide /> : <BiShowAlt />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                            <InputGroup spacing='4' >
                                <InputLeftElement pointerEvents={'none'}>
                                    <RiLockPasswordLine size='18' />
                                </InputLeftElement>
                                <InputRightElement textAlign={'center'}>
                                    <Button display={'flex'} variant={'unstyled'} size='sm' onClick={handleClick}>
                                        {show ? <BiHide /> : <BiShowAlt />}
                                    </Button>
                                </InputRightElement>
                                <Input type={show ? 'text' : 'password'} placeholder='Confirm Password' focusBorderColor={password != confirmPassword ? 'red.500' : '#8141bb'} fontSize={'sm'} contentEditable='true' required={true} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </InputGroup>


                            {
                                password !== confirmPassword && confirmPassword !== '' && <Text my={0} color='red' fontSize='xs' textAlign='left'>Passwords do not match</Text>
                            }

                            <HStack mx={2} my={2} justifyContent={'center'} alignItems={'flex-start'}>
                                <Checkbox borderColor={'gray.300'} size="md" colorScheme="purple" onChange={e => setAgree(e.target.checked)} />
                                <Text fontSize={'xs'} textAlign={'left'}>By signing up, you agree to our <Link to={'/terms-and-conditions'} style={{color: '#8141bb'}} >Terms</Link> & <Link to={'/privacy-policy'} style={{color: '#8141bb'}} >Policies</Link> .</Text>
                            </HStack>

                            <Turnstile onSuccess={token => setToken(token)} options={{
                                theme: 'light'
                            }} siteKey='0x4AAAAAAAXvblUvcTtdmfaI' />

                            <Button isLoading={loading} isDisabled={!name || !email || !password || !confirmPassword || password !== confirmPassword || !agree || !token} width={'full'} type='submit' colorScheme='purple' variant='solid' size='md' fontSize={'sm'} gap={2}><BiLogIn size={16} /> Sign Up</Button>

                            <VStack gap={2}>
                                <HStack justifyContent={'center'} fontSize={'sm'}>
                                    <Text>Already a user?</Text>
                                    <Button fontSize={'sm'} color={'#805AD5'} variant={'link'}>
                                        <Link to={'/login'}>Login</Link>
                                    </Button>
                                    <Text fontSize={'xs'}> here</Text>
                                </HStack>
                            </VStack>
                        </Stack>
                    </form>
                    <Box
                        bg="#e2f2ff"
                        p={4}
                        border="1px"
                        borderColor="gray.100"
                        borderRadius="md"
                        textAlign="left"
                        width={'100%'}

                    >
                        <Text fontSize="md" mb={'2'} fontWeight={'semibold'} fontFamily={'Young Serif'}>Pro Tips: ✨</Text>
                        <UnorderedList fontSize={'sm'}>
                            <ListItem>At least 8 characters long</ListItem>
                            <ListItem>Contains uppercase letters</ListItem>
                            <ListItem>Contains lowercase letters</ListItem>
                            <ListItem>Includes at least one number</ListItem>
                            <ListItem>Includes at least one special character</ListItem>
                            <ListItem>Always save you passwords securely</ListItem>
                            <ListItem>Change your passwords frequently</ListItem>
                        </UnorderedList>
                    </Box>
                </VStack>
            </MainWrapper>
        </TransitionWrapper>
    )
}

export default SignUp;
