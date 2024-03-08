import React, { useState } from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Button, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, VStack } from '@chakra-ui/react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BiHide, BiShowAlt } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/user'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const dispatch = useDispatch();

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={16}>
                <VStack width={['95%', '95%', '30%', '30%']} margin={'auto'} display={'flex'} spacing={'5'}>
                    <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >Login</Heading>
                    <form onSubmit={(e) => loginHandler(e)}>
                        <Stack spacing={3}>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <AiOutlineMail />
                                </InputLeftElement>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} required={true} type='email' placeholder='Email' focusBorderColor='#5000bb'
                                    fontSize={'sm'} />
                            </InputGroup>

                            <InputGroup size='md'>
                                <InputLeftElement>
                                    <RiLockPasswordLine />
                                </InputLeftElement>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Password'
                                    focusBorderColor='#5000bb'
                                    fontSize={'sm'}
                                    required={true}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <InputRightElement>
                                    <Button display={'flex'} variant={'unstyled'} size='sm' onClick={handleClick}>
                                        {show ? <BiHide /> : <BiShowAlt />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                            <Button width={'full'} type='submit' colorScheme='purple' variant='solid' size='md' fontSize={'sm'}>Login</Button>
                            <Text textAlign={'center'} fontSize={'xs'} cursor={'pointer'} fontWeight={'medium'} color='#5000bb' onClick={() => handleForgotPasswordModal()} >Forgot Password?</Text>
                        </Stack>
                    </form>
                </VStack>
            </MainWrapper>
        </TransitionWrapper>
    )
}

export default Login
