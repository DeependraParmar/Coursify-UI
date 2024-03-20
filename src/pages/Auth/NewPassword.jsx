import { Box, Button, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightElement, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillLock, AiOutlineLock } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import LoadingComponent from '../../components/Loading'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from '../../components/Transition'
import { newPassword } from '../../redux/actions/profile'
import { BiHide, BiShowAlt } from 'react-icons/bi'

const NewPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { loading, error, message } = useSelector(state => state.profile);

    const { token } = useParams();

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" });
            navigate('/login');
        }
    }, [dispatch, error, message]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(newPassword(confirmPassword, token));
    }

    return (
        <>
            <TransitionWrapper>
                {
                    loading && <LoadingComponent />
                }
                <MainWrapper pt={'24'} pb={'12'}>
                    <VStack width={['95%', '95%', '30%', '30%']} margin={'auto'} display={'flex'} spacing={'4'}>
                        <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'} >New Password</Heading>
                        <InputGroup spacing='4' >
                            <InputLeftElement pointerEvents={'none'}>
                                <AiOutlineLock size='18' />
                            </InputLeftElement>
                            <InputRightElement textAlign={'center'}>
                                <Button display={'flex'} variant={'unstyled'} size='sm' onClick={handleClick}>
                                    {show ? <BiHide /> : <BiShowAlt />}
                                </Button>
                            </InputRightElement>
                            <Input type={ show ? 'text' : 'password'} placeholder='New Password' focusBorderColor='#8141bb' fontSize={'sm'} contentEditable='true' required={true} onChange={(e) => setPassword(e.target.value)} />
                        </InputGroup>

                        <InputGroup spacing='4' >
                            <InputLeftElement pointerEvents={'none'}>
                                <AiOutlineLock size='18' />
                            </InputLeftElement>
                            <InputRightElement textAlign={'center'}>
                                <Button display={'flex'} variant={'unstyled'} size='sm' onClick={handleClick}>
                                    {show ? <BiHide /> : <BiShowAlt />}
                                </Button>
                            </InputRightElement>
                            <Input type={show ? 'text' : 'password'} placeholder='Confirm New Password' focusBorderColor={password != confirmPassword ? 'red.500' : '#8141bb'} fontSize={'sm'} contentEditable='true' required={true} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </InputGroup>


                        {
                            password !== confirmPassword && confirmPassword !== '' && <Text my={0} color='red' fontSize='xs' textAlign='center'>Passwords do not match</Text>
                        }


                        <HStack width={'full'} justifyContent={'center'}>
                            <Button onClick={(e) => submitHandler(e)} isLoading={loading} isDisabled={!password || !confirmPassword || password!=confirmPassword} fontSize={'sm'} width={['full', 'full', 'inherit', 'inherit']} size={['md', 'md', 'md', 'md']} gap={'2'} colorScheme='purple'>Save Changes <AiFillLock /></Button>
                        </HStack>

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
        </>
    )
}

export default NewPassword
