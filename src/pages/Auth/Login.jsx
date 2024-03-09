import { Box, Button, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightElement, ListItem, Stack, Text, UnorderedList, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiHide, BiLogIn, BiShowAlt } from 'react-icons/bi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { login } from '../../redux/actions/user'
import LoadingComponent from '../../components/Loading'

const Login = ({loading}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const dispatch = useDispatch();

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    useEffect(() => {
        window.scrollTo(0, 0, 'smooth');
    }, []);

    return (
        <TransitionWrapper>
            {
                loading && <LoadingComponent />
            }
            <MainWrapper pt={24} pb={16}>
                <VStack width={['95%', '95%', '30%', '30%']} margin={'auto'} display={'flex'} spacing={'5'}>
                    <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >Login</Heading>
                    <form style={{width: '100%'}} onSubmit={(e) => loginHandler(e)}>
                        <Stack spacing={3}>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <AiOutlineMail />
                                </InputLeftElement>
                                <Input value={email} autoComplete={true} onChange={(e) => setEmail(e.target.value)} required={true} type='email' placeholder='Email' focusBorderColor='#5000bb'
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
                                    autoComplete={true}
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

                            <Button isLoading={loading} width={'full'} type='submit' colorScheme='purple' variant='solid' size='md' fontSize={'sm'} gap={2}><BiLogIn size={16} />Login</Button>
                            <Button fontSize={'xs'} color={'#805AD5'} variant={'unstyled'}>
                                <Link to={'/forgot-password'}>Forgot Password?</Link>
                            </Button>
                            <HStack justifyContent={'center'} fontSize={'xs'}>
                                <Text fontSize={'sm'}>Don't have an account?</Text>
                                <Button fontSize={'sm'} color={'#805AD5'} variant={'link'}>
                                    <Link to={'/register'}>Sign Up</Link>
                                </Button>
                                <Text fontSize={'sm'}> here</Text>
                            </HStack>
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

export default Login
