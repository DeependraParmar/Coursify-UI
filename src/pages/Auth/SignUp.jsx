import React, { useState } from 'react'
import TransitionWrapper from '../../components/Transition'
import MainWrapper from '../../components/MainWrapper'
import { Box, Button, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightElement, ListItem, Stack, Text, UnorderedList, VStack } from '@chakra-ui/react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BiHide, BiLogIn, BiShowAlt } from 'react-icons/bi'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/user'
import { Link } from 'react-router-dom'
import LoadingComponent from '../../components/Loading'

const SignUp = ({ loading }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const dispatch = useDispatch();

    const signuphandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    if (loading) {
        return (
            <LoadingComponent />
        )
    }

    return (
        <TransitionWrapper>
            <MainWrapper pt={24} pb={16}>
                <VStack width={['95%', '95%', '30%', '30%']} margin={'auto'} display={'flex'} spacing={'5'}>
                    <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >Sign Up</Heading>
                    <form style={{ width: '100%' }} onSubmit={(e) => signuphandler(e)}>
                        <Stack spacing={3}>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <AiOutlineUser />
                                </InputLeftElement>
                                <Input value={name} onChange={(e) => setName(e.target.value)} required={true} type='text' placeholder='Name' focusBorderColor='#5000bb'
                                    fontSize={'sm'} />
                            </InputGroup>

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

                            <Button width={'full'} type='submit' colorScheme='purple' variant='solid' size='md' fontSize={'sm'} gap={2}><BiLogIn size={16} /> Sign Up</Button>
                            <HStack justifyContent={'center'} fontSize={'xs'}>
                                <Text fontSize={'sm'}>Already a user?</Text>
                                <Button fontSize={'sm'} color={'#805AD5'} variant={'unstyled'}>
                                    <Link to={'/login'}>Login</Link>
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

export default SignUp;
