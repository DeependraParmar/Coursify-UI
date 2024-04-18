import { Box, Button, Heading, Input, InputGroup, InputLeftElement, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MdPhone, MdVerified } from 'react-icons/md'
import ReactQuill from 'react-quill'
import { useDispatch, useSelector } from 'react-redux'
import { fileUploadCSS } from '../../../controllers'
import LoadingComponent from '../../components/Loading'
import MainWrapper from '../../components/MainWrapper'
import TransitionWrapper from "../../components/Transition"
import { registerAsInstructor } from '../../redux/actions/user'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const InstructorRegistration = () => {
    const [phone, setPhone] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [skills, setSkills] = useState('');
    const [pdf, setPdf] = useState('');
    const [pdfPrev, setPdfPrev] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, message, error } = useSelector(state => state.user);

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setPdfPrev(reader.result);
            setPdf(file);
        }
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        if(message){
            toast.success(message);
            dispatch( {type: 'clearMessage' });
            navigate('/');
        }
        if(error){
            toast.error(error);
            dispatch({type: 'clearError' });
        }
    }, [dispatch, error, message]);

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
        ],
    };
    const formats = [
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'bullet',
        'indent',
    ];

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('phoneNumber', Number(phone));
        formData.append('educationalBackground', education);
        formData.append('workExperience', experience);
        formData.append('skills', skills);
        formData.append('file', pdf);
        dispatch(registerAsInstructor(formData));
    }

    return (
        <TransitionWrapper>
            {
                loading && <LoadingComponent />
            }
            <MainWrapper pt={24} pb={12}>
                <VStack width={['95%', '95%', '40%', '40%']} margin={'auto'} display={'flex'} spacing={'5'}>
                    <Heading fontFamily={'Young Serif'} textAlign={'center'} fontSize={['1.8rem', '2rem', '2rem', '2rem']} mb={'2'}>
                        Instructor Signup
                    </Heading>
                    <Text fontSize={'sm'} textAlign={'center'}>Note: Your <b>Name</b> and <b>Email</b> associated with your profile will be considered by default.</Text>
                    <form style={{width: '100%'}} onSubmit={(event) => formSubmitHandler(event)}>
                        <Stack spacing={4}>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <MdPhone />
                                </InputLeftElement>
                                <Input
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    required={true}
                                    type="number"
                                    placeholder="Phone Number"
                                    focusBorderColor={ phone && phone.toString().length === 10 ? '#5000bb' : 'red.500' }
                                    fontSize={'sm'}
                                />
                            </InputGroup>

                            <Box width={'full'} border={'1px solid #e2e8f0'} height={'150px'} borderRadius={'8px'}>
                                <ReactQuill
                                    placeholder='Mention your Work Experience here'
                                    value={experience}
                                    onChange={setExperience}
                                    modules={modules}
                                    formats={formats}
                                    bounds={'#root'}
                                    theme="snow"
                                    className='quill'
                                    style={{ height: '70%' }}
                                />
                            </Box>

                            <Box width={'full'} border={'1px solid #e2e8f0'} height={'150px'} borderRadius={'8px'}>
                                <ReactQuill
                                    placeholder='Mention your Educational Background here'
                                    value={education}
                                    onChange={setEducation}
                                    modules={modules}
                                    formats={formats}
                                    bounds={'#root'}
                                    theme="snow"
                                    className='quill'
                                    style={{ height: '70%' }}
                                />
                            </Box>

                            <Box width={'full'} border={'1px solid #e2e8f0'} height={'150px'} borderRadius={'8px'}>
                                <ReactQuill
                                    placeholder='Mention your skills here'
                                    value={skills}
                                    onChange={setSkills}
                                    modules={modules}
                                    formats={formats}
                                    bounds={'#root'}
                                    theme="snow"
                                    className='quill'
                                    style={{ height: '70%' }}
                                />
                            </Box>

                                <Input className='resumeUploadButton' onChange={changeImageHandler} type={'file'} accept='application/pdf' css={{ "&::file-selector-button": fileUploadCSS}} />
                            {
                                pdfPrev && <iframe src={pdfPrev} alt="" width={'100%'} height={'770'} />
                            }
                            
                            <Button type='submit' isDisabled={!phone || !experience || !education || !skills || !pdf || phone.toString().length !== 10 } colorScheme='purple' gap={2}>Submit <MdVerified /></Button>
                        </Stack>
                    </form>

                </VStack>
            </MainWrapper>
        </TransitionWrapper>
    )
}

export default InstructorRegistration
