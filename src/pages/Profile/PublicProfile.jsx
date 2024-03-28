import { Avatar, Button, Heading, Input, InputGroup, InputLeftElement, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { MdOutlinePhone } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { sanitizedHTML } from '../../../controllers.js';
import LoadingComponent from '../../components/Loading.jsx';
import MainWrapper from '../../components/MainWrapper.jsx';
import TransitionWrapper from '../../components/Transition.jsx';
import { getPublicProfile } from '../../redux/actions/user.js';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const PublicProfile = () => {

    const dispatch = useDispatch();
    const {loading, user, error} = useSelector(state => state.instructor);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPublicProfile(id));
    }, [dispatch, id]);

    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
    }, [dispatch, error]);

    let sanitizedAbout = sanitizedHTML(user && user.about);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <TransitionWrapper>
                {
                    loading && <LoadingComponent />
                }
                <MainWrapper pt={'24'}>
                    <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} >Public Profile</Heading>
                    <InputGroup spacing='4' ></InputGroup>
                    <Stack paddingY={'3rem'} justifyContent={['flex-start', 'flex-start', 'center', 'center']} direction={['column', 'column', 'row', 'row']} alignItems={['center', 'center', 'flex-start', 'flex-start']} gap={['6', '6', '10', '12']} px={'2'} >

                        <VStack spacing={'4'} width={['95%', '95%', '30%', '30%']} >
                            <Avatar src={user && user.avatar.url} background={'#805AD5'} color={'white'} name={user && user.name} boxSize={'40'} />
                            <Text gap={'2'}>
                                {user && user.social && user.social.linkedin && <Button size={'xs'} variant={'ghost'} ><a href={user.social.linkedin} target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={'20'} /></a></Button>}

                                {user && user.social && user.social.twitter && <Button size={'xs'} variant={'ghost'} ><a href={user.social.twitter} target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle size={'20'} /></a></Button>}

                                {user && user.social && user.social.github && <Button size={'xs'} variant={'ghost'} ><a href={user.social.github} target="_blank" rel="noopener noreferrer"><AiFillGithub size={'20'} /></a></Button>}

                                {user && user.social && user.social.facebook && <Button size={'xs'} variant={'ghost'} ><a href={user.social.facebook} target="_blank" rel="noopener noreferrer"><AiFillFacebook size={'20'} /></a></Button>}

                                {user && user.social && user.social.website && <Button size={'xs'} variant={'ghost'} ><a href={user.social.website} target="_blank" rel="noopener noreferrer"><BsGlobe2 size={'20'} /></a></Button>}

                                {user && user.social && user.social.youtube && <Button size={'xs'} variant={'ghost'} ><a href={user.social.youtube} target="_blank" rel="noopener noreferrer"><AiFillYoutube size={'20'} /></a></Button>}
                            </Text>
                        </VStack>


                        <VStack spacing={['4', '4', '4', '4']} justifyContent={'flex-start'} alignItems={['flex-start', 'flex-start']} width={['95%', '95%', '40%', '40%']} >
                            <InputGroup spacing='4' >
                                <InputLeftElement pointerEvents={'none'}>
                                    <AiOutlineUser size='18' />
                                </InputLeftElement>
                                <Input isReadOnly type='text' _focusVisible={{ outline: "none" }} value={user && user.name} fontSize={'sm'} />
                            </InputGroup>

                            <InputGroup _focus={'none'} spacing='4' >
                                <InputLeftElement pointerEvents={'none'}>
                                    <AiOutlineMail size='18' />
                                </InputLeftElement>
                                <Input isReadOnly type='text' placeholder='johndoe@gmail.com' _focusVisible={{ outline: "none" }} value={user && user.email} fontSize={'sm'} />
                            </InputGroup>


                            {
                                user && user.about ? <Text w={'full'} border={'1px solid #e2e8f0'} p={4} px={6} borderRadius={'md'} _focusVisible={{ outline: "none" }} dangerouslySetInnerHTML={{ __html: sanitizedAbout }} fontSize={'sm'} /> : ''
                            }
                        </VStack>
                    </Stack>
                </MainWrapper>
            </TransitionWrapper>
        </>
    )
}

export default PublicProfile;